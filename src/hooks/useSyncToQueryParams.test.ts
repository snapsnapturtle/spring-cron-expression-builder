import { describe, expect, it, vi } from "vitest";
import { useSyncToQueryParams } from "./useSyncToQueryParams.ts";
import { CronValue } from "../context/CronExpressionContext/CronExpressionContext.tsx";
import { renderHook } from "@testing-library/react";
import { defaultCronValue } from "../context/defaultCronValue.tsx";

describe("useSyncToQueryParams", () => {
  it("should sync cron value to query params", () => {
    window.history.replaceState = vi.fn();

    const cronValue: CronValue = {
      seconds: ["*/2"],
      minutes: ["1", "2", "3"],
      hours: ["4"],
      days: ["1-31/2"],
      months: ["*"],
      weekdays: ["MON-FRI"],
    };

    renderHook(() => useSyncToQueryParams(cronValue));

    const expectedSearch =
      "?seconds=*%2F2&minutes=1%2C2%2C3&hours=4&days=1-31%2F2&months=*&weekdays=MON-FRI";

    expect(window.history.replaceState).toHaveBeenCalledWith(
      {},
      "",
      expectedSearch,
    );
  });

  it("should remove query params if the cron expression is the default", () => {
    window.history.replaceState = vi.fn();

    const cronValue: CronValue = defaultCronValue;

    renderHook(() => useSyncToQueryParams(cronValue));

    expect(window.history.replaceState).toHaveBeenCalledWith({}, "", "/");
  });
});
