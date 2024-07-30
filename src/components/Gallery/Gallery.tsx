import cn from 'classnames';
import { isDev } from 'constants/env';
import { memo } from 'infra/utils/react';
import { ReactNode } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

interface GalleryProps<T> extends Omit<SwiperProps, 'SwiperProps'> {
  data: Array<T>;
  renderItem: (item: T) => ReactNode;
}
export const Gallery = memo(function Gallery<T extends Object>({ data, renderItem, slidesPerView }: GalleryProps<T>) {
  const isDevelopment = isDev();
  const slideBaseCls = cn({
    isDevelopment: isDevelopment,
  });
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      grabCursor={true}
      autoplay={true}
      slidesPerView={slidesPerView}
      className="w-full h-[170px]"
    >
      {data.map((item, index) => (
        <SwiperSlide className={slideBaseCls} key={index}>
          {renderItem(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
});
