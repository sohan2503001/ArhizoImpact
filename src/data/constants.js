import {
  Users, Briefcase, TrendingUp, Link as LinkIcon, BarChart,
  Network, ClipboardCheck, Route, Sun, FileText
} from 'lucide-react';

import shgStrengtheningImg from '../assets/illustrations/shg-strengthening.svg';
import enterpriseDevelopmentImg from '../assets/illustrations/enterprise-development.svg';
import livelihoodProgramsImg from '../assets/illustrations/livelihood-programs.svg';
import marketCreditLinkagesImg from '../assets/illustrations/market-credit-linkages.svg';
import meSroiImg from '../assets/illustrations/me-sroi.svg';
import shgFormationImg from '../assets/illustrations/shg-formation.svg';
import fpoDevelopmentImg from '../assets/illustrations/fpo-development.svg';
import enterpriseDesignImg from '../assets/illustrations/enterprise-design.svg';
import skillBuildingImg from '../assets/illustrations/skill-building.svg';
import carbonAuditingImg from '../assets/illustrations/carbon-auditing.svg';
import netZeroStrategyImg from '../assets/illustrations/net-zero-strategy.svg';
import esgReportingImg from '../assets/illustrations/esg-reporting.svg';
import renewableEnergyImg from '../assets/illustrations/renewable-energy.svg';

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
    image: shgStrengtheningImg,
  },
  {
    title: 'Enterprise Development',
    description: 'Incubating micro-enterprises and fostering local economic growth through structured support and mentorship.',
    icon: Briefcase,
    image: enterpriseDevelopmentImg,
  },
  {
    title: 'Livelihood Programs',
    description: 'Designing and implementing comprehensive livelihood intervention scalable models for rural communities.',
    icon: TrendingUp,
    image: livelihoodProgramsImg,
  },
  {
    title: 'Market & Credit Linkages',
    description: 'Connecting local producers with viable markets and vital financial services to ensure sustainability.',
    icon: LinkIcon,
    image: marketCreditLinkagesImg,
  },
  {
    title: 'M&E and SROI',
    description: 'Rigorous monitoring, evaluation, and Social Return on Investment analysis to measure true impact.',
    icon: BarChart,
    image: meSroiImg,
  },
];

export const TRACKS = [
  {
    key: 'livelihoods',
    label: 'Livelihoods & Enterprise Development',
    services: [
      {
        title: 'SHG (Self-Help Group) formation & strengthening',
        description: 'Building strong groups, governance practices, records, and operating systems for long-term resilience.',
        icon: Users,
        color: 'bg-primary-50 text-primary-600',
        image: shgFormationImg,
      },
      {
        title: 'FPO (Farmer Producer Organization) development',
        description: 'Supporting farmer collectives with structure, compliance, member engagement, and business readiness.',
        icon: Network,
        color: 'bg-accent-50 text-accent-600',
        image: fpoDevelopmentImg,
      },
      {
        title: 'Enterprise design & livelihood diversification',
        description: 'Designing viable local enterprise models that expand income pathways for underserved communities.',
        icon: Briefcase,
        color: 'bg-slate-100 text-slate-700',
        image: enterpriseDesignImg,
      },
      {
        title: 'Skill-building & market linkage support',
        description: 'Connecting training, production, credit, and markets so livelihood programs can keep moving after launch.',
        icon: LinkIcon,
        color: 'bg-primary-100 text-primary-800',
        image: skillBuildingImg,
      },
    ],
  },
  {
    key: 'net-zero',
    label: 'ESG & Net Zero Consulting',
    services: [
      {
        title: 'Carbon Auditing & GHG Assessment',
        description: 'Measuring emissions across facilities, campuses, operations, and program sites.',
        icon: ClipboardCheck,
        color: 'bg-primary-50 text-primary-600',
        image: carbonAuditingImg,
      },
      {
        title: 'Net Zero Strategy & Roadmap Design',
        description: 'Designing phased strategies, responsibilities, milestones, and implementation pathways.',
        icon: Route,
        color: 'bg-accent-50 text-accent-600',
        image: netZeroStrategyImg,
      },
      {
        title: 'ESG reporting & compliance support',
        description: 'Building reporting frameworks, disclosure support, and documentation for ESG commitments.',
        icon: FileText,
        color: 'bg-slate-100 text-slate-700',
        image: esgReportingImg,
      },
      {
        title: 'Renewable energy & resource efficiency planning',
        description: 'Planning solar, energy-efficiency, water, waste, and resource stewardship interventions.',
        icon: Sun,
        color: 'bg-primary-100 text-primary-800',
        image: renewableEnergyImg,
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
