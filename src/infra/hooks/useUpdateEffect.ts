import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

export const useUpdateEffect = (effect: EffectCallback, deps: DependencyList = []) => {
  const isMountedRef = useRef(false);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
    } else {
      return effect();
    }
  }, deps);
};
