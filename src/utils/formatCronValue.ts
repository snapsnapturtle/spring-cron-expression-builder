import { CronValue } from "../context/CronExpressionContext/CronExpressionContext.tsx";
import { mapCronValueInOrder } from "./mapCronValueInOrder.ts";

export function formatCronValue(cronValue: CronValue): string {
  const cronExpressionParts = mapCronValueInOrder(cronValue, (_, value) =>
    value.sort().join(","),
  );

  return cronExpressionParts.join(" ");
}
