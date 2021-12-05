/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const isFalsy = (val: string | number): boolean => (val === 0 ? false : !val);

export const cleanObject = (object: { [x: string]: any }): object => {
  const result = { ...object };
  Object.entries(result).forEach(([key, val]) => {
    if (isFalsy(val)) delete result[key];
  });
  return result;
};

export const useMount = (callback: Function) => {
  useEffect(() => {
    callback();
  }, []);
};

export const debounce = (func: Function, delay: number) => {
  let timer: NodeJS.Timeout;
  return () => {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, delay);
  };
};

export const useDebounce = <T = any>(value: T, delay?: number): T => {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
};

export const useArray = <T>(initialArray: T[]) => {
  const [value, setValue] = useState(initialArray);
  return {
    value,
    setValue,
    add: (item: T) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (i: number) => {
      const newValue = [...value];
      newValue.splice(i, 1);
      setValue(newValue);
    },
  };
};
