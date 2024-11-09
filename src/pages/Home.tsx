import { Result } from "../components/Result/Result.tsx";
import { Form } from "../components/Form/Form.tsx";
import { NextExecutions } from "../components/NextExecutions/NextExecutions.tsx";
import { CronExpressionContextProvider } from "../context/CronExpressionContext/CronExpressionContextProvider.tsx";

export function Home() {
  return (
    <CronExpressionContextProvider>
      <div className="mt-20 flex flex-col items-center gap-12">
        <Result />
        <Form />
        <NextExecutions />
      </div>
    </CronExpressionContextProvider>
  );
}
