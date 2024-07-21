import { describe, expect, it } from "vitest";
import { findOptionsByValues } from "./findOptionsByValues.ts";
import { MultiSelectOption } from "../../MultiSelect/MultiSelect.tsx";

describe("findOptionsByValues", () => {
  it("should return options from provided values", () => {
    const options: MultiSelectOption[] = [
      { name: "1", value: "1", isUnique: false },
      { name: "2", value: "2", isUnique: false },
      { name: "3", value: "3", isUnique: false },
    ];

    const values = ["1", "3"];

    const result = findOptionsByValues(values, options);

    expect(result).toEqual([
      { name: "1", value: "1", isUnique: false },
      { name: "3", value: "3", isUnique: false },
    ]);
  });

  it("should return return an empty list when no options match the values", () => {
    const options: MultiSelectOption[] = [
      { name: "1", value: "1", isUnique: false },
      { name: "2", value: "2", isUnique: false },
      { name: "3", value: "3", isUnique: false },
    ];

    const values = ["4", "5"];

    const result = findOptionsByValues(values, options);

    expect(result).toEqual([]);
  });
});
