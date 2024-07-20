import { CronValue } from "../context/CronExpressionContext.tsx";
import { useEffect } from "react";
import { mapCronValueInOrder } from "../utils/mapCronValueInOrder.ts";
import { defaultCronValue } from "../context/defaultCronValue.tsx";

function buildQueryParams(cronValue: CronValue): string {
  const queryParams = new URLSearchParams();

  mapCronValueInOrder(cronValue, (key, value) => {
    queryParams.set(key, value.join(","));
  });

  return queryParams.toString();
}

const defaultCronValueQueryParams = buildQueryParams(defaultCronValue);

export function useSyncToQueryParams(cronValue: CronValue) {
  const queryParamsString = buildQueryParams(cronValue);

  useEffect(() => {
    if (queryParamsString === defaultCronValueQueryParams) {
      window.history.replaceState({}, "", window.location.pathname);
    } else {
      window.history.replaceState({}, "", `?${queryParamsString}`);
    }
  }, [queryParamsString]);
}
