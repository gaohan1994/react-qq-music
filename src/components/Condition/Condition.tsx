import { FC, ReactNode } from 'react';

interface ConditionProps {
  if?: boolean;
  children: ReactNode | (() => ReactNode);
}

export const Condition: FC<ConditionProps> = (props) => {
  return Boolean(props.if) ? (typeof props.children === 'function' ? props.children() : props.children) : null;
};
