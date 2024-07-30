import { Div } from 'components/Div/Div';
import { Typography } from 'components/Typography/Typography';
import { FC, ReactNode } from 'react';

interface LayoutTitleProps {
  children: ReactNode;
}
export const LayoutTitle: FC<LayoutTitleProps> = ({ children }) => (
  <Div className="ml-[12px] mb-[12px]">
    <Typography.Title size="1">{children}</Typography.Title>
  </Div>
);
