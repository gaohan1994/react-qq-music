import { useScrollTop } from 'infra/hooks/useScrollTop';
import React, { useMemo } from 'react';

const DEFAULT_THRESHOLD = 80;

type Threshold = number | ((scrollTop: number) => boolean);

export const useBackTopVisible = (
  ref: React.MutableRefObject<HTMLElement>,
  threshold: Threshold = DEFAULT_THRESHOLD,
) => {
  const scrollTop = useScrollTop(ref);
  const visible = useMemo(() => {
    if (typeof threshold === 'function') {
      return threshold(scrollTop);
    }
    return scrollTop > threshold;
  }, [scrollTop]);
  return visible;
};
