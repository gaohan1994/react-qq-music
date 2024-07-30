import { BarsOutlined } from '@ant-design/icons';
import { Flex } from 'components/Flex/Flex';
import { Icon } from 'components/Icon/Icon';

export const Toolbar = () => {
  return (
    <Flex items="center" full className="justify-end pr-4 h-full">
      <Icon icon={<BarsOutlined />} />
    </Flex>
  );
};
