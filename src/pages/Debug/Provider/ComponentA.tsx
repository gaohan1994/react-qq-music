import { memo } from 'react';
import { ShallowContext } from './Provider';

export const ComponentA = memo(() => {
  const { a, setA } = ShallowContext.useState('a', 'setA');
  console.log('A RENDER');
  return (
    <div>
      <p>a: {a}</p>
      <button onClick={() => setA()}>chagne a </button>
    </div>
  );
});
