import { Gallery } from 'components/Gallery/Gallery';
import { useAtomValue } from 'jotai';
import { memo } from 'react';
import { recommendFocusState } from 'state/recommend/recommend.state';

export const TopBanner = memo(() => {
  const state = useAtomValue(recommendFocusState);
  return (
    <Gallery<any>
      slidesPerView={3}
      data={state}
      renderItem={(item) => (
        <div key={item.pic_info.url} className={'rounded-[6px] overflow-hidden h-full'}>
          <img src={item.pic_info.url} className="h-full w-full" />
        </div>
      )}
    />
  );
});
