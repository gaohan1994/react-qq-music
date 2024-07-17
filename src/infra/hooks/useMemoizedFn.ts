import { useRef } from 'react';

export const useMemoizedFn = (fn: Function) => {
  const ref = useRef(fn);

  if (!ref.current) {
    ref.current = function (this: any, ...args: any[]) {
      return fn.apply(this, args);
    };
  }

  return ref.current;
};
