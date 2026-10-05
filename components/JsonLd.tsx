import {
    ABOUT_ME,
    EDUCATION,
    GENERAL_INFO,
    LANGUAGES,
    MY_EXPERIENCE,
    MY_STACK,
    PROJECTS,
    SITE_URL,
} from '@/lib/data';

const allSkills = Object.values(MY_STACK).flat().map((item) => item.name);

const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: GENERAL_INFO.name,
    alternateName: 'Gopika JD',
    jobTitle: GENERAL_INFO.role,
    description: ABOUT_ME,
    url: SITE_URL,
    email: `mailto:${GENERAL_INFO.email}`,
    telephone: GENERAL_INFO.phone,
    image: `${SITE_URL}/opengraph-image`,
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Thiruvananthapuram',
        addressRegion: 'Kerala',
        addressCountry: 'IN',
    },
    sameAs: [GENERAL_INFO.github, GENERAL_INFO.linkedin],
    knowsAbout: allSkills,
    knowsLanguage: LANGUAGES.map((name) => ({
        '@type': 'Language',
        name,
    })),
    worksFor: MY_EXPERIENCE.map((experience) => ({
        '@type': 'Organization',
        name: experience.company,
    })),
    alumniOf: EDUCATION.filter((item) => !item.institution.includes('Pursuing')).map(
        (item) => ({
            '@type': 'EducationalOrganization',
            name: item.title,
        }),
    ),
    hasCreated: PROJECTS.map((project) => ({
        '@type': 'CreativeWork',
        name: project.title,
        url: `${SITE_URL}/projects/${project.slug}`,
        keywords: project.techStack.join(', '),
    })),
};

const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: `${GENERAL_INFO.name} — ${GENERAL_INFO.role}`,
    description: ABOUT_ME,
    inLanguage: 'en-IN',
    publisher: { '@id': `${SITE_URL}/#person` },
};

const JsonLd = () => {
    const schema = [personSchema, websiteSchema];

    return (
        <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default JsonLd;
