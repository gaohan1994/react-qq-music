import React from 'react';

type MaybeRef<T> = React.Ref<T> | undefined;

const setRef = <T>(ref: MaybeRef<T>, value: T) => {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref !== null && ref !== undefined) {
    (ref as React.MutableRefObject<T>).current = value;
  }
};

export const composeRefs = <T>(...refs: MaybeRef<T>[]) => {
  return (node: T) => refs.forEach((ref) => setRef(ref, node));
};
