import { DependencyList, useEffect } from 'react';

export const useAsyncEffect = (fn: () => Promise<unknown>, deps: DependencyList = []) => {
  useEffect(() => {
    fn();
  }, deps);
};
