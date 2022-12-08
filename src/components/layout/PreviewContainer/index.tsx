// Preview container for component showcases

import React from 'react';
import { styles } from '@/styles/default';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export type PreviewContainerProps = React.HTMLAttributes<HTMLDivElement>;

export const PreviewContainer = (props: PreviewContainerProps) => {
  const { children, className } = props;
  const classes = twMerge(styles.container.preview, className);

  return <div className={clsx(classes, 'bg-[length:5px_5px]')}>{children}</div>;
};
