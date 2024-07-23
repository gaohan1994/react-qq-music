import { UserOutlined } from '@ant-design/icons';
import { Flex } from 'components/Flex/Flex';
import { Icon } from 'components/Icon/Icon';

export const Profile = () => {
  return (
    <Flex gap-2 items="center">
      <Icon icon={<UserOutlined />} />
      <div>点击登陆</div>
    </Flex>
  );
};
