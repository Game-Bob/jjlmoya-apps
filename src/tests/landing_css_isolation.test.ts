import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const appsRoot = new URL("../app/", import.meta.url);
const landingStyles = [
  ["day-check", ".dc-landing"],
  ["fast-task", ".ft-landing"],
  ["fortune-cookie", ".fc-landing"],
  ["pizzametrics", ".pm-landing"],
  ["sauce-lab", ".sl-landing"],
  ["vesp", ".vesp-landing"],
  ["ztreak", ".zl"],
] as const;

type CssColor = [number, number, number, number];

function declarations(
  css: string,
  selectors: readonly string[],
  property: string,
): string {
  const rules = css.matchAll(/([^{}]+)\{([^{}]*)\}/g);

  for (const [, rawSelectors, body] of rules) {
    const candidates = rawSelectors
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .split(",")
      .map((selector) => selector.trim());

    if (!selectors.some((selector) => candidates.includes(selector))) continue;

    const value = body
      .match(new RegExp(`${property}:\\s*([^;]+);`))?.[1]
      ?.trim();
    if (value) return value;
  }

  throw new Error(`Missing ${property} in ${selectors.join(", ")}`);
}

function parseColor(value: string): CssColor {
  const hex = value.match(/^#([\da-f]{3}|[\da-f]{6})$/i)?.[1];

  if (hex) {
    const normalized =
      hex.length === 3 ? [...hex].map((digit) => digit + digit).join("") : hex;
    return [
      Number.parseInt(normalized.slice(0, 2), 16),
      Number.parseInt(normalized.slice(2, 4), 16),
      Number.parseInt(normalized.slice(4, 6), 16),
      1,
    ];
  }

  const channels = value.match(/^rgba?\(([^)]+)\)$/)?.[1];
  if (!channels) throw new Error(`Unsupported color: ${value}`);

  const [red, green, blue, alpha = 1] = channels.split(",").map(Number);
  return [red, green, blue, alpha];
}

function resolveColor(
  css: string,
  selectors: readonly string[],
  property: string,
  depth = 0,
): CssColor {
  if (depth > 4) throw new Error(`Circular color variable: ${property}`);
  const value = declarations(css, selectors, property);
  const reference = value.match(/^var\((--[\w-]+)\)$/)?.[1];

  return reference
    ? resolveColor(css, selectors, reference, depth + 1)
    : parseColor(value);
}

function composite(foreground: CssColor, background: CssColor): CssColor {
  return [
    foreground[0] * foreground[3] + background[0] * (1 - foreground[3]),
    foreground[1] * foreground[3] + background[1] * (1 - foreground[3]),
    foreground[2] * foreground[3] + background[2] * (1 - foreground[3]),
    1,
  ];
}

