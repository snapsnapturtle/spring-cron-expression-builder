import { ReactNode, useState } from "react";
import { parseCronValueFromUrl } from "../../utils/parseCronValueFromUrl.ts";
import { useSyncToQueryParams } from "../../hooks/useSyncToQueryParams.ts";
import { CronExpressionContext, CronValue } from "./CronExpressionContext.tsx";

interface CronExpressionProviderProps {
  children: ReactNode;
}

export function CronExpressionContextProvider(
  props: CronExpressionProviderProps,
) {
  const cronValueFromUrl = parseCronValueFromUrl(window.location.search);
  const [cronValue, setCronValue] = useState<CronValue>(cronValueFromUrl);

  useSyncToQueryParams(cronValue);

  return (
    <CronExpressionContext.Provider
      {...props}
      value={{ cronValue, setCronValue }}
    />
  );
}
