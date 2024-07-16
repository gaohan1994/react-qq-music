import { useSetAtom, WritableAtom } from 'jotai';

/**
 * 使用只写的 Action
 *
 * @export
 * @template Args
 * @template Result
 * @param {WritableAtom<undefined, Args, Result>} anAtom
 * @return {*}
 */
export const useAtomAction = <Args extends unknown[], Result extends void | Promise<void> = void>(
  anAtom: WritableAtom<undefined, Args, Result>,
) => {
  return useSetAtom(anAtom);
};
