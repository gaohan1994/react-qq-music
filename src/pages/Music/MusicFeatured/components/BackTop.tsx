import { UpOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Condition } from 'components/Condition/Condition';
import { useBackTopVisible } from 'hooks/useBackTopVisible';
import { FC } from 'react';

interface BackTopProps {
  containerRef: React.MutableRefObject<HTMLElement | null>;
}
export const BackTop: FC<BackTopProps> = ({ containerRef }) => (
  <Condition if={useBackTopVisible(containerRef)}>
    <div className="absolute bottom-2 right-4 z-20">
      <Button onClick={() => (containerRef.current.scrollTop = 0)}>
        <UpOutlined />
      </Button>
    </div>
  </Condition>
);
