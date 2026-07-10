import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Layout from "@/components/layout/Layout";
import { getProjectBySlug, projectsData } from "@/lib/projects";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Dian Tanjung",
    };
  }

  return {
    title: `${project.title} | Dian Tanjung`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const otherProjects = projectsData.filter(
    (projectItem) => projectItem.slug !== project.slug
  );

  return (
    <Layout>
      <article className="w-full bg-white">
        <header className="bg-lightBgGrey py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <p className="text-softOrange font-semibold mb-4">
              Project Detail
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-darkText font-manrope leading-tight mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-gray-700 leading-9 mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white text-gray-700 text-sm font-semibold rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <figure className="mb-12">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-lightBgGrey">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                priority
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-sm text-gray-500">
              A closer look at the visual direction and interface structure for{" "}
              {project.title}.
            </figcaption>
          </figure>

          <div className="space-y-8 text-xl leading-9 text-gray-800">
            {project.overview.map((paragraph, index) => (
              <div key={paragraph}>
                <p>{paragraph}</p>

                {(index === 1 || index === 4) && (
                  <figure className="my-12">
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-lightBgGrey">
                      <Image
                        src={project.gallery[index === 1 ? 0 : 1]}
                        alt={`${project.title} article image`}
                        fill
                        sizes="(min-width: 768px) 768px, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="mt-3 text-base leading-7 text-gray-500">
                      Detail visual that supports the story, flow, and product
                      context of this project.
                    </figcaption>
                  </figure>
                )}
              </div>
            ))}
          </div>

          <footer className="mt-14 border-t border-gray-200 pt-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-5">
              Project Links
            </p>
            <div className="flex flex-wrap gap-4">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex px-8 py-3 font-normal transition-colors duration-300 ease-in-out cursor-pointer rounded-full bg-softOrange text-darkText hover:bg-lightYellow"
                >
                  Demo
                </a>
              )}
              {project.repoLink && (
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex px-8 py-3 font-normal transition-colors duration-300 ease-in-out cursor-pointer rounded-full bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
                >
                  GitHub
                </a>
              )}
            </div>
          </footer>

          <div className="mt-10">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-softOrange hover:text-darkText transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Back to Projects
            </Link>
          </div>
        </div>
      </article>

      <section className="w-full bg-lightBgGrey py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-softOrange font-semibold mb-3">
              More Case Studies
            </p>
            <h2 className="text-3xl sm:text-4xl font-medium text-darkText font-manrope">
              Other Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((projectItem) => (
              <Link
                key={projectItem.slug}
                href={`/projects/${projectItem.slug}`}
                className="group block overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-lightBgGrey">
                  <Image
                    src={projectItem.imageUrl}
                    alt={projectItem.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-darkText font-manrope mb-3">
                    {projectItem.title}
                  </h3>
                  <p className="text-sm leading-6 text-gray-700 mb-5">
                    {projectItem.description}
                  </p>
                  <span className="text-sm font-semibold text-softOrange group-hover:text-darkText transition-colors">
                    Read More
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
