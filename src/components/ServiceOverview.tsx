import React from 'react';
import { Link } from 'react-router-dom';
import { Bike, Wrench, Battery, Settings, ArrowRight } from 'lucide-react';

const ServiceOverview = () => {
  const services = [
    {
      icon: Bike,
      title: 'Electric Bike Rental',
      description: 'Daily, weekly, and monthly rental options for premium electric bikes. Perfect for commuting, leisure, or business needs.',
      link: '/services/rental'
    },
    {
      icon: Wrench,
      title: 'Electric Bike Services',
      description: 'Professional maintenance and repair services by expert technicians. Keep your e-bike running at peak performance.',
      link: '/services/repair'
    },
    {
      icon: Battery,
      title: 'Lithium Batteries',
      description: 'High-performance lithium battery replacements and upgrades. Extend your e-bike range with quality batteries.',
      link: '/services/batteries'
    },
    {
      icon: Settings,
      title: 'Spare Parts',
      description: 'Genuine spare parts and accessories for all electric bike models. Quality components for optimal performance.',
      link: '/services/parts'
    }
  ];

  return (
    <section className="py-20 bg-background-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-text mb-6 font-roboto">
            Our Services
          </h2>
          <p className="text-xl text-gray-text max-w-3xl mx-auto">
            Comprehensive electric mobility solutions for Uppal and surrounding areas. 
            From rentals to maintenance, we've got you covered.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl hover-lift group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-brand-green text-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-semibold text-dark-text mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <Link
                to={service.link}
                className="inline-flex items-center text-brand-green font-semibold hover:text-dark-green transition-colors"
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link
            to="/services"
            className="bg-brand-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-dark-green transition-colors hover-scale"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
