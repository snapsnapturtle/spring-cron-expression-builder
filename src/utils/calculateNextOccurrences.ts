import { CronValue } from "../context/CronExpressionContext/CronExpressionContext.tsx";
import parser from "cron-parser";
import { formatCronValue } from "./formatCronValue.ts";

export function calculateNextOccurrences(
  cronValue: CronValue,
  occurrences: number = 5,
): Date[] {
  const nextDates: Date[] = [];
  const parsedExpression = parser.parseExpression(formatCronValue(cronValue));

  for (let i = 0; i < occurrences; i++) {
    nextDates.push(parsedExpression.next().toDate());
  }

  return nextDates;
}
