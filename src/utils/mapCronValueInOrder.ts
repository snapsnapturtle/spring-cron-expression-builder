import { CronValue } from "../context/CronExpressionContext.tsx";

export function mapCronValueInOrder<T>(
  cronValue: CronValue,
  mapFn: (key: string, value: string[]) => T,
): T[] {
  const cronValueKeys: Array<keyof CronValue> = [
    "seconds",
    "minutes",
    "hours",
    "days",
    "months",
    "weekdays",
  ];

  return cronValueKeys.map((key) => mapFn(key, cronValue[key]));
}
