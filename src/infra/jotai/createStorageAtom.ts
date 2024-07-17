import { atom, Getter, WritableAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import { atomWithLocalStorage } from './storage';

type SetStateActionWithReset<Value> = Value | typeof RESET | ((prev: Value) => Value | typeof RESET);
type StorageAtom<T = any> = WritableAtom<T, [SetStateActionWithReset<T>], void>;
type ScopeKey = string;
type Key = string;

const atomScopeMap = new Map<ScopeKey, Map<Key, StorageAtom<any>>>();

const getAtom = <T>(scopeKey: ScopeKey, key: Key, fallback: () => StorageAtom<T>) => {
  if (atomScopeMap.get(scopeKey)?.has(key)) {
    return atomScopeMap.get(scopeKey).get(key) as StorageAtom<T>;
  }
  const atom = fallback();
  if (atomScopeMap.has(scopeKey)) {
    atomScopeMap.get(scopeKey).set(key, atom);
  } else {
    atomScopeMap.set(scopeKey, new Map([[key, atom]]));
  }
  return atom;
};

/**
 * 创建一个使用 Storage 持久化的 Atom
 *
 * @param scope
 * @returns
 */
export const createStorageAtom = (scope: (get: Getter) => string) => {
  return <Value>(key: string, initialValue: Value) => {
    return atom(
      (get) => {
        const scopeKey = scope(get);
        if (!scopeKey) {
          return initialValue;
        }
        const atom = getAtom(scopeKey, key, () => atomWithLocalStorage(`scoped[${scopeKey}]${key}`, initialValue));
        return get(atom);
      },
      (get, set, state) => {
        const scopeKey = scope(get);
        if (!scopeKey) {
          throw new Error('Scope key is required when writing scoped storage atom');
        }
        const atom = getAtom(scopeKey, key, () => atomWithLocalStorage(`scoped[${scopeKey}]${key}`, initialValue));
        return set(atom, state);
      },
    );
  };
};
