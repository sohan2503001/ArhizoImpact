import { 
  Users, Briefcase, TrendingUp, Link as LinkIcon, BarChart, 
  Network, LineChart, Leaf, ShieldCheck, ClipboardCheck, 
  Target, Building2, Sun, Droplets, Recycle, TreePine, 
  FileText, Handshake, Landmark, Gauge, Route
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Livelihoods', href: '#livelihoods' },
  { name: 'ESG & Net Zero', href: '#net-zero' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
  { name: 'Internship', href: '#internship' },
];

export const EXPERTISE_SERVICES = [
  {
    title: 'SHG & FPO Strengthening',
    description: 'Building capacity and institutional resilience for Self-Help Groups and Farmer Producer Organizations.',
    icon: Users,
  },
  {
    title: 'Enterprise Development',
    description: 'Incubating micro-enterprises and fostering local economic growth through structured support and mentorship.',
    icon: Briefcase,
  },
  {
    title: 'Livelihood Programs',
    description: 'Designing and implementing comprehensive livelihood intervention scalable models for rural communities.',
    icon: TrendingUp,
  },
  {
    title: 'Market & Credit Linkages',
    description: 'Connecting local producers with viable markets and vital financial services to ensure sustainability.',
    icon: LinkIcon,
  },
  {
    title: 'M&E and SROI',
    description: 'Rigorous monitoring, evaluation, and Social Return on Investment analysis to measure true impact.',
    icon: BarChart,
  },
];

export const TRACKS = [
  {
    key: 'livelihoods',
    label: 'Livelihoods & Enterprise Development',
    services: [
      {
        title: 'Livelihood & Enterprise Development',
        description: 'Guiding communities from subsistence to surplus through the incubation of micro-enterprises and sustainable livelihood generation. Identifying local resource bases, training entrepreneurs, and facilitating sustainable market links.',
        icon: Leaf,
        color: 'bg-primary-50 text-primary-600',
      },
      {
        title: 'SHG & FPO Strengthening',
        description: 'Structurally reinforcing Self-Help Groups and Farmer Producer Organizations. We establish strong governance frameworks, operational standards, and legal compliances that ensure long-term viability and creditworthiness.',
        icon: Network,
        color: 'bg-accent-50 text-accent-600',
      },
      {
        title: 'CSR Project Implementation',
        description: 'Acting as the executing arm for corporate social responsibility mandates. Ensuring funds are deployed efficiently in grassroots projects with transparent milestones, community ownership, and measurable outcomes.',
        icon: ShieldCheck,
        color: 'bg-slate-100 text-slate-700',
      },
      {
        title: 'Monitoring, Evaluation & SROI',
        description: 'Utilizing robust M&E frameworks to quantify impact. We calculate the Social Return on Investment (SROI) to present clear, data-driven narratives of change to stakeholders and funding partners.',
        icon: LineChart,
        color: 'bg-primary-100 text-primary-800',
      },
    ],
  },
  {
    key: 'net-zero',
    label: 'ESG & Net Zero Consulting',
    services: [
      {
        title: 'Carbon Auditing',
        description: 'Structured carbon audits across facilities, campuses, operations, and program sites.',
        icon: ClipboardCheck,
        color: 'bg-primary-50 text-primary-600',
      },
      {
        title: 'GHG Assessment',
        description: 'Greenhouse gas inventory and emissions assessment to identify priority reduction areas.',
        icon: Gauge,
        color: 'bg-accent-50 text-accent-600',
      },
      {
        title: 'Net Zero Strategy',
        description: 'Practical net zero strategy for institutions, industries, offices, and CSR programs.',
        icon: Target,
        color: 'bg-slate-100 text-slate-700',
      },
      {
        title: 'Roadmap Design',
        description: 'Phased implementation roadmaps with milestones, responsibilities, and measurable outcomes.',
        icon: Route,
        color: 'bg-primary-100 text-primary-800',
      },
      {
        title: 'Net-Positive Facility Design',
        description: 'Self-sustainable facility design across energy, water, and waste systems.',
        icon: Building2,
        color: 'bg-slate-100 text-slate-700',
      },
      {
        title: 'Renewable Energy Integration',
        description: 'Solar rooftop planning and energy-efficiency measures.',
        icon: Sun,
        color: 'bg-primary-100 text-primary-800',
      },
      {
        title: 'Water Stewardship',
        description: 'Rainwater harvesting and greywater/blackwater management systems.',
        icon: Droplets,
        color: 'bg-primary-50 text-primary-600',
      },
      {
        title: 'Waste Management & Circular Economy',
        description: 'Composting, biochar, and waste segregation solutions.',
        icon: Recycle,
        color: 'bg-accent-50 text-accent-600',
      },
      {
        title: 'UHDP & Afforestation Planning',
        description: 'Ultra High Density Plantation and afforestation planning.',
        icon: TreePine,
        color: 'bg-slate-100 text-slate-700',
      },
      {
        title: 'ESG Reporting & Compliance',
        description: 'ESG reporting, disclosure support, and compliance advisory.',
        icon: FileText,
        color: 'bg-primary-100 text-primary-800',
      },
      {
        title: 'CSR Program Design & Monitoring',
        description: 'CSR program design and monitoring for sustainability and Net Zero initiatives.',
        icon: Handshake,
        color: 'bg-primary-50 text-primary-600',
      },
      {
        title: 'Government & Institutional Partnerships',
        description: 'Partnership support for Net Zero missions with government and institutions.',
        icon: Landmark,
        color: 'bg-accent-50 text-accent-600',
      },
    ],
  },
];

export const CASE_STUDIES = [
  {
    title: 'HDFC',
    tag: 'Youth Entrepreneurship Program',
    description: '21 youth started their own businesses with structured guidance and support.',
  },
  {
    title: 'Manuvikasa',
    tag: 'SHG & FPC Strengthening',
    description: 'SHG strengthening and Farmer Producer Company (FPC) formation and capacity building.',
  },
  {
    title: 'Net Zero Healthy Campus',
    tag: 'Environmental Interventions',
    description: 'Plantation, solar, rainwater harvesting, composting, and waste management across government institutions.',
  },
];
