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

  for (const match of rules) {
    const rawSelectors = match[1];
    const body = match[2];
    if (rawSelectors === undefined || body === undefined) continue;

    const candidates = rawSelectors
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .split(",")
      .map((selector) => selector.trim());

    if (!selectors.some((selector) => candidates.includes(selector))) continue;

    const value = body
      .match(new RegExp(`(?:^|;)\\s*${property}:\\s*([^;]+);`))?.[1]
      ?.trim();
    if (value) return value;
  }

  throw new Error(`Missing ${property} in ${selectors.join(", ")}`);
}

function parseHexColor(value: string): CssColor {
  const hex = value.match(/^#([\da-f]{3}|[\da-f]{6})$/i)?.[1];
  if (!hex) throw new Error(`Unsupported color: ${value}`);

  const normalized =
    hex.length === 3 ? [...hex].map((digit) => digit + digit).join("") : hex;
  return [
    Number.parseInt(normalized.slice(0, 2), 16),
    Number.parseInt(normalized.slice(2, 4), 16),
    Number.parseInt(normalized.slice(4, 6), 16),
    1,
  ];
}

function parseFunctionalColor(value: string): CssColor {
  const channels = value.match(/^rgba?\(([^)]+)\)$/)?.[1];
  if (!channels) throw new Error(`Unsupported color: ${value}`);

  const values = channels.split(",").map(Number);
  const red = values[0] ?? Number.NaN;
  const green = values[1] ?? Number.NaN;
  const blue = values[2] ?? Number.NaN;
  const alpha = values[3] ?? 1;
  if (![red, green, blue, alpha].every(Number.isFinite)) {
    throw new Error(`Unsupported color channels: ${value}`);
  }
  return [red, green, blue, alpha];
}

