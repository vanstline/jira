const isFalsy = (val) => (val === 0 ? false : !val);

export const cleanObject = (object) => {
  const result = { ...object };
  Object.entries(result).forEach(([key, val]) => {
    if (isFalsy(val)) delete result[key];
  });
  return result;
};
