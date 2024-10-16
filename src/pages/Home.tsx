import { Result } from "../components/Result/Result.tsx";
import { CronExpressionContextProvider } from "../context/CronExpressionContext.tsx";
import { Form } from "../components/Form/Form.tsx";
import { NextExecutions } from "../components/NextExecutions/NextExecutions.tsx";

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
