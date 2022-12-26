// Navbar for main navigation

import React from 'react';
import { styles } from '@/styles/default';
import { twMerge } from 'tailwind-merge';
import type { SiteMetadata } from 'contentlayer/generated';
import { Link } from '@/components';

export type NavBarProps = React.HTMLAttributes<HTMLDivElement> & {
  data: SiteMetadata;
};

export const Navbar = (props: NavBarProps) => {
  const { data, className } = props;
  const classes = twMerge(styles.link.underline, className);

  return (
    <>
      {data.headerNavLinks?.map((link) => (
        <Link key={link.title} href={link.href} className={classes}>
          {link.title}
        </Link>
      ))}
    </>
  );
};
