import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Gopika J D — Frontend Developer',
        short_name: 'Gopika J D',
        description:
            'Portfolio of Gopika J D, Frontend Developer working with HTML, CSS, JavaScript, TypeScript, React, Next.js and Angular.',
        start_url: '/',
        display: 'standalone',
        background_color: '#212121',
        theme_color: '#212121',
    };
}
