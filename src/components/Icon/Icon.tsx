import classNames from 'classnames';
import { useBoolean } from 'infra/hooks/useBoolean';
import { isUndefined } from 'lodash';
import React, { FC, ReactNode } from 'react';
import './index.css';

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: JSX.Element;
  icon?: ReactNode;
  size?: number;
  width?: number;
  height?: number;
  active?: boolean;
}
export const Icon: FC<IconProps> = ({ size = 20, icon, width, height, children, active, ...props }) => {
  const [isHover, toggleActive] = useBoolean();
  return (
    <div
      {...props}
      style={{
        ...props.style,
        width: width || size,
        height: height || size,
      }}
      className={classNames(props.className, 'react-qq-music-icon', {
        ['react-qq-music-icon-active']: isHover || active,
        ['react-qq-music-icon-cursor']: !isUndefined(props.onClick),
      })}
      onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
        toggleActive(true);
        props.onMouseEnter?.(event);
      }}
      onMouseLeave={(event: React.MouseEvent<HTMLDivElement>) => {
        toggleActive(false);
        props.onMouseLeave?.(event);
      }}
    >
      {icon ?? children}
    </div>
  );
};
