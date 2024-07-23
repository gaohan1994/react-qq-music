import { MailOutlined, SettingOutlined, SkinOutlined } from '@ant-design/icons';
import { Flex } from 'components/Flex/Flex';
import { Icon } from 'components/Icon/Icon';

export const Settings = () => (
  <Flex gap-5>
    <Icon icon={<MailOutlined />} />
    <Icon icon={<SkinOutlined />} />
    <Icon icon={<SettingOutlined />} />
  </Flex>
);
