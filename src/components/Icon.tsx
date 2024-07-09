import { forwardRef, ForwardRefRenderFunction, memo, SVGProps } from 'react';
import { IconType } from '../assets/icons/types';

interface IconProps extends SVGProps<SVGSVGElement> {
  name?: IconType;
  children?: string;
  fontSize?: number;
}

const IconComponent: ForwardRefRenderFunction<SVGSVGElement, IconProps> = (
  { name, children, color, fontSize, ...props },
  ref,
) => {
  const icon = name || children;
  if (!icon) {
    throw new Error('Invalid empty icon name');
  }

  return (
    <svg
      ref={ref}
      {...props}
      style={{ color, ...(fontSize ? { width: `${fontSize}px`, height: `${fontSize}px` } : {}) }}
      aria-hidden="true"
    >
      <use href={`#icon-${icon}`} />
    </svg>
  );
};

const Icon = memo(forwardRef(IconComponent));

export { Icon, IconType };
