import { http } from 'api/api';
import { atom } from 'jotai';
import { loadable } from 'jotai/utils';

const recommendState = loadable(atom(async () => await http.open('get/getRecommend')));

export const recommendFeaturedState = atom((get) => {
  const state = get(recommendState) as any;
  return state?.data?.new_album?.data?.albums ?? [];
});
