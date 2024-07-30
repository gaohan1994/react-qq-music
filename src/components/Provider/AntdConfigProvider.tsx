import { ConfigProvider } from 'antd';
import { FC, memo, ReactNode } from 'react';

interface AntdConfigProviderProps {
  children: ReactNode;
}
export const AntdConfigProvider: FC<AntdConfigProviderProps> = memo(({ children }) => (
  <ConfigProvider
    theme={{
      components: {
        Slider: {
          handleLineWidth: 1,
          railSize: 3,
          handleColor: 'black',
          dotActiveBorderColor: 'black',
          handleActiveColor: 'black',
          trackBg: 'black',
          trackHoverBg: 'black',
        },
      },
    }}
  >
    {children}
  </ConfigProvider>
));
