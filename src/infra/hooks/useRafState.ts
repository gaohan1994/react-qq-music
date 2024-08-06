import { useCallback, useRef, useState } from 'react';
import { useUnmount } from './useUnmount';

export const useRafState = <T>(initialState: T | (() => T)) => {
  const requestAnimationFrameRef = useRef(0);
  const [state, setState] = useState(initialState);

  const setRequestAnimationFrameState = useCallback((value: T | ((prevState: T) => T)) => {
    cancelAnimationFrame(requestAnimationFrameRef.current);
    requestAnimationFrameRef.current = requestAnimationFrame(() => {
      setState(value);
    });
  }, []);

  useUnmount(() => {
    cancelAnimationFrame(requestAnimationFrameRef.current);
  });

  return [state, setRequestAnimationFrameState] as const;
};
