import { CronValue } from "./CronExpressionContext/CronExpressionContext.tsx";

export const defaultCronValue: CronValue = {
  seconds: ["*"],
  minutes: ["*"],
  hours: ["*"],
  days: ["*"],
  months: ["*"],
  weekdays: ["*"],
};
