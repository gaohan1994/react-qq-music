import { MutableRefObject, useLayoutEffect } from 'react';
import { useRafState } from './useRafState';

export const useSize = (target: MutableRefObject<Element>) => {
  const [state, setState] = useRafState(() => {
    const element = target.current;
    return element ? { width: element.clientWidth, height: element.clientHeight } : undefined;
  });

  useLayoutEffect(() => {
    const element = target.current;
    if (!element) return;

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const { clientWidth, clientHeight } = entry.target;
        setState({ width: clientWidth, height: clientHeight });
      });
    });

    resizeObserver.observe(element);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return state;
};
