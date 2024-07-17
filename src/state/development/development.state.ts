import { createStorageAtom } from 'infra/jotai/createStorageAtom';
import { atom } from 'jotai';

interface DevelopmentStateValue {
  counter: number;
}

export const developmentState = atom<DevelopmentStateValue>({ counter: 0 });

const developmentLocalAtomKey = atom('development-local-state');

export const developmentStorageAtom = createStorageAtom((get) => get(developmentLocalAtomKey));

export const developmentLocalState = developmentStorageAtom('env', {
  mode: 'development',
});
