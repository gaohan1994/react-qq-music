import { FunctionComponent, memo as NativeMemo } from 'react';

export const memo: <T extends FunctionComponent<any>>(comp: T) => T = NativeMemo;
