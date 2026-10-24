import { describe, expect, it } from "vitest";
import { formatDayCheckDate } from "../app/day-check/date-format";

describe("Day Check date formatting", () => {
  it("uses each page language for dates", () => {
    const date = new Date(2026, 5, 24, 12);

    const english = formatDayCheckDate(date, "en");
    const spanish = formatDayCheckDate(date, "es");
    const japanese = formatDayCheckDate(date, "ja");

    expect(english).toMatch(/Jun/);
    expect(spanish).toMatch(/jun/i);
    expect(japanese).toMatch(/2026/);
    expect(new Set([english, spanish, japanese])).toHaveProperty("size", 3);
  });
});
