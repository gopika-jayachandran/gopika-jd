import { IEducation, IExperience, IProject, IStackItem } from '@/types';

export const SITE_URL = (
    process.env.NEXT_PUBLIC_SITE_URL || 'https://gopikajd.vercel.app'
).replace(/\/$/, '');

export const GENERAL_INFO = {
    name: 'Gopika J D',

    title: 'Software Developer (Frontend / Full-Stack)',

    tagline: 'HTML, CSS, JavaScript, React, Next.js, Angular',

    email: 'gopikajayachandran001@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Gopika, I am reaching out to you because...',

    phone: '9539836040',

    location: 'Thiruvananthapuram, Kerala, India',

    country: 'India',

    github: 'https://github.com/gopika-jayachandran',

    linkedin: 'https://www.linkedin.com/in/gopika-jd',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: GENERAL_INFO.github },
    { name: 'linkedin', url: GENERAL_INFO.linkedin },
    { name: 'email', url: `mailto:${GENERAL_INFO.email}` },
];

export const PROFESSIONAL_SUMMARY =
    'Frontend-focused Software Developer with 3+ years of experience building responsive, high-performance web applications with HTML5, CSS3, JavaScript (ES6+) and TypeScript, using React, Next.js and Angular. Skilled in UI/UX design with Figma, REST API integration and server-side rendering for SEO and fast load times. Works closely with backend teams (Laravel, CodeIgniter, Python) to deliver end-to-end products with a focus on usability, performance and clean code.';

export const KEYWORDS = [
    'Gopika J D',
    'Gopika JD',
    'Frontend Developer',
    'Frontend Developer Kerala',
    'Frontend Developer Thiruvananthapuram',
    'React Developer',
    'Next.js Developer',
    'Angular Developer',
    'TypeScript Developer',
    'HTML CSS JavaScript Developer',
    'UI UX Designer Figma',
    'Frontend Developer India',
];

