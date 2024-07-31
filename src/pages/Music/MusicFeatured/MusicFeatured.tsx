import { Div } from 'components/Div/Div';
import { Gallery } from 'components/Gallery/Gallery';
import { Header } from 'components/Header/Header';
import { useDivScroll } from 'infra/hooks/useScroll';
import { useAtomValue } from 'jotai';
import { FC } from 'react';
import { recommendFeaturedState } from 'state/recommend/recommend.state';
import { BackTop } from './components/BackTop';
import { MusicFeaturedCard } from './components/MusicFeaturedCard';

interface Item {
  index: number;
}
const data: Item[] = Array.from([1, 2, 3, 4, 5]).map((_, index) => ({ index }));

export const MusicFeatured: FC = () => {
  const { ref: containerRef } = useDivScroll();
  const state = useAtomValue(recommendFeaturedState);
  return (
    <Div p-3 className="overflow-y-auto h-full" ref={containerRef}>
      <Gallery slidesPerView={3} data={data} renderItem={(item) => <MusicFeaturedCard key={item.index} />} />
      <Header title="官方歌单" desc="hello" showMore />
      <Gallery slidesPerView={4} data={data} renderItem={(item) => <MusicFeaturedCard key={item.index} />} />
      <Header title="推荐听书" showMore />
      <Gallery slidesPerView={4} data={data} renderItem={(item) => <MusicFeaturedCard key={item.index} />} />
      <BackTop containerRef={containerRef} />
    </Div>
  );
};
