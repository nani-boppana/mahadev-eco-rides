
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bike, Wrench, Battery, Settings, ArrowRight } from 'lucide-react';

const ServiceOverview = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Bike,
      title: 'Electric Bike Rental',
      description: 'Daily, weekly, and monthly rental options for premium electric bikes with 24/7 support.',
      link: '/services/rental',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Wrench,
      title: 'Electric Bike Services',
      description: 'Professional maintenance and repair services by expert technicians with genuine parts.',
      link: '/services/repair',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: Battery,
      title: 'Lithium Batteries',
      description: 'High-performance lithium battery replacements and upgrades for extended range.',
      link: '/services/batteries',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Settings,
      title: 'Spare Parts',
      description: 'Genuine spare parts and accessories for all electric bike models.',
      link: '/services/parts',
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-6 font-roboto">
            Our <span className="gradient-text">Premium Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete electric mobility solutions for Uppal and surrounding areas.
          </p>
        </div>
        
        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-index={index}
              className={`service-card group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                visibleCards.includes(index) ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <service.icon className="h-8 w-8" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-dark-text mb-4 font-roboto">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              
              {/* CTA */}
              <Link
                to={service.link}
                className="inline-flex items-center text-brand-green font-semibold hover:text-dark-green transition-colors group-hover:translate-x-1"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center button-premium px-8 py-4 text-lg font-bold hover-lift"
          >
            View All Services
            <ArrowRight className="ml-3 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
