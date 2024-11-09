import { createContext, Dispatch, SetStateAction } from "react";
import { defaultCronValue } from "../defaultCronValue.tsx";

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
