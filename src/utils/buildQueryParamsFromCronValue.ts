import { CronValue } from "../context/CronExpressionContext.tsx";
import { mapCronValueInOrder } from "./mapCronValueInOrder.ts";

export function buildQueryParamsFromCronValue(cronValue: CronValue): string {
  const queryParams = new URLSearchParams();

  mapCronValueInOrder(cronValue, (key, value) => {
    queryParams.set(key, value.join(","));
  });

  return queryParams.toString();
}
