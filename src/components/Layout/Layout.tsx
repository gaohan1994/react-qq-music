import { Menu as AntdMenu } from 'antd';
import qqMusicLogo from 'assets/images/qq-music-logo.png';
import { Controller } from 'components/Controller/Controller';
import { Div } from 'components/Div/Div';
import { Flex } from 'components/Flex/Flex';
import { MENU_CONFIG } from 'constants/menu';
import { FC, ReactNode } from 'react';
import { Profile } from './Profile/Profile';
import { Refresher } from './Refresher/Refresher';
import { Search } from './Search/Search';
import { Settings } from './Settings/Settings';

interface LayoutProps {
  children: ReactNode;
}
export const Layout: FC<LayoutProps> = ({ children }) => (
  <Flex col w-screen h-screen className="overflow-hidden">
    <Flex full>
      <Flex col w-56 background="#f6f6f6" className="bg-[#f6f6f6]">
        <Flex h-16 items="center" pl-6>
          <img src={qqMusicLogo} className="w-[90px]" />
        </Flex>
        <Div pl-3 pr-3>
          <AntdMenu style={{ border: '0px', alignItems: 'center' }} defaultSelectedKeys={['1']} items={MENU_CONFIG} />
        </Div>
      </Flex>
      <Flex col full>
        <Flex between w-full h-16 pl-3 pr-3>
          <Flex items="center" gap-5>
            <Refresher />
            <Search />
          </Flex>
          <Flex items="center" gap-5>
            <Profile />
            <Settings />
          </Flex>
        </Flex>
        <Flex full>{children}</Flex>
      </Flex>
    </Flex>
    <Div w-screen h-20 className="border-t-[1px]">
      <Controller />
    </Div>
  </Flex>
);
