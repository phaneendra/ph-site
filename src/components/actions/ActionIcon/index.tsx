import React from 'react';
import { styles } from '@/styles/default';
import { twMerge } from 'tailwind-merge';

export type ActionIconProps = React.HTMLAttributes<HTMLDivElement>;

export const ActionIcon = (props: ActionIconProps) => {
  const { children, className } = props;
  const classes = twMerge(styles.container.base, className);

  return <div className={classes}>{children}</div>;
};
