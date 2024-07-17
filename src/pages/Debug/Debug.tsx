import { pageLogger } from 'constants/logger';
import { homeRoute } from 'constants/routes';
import { useAtomAction } from 'infra/jotai/useAtomAction';
import { useSelectAtom } from 'infra/jotai/useSelectAtom';
import { useAtomValue } from 'jotai';
import { useCallback, useRef } from 'react';
import {
  decreaseCounterAction,
  increaseCounterAction,
  resetCounterAction,
  setCounterValueAction,
  setModeAction,
} from 'state/development/development.action';
import { developmentLocalState, developmentState } from 'state/development/development.state';

export const Debug = () => {
  const inputRef = useRef(null);
  const counterValue = useSelectAtom(
    developmentState,
    useCallback((state) => state.counter, []),
  );
  const { counter } = useAtomValue(developmentState);
  const increaseCounter = useAtomAction(increaseCounterAction);
  const decreaseCounter = useAtomAction(decreaseCounterAction);
  const resetCounter = useAtomAction(resetCounterAction);
  const setCounterValue = useAtomAction(setCounterValueAction);
  const { mode } = useAtomValue(developmentLocalState);
  const setMode = useAtomAction(setModeAction);

  const setCounterValueHandler = useCallback(() => {
    const value = Number(inputRef.current?.value);
    if (isNaN(value)) {
      pageLogger.error('Invaild value');
      return;
    }
    setCounterValue(value);
  }, []);

  const css = 'box-border pl-4 pr-4 pt-2 pb-2 rounded-md bg-orange-400 h-[40px]';
  return (
    <div className="space-4">
      <h3>Debug</h3>
      <div className="text-lg text-orange-600">counter: {counter}</div>
      <div className="text-lg text-orange-600">counter select: {counterValue}</div>
      <div className="flex flex-row gap-2">
        <button className={css} onClick={increaseCounter}>
          increase
        </button>
        <button className={css} onClick={decreaseCounter}>
          decrease
        </button>
        <button className={css} onClick={resetCounter}>
          reset
        </button>
      </div>
      <div className="flex flex-row items-center gap-2">
        <div className="mt-2 mb-2 h-[50px] w-[200px] border border-solid ">
          <input ref={inputRef} className="w-full h-full border-none focus:outline-none" />
        </div>
        <button className={css} onClick={setCounterValueHandler}>
          setCounterValue
        </button>
      </div>
      <button className={css} onClick={() => homeRoute.navigate()}>
        to home
      </button>

      <div className="text-lg text-red-400">mode: {mode}</div>
      <button className={css} onClick={() => setMode('production')}>
        change mode
      </button>
    </div>
  );
};
