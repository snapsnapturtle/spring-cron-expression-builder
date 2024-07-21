import { describe, expect, it } from "vitest";
import { parseCronValueFromUrl } from "./parseCronValueFromUrl.ts";
import { defaultCronValue } from "../context/defaultCronValue.tsx";

describe("parseCronValueFromUrl", () => {
  it("should use default values if no query params are set", () => {
    const windowLocationSearch = "";
    const result = parseCronValueFromUrl(windowLocationSearch);

    expect(result).toEqual(defaultCronValue);
  });

  it("should parse a complete cron expression", () => {
    const windowLocationSearch =
      "?seconds=*%2F2&minutes=1%2C2%2C3&hours=4&days=1-31%2F2&months=*&weekdays=MON-FRI";
    const result = parseCronValueFromUrl(windowLocationSearch);

    expect(result).toEqual({
      seconds: ["*/2"],
      minutes: ["1", "2", "3"],
      hours: ["4"],
      days: ["1-31/2"],
      months: ["*"],
      weekdays: ["MON-FRI"],
    });
  });

  it("should parse seconds", () => {
    const windowLocationSearch = "?seconds=*%2F2";
    const result = parseCronValueFromUrl(windowLocationSearch);

    expect(result.seconds).toEqual(["*/2"]);
  });

  it("should parse minutes", () => {
    const windowLocationSearch = "?minutes=1%2C2%2C3";
    const result = parseCronValueFromUrl(windowLocationSearch);

    expect(result.minutes).toEqual(["1", "2", "3"]);
  });

  it("should parse hours", () => {
    const windowLocationSearch = "?hours=4";
    const result = parseCronValueFromUrl(windowLocationSearch);

    expect(result.hours).toEqual(["4"]);
  });

  it("should parse days", () => {
    const windowLocationSearch = "?days=1-31%2F2";
    const result = parseCronValueFromUrl(windowLocationSearch);

    expect(result.days).toEqual(["1-31/2"]);
  });

  it("should parse months", () => {
    const windowLocationSearch = "?months=*";
    const result = parseCronValueFromUrl(windowLocationSearch);

    expect(result.months).toEqual(["*"]);
  });

  it("should parse weekdays", () => {
    const windowLocationSearch = "?weekdays=MON-FRI";
    const result = parseCronValueFromUrl(windowLocationSearch);

    expect(result.weekdays).toEqual(["MON-FRI"]);
  });
});
