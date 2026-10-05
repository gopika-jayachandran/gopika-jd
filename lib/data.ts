import { IProject } from '@/types';

export const SITE_URL = (
    process.env.NEXT_PUBLIC_SITE_URL || 'https://gopikajd.vercel.app'
).replace(/\/$/, '');

export const GENERAL_INFO = {
    name: 'Gopika J D',

    email: 'gopikajayachandran001@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Gopika, I am reaching out to you because...',

    phone: '+91 9539836040',

    location: 'Thiruvananthapuram, Kerala, India',

    role: 'Frontend Developer',

    github: 'https://github.com/gopika-jayachandran',

    linkedin: 'https://www.linkedin.com/in/gopika-jd',

    resume: '/Gopika_JD_Frontend_Resume.pdf',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: GENERAL_INFO.github },
    { name: 'linkedin', url: GENERAL_INFO.linkedin },
    { name: 'email', url: `mailto:${GENERAL_INFO.email}` },
];

export const ABOUT_ME =
    'Frontend-focused Software Developer with 3+ years of experience building responsive, high-performance web applications with HTML5, CSS3, JavaScript (ES6+) and TypeScript, using React, Next.js and Angular. Skilled in UI/UX design with Figma, REST API integration and server-side rendering for SEO and fast load times.';

export const KEYWORDS = [
    'Gopika J D',
    'Frontend Developer',
    'Frontend Developer Kerala',
    'Frontend Developer Thiruvananthapuram',
    'React Developer',
    'Next.js Developer',
    'Angular Developer',
    'TypeScript Developer',
    'HTML CSS JavaScript',
    'UI UX Designer Figma',
    'Frontend Developer India',
];

