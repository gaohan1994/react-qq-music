import { cn } from 'infra/utils/classnames';
import { memo } from 'infra/utils/react';
import { ReactNode } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { GallerySlotsClasses, GalleryVariantProps, galleryVariants } from './Gallery.style';

interface GalleryProps<T> extends Partial<Omit<SwiperProps, 'SwiperProps'>>, GalleryVariantProps {
  data: Array<T>;
  renderItem: (item: T, index: number) => ReactNode;
  classNames?: GallerySlotsClasses;
}
export const Gallery = memo(function Gallery<T extends Object>({
  data,
  renderItem,
  slidesPerView = 4,
  size = 'small',
  classNames,
}: GalleryProps<T>) {
  const slots = galleryVariants({ size });
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      grabCursor={true}
      autoplay={true}
      slidesPerView={slidesPerView}
      className={slots.container({ className: cn(classNames?.container) })}
    >
      {data.map((item, index) => (
        <SwiperSlide className={slots.slider({ className: cn(classNames?.slider) })} key={index}>
          {renderItem(item, index)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
});
