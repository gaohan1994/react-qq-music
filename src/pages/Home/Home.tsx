import { musicRoute } from 'constants/routes';
import { FC } from 'react';
import { Redirect } from 'wouter';

export const Home: FC<any> = () => <Redirect to={musicRoute.path} replace />;
