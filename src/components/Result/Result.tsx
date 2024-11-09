import { CronExpressionContext } from "../../context/CronExpressionContext/CronExpressionContext.tsx";
import { useContext } from "react";
import { formatCronValue } from "../../utils/formatCronValue.ts";

export function Result() {
  const { cronValue } = useContext(CronExpressionContext);
  const cronExpression = formatCronValue(cronValue);

  return (
    <pre className="font-mono text-2xl font-bold text-gray-1000 md:text-3xl">
      {cronExpression}
    </pre>
  );
}
