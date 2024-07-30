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
  <Flex col w-screen h-screen className="overflow-hidden min-w-[800px]">
    <Flex full>
      <Flex col w-56 background="#f6f6f6" className="bg-[#f6f6f6]">
        <Flex h-16 items="center" pl-6>
          <img src={qqMusicLogo} className="w-[90px]" />
        </Flex>
        <Div pl-3 pr-3>
          <LeftMenu />
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
        <Flex full col>
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
    <Div w-screen h-20 className="border-t-[1px] min-w-[800px]">
      <Controller />
    </Div>
  </Flex>
);

export { Layout, LayoutMenu, LayoutTitle };
