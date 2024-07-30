import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary';
import { AntdConfigProvider } from 'components/Provider/AntdConfigProvider';
import { GuardRoute } from 'components/Router/GuardRoute';
import { isDev } from 'constants/env';
import {
  debugRoute,
  downloadRoute,
  favoriteRoute,
  homeRoute,
  musicRoute,
  musicRouteComponents,
  radarRoute,
  recentRoute,
  videoRoute,
} from 'constants/routes';
import { Provider } from 'jotai';
import { Debug } from 'pages/Debug/Debug';
import { Download } from 'pages/Download/Download';
import { Favorite } from 'pages/Favorite/Favorite';
import { Home } from 'pages/Home/Home';
import { Music } from 'pages/Music/Music';
import { Radar } from 'pages/Radar/Radar';
import { Recent } from 'pages/Recent/Recent';
import { Video } from 'pages/Video/Video';
import { Fragment } from 'react/jsx-runtime';
import 'virtual:svg-icons-register';
import './style/style.css';

const App = () => {
  const isDevelopmentMode = isDev();
  return (
    <AntdConfigProvider>
      <ErrorBoundary>
        <Provider>
          {isDevelopmentMode && (
            <Fragment>
              <GuardRoute authType="anonymous" path={debugRoute.path} component={Debug} />
            </Fragment>
          )}
          <GuardRoute authType="anonymous" path={musicRoute.path} component={Music} />
          <GuardRoute authType="anonymous" path={musicRouteComponents.path} component={Music} />
          <GuardRoute authType="anonymous" path={videoRoute.path} component={Video} />
          <GuardRoute authType="anonymous" path={radarRoute.path} component={Radar} />
          <GuardRoute authType="anonymous" path={favoriteRoute.path} component={Favorite} />
          <GuardRoute authType="anonymous" path={recentRoute.path} component={Recent} />
          <GuardRoute authType="anonymous" path={downloadRoute.path} component={Download} />
          <GuardRoute authType="anonymous" path={homeRoute.path} component={Home} />
        </Provider>
      </ErrorBoundary>
    </AntdConfigProvider>
  );
};

export { App };
