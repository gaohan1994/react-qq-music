import { ErrorInfo, PropsWithChildren, PureComponent, ReactNode } from 'react';
import { isDev } from '../../constants/env';

interface ErrorBoundaryProps {
  renderError?: (error: Error, errorInfo: ErrorInfo | null) => ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends PureComponent<PropsWithChildren<ErrorBoundaryProps>, ErrorBoundaryState> {
  state: Readonly<ErrorBoundaryState> = {
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    if (isDev()) {
      console.error(error);
      console.error(errorInfo);
    }
    this.setState({ error, errorInfo });
  }

  render(): ReactNode {
    if (this.state.error !== null) {
      return (this.props.renderError || renderError)(this.state.error, this.state.errorInfo);
    }
    return this.props.children;
  }
}

const renderError = (error: Error, errorInfo: ErrorInfo | null) => {
  console.error(error);
  console.error(errorInfo);
  return <div>Error!</div>;
};

export { ErrorBoundary };
