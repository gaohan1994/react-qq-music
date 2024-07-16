import { createAtomAction } from 'jotai/createAtomAction';
import { developmentLocalState, developmentState } from './development.state';

export const increaseCounterAction = createAtomAction((get, set) => {
  set(developmentState, (prevDevelopmentState) => ({
    ...prevDevelopmentState,
    counter: prevDevelopmentState.counter + 1,
  }));
});

export const decreaseCounterAction = createAtomAction((get, set) => {
  set(developmentState, (prevDevelopmentState) => ({
    ...prevDevelopmentState,
    counter: prevDevelopmentState.counter - 1,
  }));
});

export const resetCounterAction = createAtomAction((_, set) => {
  set(developmentState, { counter: 0 });
});

export const setCounterValueAction = createAtomAction((_, set, value: number) => {
  set(developmentState, { counter: value });
});

export const setModeAction = createAtomAction((_, set, value: string) => {
  set(developmentLocalState, { mode: value });
});
