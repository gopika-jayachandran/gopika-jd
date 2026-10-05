import { createOgImage, OG_SIZE } from '@/components/OgImage';
import { GENERAL_INFO, PROJECTS } from '@/lib/data';

export const alt = 'Project — Gopika J D';
export const size = OG_SIZE;
export const contentType = 'image/png';

export default async function Image({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const project = PROJECTS.find((item) => item.slug === slug);

    if (!project) {
        return createOgImage({ title: 'Project', footer: GENERAL_INFO.name });
    }

    return createOgImage({
        title: project.title,
        subtitle: String(project.year),
        tags: project.techStack.slice(0, 4),
        footer: GENERAL_INFO.name,
    });
}
