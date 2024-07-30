import { EllipsisOutlined, HeartOutlined, MessageOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { Flex } from 'components/Flex/Flex';
import { Icon } from 'components/Icon/Icon';
import { FC } from 'react';

interface IntroductionProps {}

export const Introduction: FC<IntroductionProps> = () => (
  <Flex items="center" full className="pl-4 h-full">
    <div className="w-[50px] h-[50px] bg-slate-200 rounded-[6px]" />
    <Flex col ml-4 className="gap-2">
      <Typography.Text>Firework - Happy Tunes</Typography.Text>
      <Flex className="gap-4">
        <Icon icon={<HeartOutlined />} />
        <Icon icon={<MessageOutlined />} />
        <Icon icon={<EllipsisOutlined />} />
      </Flex>
    </Flex>
  </Flex>
);
