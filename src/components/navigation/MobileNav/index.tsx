import React from "react";
import { styles } from "@/styles/default";
import { twMerge } from "tailwind-merge";
import type { SiteMetadata } from "contentlayer/generated";
import { Link } from "@/components";

export type MobileNavProps = React.HTMLAttributes<HTMLDivElement> & {
  data: SiteMetadata;
};

export const MobileNav = (props: MobileNavProps) => {
  const { data, className, ...rest } = props;
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
