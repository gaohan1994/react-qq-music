import { useRef } from 'react';

export const useLatestCallback = <T extends (...args: any[]) => any>(callback: T) => {
  const ref = useRef(callback);

  if (!ref.current) {
    ref.current = callback;
  }

  return ref.current;
};
