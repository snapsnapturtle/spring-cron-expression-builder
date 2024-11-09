import { CronValue } from "../context/CronExpressionContext/CronExpressionContext.tsx";
import { defaultCronValue } from "../context/defaultCronValue.tsx";

export function parseCronValueFromUrl(windowLocationSearch: string): CronValue {
  const queryParams = new URLSearchParams(windowLocationSearch);

  return {
    seconds: queryParams.get("seconds")?.split(",") ?? defaultCronValue.seconds,
    minutes: queryParams.get("minutes")?.split(",") ?? defaultCronValue.minutes,
    hours: queryParams.get("hours")?.split(",") ?? defaultCronValue.hours,
    days: queryParams.get("days")?.split(",") ?? defaultCronValue.days,
    months: queryParams.get("months")?.split(",") ?? defaultCronValue.months,
    weekdays:
      queryParams.get("weekdays")?.split(",") ?? defaultCronValue.weekdays,
  };
}
