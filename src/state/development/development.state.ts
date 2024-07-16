import { atom } from 'jotai';
import { createStorageAtom } from 'jotai/createStorageAtom';

interface DevelopmentStateValue {
  counter: number;
}

export const developmentState = atom<DevelopmentStateValue>({ counter: 0 });

const developmentLocalAtomKey = atom('development-local-state');

export const developmentStorageAtom = createStorageAtom((get) => get(developmentLocalAtomKey));

export const developmentLocalState = developmentStorageAtom('env', {
  mode: 'development',
});
