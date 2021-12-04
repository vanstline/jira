/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const isFalsy = (val: string | number): boolean => (val === 0 ? false : !val);

export const cleanObject = (object: { [x: string]: any }): boolean => {
  const result = { ...object };
  Object.entries(result).forEach(([key, val]) => {
    if (isFalsy(val)) delete result[key];
  });
  // @ts-ignore
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
