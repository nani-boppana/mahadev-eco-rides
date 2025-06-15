
import React, { useEffect,  useRef, useState } from 'react';
import { CheckCircle, Award, Wrench, Battery, Zap, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const [visibleElements, setVisibleElements] = useState<number[]>([]);
  const [statsVisible, setStatsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const benefits = [
    {
      icon: CheckCircle,
      title: '100% Electric Solutions',
      description: 'Completely eco-friendly mobility options for a sustainable future with zero emissions.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Award,
      title: 'Expert Technicians',
      description: 'Highly trained professionals with years of experience in electric vehicles.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Wrench,
      title: 'Premium Quality Service',
      description: 'Professional maintenance and repair services with genuine parts and warranties.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Battery,
      title: 'Genuine Parts Only',
      description: 'Original spare parts and high-quality batteries for optimal performance.',
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
              setVisibleElements(prev => [...prev, index]);
            }
            if (entry.target.classList.contains('stats-section')) {
              setStatsVisible(true);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.benefit-item, .stats-section');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-12 font-roboto">
              Why Choose <span className="gradient-text">Mahadev Electric Mobility?</span>
            </h2>
            
            {/* Benefits */}
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  data-index={index}
                  className={`benefit-item group flex items-start space-x-6 hover:translate-x-2 transition-all duration-300 ${
                    visibleElements.includes(index) ? 'animate-slide-in-left' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} text-white rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0`}>
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-dark-text mb-3 font-roboto">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Stats */}
          <div className="relative">
            <div className={`stats-section bg-gradient-to-br from-brand-green to-dark-green rounded-3xl p-12 text-white text-center shadow-2xl transform hover:rotate-1 transition-all duration-500 ${
              statsVisible ? 'animate-scale-in' : 'opacity-0'
            }`}>
              <div className="mb-8">
                <div className="text-6xl font-bold mb-4 text-yellow-300">98%</div>
                <div className="text-xl font-semibold">Customer Satisfaction</div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-2">24/7</div>
                  <div className="text-sm opacity-90">Expert Support</div>
                </div>
                <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-2">500+</div>
                  <div className="text-sm opacity-90">Happy Customers</div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center animate-float">
              <Battery className="h-8 w-8 text-brand-green" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center animate-float animation-delay-300">
              <Wrench className="h-8 w-8 text-brand-green" />
            </div>
            <div className="absolute top-1/2 -right-2 w-12 h-12 bg-yellow-400 rounded-2xl shadow-xl flex items-center justify-center animate-float animation-delay-600">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div className="absolute top-1/4 -left-2 w-12 h-12 bg-blue-500 rounded-2xl shadow-xl flex items-center justify-center animate-float animation-delay-800">
              <Shield className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
