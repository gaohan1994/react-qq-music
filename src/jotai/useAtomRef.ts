import { Atom, useAtomValue } from 'jotai';
import { useRef } from 'react';

export const useAtomValueRef = <T>(anAtom: Atom<T>) => {
  const ref = useRef<T>();
  ref.current = useAtomValue(anAtom);
  return ref;
};