function parseColor(value: string): CssColor {
  return value.startsWith("#")
    ? parseHexColor(value)
    : parseFunctionalColor(value);
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
  const linear = (channel: number) => {
    const normalized = channel / 255;
    return normalized <= 0.04045
      ? normalized / 12.92
      : ((normalized + 0.055) / 1.055) ** 2.4;
  };

  return 0.2126 * linear(color[0]) + 0.7152 * linear(color[1]) + 0.0722 * linear(color[2]);
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

function expectReadablePalette(
  css: string,
  selectors: readonly string[],
  surfaces: readonly string[],
  textTokens: readonly string[],
): void {
  const backgrounds = surfaces.map((surface) =>
    resolveColor(css, selectors, surface),
  );

  for (const textToken of textTokens) {
    const foreground = resolveColor(css, selectors, textToken);
    backgrounds.forEach((background, index) => {
      const surface = surfaces[index] ?? `surface ${index}`;
      expect(
        contrastRatio(foreground, background),
        `${textToken} on ${surface}`,
      ).toBeGreaterThanOrEqual(4.5);
    });
  }
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

      const themes: { selectors: readonly string[]; surfaces: readonly string[] }[] = [
        { selectors: palette.lightSelectors, surfaces: palette.lightSurfaces },
        { selectors: palette.darkSelectors, surfaces: palette.darkSurfaces },
      ];

      for (const { selectors, surfaces } of themes) {
        expectReadablePalette(css, selectors, surfaces, palette.text);
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

  it("keeps shared preview navigation labels readable in both themes", () => {
    const toolbar = readFileSync(
      new URL("../components/PreviewToolbar.astro", import.meta.url),
      "utf8",
    );
    const sidebar = readFileSync(
      new URL("../components/PreviewNavSidebar.astro", import.meta.url),
      "utf8",
    );

    expect(declarations(toolbar, [".btn-locale:hover"], "color")).toBe(
      "var(--text-main)",
    );
    expect(declarations(sidebar, [".app-link.active"], "color")).toBe(
      "var(--text-base, #f1f5f9)",
    );

    const themeTextAndSurfaces = [
      { text: "#0f172a", surface: "#ffffff" },
      { text: "#f8fafc", surface: "#0f172a" },
    ];

    for (const { text, surface } of themeTextAndSurfaces) {
      expect(
        contrastRatio(parseColor(text), parseColor(surface)),
        `${text} on ${surface}`,
      ).toBeGreaterThanOrEqual(4.5);
    }
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
    const lightSelector = [".dc-landing"];
    const darkSelector = [".dark .dc-landing"];
    const cardPalettes = [
      { accent: "--dc-card-accent-1", light: "#b2dfdb", dark: "#0a1412" },
      { accent: "--dc-card-accent-2", light: "#f8bbd0", dark: "#1a0a1a" },
      { accent: "--dc-card-accent-3", light: "#bbdefb", dark: "#0a0f1a" },
    ];

    cardPalettes.forEach(({ accent, light, dark }) => {
      expect(
        contrastRatio(
          resolveColor(css, lightSelector, accent),
          parseColor(light),
        ),
        `${accent} on its light card`,
      ).toBeGreaterThanOrEqual(4.5);
      expect(
        contrastRatio(
          resolveColor(css, darkSelector, accent),
          parseColor(dark),
        ),
        `${accent} on its dark card`,
      ).toBeGreaterThanOrEqual(4.5);
    });

    expect(css).toMatch(
      /\.dc-card-time-label-accent\s*\{[^}]*opacity:\s*1\s*;/,
    );
  });

  it("keeps VESP cards and translated headings within narrow screens", () => {
    const css = readFileSync(new URL("vesp/vesp.css", appsRoot), "utf8");

    expect(css).toMatch(
      /\.vesp-benefits-grid\s*\{[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\)/,
    );
    expect(css).toMatch(
      /\.vesp-benefit-card\s*\{[^}]*min-width:\s*0\s*;/,
    );
    expect(css).toMatch(
      /@media\s*\(max-width:\s*480px\)\s*\{[\s\S]*?\.vesp-techspecs-inner\s*\{[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\)/,
    );
    expect(css).toMatch(
      /\.vesp-benefits-title\s*\{[^}]*overflow-wrap:\s*anywhere\s*;/,
    );

    for (const locale of [
      "de", "en", "es", "fr", "id", "it", "ja", "ko", "nl", "pl", "pt", "ru", "sv", "tr", "zh",
    ]) {
      const content = readFileSync(
        new URL(`vesp/i18n/${locale}.ts`, appsRoot),
        "utf8",
      );
      expect(content, `${locale} VESP heading`).not.toMatch(
        /conceptMain:\s*['"][^'"]*[,，]['"]/
      );
    }
  });

  it("wraps the longest translated headings inside 320px layouts", () => {
    const dayCheck = readFileSync(
      new URL("day-check/day-check.css", appsRoot),
      "utf8",
    );
    const fortuneCookie = readFileSync(
      new URL("fortune-cookie/fortune-cookie.css", appsRoot),
      "utf8",
    );
    const pizzaMetrics = readFileSync(
      new URL("pizzametrics/pizzametrics.css", appsRoot),
      "utf8",
    );

    expect(dayCheck).toMatch(
      /@media\s*\(max-width:\s*360px\)[\s\S]*?\.dc-benefits-grid\s*\{[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\)/,
    );
    expect(dayCheck).toMatch(
      /\.dc-benefit-title,\s*\.dc-benefit-text\s*\{[^}]*overflow-wrap:\s*anywhere\s*;/,
    );
    expect(fortuneCookie).toMatch(
      /@media\s*\(max-width:\s*360px\)[\s\S]*?\.fc-landing \.hero \.tagline,[\s\S]*?\.fc-landing \.hero \.description\s*\{[^}]*overflow-wrap:\s*anywhere\s*;/,
    );
    expect(pizzaMetrics).toMatch(
      /@media\s*\(max-width:\s*360px\)[\s\S]*?\.pm-gallery-title,[\s\S]*?\.pm-shorts-title\s*\{[^}]*hyphens:\s*auto\s*;/,
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
