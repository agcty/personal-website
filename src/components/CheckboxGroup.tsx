import React, { useCallback, useMemo, useState } from "react";

interface ContextValue {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  values: string[];
}

export const CheckboxContext = React.createContext<ContextValue>({
  values: [],
});

export function useCheckboxContext() {
  return React.useContext(CheckboxContext);
}

interface CheckboxGroupProps {
  children: React.ReactNode;
  values?: string[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, values: string[]) => void;
  max?: number;
  override?: boolean;
}

const CheckboxGroup = ({
  children,
  // rename values here to still be able to use values in context
  max,
  override,
  values: passedValues = [],
  onChange,
}: CheckboxGroupProps) => {
  const [values, setValues] = useState(passedValues);

  // change handler that decides if value should be added or removed
  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const {
        currentTarget: { value, checked },
      } = e;

      // explicitly define next values that we send in onChange later as [values, setValues] is asynchronous
      let nextValues = [];

      if (checked) {
        // if the checkbox is checked, add it to the list of values
        nextValues = [...values, value];

        if (max && nextValues.length > max) {
          if (override) {
            nextValues.shift();
          } else {
            return;
          }
        }

        setValues(nextValues);
      } else {
        // if it isn't, remove it
        nextValues = values.filter((x) => x !== value);

        setValues(nextValues);
      }

      // this code won't work, it will result in the state being "delayed", i.e you see the values from one render before
      // onChange(e, values)

      // but this works
      if (typeof onChange === "function") {
        onChange(e, nextValues);
      }
    },
    [values, onChange, max, override]
  );

  const contextValue = useMemo(
    () => ({
      onChange: changeHandler,
      values,
    }),
    [changeHandler, values]
  );

  return (
    <CheckboxContext.Provider value={contextValue}>
      {children}
    </CheckboxContext.Provider>
  );
};

export default CheckboxGroup;
