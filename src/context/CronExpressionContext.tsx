import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { useSyncToQueryParams } from "../hooks/useSyncToQueryParams.ts";
import { defaultCronValue } from "./defaultCronValue.tsx";
import { parseCronValueFromUrl } from "../utils/parseCronValueFromUrl.ts";

export interface CronValue {
  seconds: string[];
  minutes: string[];
  hours: string[];
  days: string[];
  months: string[];
  weekdays: string[];
}

interface CronExpressionContextValue {
  cronValue: CronValue;
  setCronValue: Dispatch<SetStateAction<CronValue>>;
}

export const CronExpressionContext = createContext<CronExpressionContextValue>({
  cronValue: defaultCronValue,
  setCronValue: () => {
    throw Error("Cannot be called outside of provider");
  },
});

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