export const MY_STACK: Record<string, IStackItem[]> = {
    'core web': [
        { name: 'HTML5', icon: '/logo/html5.svg' },
        { name: 'CSS3', icon: '/logo/css3.svg' },
        { name: 'JavaScript (ES6+)', icon: '/logo/js.png' },
        { name: 'TypeScript', icon: '/logo/ts.png' },
        { name: 'Responsive Design' },
    ],
    frameworks: [
        { name: 'React', icon: '/logo/react.png' },
        { name: 'Next.js', icon: '/logo/next.png' },
        { name: 'Angular', icon: '/logo/angular.svg' },
        { name: 'jQuery', icon: '/logo/jquery.svg' },
    ],
    'css frameworks': [
        { name: 'Bootstrap', icon: '/logo/bootstrap.svg' },
        { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
    ],
    'ui/ux & design': [
        { name: 'Figma', icon: '/logo/figma.svg' },
        { name: 'Wireframing' },
        { name: 'Prototyping' },
        { name: 'Dashboard UI' },
    ],
    'performance & seo': [
        { name: 'Server-Side Rendering' },
        { name: 'Page Load Optimization' },
    ],
    'api integration': [
        { name: 'REST APIs' },
        { name: 'AJAX' },
        { name: 'Authentication Flows' },
    ],
    backend: [
        { name: 'Laravel', icon: '/logo/laravel.svg' },
        { name: 'CodeIgniter', icon: '/logo/codeigniter.svg' },
        { name: 'PHP', icon: '/logo/php.svg' },
        { name: 'Python', icon: '/logo/python.svg' },
        { name: 'MySQL', icon: '/logo/mysql.svg' },
    ],
    tools: [
        { name: 'Git', icon: '/logo/git.png' },
        { name: 'GitHub', icon: '/logo/github.svg' },
        { name: 'Postman', icon: '/logo/postman.svg' },
        { name: 'VS Code', icon: '/logo/visualstudiocode.svg' },
        { name: 'Chrome DevTools' },
        { name: 'Codex' },
        { name: 'Antigravity' },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Pharmacy Management System',
        slug: 'pharmacy-management-system',
        year: 2025,
        techStack: ['Angular', 'TypeScript', 'HTML', 'Laravel'],
        thumbnail: '/projects/thumbnail/pharmacy.svg',
        longThumbnail: '/projects/long/pharmacy.svg',
        images: [
            '/projects/images/pharmacy-1.svg',
            '/projects/images/pharmacy-2.svg',
        ],
        description: `A pharmacy management system covering the day-to-day operations of a
        pharmacy, from prescription handling and stock control to billing and
        reporting. <br/> <br/>

        Key Features:<br/>
        <ul>
          <li>Responsive Angular interface that works across desktop, tablet and mobile</li>
          <li>Automated workflows that replace repetitive daily manual entry</li>
          <li>Prescription records and searchable customer history</li>
          <li>Stock, batch and billing management backed by Laravel</li>
        </ul>`,
        role: `Frontend / Full-Stack Developer <br/>
        <ul>
          <li>Developed the responsive Angular UI using TypeScript, HTML and reusable components</li>
          <li>Automated the manual workflows, reducing manual work by 60%</li>
          <li>Integrated the frontend with the Laravel backend and REST APIs</li>
        </ul>`,
    },
    {
        title: 'Logistics Management System',
        slug: 'logistics-management-system',
        year: 2024,
        techStack: ['Next.js', 'React', 'Laravel', 'Python'],
        thumbnail: '/projects/thumbnail/logistics.svg',
        longThumbnail: '/projects/long/logistics.svg',
        images: [
            '/projects/images/logistics-1.svg',
            '/projects/images/logistics-2.svg',
        ],
        description: `A logistics management system for tracking shipments, fleet movement and
        delivery performance. <br/> <br/>

        Key Features:<br/>
        <ul>
          <li>Interactive dashboard UI summarising shipments, routes and fleet movement</li>
          <li>Operational analytics improving efficiency by 25%</li>
          <li>Server-side rendered Next.js frontend for fast load on low bandwidth</li>
          <li>Laravel backend with Python services for reporting</li>
        </ul>`,
        role: `Frontend / Full-Stack Developer <br/>
        <ul>
          <li>Created the interactive dashboard UI with Next.js and React</li>
          <li>Improved operational efficiency by 25% through the analytics screens</li>
          <li>Worked with Laravel and Python services to deliver the reporting data</li>
        </ul>`,
    },
    {
        title: 'Textile Management System',
        slug: 'textile-management-system',
        year: 2023,
        techStack: ['Next.js', 'Laravel'],
        thumbnail: '/projects/thumbnail/textile.svg',
        longThumbnail: '/projects/long/textile.svg',
        images: [
            '/projects/images/textile-1.svg',
            '/projects/images/textile-2.svg',
        ],
        description: `A textile management system for material procurement, order tracking and
        production planning. <br/> <br/>

        Key Features:<br/>
        <ul>
          <li>Next.js frontend with server-side rendering for fast load times</li>
          <li>Search across large material and order records</li>
          <li>Forecasting tools used for strategic decision-making</li>
          <li>Laravel backend for procurement and order data</li>
        </ul>`,
        role: `Frontend Developer <br/>
        <ul>
          <li>Built the Next.js frontend and connected it to the Laravel backend</li>
          <li>Implemented the search and forecasting tools used for strategic decision-making</li>
          <li>Kept the interface responsive and lightweight across devices</li>
        </ul>`,
    },
];

export const MY_EXPERIENCE: IExperience[] = [
    {
        title: 'Software Developer (Frontend / Full-Stack)',
        company: 'Wikta IT Services Pvt Ltd',
        duration: 'Sept 2022 - Nov 2025',
        highlights: [
            'Built responsive, user-focused interfaces with HTML5, CSS3, JavaScript and TypeScript on React, Next.js and Angular, improving usability and client satisfaction.',
            'Implemented Next.js server-side rendering (SSR) to improve SEO and page load performance.',
            'Designed wireframes and prototypes in Figma and turned them into responsive UIs.',
            'Integrated secure REST APIs and authentication systems with frontend applications using AJAX.',
            'Developed interactive dashboards for logistics and business operations.',
            'Cut bug resolution time by 40% through systematic debugging and profiling.',
            'Improved query speed by 35% with Laravel Eloquent ORM optimization while working across the full stack.',
            'Collaborated with backend developers, designers and clients to deliver features on schedule.',
        ],
    },
];

export const EDUCATION: IEducation[] = [
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
