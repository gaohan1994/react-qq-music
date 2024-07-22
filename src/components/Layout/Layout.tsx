import { Menu as AntdMenu } from 'antd';
import qqMusicLogo from 'assets/images/qq-music-logo.png';
import { MENU_CONFIG } from 'constants/menu';
import { memo, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}
export const Layout = memo<LayoutProps>(({ children }) => (
  <div className="flex flex-col w-[100vw] h-[100vh] overflow-hidden">
    <div className="flex flex-row flex-1">
      <div className="flex flex-col w-[200px] p-3 bg-[#f6f6f6]">
        <div className="flex flex-row items-center mt-3 mb-3">
          <img src={qqMusicLogo} className="w-[100px] pl-3" />
        </div>
        <AntdMenu style={{ border: '0px', alignItems: 'center' }} defaultSelectedKeys={['1']} items={MENU_CONFIG} />
      </div>
      <div className="flex flex-1">
        <div className="flex flex-col">
          <div className="flex flex-row h-[60px]">settings</div>
          <div className="flex flex-1">{children}</div>
        </div>
      </div>
    </div>
    <footer className="w-[100%] h-32 border-t-[1px]">footer</footer>
  </div>
));
