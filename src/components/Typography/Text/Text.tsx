import classNames from 'classnames';
import { composeRefs } from 'infra/hooks/useMergeRefs';
import { forwardRef, ReactNode, useRef } from 'react';
import { TypographyTag } from '../Typography.type';
import { textVariants } from './Text.style';

export type TextElement = React.ElementRef<'p'>;

enum TextVariantEnum {
  regular = 'regular',
  small = 'small',
  caption = 'caption',
}

type TextVariant = keyof typeof TextVariantEnum;

type TextProps = {
  variant: TextVariant;
  as?: TypographyTag;
  className?: string;
  children?: ReactNode;
};

export const Text = forwardRef<TextElement, TextProps>(
  ({ variant, className, children, as: Wrapper = 'p' }, forwardedRef) => {
    const textRef = useRef(null);
    const baseClass = textVariants({ variant });
    const child = (
      <Wrapper
        data-slot="text-base"
        ref={composeRefs(textRef, forwardedRef)}
        className={classNames(baseClass, className)}
      >
        {children}
      </Wrapper>
    );
    return child;
  },
);

Text.displayName = 'Text';
