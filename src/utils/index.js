/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const isFalsy = (val) => (val === 0 ? false : !val);

export const cleanObject = (object) => {
  const result = { ...object };
  Object.entries(result).forEach(([key, val]) => {
    if (isFalsy(val)) delete result[key];
  });
  return result;
};

export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

export const debounce = (func, delay) => {
  let timer;
  return () => {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, delay);
  };
};

export const useDebounce = (value: any, delay: number = 2000) => {
  const [debounceValue, setDebounceValue] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
};
