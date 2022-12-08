/* eslint-disable jsx-a11y/anchor-has-content */
import NextLink from "next/link";
import React from "react";
import { styles } from "@/styles/default";
import { twMerge } from "tailwind-merge";

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = (props: React.PropsWithoutRef<LinkProps>) => {
  const { href, children, className, ...rest } = props;
  const isInternalLink = href && href.startsWith("/");
  const isAnchorLink = href && href.startsWith("#");

  const classes = twMerge(styles.link.external, className);

  if (isInternalLink) {
    return (
      <NextLink href={href} className={className} {...rest}>
        {children}
      </NextLink>
    );
  }

  if (isAnchorLink || typeof children !== "string") {
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <a
      className={classes}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
    >
      {children}
    </a>
  );
};

Link.displayName = "Link";