export const MY_STACK = {
    core: [
        {
            name: 'HTML5',
            icon: '/logo/html5.svg',
        },
        {
            name: 'CSS3',
            icon: '/logo/css3.svg',
        },
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
    ],
    frameworks: [
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Angular',
            icon: '/logo/angular.svg',
        },
        {
            name: 'jQuery',
            icon: '/logo/jquery.svg',
        },
    ],
    styling: [
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'PHP',
            icon: '/logo/php.svg',
        },
        {
            name: 'Laravel',
            icon: '/logo/laravel.svg',
        },
        {
            name: 'CodeIgniter',
            icon: '/logo/codeigniter.svg',
        },
        {
            name: 'Python',
            icon: '/logo/python.svg',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
    ],
    tools: [
        {
            name: 'Figma',
            icon: '/logo/figma.svg',
        },
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Pharmacy Management System',
        slug: 'pharmacy-management-system',
        year: 2025,
        techStack: [
            'Angular',
            'TypeScript',
            'HTML',
            'CSS',
            'Laravel',
            'REST APIs',
        ],
        thumbnail: '/projects/thumbnail/pharmacy.svg',
        longThumbnail: '/projects/long/pharmacy.svg',
        images: [
            '/projects/images/pharmacy-1.svg',
            '/projects/images/pharmacy-2.svg',
        ],
        description: `A web application built to run day-to-day operations of a pharmacy, from
        stock and prescription handling to billing and reporting. <br/> <br/>

        Key Features:<br/>
        <ul>
          <li>Responsive Angular interface shared across desktop and mobile devices</li>
          <li>Automated daily workflows that replace repetitive manual entry</li>
          <li>Stock, batch and expiry tracking with low-stock alerts</li>
          <li>Prescription upload and searchable customer history</li>
          <li>Billing and sales reporting backed by Laravel and MySQL</li>
        </ul>`,
        role: `Frontend & Full-Stack Developer <br/>
        <ul>
          <li>Built the complete Angular UI using TypeScript with reusable, typed components</li>
          <li>Automated the manual billing and stock-update workflows, cutting daily manual work by 60%</li>
          <li>Integrated the Laravel REST API with typed services and form validation</li>
          <li>Designed the responsive layouts and worked with the client on feature priorities</li>
        </ul>`,
    },
    {
        title: 'Logistics Management System',
        slug: 'logistics-management-system',
        year: 2024,
        techStack: [
            'Next.js',
            'React',
            'TypeScript',
            'Laravel',
            'Python',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/logistics.svg',
        longThumbnail: '/projects/long/logistics.svg',
        images: [
            '/projects/images/logistics-1.svg',
            '/projects/images/logistics-2.svg',
        ],
        description: `An internal operations platform that tracks shipments, fleet movement and delivery
        performance for a logistics business. <br/> <br/>

        Key Features:<br/>
        <ul>
          <li>Interactive dashboard summarising shipments, routes and fleet utilisation</li>
          <li>Server-side rendering with Next.js for fast, SEO-friendly screens</li>
          <li>Shipment tracking with status timelines and exception flags</li>
          <li>Analytics layer built with Python for operational reporting</li>
          <li>Role-based access for operations staff, drivers and management</li>
        </ul>`,
        role: `Frontend & Full-Stack Developer <br/>
        <ul>
          <li>Designed and built the dashboard UI in Next.js and React with server-side rendering</li>
          <li>Implemented the analytics views, improving operational efficiency by 25%</li>
          <li>Worked with the Laravel backend team on API contracts and data shaping</li>
          <li>Added the Python reporting scripts that feed the dashboard summaries</li>
        </ul>`,
    },
    {
        title: 'Textile Management System',
        slug: 'textile-management-system',
        year: 2023,
        techStack: [
            'Next.js',
            'React',
            'Laravel',
            'MySQL',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/textile.svg',
        longThumbnail: '/projects/long/textile.svg',
        images: [
            '/projects/images/textile-1.svg',
            '/projects/images/textile-2.svg',
        ],
        description: `A production and inventory management platform for a textile unit, covering
        material procurement, order tracking and forecasting. <br/> <br/>

        Key Features:<br/>
        <ul>
          <li>Next.js frontend with server-side rendering for quick load on slow connections</li>
          <li>Material, batch and order tracking tied to a Laravel and MySQL backend</li>
          <li>Search and filtering across large product and order records</li>
          <li>Demand forecasting screens used for strategic purchasing decisions</li>
          <li>Responsive tables and forms that stay usable on a shop-floor tablet</li>
        </ul>`,
        role: `Frontend Developer <br/>
        <ul>
          <li>Built the entire Next.js frontend and connected it to the Laravel API</li>
          <li>Implemented fast search and filtering across orders and material records</li>
          <li>Created the forecasting screens used for purchasing decisions</li>
          <li>Optimised load times and kept the interface responsive across devices</li>
        </ul>`,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Developer (Frontend / Full-Stack)',
        company: 'Wikta IT Services Pvt Ltd',
        duration: 'Sept 2022 - Nov 2025',
        highlights: [
            'Built responsive, user-focused interfaces with HTML5, CSS3, JavaScript and TypeScript on React, Next.js and Angular.',
            'Implemented Next.js server-side rendering to improve SEO and page load performance.',
            'Designed wireframes and prototypes in Figma and turned them into responsive UIs.',
            'Integrated secure REST APIs and authentication flows with the frontend using AJAX.',
            'Developed interactive dashboards for logistics and business operations.',
            'Cut bug resolution time by 40% through systematic debugging and profiling.',
            'Improved query speed by 35% with Laravel Eloquent ORM optimisation while working across the full stack.',
        ],
    },
];

export const EDUCATION = [
    {
        title: 'Professional Diploma in International Transportation & Logistics Management',
        institution: 'Pursuing',
        duration: 'Expected 2026',
    },
    {
        title: 'Diploma in Computer Hardware Engineering',
        institution: '8.3 CGPA',
        duration: '2022',
    },
    {
        title: 'ITI, Computer Trade',
        institution: '84%',
        duration: '2019',
    },
    {
        title: 'Plus Two',
        institution: '78%',
        duration: '2018',
    },
    {
        title: 'SSLC',
        institution: '87%',
        duration: '2016',
    },
];

export const LANGUAGES = ['English', 'Malayalam'];
