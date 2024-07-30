import { musicFeaturedRoute, musicListenBookRoute } from 'constants/routes';
import { Layout } from 'pages/Layout/Layout';
import { FC } from 'react';
import { Redirect, Route, Switch } from 'wouter';
import { MusicFeatured } from './MusicFeatured/MusicFeatured';
import { MusicListenBook } from './MusicListenBook/MusicListenBook';

export const Music: FC = () => {
  return (
    <Layout
      layoutTitle="乐馆"
      layoutMenuItems={[
        {
          label: '精选',
          route: musicFeaturedRoute,
        },
        {
          label: '听书',
          route: musicListenBookRoute,
        },
      ]}
    >
      <Switch>
        <Route path={musicFeaturedRoute.path} component={MusicFeatured} />
        <Route path={musicListenBookRoute.path} component={MusicListenBook} />
        <Redirect to={musicFeaturedRoute.path} />
      </Switch>
    </Layout>
  );
};
