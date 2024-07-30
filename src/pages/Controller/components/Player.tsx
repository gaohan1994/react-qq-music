import {
  CaretRightOutlined,
  SoundOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import { Slider } from 'antd';
import { Flex } from 'components/Flex/Flex';
import { Icon } from 'components/Icon/Icon';
import { Typography } from 'components/Typography/Typography';

export const Player = () => {
  return (
    <Flex className="flex-1 justify-center" col items="center">
      <Flex className="gap-4" items="center">
        <Icon icon={<SyncOutlined />} />
        <Icon size={24} icon={<StepBackwardOutlined />} />
        <Icon size={26} icon={<CaretRightOutlined />} />
        <Icon size={24} icon={<StepForwardOutlined />} />
        <Icon icon={<SoundOutlined />} />
      </Flex>
      <Flex items="center" className="w-full">
        <Typography.Text variant="caption">0:00</Typography.Text>
        <Slider className="w-full" min={0} max={100} defaultValue={30} />
        <Typography.Text variant="caption">0:00</Typography.Text>
      </Flex>
    </Flex>
  );
};
