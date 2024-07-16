import React, { useEffect } from 'react';

export function withTitle<T extends React.ComponentType<any>>(title: string, component: T): T {
  return function withTitleWrapper(props: {}) {
    useEffect(() => {
      document.title = title;
    }, []);
    return React.createElement(component, props);
  } as T;
}
