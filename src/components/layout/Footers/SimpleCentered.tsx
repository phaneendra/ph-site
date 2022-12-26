import { Link } from "@/components";
import type { SiteMetadata } from "contentlayer/generated";
import SocialIcon from "@/components/social-icons";

export type FooterProps = React.HTMLAttributes<HTMLDivElement> & {
  data: SiteMetadata;
};

export const Header = (props: FooterProps) => {
  const { data, className } = props;

  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${data.email}`} size={6} />
          <SocialIcon kind="github" href={data.github} size={6} />
          <SocialIcon kind="facebook" href={data.facebook} size={6} />
          <SocialIcon kind="youtube" href={data.youtube} size={6} />
          <SocialIcon kind="linkedin" href={data.linkedin} size={6} />
          <SocialIcon kind="twitter" href={data.twitter} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-base-content">
          <div>{data.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{data.title}</Link>
        </div>
        <div className="mb-8 text-sm text-base-content">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
        </div>
      </div>
    </footer>
  );
};
