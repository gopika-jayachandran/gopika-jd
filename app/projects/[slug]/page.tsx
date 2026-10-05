import { notFound } from 'next/navigation';
import ProjectDetails from './_components/ProjectDetails';
import { GENERAL_INFO, PROJECTS } from '@/lib/data';
import { Metadata } from 'next';

export const generateStaticParams = async () => {
    return PROJECTS.map((project) => ({ slug: project.slug }));
};

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
    const { slug } = await params;
    const project = PROJECTS.find((project) => project.slug === slug);

    if (!project) {
        return { title: 'Project not found' };
    }

    const description = project.description
        .replace(/<br\s*\/?>/gi, ' ')
        .replace(/<[^>]+>/g, '')
        .replace(/\s+/g, ' ')
        .trim();

    const url = `/projects/${project.slug}`;

    return {
        title: `${project.title} (${project.year})`,
        description,
        keywords: [
            project.title,
            ...project.techStack,
            `${GENERAL_INFO.name} project`,
            'frontend project',
        ],
        alternates: {
            canonical: url,
        },
        openGraph: {
            type: 'article',
            url,
            title: `${project.title} — ${GENERAL_INFO.name}`,
            description,
        },
        twitter: {
            card: 'summary_large_image',
            title: `${project.title} — ${GENERAL_INFO.name}`,
            description,
        },
    };
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    const project = PROJECTS.find((project) => project.slug === slug);

    if (!project) {
        return notFound();
    }

    return <ProjectDetails project={project} />;
};

export default Page;
