import { PlayCircleOutlined } from '@ant-design/icons';
import { ConfigProvider, Menu, MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const createMenuItems = (menuItems: MenuItem[]) =>
  menuItems.map((item) => ({
    ...item,
    style: { display: 'flex', alignItems: 'center' },
  }));

const ONLINE_MENU_ITEMS: MenuItem[] = [
  { key: '1', label: '乐馆', icon: <PlayCircleOutlined /> },
  { key: '2', label: '视频', icon: <PlayCircleOutlined /> },
  { key: '3', label: '雷达', icon: <PlayCircleOutlined /> },
];

const USER_MENU_ITEMS: MenuItem[] = [
  { key: '5', label: '喜欢', icon: <PlayCircleOutlined /> },
  { key: '6', label: '最近播放', icon: <PlayCircleOutlined /> },
  { key: '7', label: '本地和下载', icon: <PlayCircleOutlined /> },
];

const MENU_CONFIG: MenuItem[] = [
  {
    key: 'online-music',
    type: 'group',
    label: '在线音乐',
    children: createMenuItems(ONLINE_MENU_ITEMS),
  },
  {
    key: 'my-music',
    type: 'group',
    label: '我的音乐',
    children: createMenuItems(USER_MENU_ITEMS),
  },
];

export { MENU_CONFIG };

export const LeftMenu = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemBg: '#f6f6f6',
            itemHeight: 36,
            fontSize: 12,
            iconSize: 18,
            iconMarginInlineEnd: 6,
            itemBorderRadius: 4,
            itemColor: '#626262',
            itemSelectedColor: '#000000',
            itemSelectedBg: '#dddddd',
          },
        },
      }}
    >
      <Menu style={{ border: '0px', alignItems: 'center' }} defaultSelectedKeys={['1']} items={MENU_CONFIG} />
    </ConfigProvider>
  );
};
