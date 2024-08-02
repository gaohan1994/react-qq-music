import { http } from 'api/api';
import { atom } from 'jotai';
import { loadable } from 'jotai/utils';

const recommendState = loadable(atom(async () => await http.open('get/getRecommend')));

export const recommendFocusState = atom((get) => {
  const state = get(recommendState) as any;
  console.log('state', state);
  return state?.data?.focus?.data?.content ?? [];
});
