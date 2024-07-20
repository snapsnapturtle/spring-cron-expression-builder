import { CronExpressionContext } from "../../context/CronExpressionContext.tsx";
import { useContext, useEffect } from "react";
import { MultiSelect, MultiSelectOption } from "../MultiSelect/MultiSelect.tsx";
import { Controller, useForm } from "react-hook-form";
import { optionsSeconds } from "./data/optionsSeconds.ts";
import { optionsMinutes } from "./data/optionsMinutes.ts";
import { optionsHours } from "./data/optionsHours.ts";
import { optionsDays } from "./data/optionsDays.ts";
import { optionsMonths } from "./data/optionsMonths.ts";
import { optionsWeekdays } from "./data/optionsWeekdays.ts";
import { findOptionsByValues } from "./utils/findOptionsByValues.ts";

type FormValues = {
  seconds: MultiSelectOption[];
  minutes: MultiSelectOption[];
  hours: MultiSelectOption[];
  days: MultiSelectOption[];
  months: MultiSelectOption[];
  weekdays: MultiSelectOption[];
};

export function Form() {
  const { cronValue, setCronValue } = useContext(CronExpressionContext);

  const { control, handleSubmit, watch } = useForm<FormValues>({
    defaultValues: {
      seconds: findOptionsByValues(cronValue.seconds, optionsSeconds),
      minutes: findOptionsByValues(cronValue.minutes, optionsMinutes),
      hours: findOptionsByValues(cronValue.hours, optionsHours),
      days: findOptionsByValues(cronValue.days, optionsDays),
      months: findOptionsByValues(cronValue.months, optionsMonths),
      weekdays: findOptionsByValues(cronValue.weekdays, optionsWeekdays),
    },
  });

  useEffect(() => {
    const subscription = watch(() => {
      void handleSubmit((formValues) => {
        setCronValue({
          seconds: formValues.seconds.map((it) => it.value),
          minutes: formValues.minutes.map((it) => it.value),
          hours: formValues.hours.map((it) => it.value),
          days: formValues.days.map((it) => it.value),
          months: formValues.months.map((it) => it.value),
          weekdays: formValues.weekdays.map((it) => it.value),
        });
      })();
    });

    return () => subscription.unsubscribe();
  }, [handleSubmit, setCronValue, watch]);

  return (
    <>
      <form className="m-6 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:w-[760px] md:grid-cols-3">
        <Controller
          name="seconds"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <MultiSelect
              label="Seconds"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              options={optionsSeconds}
            />
          )}
        />

        <Controller
          name="minutes"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <MultiSelect
              label="Minutes"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              options={optionsMinutes}
            />
          )}
        />

        <Controller
          name="hours"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <MultiSelect
              label="Hours"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              options={optionsHours}
            />
          )}
        />

        <Controller
          name="days"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <MultiSelect
              label="Days of the month"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              options={optionsDays}
            />
          )}
        />
        <Controller
          name="months"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <MultiSelect
              label="Months"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              options={optionsMonths}
            />
          )}
        />
        <Controller
          name="weekdays"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <MultiSelect
              label="Weekdays"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              options={optionsWeekdays}
            />
          )}
        />
      </form>
    </>
  );
}
