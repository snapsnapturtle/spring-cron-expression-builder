import { MultiSelectOption } from "../../MultiSelect/MultiSelect.tsx";

export function findOptionsByValues(
  values: string[],
  options: MultiSelectOption[],
): MultiSelectOption[] {
  return options.filter((it) => values.includes(it.value));
}
