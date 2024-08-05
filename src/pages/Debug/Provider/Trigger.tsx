import { ShallowContext } from './Provider';

export const Trigger = () => {
  const { setA, setB } = ShallowContext.useState('setA', 'setB');
  return (
    <div>
      <button onClick={() => setA()}>chagne a</button>
      <button onClick={() => setB()}>chagne b</button>
    </div>
  );
};
