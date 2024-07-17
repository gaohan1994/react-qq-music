import { Atom, useAtomValue } from 'jotai';
import { selectAtom } from 'jotai/utils';

/**
 * 对 Atom 进行 selector
 *
 * @param anAtom
 * @param keyFn
 * @returns
 */
export const useSelectAtom = <Value, Slice>(anAtom: Atom<Value>, keyFn: (state: Value, prevSlice?: Slice) => Slice) => {
  return useAtomValue(selectAtom(anAtom, keyFn));
};
