import { getClassNamesArgs, SlotsToClasses } from 'infra/utils/classnames';
import { tv, VariantProps } from 'tailwind-variants';

export const galleryVariants = tv({
  slots: {
    container: ['w-full'],
    slider: [],
  },
  variants: {
    size: {
      small: { container: 'h-[170px]' },
      large: { container: 'h-[220px]' },
    },
  },
});

export type GalleryVariantProps = VariantProps<typeof galleryVariants>;
export type GallerySlotsClasses = SlotsToClasses<keyof ReturnType<typeof galleryVariants>>;
export const galleryClassNames = getClassNamesArgs(galleryVariants);
