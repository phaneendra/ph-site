import React from "react";
import { Swap } from "@/components";
import Hamburger from "@/assets/hamburger.svg";
import Close from "@/assets/close.svg";

export type BurgerProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  onClick?: () => void;
};

export const Burger = (props: BurgerProps) => {
  const { className, onClick, ...rest } = props;

  return (
    <Swap
      {...rest}
      onClick={onClick}
      className={className}
      onElement={Hamburger}
      offElement={Close}
    />
  );
};

Burger.displayName = "Burger";
