import {
  createContext,
  createElement,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useLayoutEffect,
  useReducer,
  useRef,
  useState,
} from 'react';

class ShallowContextState<T> {
  value: T;
  private prevValue: T | undefined;
  private listeners: (readonly [any, Array<keyof T>])[] = [];

  constructor(value: T) {
    this.value = value;
  }

  check() {
    if (this.prevValue) {
      for (const [fn, props] of this.listeners) {
        for (const p of props) {
          if (this.value[p] !== this.prevValue[p]) {
            fn();
            break;
          }
        }
      }
    }
    this.prevValue = { ...this.value };
  }

  useState<K extends keyof T>(...props: K[]): Pick<T, K> {
    const [, update] = useReducer((s) => s + 1, 0);
    const ref = useRef<[any, Array<keyof T>]>();
    if (ref.current === void 0) {
      ref.current = [update, props];
      this.listeners.push(ref.current);
    } else {
      ref.current[1] = props;
    }
    useEffect(
      () => () => {
        this.listeners.splice(this.listeners.findIndex((item) => item === ref.current));
      },
      [],
    );
    return this.value;
  }
}

export type MapKeyValue<T, K extends Array<keyof T>> = { [P in keyof K]: K[P] extends keyof T ? T[K[P]] : K[P] };

export interface ShallowContext<T extends object> extends FC<PropsWithChildren<T>> {
  useState<K extends keyof T>(...props: K[]): Pick<T, K>;
  useContext(): ShallowContextState<T>;
}

export type SharedShallowState<T> = T & {
  setState: (nextState: Partial<T> | ((prevState: T) => Partial<T>)) => void;
};

export function createShallowContext<T extends object>(): ShallowContext<T> {
  const Context = createContext<ShallowContextState<T> | null>(null);
  Context.displayName = 'ShallowContextState';

  function ShallowContext(value: PropsWithChildren<T>) {
    const [state] = useState(() => new ShallowContextState<T>(value));
    state.value = value;
    useLayoutEffect(() => state.check());
    return createElement(Context.Provider, { value: state }, value.children);
  }

  ShallowContext.useState = function <K extends keyof T>(...props: K[]): Pick<T, K> {
    return useContext(Context)!.useState(...props);
  };

  ShallowContext.useContext = () => useContext(Context)!;

  return ShallowContext;
}
