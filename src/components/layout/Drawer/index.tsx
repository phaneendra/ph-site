import type { ReactNode } from "react";
import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export type DrawerProps = React.HTMLAttributes<HTMLDivElement> & {
  side: ReactNode;
  open?: boolean;
  mobile?: boolean;
  end?: boolean;
  toggleClassName?: string;
  contentClassName?: string;
  sideClassName?: string;
  overlayClassName?: string;
  onClickOverlay?: () => void;
};

export const Drawer = (props: DrawerProps) => {
  const {
    children,
    side,
    open,
    mobile,
    end,
    className,
    toggleClassName,
    contentClassName,
    sideClassName,
    overlayClassName,
    onClickOverlay,
    ...rest
  } = props;

  const classes = twMerge(
    "grid overflow-hidden w-full",
    className,
    clsx({
      "drawer-mobile": mobile,
      "drawer-end": end,
    })
  );

  const drawerToggleClass = clsx(
    "absolute h-0 w-0 appearance-none opacity-0",
    toggleClassName
  );
  const drawerContentClass = clsx(
    "z-0 col-start-1 row-start-1 overflow-y-auto",
    contentClassName
  );
  const drawerSideClass = clsx(
    "col-start-1 row-start-1 grid max-h-screen overflow-x-hidden",
    sideClassName
  );
  const drawerOverlayClass = clsx(
    "invisible col-start-1 row-start-1 opacity-0",
    overlayClassName
  );

  return (
    <div aria-expanded={open} {...rest} className={classes}>
      <input
        type="checkbox"
        className={drawerToggleClass}
        checked={open}
        readOnly
      />
      <div className={drawerContentClass}>{children}</div>
      <div className={drawerSideClass}>
        <label className={drawerOverlayClass} onClick={onClickOverlay}></label>
        {side}
      </div>
    </div>
  );
};

Drawer.displayName = "Drawer";
