import { useCallback, useState } from 'react';

type TToggle = [boolean, () => void, () => void, () => void];

export const useToggle = (initialValue: boolean): TToggle => {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => setValue((prev) => !prev), []);
  const setFalse = useCallback(() => setValue(false), []);
  const setTrue = useCallback(() => setValue(true), []);
  return [value, toggle, setFalse, setTrue];
};
