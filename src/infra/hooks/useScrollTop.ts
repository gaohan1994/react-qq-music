import { throttle } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useLatestCallback } from './useLatestCallback';

export const useScrollTop = (ref: React.MutableRefObject<HTMLElement | null>) => {
  const [srollTop, setScrollTop] = useState(0);

  const scrollHandler = useLatestCallback(
    throttle((element: HTMLElement) => {
      if (element) {
        setScrollTop(element.scrollTop);
      }
    }, 100),
  );

  useEffect(() => {
    const element = ref.current;
    if (element) {
      const controller = new AbortController();
      element.addEventListener('scroll', () => scrollHandler(element), {
        signal: controller.signal,
      });
      return () => {
        controller.abort();
      };
    }
  }, [ref.current]);

  return srollTop;
};
