import { siteMetadatum } from "contentlayer/generated";
import Logo from "@/data/assets/logo.svg";
import { Link } from "@/components";
import SectionContainer from "./SectionContainer";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import ThemeSwitch from "./ThemeSwitch";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadatum.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo height={32} width={32} className="fill-base-heading" />
                </div>
                {typeof siteMetadatum.headerTitle === "string" ? (
                  <div className="hidden h-6 text-2xl font-semibold text-base-heading sm:block ">
                    {siteMetadatum.headerTitle}
                  </div>
                ) : (
                  siteMetadatum.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-between text-base leading-5 ">
            <div className="hidden sm:block">
              {siteMetadatum.headerNavLinks?.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="link-underline p-1 font-medium text-base-heading sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;
