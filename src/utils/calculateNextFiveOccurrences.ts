import { CronValue } from "../context/CronExpressionContext.tsx";
import parser from "cron-parser";
import { formatCronValue } from "./formatCronValue.ts";

export function calculateNextFiveOccurrences(
  cronValue: CronValue,
  occurrences: number = 5,
): Date[] {
  const nextFiveDates: Date[] = [];
  const parsedExpression = parser.parseExpression(formatCronValue(cronValue));

  for (let i = 0; i < occurrences; i++) {
    nextFiveDates.push(parsedExpression.next().toDate());
  }

  return nextFiveDates;
}
