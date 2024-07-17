import { useCallback, useState } from 'react';

type InitialState = boolean | (() => boolean);

type SetAction = (nextValue?: boolean) => void;

export const useBoolean = (initialState: InitialState = false): [boolean, SetAction] => {
  const [value, setValue] = useState(typeof initialState === 'function' ? initialState() : initialState);

  const action = useCallback((nextValue?: boolean) => {
    setValue((prevValue) => {
      return typeof nextValue === 'boolean' ? nextValue : !prevValue;
    });
  }, []);

  return [value, action];
};
