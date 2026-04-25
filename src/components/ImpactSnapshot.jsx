import React, { useEffect, useState, useRef } from 'react';
import { Briefcase, Users, Building } from 'lucide-react';

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
    <section className="py-20 bg-primary-900 border-y border-primary-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 divide-y md:divide-y-0 md:divide-x divide-primary-600/40 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="pt-10 md:pt-0 pb-10 md:pb-0 px-4 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary-600/40 flex items-center justify-center mb-6 text-accent-400">
                <stat.icon size={32} strokeWidth={1.5} />
              </div>
              <div className="text-5xl font-extrabold text-white mb-2 font-heading tracking-tight">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-lg font-medium text-beige-100">{stat.label}</p>
              {stat.sublabel && (
                <p className="text-sm text-primary-100/70 mt-1">{stat.sublabel}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSnapshot;
