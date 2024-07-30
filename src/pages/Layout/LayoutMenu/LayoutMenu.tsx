import { ConfigProvider, Menu } from 'antd';
import { Router } from 'components/Router/Router';
import { FC } from 'react';
import { Link } from 'wouter';

type MenuItem = {
  label: string;
  route: Router<any, any>;
};

export interface LayoutMenuProps {
  items: MenuItem[];
}

export const LayoutMenu: FC<LayoutMenuProps> = ({ items }) => {
  const menuItems = items.map(({ label, route }) => ({
    key: route.path,
    label: <Link to={route.path}>{label}</Link>,
  }));

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemMarginInline: 0,
            horizontalItemSelectedColor: '#1FCC94',
            horizontalItemHoverColor: '#1FCC94',
          },
        },
      }}
    >
      <Menu
        mode="horizontal"
        className="gap-4 mb-4"
        items={menuItems}
        defaultSelectedKeys={[menuItems[0].key]}
        style={{ border: 0 }}
      />
    </ConfigProvider>
  );
};
