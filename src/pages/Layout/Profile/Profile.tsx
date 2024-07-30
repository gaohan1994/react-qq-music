import { UserOutlined } from '@ant-design/icons';
import { Flex } from 'components/Flex/Flex';
import { Icon } from 'components/Icon/Icon';
import { Typography } from 'components/Typography/Typography';

export const Profile = () => {
  return (
    <Flex gap-2 items="center">
      <Icon icon={<UserOutlined />} />
      <Typography.Text variant="caption">点击登陆</Typography.Text>
    </Flex>
  );
};
