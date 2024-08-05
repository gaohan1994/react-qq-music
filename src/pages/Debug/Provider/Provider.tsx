import { useLatestCallback } from 'infra/hooks/useLatestCallback';
import { createShallowContext } from 'infra/Provider/createShallowContext';
import { memo, useState } from 'react';
import { ComponentA } from './ComponentA';
import { ComponentB } from './ComponentB';
import { Trigger } from './Trigger';

export const ShallowContext = createShallowContext<{
  a: number;
  setA: (value?: number) => void;
  b: number;
  setB: (value?: number) => void;
}>();

export const Demo = memo(() => {
  const [a, setA] = useState(() => Math.random());
  const [b, setB] = useState(() => Math.random());

  return (
    <ShallowContext
      a={a}
      b={b}
      setA={useLatestCallback((value = Math.random()) => setA(value))}
      setB={(value = Math.random()) => setB(value)}
    >
      <ComponentA />
      <ComponentB />
      <Trigger />
    </ShallowContext>
  );
});
