
import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, Award, Wrench, Battery, Zap, Shield, Star, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const [visibleElements, setVisibleElements] = useState<number[]>([]);
  const [statsVisible, setStatsVisible] = useState(false);
  const [counters, setCounters] = useState({ satisfaction: 0, customers: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const benefits = [
    {
      icon: CheckCircle,
      title: '100% Electric Solutions',
      description: 'Completely eco-friendly mobility options for a sustainable future with zero emissions and maximum efficiency.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Award,
      title: 'Expert Technicians',
      description: 'Certified professionals with years of experience in electric vehicle maintenance and cutting-edge technology.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Wrench,
      title: 'Premium Quality Service',
      description: 'Professional maintenance and repair services with genuine parts, comprehensive warranties, and guaranteed satisfaction.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Battery,
      title: 'Genuine Parts Only',
      description: 'Original spare parts and high-quality batteries for optimal performance, safety, and extended lifespan.',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('benefit-item')) {
              const index = parseInt(entry.target.getAttribute('data-index') || '0');
              setTimeout(() => {
                setVisibleElements(prev => [...prev, index]);
              }, index * 150);
            }
            if (entry.target.classList.contains('stats-section')) {
              setStatsVisible(true);
              // Animate counters
              const duration = 2000;
              const steps = 60;
              const increment = duration / steps;
              let current = 0;
              
              const timer = setInterval(() => {
                current += increment;
                const progress = current / duration;
                setCounters({
                  satisfaction: Math.floor(98 * progress),
                  customers: Math.floor(500 * progress)
                });
                
                if (current >= duration) {
                  clearInterval(timer);
                  setCounters({ satisfaction: 98, customers: 500 });
                }
              }, increment);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.benefit-item, .stats-section');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-80 h-80 bg-brand-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-center">
          {/* Left Column - Enhanced Content */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center bg-brand-green/10 px-6 py-3 rounded-full mb-6 border border-brand-green/20">
                <Star className="h-5 w-5 text-brand-green mr-2 animate-pulse" />
                <span className="text-brand-green font-semibold">Why Choose Us</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-dark-text mb-8 font-roboto leading-tight">
                Why Choose <span className="gradient-text">Mahadev Electric?</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the difference with our premium electric mobility solutions, expert service, and unwavering commitment to sustainability.
              </p>
            </div>
            
            {/* Enhanced Benefits */}
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  data-index={index}
                  className={`benefit-item group flex items-start space-x-6 p-6 rounded-2xl hover:bg-gray-50 hover:translate-x-2 transition-all duration-500 border border-transparent hover:border-gray-200 ${
                    visibleElements.includes(index) ? 'animate-slide-in-left opacity-100' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Enhanced Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${benefit.color} text-white rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0 shadow-lg`}>
                    <benefit.icon className="h-10 w-10" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-dark-text mb-4 font-roboto group-hover:text-brand-green transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Enhanced Stats */}
          <div className="relative">
            <div className={`stats-section bg-gradient-to-br from-brand-green via-dark-green to-light-green rounded-3xl p-12 text-white text-center shadow-2xl transform hover:rotate-1 transition-all duration-700 relative overflow-hidden ${
              statsVisible ? 'animate-scale-in opacity-100' : 'opacity-0'
            }`}>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-32 h-32 border border-white/20 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 border border-white/20 rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <div className="mb-12">
                  <div className="text-7xl font-bold mb-6 text-yellow-300 transition-all duration-1000">
                    {counters.satisfaction}%
                  </div>
                  <div className="text-2xl font-semibold mb-2">Customer Satisfaction</div>
                  <div className="text-lg opacity-90">Verified Reviews & Ratings</div>
                </div>
                
                <div className="grid grid-cols-2 gap-8">
                  <div className="bg-white/20 rounded-3xl p-8 backdrop-blur-lg border border-white/30 hover:bg-white/30 transition-all duration-300">
                    <div className="text-3xl font-bold mb-3 transition-all duration-1000">24/7</div>
                    <div className="text-sm opacity-90">Expert Support</div>
                  </div>
                  <div className="bg-white/20 rounded-3xl p-8 backdrop-blur-lg border border-white/30 hover:bg-white/30 transition-all duration-300">
                    <div className="text-3xl font-bold mb-3 transition-all duration-1000">{counters.customers}+</div>
                    <div className="text-sm opacity-90">Happy Customers</div>
                  </div>
                </div>
                
                {/* Additional Stats */}
                <div className="mt-8 flex justify-center space-x-8">
                  <div className="text-center">
                    <Users className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                    <div className="text-sm opacity-90">Professional Team</div>
                  </div>
                  <div className="text-center">
                    <Shield className="h-8 w-8 mx-auto mb-2 text-blue-300" />
                    <div className="text-sm opacity-90">Guaranteed Service</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Floating Elements */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-white rounded-3xl shadow-2xl flex items-center justify-center animate-float">
              <Battery className="h-10 w-10 text-brand-green" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-white rounded-3xl shadow-2xl flex items-center justify-center animate-float animation-delay-300">
              <Wrench className="h-10 w-10 text-brand-green" />
            </div>
            <div className="absolute top-1/2 -right-4 w-16 h-16 bg-yellow-400 rounded-3xl shadow-2xl flex items-center justify-center animate-float animation-delay-600">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <div className="absolute top-1/4 -left-4 w-16 h-16 bg-blue-500 rounded-3xl shadow-2xl flex items-center justify-center animate-float animation-delay-800">
              <Shield className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