function luminance(color: CssColor): number {
  const [red, green, blue] = color
    .map((channel) => channel / 255)
    .slice(0, 3)
    .map((channel) =>
      channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4,
    );

  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

function contrastRatio(foreground: CssColor, background: CssColor): number {
  const visibleForeground = composite(foreground, background);
  const foregroundLuminance = luminance(visibleForeground);
  const backgroundLuminance = luminance(background);

  return (
    (Math.max(foregroundLuminance, backgroundLuminance) + 0.05) /
    (Math.min(foregroundLuminance, backgroundLuminance) + 0.05)
  );
}

const contrastPalettes = [
  {
    app: "day-check",
    lightSelectors: [".dc-landing"],
    darkSelectors: [".dark .dc-landing"],
    lightSurfaces: ["--dc-bg", "--dc-bg-card-dark", "--dc-bg-footer"],
    darkSurfaces: ["--dc-bg", "--dc-bg-card-dark", "--dc-bg-footer"],
    text: [
      "--dc-text-muted",
      "--dc-text-faint",
      "--dc-text-ultralight",
      "--dc-purple",
    ],
  },
  {
    app: "fast-task",
    lightSelectors: [".ft-landing"],
    darkSelectors: [".dark .ft-landing"],
    lightSurfaces: [
      "--ft-bg",
      "--ft-bg-surface",
      "--ft-bg-section",
      "--ft-code-bg",
    ],
    darkSurfaces: [
      "--ft-bg",
      "--ft-bg-surface",
      "--ft-bg-section",
      "--ft-code-bg",
    ],
    text: ["--ft-text-muted", "--ft-text-faint", "--ft-text-dim", "--ft-green"],
  },
  {
    app: "fortune-cookie",
    lightSelectors: [".fc-landing"],
    darkSelectors: [".dark .fc-landing"],
    lightSurfaces: [
      "--fc-bg-main",
      "--fc-bg-soft",
      "--fc-bg-card",
      "--fc-bg-card-hover",
    ],
    darkSurfaces: [
      "--fc-bg-main",
      "--fc-bg-soft",
      "--fc-bg-card",
      "--fc-bg-card-hover",
    ],
    text: ["--fc-text-dim", "--fc-text-accent"],
  },
  {
    app: "pizzametrics",
    lightSelectors: [".pm-landing"],
    darkSelectors: [".dark .pm-landing"],
    lightSurfaces: ["--pm-bg", "--pm-bg-surface", "--pm-bg-card"],
    darkSurfaces: ["--pm-bg", "--pm-bg-surface", "--pm-bg-card"],
    text: ["--pm-text-muted", "--pm-text-faint", "--pm-red"],
  },
  {
    app: "vesp",
    lightSelectors: [".vesp-landing"],
    darkSelectors: [".dark .vesp-landing"],
    lightSurfaces: ["--vesp-bg", "--vesp-bg-black", "--vesp-bg-surface"],
    darkSurfaces: ["--vesp-bg", "--vesp-bg-black"],
    text: [
      "--vesp-text-muted",
      "--vesp-text-faint",
      "--vesp-text-ultralight",
      "--vesp-gold",
    ],
  },
  {
    app: "sauce-lab",
    lightSelectors: [".theme-light .sl-landing", ".sl-landing"],
    darkSelectors: [".dark .sl-landing", ".sl-landing"],
    lightSurfaces: ["--sl-bg", "--sl-surface", "--sl-surface-muted"],
    darkSurfaces: ["--sl-bg", "--sl-surface", "--sl-surface-muted"],
    text: ["--sl-text", "--sl-text-muted", "--sl-accent"],
  },
] as const;

describe("landing style isolation", () => {
  for (const [app, rootClass] of landingStyles) {
    it(`${app} keeps theme tokens and layout inside its own landing`, () => {
      const css = readFileSync(new URL(`${app}/${app}.css`, appsRoot), "utf8");
      const page = readFileSync(
        new URL(`${app}/landing.astro`, appsRoot),
        "utf8",
      );

      expect(page).toContain(`./${app}.css`);
      expect(css).toContain(rootClass);
      expect(css).not.toMatch(/(?:^|})\s*:root(?:\s*,|\s*\{)/m);
      expect(css).not.toMatch(/(?:^|})\s*\.theme-(?:dark|light)\s*\{/m);
      expect(css).not.toMatch(
        /(?:^|})\s*(?:html|body|h[1-6]|p|button|img)\s*\{/m,
      );
      expect(css).not.toMatch(
        /(?:^|})\s*::?-webkit-scrollbar(?:-thumb)?(?:\s|\{)/m,
      );
    });
  }

  it.each(contrastPalettes)(
    "$app keeps readable text in light and automatic dark mode",
    (palette) => {
      const css = readFileSync(
        new URL(`${palette.app}/${palette.app}.css`, appsRoot),
        "utf8",
      );

      for (const [selectors, surfaces] of [
        [palette.lightSelectors, palette.lightSurfaces],
        [palette.darkSelectors, palette.darkSurfaces],
      ]) {
        const backgrounds = surfaces.map((surface) =>
          resolveColor(css, selectors, surface),
        );

        for (const textToken of palette.text) {
          const foreground = resolveColor(css, selectors, textToken);
          for (const [index, background] of backgrounds.entries()) {
            expect(
              contrastRatio(foreground, background),
              `${textToken} on ${surfaces[index]}`,
            ).toBeGreaterThanOrEqual(4.5);
          }
        }
      }
    },
  );

  it("does not use Fortune Cookie’s decorative gold as text or fade headings", () => {
    const css = readFileSync(
      new URL("fortune-cookie/fortune-cookie.css", appsRoot),
      "utf8",
    );

    expect(css).not.toMatch(/color:\s*var\(--fc-gold\)/);
    expect(css).toMatch(/\.challenge \.title\s*\{[^}]*opacity:\s*1\s*;/);
  });

  it("keeps PizzaMetrics copy readable on its contrasting dark sections", () => {
    const css = readFileSync(
      new URL("pizzametrics/pizzametrics.css", appsRoot),
      "utf8",
    );

    for (const selectors of [[".pm-landing"], [".dark .pm-landing"]]) {
      const background = resolveColor(css, selectors, "--pm-bg-dark-section");

      for (const token of ["--pm-text-on-dark", "--pm-text-on-dark-muted"]) {
        expect(
          contrastRatio(resolveColor(css, selectors, token), background),
          `${token} on --pm-bg-dark-section`,
        ).toBeGreaterThanOrEqual(4.5);
      }
    }
  });

  it("does not dim informative labels and steps with group opacity", () => {
    const fastTask = readFileSync(
      new URL("fast-task/fast-task.css", appsRoot),
      "utf8",
    );
    const pizzaMetrics = readFileSync(
      new URL("pizzametrics/pizzametrics.css", appsRoot),
      "utf8",
    );
    const sauceLab = readFileSync(
      new URL("sauce-lab/sauce-lab.css", appsRoot),
      "utf8",
    );

    expect(fastTask).not.toMatch(/\.ft-sim-step\s*\{[^}]*opacity:/);
    expect(fastTask).not.toMatch(/\.ft-early-desc\s*\{[^}]*opacity:/);
    expect(pizzaMetrics).not.toMatch(/\.pm-store-btn-label\s*\{[^}]*opacity:/);
    expect(pizzaMetrics).not.toMatch(/\.pm-hero-tagline\s*\{[^}]*opacity:/);
    expect(pizzaMetrics).not.toMatch(/\.pm-mission-title\s*\{[^}]*opacity:/);
    expect(pizzaMetrics).not.toMatch(/\.pm-footer-legal\s*\{[^}]*opacity:/);
    expect(sauceLab).not.toMatch(/\.sl-hero-subtitle\s*\{[^}]*opacity:/);
    expect(sauceLab).not.toMatch(/\.sl-stat-label\s*\{[^}]*opacity:/);
    expect(sauceLab).not.toMatch(/\.sl-fix-step-item\s*\{[^}]*opacity:/);

    const vesp = readFileSync(new URL("vesp/vesp.css", appsRoot), "utf8");
    expect(vesp).not.toMatch(/\.vesp-hero-subtitle\s*\{[^}]*opacity:/);
    expect(vesp).not.toMatch(/\.vesp-footer-title\s*\{[^}]*opacity:/);
  });

  it("keeps Ztreak’s foreground colors readable on its light and dark sections", () => {
    const css = readFileSync(new URL("ztreak/ztreak.css", appsRoot), "utf8");
    const foreground = resolveColor(css, [".zl"], "--zl-muted");
    const onDarkForeground = resolveColor(css, [".zl"], "--zl-muted-on-dark");
    const paper = resolveColor(css, [".zl"], "--zl-paper");
    const dark = resolveColor(css, [".zl"], "--zl-dark");

    expect(contrastRatio(foreground, paper)).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(onDarkForeground, dark)).toBeGreaterThanOrEqual(4.5);
  });

  it("keeps Day Check’s colored card labels readable on their pastel cards", () => {
    const css = readFileSync(
      new URL("day-check/day-check.css", appsRoot),
      "utf8",
    );
    const accents = [
      "--dc-card-accent-1",
      "--dc-card-accent-2",
      "--dc-card-accent-3",
    ];
    const lightSelector = [".dc-landing"];
    const lightBackgrounds = ["#b2dfdb", "#f8bbd0", "#bbdefb"];
    const darkSelector = [".dark .dc-landing"];
    const darkBackgrounds = ["#0a1412", "#1a0a1a", "#0a0f1a"];

    accents.forEach((accent, index) => {
      expect(
        contrastRatio(
          resolveColor(css, lightSelector, accent),
          parseColor(lightBackgrounds[index]),
        ),
        `${accent} on its light card`,
      ).toBeGreaterThanOrEqual(4.5);
      expect(
        contrastRatio(
          resolveColor(css, darkSelector, accent),
          parseColor(darkBackgrounds[index]),
        ),
        `${accent} on its dark card`,
      ).toBeGreaterThanOrEqual(4.5);
    });

    expect(css).toMatch(
      /\.dc-card-time-label-accent\s*\{[^}]*opacity:\s*1\s*;/,
    );
  });

  it("uses the selected locale for Sauce Lab’s closing copy", () => {
    const page = readFileSync(
      new URL("sauce-lab/landing.astro", appsRoot),
      "utf8",
    );

    expect(page).toContain('<h2 class="sl-cta-title">{t.hero.title}</h2>');
    expect(page).toContain('<p class="sl-cta-text">{t.hero.subtitle}</p>');
    expect(page).not.toContain("Ready to master the");
    expect(page).not.toContain("Join thousands of chefs");
  });
});
