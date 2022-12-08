import React, { forwardRef } from 'react';
import { styles } from '@/styles/default';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: ButtonVariant;
};

const variants = {
  primary: styles.button.primary,
  secondary: styles.button.secondary,
  accent: styles.button.accent,
  info: styles.button.info,
  success: styles.button.success,
  warning: styles.button.warning,
  error: styles.button.error,
  important: styles.button.important,
  tip: styles.button.tip,
  question: styles.button.question,
  quote: styles.button.quote,
  comment: styles.button.comment,
  docs: styles.button.docs,
  ghost: styles.button.ghost,
  link: styles.button.link,
  glass: 'glass',
};

export type ButtonVariant = keyof typeof variants;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { variant, children, href, className, ...rest } = props;
  const classes = twMerge(
    clsx(styles.button.base, !variant && styles.button.default, variant && variants[variant], className && className)
  );

  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  } else {
    return (
      <button {...rest} ref={ref} className={classes}>
        {children}
      </button>
    );
  }
});

Button.displayName = 'Button';
