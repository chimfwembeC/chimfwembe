export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    githubUrl: string;
    liveUrl: string;
}

export const projectData: Project[] = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A feature-rich e-commerce platform with user authentication, payment integration, and an intuitive admin panel.',
        image: '/assets/imgs/ecommerce_system.png',
        tags: ['React', 'Laravel', 'Mysql', 'PHP'],
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
    },
    {
        id: 2,
        title: 'Cyber Security System',
        description: 'A security-focused application designed to monitor and prevent cyber threats in real-time.',
        image: '/assets/imgs/cyber_security_system.png',
        tags: ['Python', 'Fastapi', 'Machine Learning', 'Cyber Security', 'React'],
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
    },
    {
        id: 3,
        title: 'ERP System',
        description: 'An enterprise resource planning system that streamlines business operations, including HR, finance, and inventory management.',
        image: '/assets/imgs/erp_system.png',
        tags: ['Laravel', 'React', 'Mysql', 'PHP'],
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
    },
    {
        id: 4,
        title: 'Music Streaming Platform',
        description: 'A sleek and responsive music streaming platform with personalized playlists and real-time audio processing.',
        image: '/assets/imgs/music_system.png',
        tags: ['React', 'Laravel', 'Mysql', 'PHP'],
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
    },
    {
        id: 5,
        title: 'Weather App',
        description: 'A dynamic weather application providing real-time weather updates, forecasts, and interactive UI elements.',
        image: 'assets/imgs/wheather_app_system.png',
        tags: ['React', 'OpenWeather API', 'TailwindCSS'],
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
    },
    {
        id: 6,
        title: 'Animated Landing Page',
        description: 'A beautifully animated landing page designed for modern businesses, featuring smooth animations and an elegant UI.',
        image: '/assets/imgs/animated_landing_page.png',
        tags: ['React', 'TailwindCSS', 'Framer motion'],
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
    }
];
