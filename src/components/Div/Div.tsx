import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  background?: string;
  className?: string;
  children?: ReactNode;
}

export const Div: FC<DivProps> = ({ background, className, ...rest }) => {
  let bgCls = background ? `bg-${background}` : '';
  let borderCls = '';
  let roundedCls = '';
  let widthCls = '';
  let heightCls = '';
  let paddingCls = '';
  let marginCls = '';

  const validRestParams: any = {};
  const restParamsKeys = Object.keys(rest);
  for (let index = 0; index < restParamsKeys.length; index++) {
    const key = restParamsKeys[index];

    if (~key.indexOf('bg-')) {
      bgCls += `${key}`;
      continue;
    }

    if (~key.indexOf('border-')) {
      borderCls += ` ${key}`;
      continue;
    }

    if (~key.indexOf('rounded-')) {
      roundedCls += `rounded ${key}`;
      continue;
    }

    if (~key.indexOf('w-')) {
      widthCls = formatAttributeKeyCls(key);
      continue;
    }

    if (~key.indexOf('h-')) {
      heightCls = formatAttributeKeyCls(key);
      continue;
    }

    if (~key.indexOf('p') && ~key.indexOf('-')) {
      paddingCls += ` ${formatAttributeKeyCls(key)}`;
      continue;
    }

    if (~key.indexOf('m') && ~key.indexOf('-')) {
      marginCls += ` ${formatAttributeKeyCls(key)}`;
      continue;
    }

    validRestParams[key] = (rest as any)[key];
  }
  const cls = classNames(bgCls, borderCls, roundedCls, widthCls, heightCls, paddingCls, marginCls, className);
  return <div {...validRestParams} className={twMerge(cls)} />;
};

const formatAttributeKeyCls = (key: string) => {
  const [prefix, value] = key.split('-');
  return `${prefix}-${value}`;
};
