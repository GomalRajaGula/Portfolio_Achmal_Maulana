import { Project, Experience, SkillGroup, BentoItem } from '../types';

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
    description: 'A comprehensive, web-based letter and permit management system designed to streamline administrative request flows and approvals.',
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
    description: 'An integrated event and tenant management platform that handles registrations, booth allocations, and vendor coordination.',
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
    description: 'A premium, interactive developer portfolio showcasing expertise, project timeline, and leadership highlights.',
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

export const bentoItems: BentoItem[] = [
  {
    id: 'leadership',
    title: 'Leadership',
    description: 'Guiding student developer teams, driving HMTRPL initiatives, and cultivating collaborative spaces.',
    icon: 'Shield',
    size: 'large',
  },
  {
    id: 'events',
    title: 'Event Management',
    description: 'Coordinating high-impact events like JKB Fest with tenant and vendor planning.',
    icon: 'Calendar',
    size: 'medium',
  },
  {
    id: 'public-speaking',
    title: 'Public Speaking',
    description: 'Presenting technical solutions, pitches, and leading organizational workshops.',
    icon: 'MessageSquare',
    size: 'small',
  },
  {
    id: 'entrepreneurship',
    title: 'Entrepreneurship',
    description: 'Adapting to logistics, handling micro-ventures, and managing real-world workflows.',
    icon: 'TrendingUp',
    size: 'small',
  },
  {
    id: 'team-collaboration',
    title: 'Collaboration',
    description: 'Working with developers, designers, and non-technical stakeholders efficiently.',
    icon: 'Users',
    size: 'medium',
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving',
    description: 'Solving programming bugs and managing complex operational hurdles on-the-go.',
    icon: 'Brain',
    size: 'large',
  },
];
