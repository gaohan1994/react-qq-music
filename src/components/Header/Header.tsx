import { RightOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import classNames from 'classnames';
import { Condition } from 'components/Condition/Condition';
import { Flex } from 'components/Flex/Flex';
import { isUndefined } from 'lodash';
import { FC, ReactNode } from 'react';

interface HeaderProps {
  title: ReactNode;
  className?: string;
  desc?: ReactNode;
  showMore?: boolean;
  children?: ReactNode;
}
export const Header: FC<HeaderProps> = ({ title, desc, className, children, showMore = false }) => (
  <Flex items="center" className={classNames('justify-between w-full mt-3 mb-3', className)}>
    <Flex gap-3 items="center">
      <Typography.Title level={5} className="!mb-0">
        {title}
      </Typography.Title>
      <Condition if={!isUndefined(desc)}>
        <Typography.Text type="secondary">{desc}</Typography.Text>
      </Condition>
      {children}
    </Flex>
    <Condition if={showMore}>
      <Typography.Text type="secondary">
        更多
        <RightOutlined />
      </Typography.Text>
    </Condition>
  </Flex>
);
