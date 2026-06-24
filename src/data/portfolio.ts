import { Project, Experience, SkillGroup } from '../types';

export const personalInfo = {
  name: 'Achmal Maulana',
  role: 'Developer • Student Leader • Problem Solver',
  tagline: 'Building digital solutions, leading communities, and creating meaningful impact.',
  about: 'I am a Software Engineering student passionate about full-stack web development, community leadership, and event organization. I strive to combine technical skills with leadership to create software that solves real-world problems and brings communities together.',
  email: 'achmalmaulana@gmail.com', // Placeholder if not provided, or can configure to direct mail
};

export const socialLinks = {
  github: 'https://github.com/GomalRajaGula',
  linkedin: 'https://www.linkedin.com/in/achmal-maulana-3a024235b/',
  instagram: 'https://instagram.com/mal.dubeonjjae',
};

export const projects: Project[] = [
  {
    id: 'siperuka',
    title: 'SIPERUKA',
    description: 'Campus administration was slowed down by manual paperwork. I engineered a centralized letter and permit management system that digitizes the entire approval pipeline, eliminating physical bottlenecks and drastically reducing processing time for students and staff.',
    tech: ['Next.js', 'Tailwind CSS', 'MySQL'],
    metrics: [
      { label: 'Active Users', value: '1.2k+' },
      { label: 'Efficiency', value: '+45%' }
    ],
    github: 'https://github.com/GomalRajaGula/SIPERUKA-PNC', // Extracted from active workspaces
    image: '/projects/siperuka.png',
  },
  {
    id: 'jkb-fest',
    title: 'JKB Fest Management',
    description: 'Managing a festival with over 5,000 attendees requires flawless logistics. I developed a unified platform to coordinate tenant registrations, dynamic booth allocations, and real-time vendor communication, ensuring zero double-bookings and a seamless operational flow.',
    tech: ['Laravel', 'Bootstrap', 'MySQL'],
    metrics: [
      { label: 'Tenants', value: '50+' },
      { label: 'Attendees', value: '5k+' }
    ],
    image: '/projects/jkbfest.png',
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description: 'More than just a resume, this portfolio is a fully custom-built interactive experience designed to reflect my identity as a developer and community leader, prioritizing premium aesthetics and modular architecture.',
    tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    metrics: [
      { label: 'Lighthouse', value: '100' },
      { label: 'Performance', value: '< 1s' }
    ],
    github: 'https://github.com/GomalRajaGula/Portfolio_Achmal_Maulana',
    image: '/projects/portfolio.png',
  },
];

export const experiences: Experience[] = [
  {
    id: 'shopeefood',
    role: 'ShopeeFood Driver',
    company: 'Shopee',
    period: '2023 - Present',
    description: [
      'Managed delivery logistics and optimized routes under time pressure.',
      'Developed strong time management, customer service, and problem-solving skills in high-tempo environments.',
    ],
    achievements: [
      'Maintained a 4.9/5.0 customer satisfaction rating across 500+ deliveries.',
      'Optimized route sequencing resulting in 20% faster delivery times.',
    ],
    gallery: [
      '/projects/placeholder.png',
      '/projects/placeholder.png'
    ]
  },
  {
    id: 'hmtrpl',
    role: 'HMTRPL Staff (Himpunan Mahasiswa Teknologi Rekayasa Perangkat Lunak)',
    company: 'Politeknik Negeri Cilacap',
    period: '2025 - Present',
    description: [
      'Active student organization member managing community activities and student welfare.',
      'Coordinated technical events, workshops, and peer-mentoring sessions for Software Engineering students.',
    ],
    achievements: [
      'Led the organizing committee for the annual tech bootcamp reaching 150+ students.',
      'Established a peer-mentoring network that improved freshman retention by 15%.',
    ],
    gallery: [
      '/projects/placeholder.png',
      '/projects/placeholder.png'
    ]
  },
  {
    id: 'jkbfest-committee',
    role: 'Event Organizer / Committee',
    company: 'JKB Fest',
    period: '2025',
    description: [
      'Planned and executed festival operations, tenant management, and attendee flow logistics.',
      'Collaborated in a multidisciplinary team to ensure security, branding, and stage scheduling.',
    ],
    achievements: [
      'Successfully coordinated 50+ vendors and managed a crowd of over 5,000 attendees.',
      'Implemented a digital booth allocation system reducing layout conflicts by 100%.',
    ],
    gallery: [
      '/projects/placeholder.png',
      '/projects/placeholder.png'
    ]
  },
];

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    items: ['Next.js', 'React', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Laravel'],
  },
  {
    category: 'Database',
    items: ['MySQL', 'PostgreSQL'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Figma', 'Railway', 'Vercel'],
  },
];


