import {
  Label,
  Listbox,
  ListboxButton,
  ListboxButtonProps,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { IconSelector } from "./components/IconSelector.tsx";
import { IconCheck } from "./components/IconCheck.tsx";
import { useRef } from "react";
import { removeDuplicates } from "./utils/removeDuplicates.ts";

export interface MultiSelectOption {
  name: string;
  value: string;
  isUnique: boolean;
}

interface MultiSelectProps {
  label: string;
  options: MultiSelectOption[];
  value?: MultiSelectOption[];
  onChange: (selectedOptions: MultiSelectOption[]) => void;
  onBlur?: ListboxButtonProps["onBlur"];
}

export const MultiSelect = ({
  label,
  value,
  options,
  onChange,
  onBlur,
}: MultiSelectProps) => {
  const inputRef = useRef<HTMLButtonElement>(null);

  const handleSelect = (selectedOptions: MultiSelectOption[]) => {
    if (!selectedOptions.length) {
      onChange([]);
      return;
    }

    const lastEntry = selectedOptions[selectedOptions.length - 1];

    if (lastEntry.isUnique) {
      // only use the last entry if it is unique
      onChange([lastEntry]);
      // manually close the list-box when selecting a unique entry
      inputRef.current?.click();
    } else {
      // remove all unique entries
      const withoutUnique = selectedOptions.filter((it) => !it.isUnique);
      // remove duplicates (because the reference for the value is different)
      const withoutDuplicates = removeDuplicates(withoutUnique);

      onChange(withoutDuplicates);
    }
  };

  return (
    <div className="mx-auto w-full min-w-[216px] max-w-xs">
      <Listbox as="div" value={value} onChange={handleSelect} multiple>
        {({ open }) => (
          <>
            <Label className="mb-2 block text-sm font-medium leading-5 text-gray-900">
              {label}
            </Label>
            <div className="relative">
              <span className="inline-block w-full rounded-md shadow-sm">
                <ListboxButton
                  onBlur={onBlur}
                  ref={inputRef}
                  className="relative min-h-[40px] w-full cursor-default rounded-md border border-gray-400 bg-background-100 py-2 pl-3 pr-8 text-left text-sm text-gray-1000 transition-[border-color] duration-150 hover:border-gray-500 focus:outline-none data-[open]:border-gray-500"
                >
                  <span className="block truncate">
                    {(value ?? []).map((it) => it.name).join(", ")}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-gray-700">
                    <IconSelector width={20} height={20} />
                  </span>
                </ListboxButton>
              </span>

              <Transition
                show={open}
                enter="transition ease-out duration-100 transform origin-top"
                enterFrom="opacity-0 scale-[97%]"
                enterTo="opacity-100 scale-100"
                leave="transition ease-out duration-100 transform origin-top"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-[97%]"
              >
                <ListboxOptions
                  static
                  anchor={{ to: "bottom", gap: "4px", padding: "16px" }}
                  className="!max-h-80 w-[var(--button-width)] overflow-auto rounded-md border border-gray-400 bg-background-100 py-2 text-sm shadow-md focus:outline-none"
                >
                  {options.map((option) => {
                    const selected = value?.some(
                      (it) => it.value === option.value,
                    );

                    return (
                      <ListboxOption
                        key={option.value}
                        value={option}
                        as="div"
                        className="relative mx-2 cursor-default select-none rounded-md py-1.5 pl-2 pr-6 text-gray-1000 data-[focus]:bg-gray-200"
                      >
                        <span className="block truncate">{option.name}</span>
                        {selected && (
                          <span className="absolute inset-y-0 right-0 flex items-center pr-1.5 text-gray-1000">
                            <IconCheck width={20} height={20} />
                          </span>
                        )}
                      </ListboxOption>
                    );
                  })}
                </ListboxOptions>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};
