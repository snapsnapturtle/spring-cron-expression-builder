import { CronValue } from "../context/CronExpressionContext/CronExpressionContext.tsx";
import { useEffect } from "react";
import { defaultCronValue } from "../context/defaultCronValue.tsx";
import { buildQueryParamsFromCronValue } from "../utils/buildQueryParamsFromCronValue.ts";

const defaultCronValueQueryParams =
  buildQueryParamsFromCronValue(defaultCronValue);

export function useSyncToQueryParams(cronValue: CronValue) {
  const queryParamsString = buildQueryParamsFromCronValue(cronValue);

  useEffect(() => {
    if (queryParamsString === defaultCronValueQueryParams) {
      window.history.replaceState({}, "", window.location.pathname);
    } else {
      window.history.replaceState({}, "", `?${queryParamsString}`);
    }
  }, [queryParamsString]);
}
