import { Fragment, useContext } from "react";
import { CronExpressionContext } from "../../context/CronExpressionContext.tsx";
import { calculateNextFiveOccurrences } from "../../utils/calculateNextFiveOccurrences.ts";

export function NextExecutions() {
  const { cronValue } = useContext(CronExpressionContext);
  const nextExecutions = calculateNextFiveOccurrences(cronValue);

  return (
    <div className="font-mono">
      <div className="mb-2 text-center font-semibold">Next executions</div>
      <div className="grid grid-cols-2 gap-2">
        {nextExecutions.map((date) => (
          <Fragment key={date.toISOString()}>
            <div>{date.toLocaleDateString()}</div>
            <div>{date.toLocaleTimeString()}</div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
