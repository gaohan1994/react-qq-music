import { isDev } from 'constants/env';
import { componentLogger } from 'constants/logger';
import { isUndefined } from 'lodash';
import { useRef } from 'react';
import { useLatestCallback } from './useLatestCallback';

export const useDivScroll = () => {
  const isDevelopment = isDev();
  const ref = useRef<HTMLDivElement>(null);

  const scrollTo = useLatestCallback((top: number) => {
    if (!ref.current || isUndefined(top)) {
      isDevelopment && componentLogger.warning('Fail to scroll to undefined ref');
      return;
    }
    ref.current.scrollTop = top;
  });

  const scrollToTop = useLatestCallback(() => {
    if (!ref.current) {
      isDevelopment && componentLogger.warning('Fail to scroll to undefined ref');
      return;
    }
    ref.current.scrollTop = 0;
  });

  return {
    ref,
    scrollTo,
    scrollToTop,
  };
};
