import { useEffect, useState, useRef } from 'react';
import { Briefcase, Users, Building } from 'lucide-react';
import Reveal from './Reveal';

const CountUp = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) observer.unobserve(countRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // easeOutExpo function
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

const ImpactSnapshot = () => {
  const stats = [
    {
      value: 30,
      suffix: '+',
      label: 'Youth Enterprises Supported',
      icon: Briefcase,
    },
    {
      value: 35,
      suffix: '+',
      label: 'SHGs Strengthened',
      icon: Users,
    },
    {
      value: 5,
      suffix: '+',
      label: 'FPOs Engaged',
      sublabel: '(1000+ Members)',
      icon: Building,
    },
  ];

  return (
    <section className="relative py-14 sm:py-16 bg-primary-900 border-y border-primary-600/30 overflow-hidden">
      <div className="absolute -top-16 left-[15%] w-64 h-64 rounded-full bg-accent-500/10 blur-3xl animate-float pointer-events-none"></div>
      <div className="absolute -bottom-20 right-[10%] w-72 h-72 rounded-full bg-primary-500/20 blur-3xl animate-float-slow pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-primary-600/40 text-center">
          {stats.map((stat, index) => (
            <Reveal key={index} delay={index * 150} className="pt-6 md:pt-0 pb-6 md:pb-0 px-4 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary-600/40 flex items-center justify-center mb-4 text-accent-400 hover:scale-110 hover:bg-primary-600/60 transition-transform duration-300">
                <stat.icon size={24} strokeWidth={1.6} />
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-1.5 font-heading tracking-tight">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm sm:text-base font-medium text-beige-100">{stat.label}</p>
              {stat.sublabel && (
                <p className="text-xs text-primary-100/70 mt-0.5">{stat.sublabel}</p>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSnapshot;
