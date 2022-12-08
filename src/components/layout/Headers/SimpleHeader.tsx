// Main Header component

import React from 'react';
import { styles } from '@/styles/default';
import { twMerge } from 'tailwind-merge';
import type { SiteMetadata } from 'contentlayer/generated';
import { Link, Navbar, ThemeSwitch } from '@/components';
import Logo from '@/data/assets/logo.svg';
import MobileNav from './MobileNav';

export type HeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  data: SiteMetadata;
};

export const Header = (props: HeaderProps) => {
  const { data, className } = props;
  const headerClasses = twMerge(styles.header.base, styles.header.full, className);
  const headerTitleClasses = twMerge(styles.typography.title, styles.hidden);

  return (
    <header className={headerClasses}>
      <div>
        <Link href="/" aria-label={data.headerTitle}>
          <div className={styles.header.base}>
            <div className="mr-3">
              <Logo height={32} width={32} className="fill-base-heading" />
            </div>
            {typeof data.headerTitle === 'string' ? (
              <div className={headerTitleClasses}>{data.headerTitle}</div>
            ) : (
              data.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className={styles.header.base}>
        <div className={styles.hidden}>
          <Navbar data={data} />
        </div>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  );
};
