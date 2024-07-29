import classNames from 'classnames';
import { forwardRef, ReactNode } from 'react';
import { titleVariants } from './Title.style';

type TitleElement = React.ElementRef<'h1'>;
type TitleSize = '1' | '2' | '3' | '4' | '5' | '6';
type TitleLevel = `h${TitleSize}` | 'div' | 'span' | 'p';

interface TitleProps {
  size: TitleSize;
  as?: TitleLevel;
  className?: string;
  children?: ReactNode;
}
export const Title = forwardRef<TitleElement, TitleProps>((props, forwardedRef) => {
  const { size, children, className, ...rest } = props;
  const Wrapper = props.as ?? `h${size}`;
  return (
    <Wrapper {...rest} ref={forwardedRef} className={classNames(titleVariants({ size }), className)}>
      {children}
    </Wrapper>
  );
});
