import classNames from 'classnames';
import { ClassNameValue as TWClassNameValue } from 'tailwind-merge';
import { ClassValue as TWClassValue } from 'tailwind-variants';

/**
 * This Typescript utility transform a list of slots into a list of {slot: classes}
 */
export type SlotsToClasses<S extends string> = {
  [key in S]?: TWClassValue;
};

type TransformClassNames<T extends Record<string, unknown>> = {
  [K in keyof T]: TWClassNameValue;
};

function getVariantsClassNames<T extends (...args: any[]) => Record<string, string>>(tvVariants: T) {
  const func = tvVariants as () => Record<string, string>;
  return Object.keys(func()).reduce(
    (acc, key) => {
      if (key) {
        acc[key] = '';
      }
      return acc;
    },
    {} as Record<string, string>,
  ) as TransformClassNames<ReturnType<T>>;
}

export function getClassNamesArgs<T extends (...args: any[]) => any>(tvVariants: T) {
  return {
    classNames: getVariantsClassNames(tvVariants),
  };
}

export function cn(...inputs: (classNames.Argument | TWClassValue)[]) {
  return classNames(inputs);
}
