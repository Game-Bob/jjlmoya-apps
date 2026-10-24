import { existsSync, readdirSync, readFileSync } from "node:fs";
import { basename, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { ALL_APP_DEFINITIONS } from "../entries";

const appSourceRoot = fileURLToPath(new URL("../app/", import.meta.url));
const publicRoot = fileURLToPath(new URL("../../public/", import.meta.url));
const assetRoot = join(publicRoot, "assets", "apps");
const appIds = new Set(ALL_APP_DEFINITIONS.map(({ entry }) => entry.id));
const mediaExtension = String.raw`(?:avif|gif|jpe?g|png|svg|webp)`;

function listFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? listFiles(path) : [path];
  });
}

function mediaReferences(source: string): string[] {
  const templates = [
    ...source.matchAll(/`([^`]*?\.(?:avif|gif|jpe?g|png|svg|webp))`/gi),
  ].map((match) => match[1] ?? "");
  const sourceWithoutTemplates = source.replace(/`[^`]*`/gs, " ");
  const standaloneQuoted = [
    ...sourceWithoutTemplates.matchAll(
      new RegExp(`([\\"'])([^\\"'\\r\\n]*?\\.${mediaExtension})\\1`, "gi"),
    ),
  ].map((match) => match[2] ?? "");

  return [...templates, ...standaloneQuoted].filter(Boolean);
}

function expandKnownSegments(reference: string, appId: string): string[] {
  let variants = [reference.replaceAll("${appId}", appId)];
  const localeExpressions = [
    ...reference.matchAll(/\$\{locale[^}]*\}/g),
  ].map((match) => match[0]);

  for (const expression of localeExpressions) {
    variants = variants.flatMap((variant) =>
      ["es", "en"].map((locale) => variant.replace(expression, locale)),
    );
  }

  return variants.filter((variant) => !variant.includes("${"));
}

function listAppAssets(appId: string): string[] {
  const directory = join(assetRoot, appId);
  return existsSync(directory) ? listFiles(directory) : [];
}

function hasDynamicMediaCandidate(reference: string): boolean {
  const dynamicIndex = reference.indexOf("${");
  if (dynamicIndex < 0) return false;

  const prefix = reference.slice(0, dynamicIndex);
  const directory = prefix.slice(0, prefix.lastIndexOf("/")).replace(/^\//, "");
  const fixedFilePrefix = prefix.slice(prefix.lastIndexOf("/") + 1);
  const suffix = reference
    .slice(dynamicIndex)
    .replace(/\$\{[^}]*\}/g, "")
    .split(/[?#]/)[0] ?? "";
  const targetDirectory = resolve(publicRoot, directory);

  if (!existsSync(targetDirectory)) return false;
  return listFiles(targetDirectory).some((path) => {
    const name = basename(path);
    return name.startsWith(fixedFilePrefix) && name.endsWith(suffix);
  });
}

function missingPublicAsset(reference: string, appId: string): boolean {
  const expanded = expandKnownSegments(reference, appId);
  if (expanded.length === 0) {
    return !hasDynamicMediaCandidate(reference.replaceAll("${appId}", appId));
  }

  return expanded.some((variant) =>
    !existsSync(resolve(publicRoot, variant.replace(/^\//, ""))),
  );
}

function missingReference(
  rawReference: string,
  sourcePath: string,
  appId: string,
  appAssets: readonly string[],
): string | null {
  const reference = rawReference.split(/[?#]/)[0] ?? "";
  if (!reference || /^(?:https?:|data:|blob:|\/\/)/i.test(reference)) return null;
  if (reference.includes("${locale")) return null;

  const isPublicPath =
    reference.startsWith("/assets/apps/") ||
    reference.startsWith("assets/apps/");
  const isMissing = isPublicPath
    ? missingPublicAsset(reference, appId)
    : !appAssets.some((path) => basename(path) === basename(reference));

  return isMissing
    ? `${relative(appSourceRoot, sourcePath)} → ${reference}`
    : null;
}

function missingAppIcons(): string[] {
  return [...appIds].flatMap((appId) => {
    const icon = resolve(assetRoot, appId, "icon.webp");
    return existsSync(icon) ? [] : [`app ${appId} → /assets/apps/${appId}/icon.webp`];
  });
}

function missingZtreakLocaleImages(): string[] {
  const missing: string[] = [];
  for (const locale of ["es", "en"]) {
    for (const image of ["today.webp", "history.webp", "progress.webp", "tower.webp"]) {
      const path = resolve(assetRoot, "ztreak", "landing", locale, image);
      if (!existsSync(path)) {
        missing.push(`ztreak ${locale} → /assets/apps/ztreak/landing/${locale}/${image}`);
      }
    }
  }
  return missing;
}

function missingMediaReferences(): string[] {
  const missing: string[] = [];

  for (const sourcePath of listFiles(appSourceRoot)) {
    const appId = relative(appSourceRoot, sourcePath).split(/[\\/]/)[0] ?? "";
    if (!appIds.has(appId)) continue;

    const appAssets = listAppAssets(appId);
    const source = readFileSync(sourcePath, "utf8");
    for (const reference of mediaReferences(source)) {
      const problem = missingReference(reference, sourcePath, appId, appAssets);
      if (problem) missing.push(problem);
    }
  }

  missing.push(...missingAppIcons(), ...missingZtreakLocaleImages());

  return [...new Set(missing)].sort();
}

function invalidMediaFiles(): string[] {
  return listFiles(assetRoot)
    .filter((path) => [".svg", ".webp"].includes(extname(path).toLowerCase()))
    .filter((path) => {
      const bytes = readFileSync(path);
      if (extname(path).toLowerCase() === ".webp") {
        if (bytes.length < 12) return true;
        const riffLength = bytes.readUInt32LE(4) + 8;
        return (
          bytes.toString("ascii", 0, 4) !== "RIFF" ||
          bytes.toString("ascii", 8, 12) !== "WEBP" ||
          riffLength < 12 ||
          riffLength > bytes.length
        );
      }

      const svg = bytes.toString("utf8").replace(/^\uFEFF/, "");
      return !/<svg\b[\s\S]*<\/svg\s*>/i.test(svg);
    })
    .map((path) => relative(publicRoot, path));
}

describe("landing media integrity", () => {
  it("keeps every referenced local image, icon, and video poster present", () => {
    expect(missingMediaReferences()).toEqual([]);
  });

  it("keeps app image files in valid WebP or SVG containers", () => {
    expect(invalidMediaFiles()).toEqual([]);
  });
});
