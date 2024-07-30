import { useRef, useState } from 'react';
import { useLatestCallback } from './useLatestCallback';

export const useHover = <T extends HTMLElement>() => {
  const previousNode = useRef<T>(null);
  const [isHover, setIsHover] = useState(false);

  const mouseEnterHandler = useLatestCallback(() => {
    setIsHover(true);
  });

  const mouseLeaveHandler = useLatestCallback(() => {
    setIsHover(false);
  });

  const hoverRefHandler = useLatestCallback((node: T) => {
    if (previousNode.current?.nodeType === Node.ELEMENT_NODE) {
      previousNode.current.removeEventListener('mouseenter', mouseEnterHandler);
      previousNode.current.removeEventListener('mouseleave', mouseLeaveHandler);
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      node.addEventListener('mouseenter', mouseEnterHandler);
      node.addEventListener('mouseleave', mouseLeaveHandler);
      previousNode.current = node;
    }
  });

  return [hoverRefHandler, isHover] as const;
};
