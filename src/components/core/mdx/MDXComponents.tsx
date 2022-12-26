/* eslint-disable react/display-name */
import React from "react";
import {
  Link,
  Image,
  Button,
  Container,
  PreviewContainer,
  Swap,
} from "@/components";
import TOCInline from "@/components/TOCInline";
import Pre from "@/components/Pre";
import { BlogNewsletterForm } from "@/components/NewsletterForm";
import dynamic from "next/dynamic";

const Wrapper: React.ComponentType<{ layout: string }> = ({
  layout,
  ...rest
}) => {
  // const Layout = require(`../layouts/${layout}`).default;
  const Layout = dynamic(() => import(`../../../layouts/${layout}`));
  return <Layout {...rest} />;
};

export const MDXComponents = {
  Image,
  TOCInline,
  a: Link,
  pre: Pre,
  wrapper: Wrapper,
  BlogNewsletterForm,
  Button,
  Container,
  PreviewContainer,
  Swap,
};
