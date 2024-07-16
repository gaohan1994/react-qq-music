import React, { FC, memo, useMemo } from 'react';
import { Route, RouteProps } from 'wouter';
import { withTitle } from './withTitle';

interface GuardRouteProps extends RouteProps {
  authType: 'anonymous' | 'account';
  title?: string;
  disabled?: boolean;
}

export const GuardRoute: FC<GuardRouteProps> = memo(
  ({
    // GuardRoute 组件需要处理的属性
    authType,
    title,
    disabled,
    // 原生 Route 组件需要处理的属性
    path,
    component: componentProps,
    ...restRouteProps
  }) => {
    const component = useMemo(() => {
      const Component = title ? withTitle(title, componentProps) : componentProps;
      return (props: any) => React.createElement(Component, { ...props });
    }, [componentProps, title]);

    return <Route path={path} component={component} {...restRouteProps} />;
  },
);
