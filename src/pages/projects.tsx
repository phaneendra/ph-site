import { siteMetadatum } from 'contentlayer/generated';
import projectsData from '@/data/projectsData';
import Card from 'src/components/Card';
import { PageSEO } from '@/components/core/SEO';

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadatum.author}`} description={siteMetadatum.description} />
      <div className="divide-y divide-border-color">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-base-heading sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-base-content">Showcase your projects with a hero image (16 x 9)</p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card key={d.title} title={d.title} description={d.description} imgSrc={d.imgSrc} href={d.href} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
