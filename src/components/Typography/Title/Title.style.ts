import { tv } from 'tailwind-variants';

export const titleVariants = tv({
  base: 'font-bold m-0',
  variants: {
    size: {
      '1': 'text-3xl',
      '2': 'text-2xl',
      '3': 'text-xl',
      '4': 'text-l',
      '5': 'text-base',
      '6': 'text-sm',
    },
  },
  compoundVariants: [
    {
      size: ['1', '2', '3', '4', '5', '6'],
      class: 'tracking-',
    },
  ],
});
