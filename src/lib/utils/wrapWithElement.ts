import React from "react";
import { twMerge } from "tailwind-merge";
import * as ReactIs from "react-is";

// If an invalid element or fragment is passed in as the node, wrap it with the wrapper and add props
// If a valid element is passed, add the props
export const wrapWithElementIfInvalid = ({
  node,
  wrapper,
  props = {},
}: {
  node: React.ReactNode;
  wrapper: React.ReactElement;
  props?: any;
}) => {
  if (!node) {
    return React.cloneElement(wrapper, props);
  } else if (!React.isValidElement(node)) {
    return React.cloneElement(wrapper, props, node);
  } else if (ReactIs.typeOf(node) === ReactIs.Fragment) {
    return React.cloneElement(
      wrapper,
      { ...props, className: twMerge(node.props?.className, props?.className) },
      node.props.children
    );
  } else {
    return React.cloneElement(node, {
      ...props,
      className: twMerge(node.props?.className, props?.className),
    });
  }
};
