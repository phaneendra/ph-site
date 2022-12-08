import { Link } from '@/components';
import { siteMetadatum } from 'contentlayer/generated';
import SocialIcon from '@/components/social-icons';

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadatum.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadatum.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadatum.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadatum.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadatum.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadatum.twitter} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-base-content">
          <div>{siteMetadatum.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadatum.title}</Link>
        </div>
        <div className="mb-8 text-sm text-base-content">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">Tailwind Nextjs Theme</Link>
        </div>
      </div>
    </footer>
  );
}
