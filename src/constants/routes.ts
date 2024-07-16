import { Router } from 'components/Router/Router';

export const homeRoute = Router.create(['/'] as const);

export const debugRoute = Router.create(['debug'] as const);
