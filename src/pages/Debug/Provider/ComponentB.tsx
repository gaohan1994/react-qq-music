import { memo } from 'react';
import { ShallowContext } from './Provider';

export const ComponentB = memo(() => {
  const { b } = ShallowContext.useState('b');
  console.log('B RENDER');
  return (
    <div>
      <p>b: {b}</p>
    </div>
  );
});
