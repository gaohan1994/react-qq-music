import qqMusicLogo from 'assets/images/qq-music-logo.png';
import { Condition } from 'components/Condition/Condition';
import { Div } from 'components/Div/Div';
import { Flex } from 'components/Flex/Flex';
import { isUndefined } from 'lodash';
import { Controller } from 'pages/Controller/Controller';
import { FC, ReactNode } from 'react';
import { LayoutMenu, LayoutMenuProps } from './LayoutMenu/LayoutMenu';
import { LayoutTitle } from './LayoutTitle/LayoutTitle';
import { LeftMenu } from './LeftMenu/LeftMenu';
import { Profile } from './Profile/Profile';
import { Refresher } from './Refresher/Refresher';
import { Search } from './Search/Search';
import { Settings } from './Settings/Settings';

interface LayoutProps {
  children: ReactNode;
  layoutTitle?: ReactNode;
  layoutMenuItems?: LayoutMenuProps['items'];
}
const Layout: FC<LayoutProps> = ({ children, layoutTitle, layoutMenuItems }) => (
  <Flex col w-screen h-screen className="overflow-hidden">
    <Flex full>
      <Flex col background="#f6f6f6" className="bg-[#f6f6f6] min-w-[210px] max-w-[210px]">
        <Flex h-16 items="center" pl-6>
          <img src={qqMusicLogo} className="w-[90px]" />
        </Flex>
        <Div pl-3 pr-3>
          <LeftMenu />
        </Div>
      </Flex>
      <Flex col full>
        <Flex between w-full pl-3 pr-3 className="h-[64px]">
          <Flex items="center" gap-5>
            <Refresher />
            <Search />
          </Flex>
          <Flex items="center" gap-5>
            <Profile />
            <Settings />
          </Flex>
        </Flex>
        <Flex col full className="max-w-[calc(100vw-224px)] min-w-[820px] max-h-[calc(100vh-144px)] relative">
          <Condition if={!isUndefined(layoutTitle)}>
            <LayoutTitle>{layoutTitle}</LayoutTitle>
          </Condition>
          <Condition if={!isUndefined(layoutMenuItems)}>
            <LayoutMenu items={layoutMenuItems} />
          </Condition>
          {children}
        </Flex>
      </Flex>
    </Flex>
    <Div w-screen className="border-t-[1px] min-w-[800px] h-[80px]">
      <Controller />
    </Div>
  </Flex>
);

export { Layout, LayoutMenu, LayoutTitle };
