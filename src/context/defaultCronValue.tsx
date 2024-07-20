import { CronValue } from "./CronExpressionContext.tsx";

export const defaultCronValue: CronValue = {
  seconds: ["*"],
  minutes: ["*"],
  hours: ["*"],
  days: ["*"],
  months: ["*"],
  weekdays: ["*"],
};
