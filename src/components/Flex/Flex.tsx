import classNames from 'classnames';
import { Div, DivProps } from 'components/Div/Div';
import { isString } from 'lodash';
import { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface FlexProps extends DivProps {
  full?: boolean;
  col?: boolean;
  start?: boolean;
  end?: boolean;
  around?: boolean;
  between?: boolean;
  center?: boolean;
  items?: string;
  className?: string;
  children?: ReactNode;
}
export const Flex: FC<FlexProps> = ({ col, start, end, around, between, className, center, full, items, ...rest }) => {
  const base = 'flex flex-row';
  const cls = classNames(
    base,
    {
      [`items-${items}`]: isString(items),
    },
    {
      ['flex-1']: full,
      ['flex-col']: col,
      ['justify-start']: start,
      ['justify-end']: end,
      ['justify-around']: around,
      ['justify-between']: between,
      ['justify-center']: center,
    },
    className,
  );
  console.log('cls', cls);
  return <Div {...rest} className={twMerge(cls)} />;
};
