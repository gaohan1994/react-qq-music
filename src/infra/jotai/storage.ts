import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import { SyncStorage } from 'jotai/vanilla/utils/atomWithStorage';

class MemoryCache<Value> implements SyncStorage<Value> {
  private storage = new Map<string, Value>();

  public getItem(key: string, initialValue: Value): Value {
    return this.storage.get(key);
  }

  public setItem(key: string, newValue: Value) {
    this.storage.set(key, newValue);
  }
  public removeItem(key: string) {
    this.storage.delete(key);
  }
}

const getStorage = <Value>(): SyncStorage<Value> => {
  try {
    const storage = typeof window !== 'undefined' ? window.localStorage : undefined;
    return createJSONStorage(() => storage);
  } catch (error) {
    console.error('Fail to createJSONStorage use window storage. Try fallback MemoryCache');
    return new MemoryCache<Value>();
  }
};

export const atomWithLocalStorage = <Value>(key: string, initialState: Value) => {
  return atomWithStorage(key, initialState, getStorage())!;
};
