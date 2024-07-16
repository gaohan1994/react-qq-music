import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary';
import { GuardRoute } from 'components/Router/GuardRoute';
import { isDev } from 'constants/env';
import { debugRoute, homeRoute } from 'constants/routes';
import { Provider } from 'jotai';
import { Debug } from 'pages/Debug/Debug';
import { Home } from 'pages/Home/Home';
import { Fragment } from 'react/jsx-runtime';
import 'virtual:svg-icons-register';
import { Switch } from 'wouter';
import './style/style.css';

const App = () => {
  const isDevelopmentMode = isDev();
  return (
    <ErrorBoundary>
      <Provider>
        <Switch>
          {isDevelopmentMode && (
            <Fragment>
              <GuardRoute authType="anonymous" path={debugRoute.path} component={Debug} />
            </Fragment>
          )}
          <GuardRoute authType="anonymous" path={homeRoute.path} component={Home} />
        </Switch>
      </Provider>
    </ErrorBoundary>
  );
};

export { App };
