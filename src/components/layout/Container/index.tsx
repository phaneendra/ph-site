// Main container of websites
// Container is the most basic layout element, it centers content horizontally and adds horizontal padding from theme.

import React from 'react';
import { styles } from '@/styles/default';
import { twMerge } from 'tailwind-merge';

export type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export const Container = (props: ContainerProps) => {
  const { children, className } = props;
  const classes = twMerge(styles.container.base, className);

  return <div className={classes}>{children}</div>;
};
