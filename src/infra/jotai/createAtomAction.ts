import { atom, Getter, Setter, WritableAtom } from 'jotai';

/**
 * 创建一个只写的 Action
 *
 * @export
 * @template Args
 * @template Result
 * @param {(get: Getter, set: Setter, ...args: Args) => Result} write
 * @return {*}  {WritableAtom<undefined, Args, Result>}
 */
export const createAtomAction = <Args extends unknown[], Result extends void | Promise<void> = void>(
  write: (get: Getter, set: Setter, ...args: Args) => Result,
): WritableAtom<undefined, Args, Result> => {
  return atom(null, write);
};
