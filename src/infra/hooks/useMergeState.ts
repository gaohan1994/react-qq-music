import { DependencyList, useEffect, useState } from 'react';

export const useMergeState = <T>(deps: DependencyList, factory: () => T) => {
  const [state, setState] = useState(factory);
  useEffect(() => {
    setState(factory());
  }, deps);
  return [state, setState] as const;
};
