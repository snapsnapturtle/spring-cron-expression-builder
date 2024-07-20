import { MultiSelectOption } from "../MultiSelect.tsx";

export function removeDuplicates(
  arr: MultiSelectOption[],
): MultiSelectOption[] {
  const itemCounts = arr.reduce<{ [key: string]: number }>((acc, item) => {
    acc[item.value] = (acc[item.value] || 0) + 1;
    return acc;
  }, {});

  return arr.filter((item) => itemCounts[item.value] === 1);
}
