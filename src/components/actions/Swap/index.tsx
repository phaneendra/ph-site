import type { ReactNode } from "react";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

import { wrapWithElementIfInvalid } from "@/lib/utils/wrapWithElement";

const styles = {
  "swap-transform": {
    transitionProperty: "transform, opacity",
  },
  "swap-flip-on": {
    transform: "rotateY(180deg)",
    backfaceVisibility: "hidden",
  },
  "swap-flip-off": {
    transform: "rotateY(-180deg)",
    backfaceVisibility: "hidden",
  },
  "swap-flip": {
    transform: "rotateY(0deg)",
  },
};

export type SwapProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  onElement: ReactNode | ReactNode[];
  offElement: ReactNode | ReactNode[];
  active?: boolean;
  rotate?: boolean;
  flip?: boolean;
  disabled?: boolean;
  onSwap?: () => void;
};

export const Swap = React.forwardRef<HTMLLabelElement, SwapProps>(
  (props, ref): JSX.Element => {
    const {
      onElement,
      offElement,
      active = true,
      rotate = false,
      flip,
      disabled,
      onSwap,
      className,
      ...rest
    } = props;

    const [isSwapped, setIsSwapped] = useState(active);
    const handleSwapClick = () => {
      if (!disabled) {
        setIsSwapped(!isSwapped);

        onSwap && onSwap();
      }
    };

    let rotateClass = "rotate-0";
    if (rotate) {
      isSwapped ? (rotateClass = `-rotate-45`) : (rotateClass = `rotate-45`);
    }
    let flipClass = {};
    if (flip) {
      isSwapped
        ? (flipClass = { ...styles["swap-flip-on"] })
        : (flipClass = { ...styles["swap-flip-off"] });
    }

    const classes = twMerge(
      "relative inline-grid select-none place-content-center cursor-pointer",
      className
    );

    // These next two pieces allow classname to be added to valid elements, or wrap invalid elements with a div and the classname
    const onEl = wrapWithElementIfInvalid({
      node: onElement,
      wrapper: <div></div>,
      props: {
        className: twMerge(
          "col-start-1 row-start-1 transition-transform duration-300 ease-in-out",
          isSwapped ? "opacity-100" : "opacity-0",
          isSwapped && rotate ? "rotate-0" : `${rotateClass}`
        ),
        style: {
          ...styles["swap-transform"],
          ...(isSwapped && flip ? flipClass : {}),
        },
      },
    });

    const offEl = wrapWithElementIfInvalid({
      node: offElement,
      wrapper: <div></div>,
      props: {
        className: twMerge(
          "col-start-1 row-start-1 transition-transform duration-300 ease-in-out",
          isSwapped ? "opacity-0" : "opacity-100",
          isSwapped && rotate ? `${rotateClass}` : "rotate-0"
        ),
        style: {
          ...styles["swap-transform"],
          ...(isSwapped && flip ? {} : flipClass),
        },
      },
    });

    return (
      <label {...rest} className={classes} onClick={handleSwapClick} ref={ref}>
        {onEl}
        {offEl}
      </label>
    );
  }
);

Swap.displayName = "Swap";
