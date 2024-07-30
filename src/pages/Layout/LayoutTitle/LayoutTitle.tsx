import { Typography } from 'components/Typography/Typography';
import { FC, ReactNode } from 'react';

interface LayoutTitleProps {
  children: ReactNode;
}
export const LayoutTitle: FC<LayoutTitleProps> = ({ children }) => (
  <Typography.Title size="1" className="ml-[12px] mb-[12px]">
    {children}
  </Typography.Title>
);
