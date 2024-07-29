import { tv } from 'tailwind-variants';

export const textVariants = tv({
  variants: {
    variant: {
      regular: 'text-[16px] font-normal',
      small: 'text-[14px]',
      caption: 'text-[12px] tracking-tight',
    },
  },
  compoundVariants: [
    {
      variant: ['small', 'caption'],
      class: 'font-light',
    },
  ],
});
