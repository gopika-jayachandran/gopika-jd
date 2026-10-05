import { createOgImage, OG_SIZE } from '@/components/OgImage';
import { GENERAL_INFO } from '@/lib/data';

export const alt = `${GENERAL_INFO.name} — ${GENERAL_INFO.title}`;
export const size = OG_SIZE;
export const contentType = 'image/png';

export default function Image() {
    return createOgImage({
        title: GENERAL_INFO.name,
        subtitle: `${GENERAL_INFO.title} — ${GENERAL_INFO.location}`,
        tags: ['React', 'Next.js', 'Angular', 'TypeScript'],
        footer: GENERAL_INFO.email,
    });
}
