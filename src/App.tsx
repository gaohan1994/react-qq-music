import 'virtual:svg-icons-register';
import logo from './assets/images/qq-music-logo.png';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { Icon, IconType } from './components/Icon';
import './style/style.css';

const App = () => {
  return (
    <ErrorBoundary>
      <Icon name={IconType.react} />
      <img src={logo} />
      App
    </ErrorBoundary>
  );
};

export { App };
