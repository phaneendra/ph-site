import { siteMetadatum } from "contentlayer/generated";
import {
  Container,
  Header,
  Drawer,
  Burger,
  MobileNav,
  Footer,
} from "@/components";
import React, { useState } from "react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const AppShell = (props: Props) => {
  const { children, ...rest } = props;
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const ToggleBurger = <Burger onClick={toggleVisible} />;
  const DrawerSide = <MobileNav data={siteMetadatum} />;

  return (
    <Container>
      <div className="flex h-screen flex-col justify-between"></div>

      <Drawer
        {...rest}
        side={DrawerSide}
        open={visible}
        onClickOverlay={toggleVisible}
      >
        <Header data={siteMetadatum} burger={ToggleBurger} />
        <main className="mb-auto">{children}</main>
        <Footer data={siteMetadatum} />
      </Drawer>
    </Container>
  );
};
