
import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, Star, Wrench, Battery, Zap, Award, Sparkles, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const [visibleElements, setVisibleElements] = useState<number[]>([]);
  const [statsVisible, setStatsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const benefits = [
    {
      icon: CheckCircle,
      title: '100% Electric Solutions',
      description: 'Completely eco-friendly mobility options for a sustainable future with zero emissions.',
      color: 'from-green-500 via-emerald-600 to-teal-600'
    },
    {
      icon: Award,
      title: 'Expert Technicians',
      description: 'Highly trained professionals with years of experience in electric vehicles and premium service.',
      color: 'from-blue-500 via-indigo-600 to-purple-600'
    },
    {
      icon: Wrench,
      title: 'Premium Quality Service',
      description: 'Premium maintenance and repair services to keep your e-bike in perfect condition with genuine parts.',
      color: 'from-orange-500 via-red-500 to-pink-600'
    },
    {
      icon: Battery,
      title: 'Genuine Parts Only',
      description: 'Original spare parts and high-quality batteries for optimal performance and maximum longevity.',
      color: 'from-purple-500 via-violet-600 to-pink-600'
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
    <section ref={sectionRef} className="py-32 bg-white relative overflow-hidden particles">
      {/* Advanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-brand-green/10 to-light-green/20 rounded-full animate-float blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br from-light-green/10 to-brand-green/20 rounded-full animate-float animation-delay-300 blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-yellow-300/10 to-orange-400/20 rounded-full animate-float animation-delay-600 blur-xl"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-500/20 rounded-full animate-float animation-delay-800 blur-xl"></div>
      </div>
      
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-center">
          {/* Enhanced Left Column - Content */}
          <div>
            {/* Premium Badge */}
            <div className="inline-flex items-center glass px-6 py-3 rounded-full mb-8 font-bold border border-brand-green/20 hover-lift animate-slide-in-left">
              <div className="relative mr-3">
                <Zap className="h-5 w-5 text-brand-green animate-pulse" />
                <div className="absolute inset-0 animate-ping opacity-30">
                  <Zap className="h-5 w-5 text-brand-green" />
                </div>
              </div>
              <span className="gradient-text">Why Choose Us</span>
            </div>
            
            {/* Premium Title */}
            <h2 className="text-5xl md:text-6xl font-bold text-dark-text mb-12 font-roboto leading-tight animate-slide-in-left animation-delay-200">
              Why Choose 
              <span className="block gradient-text bg-gradient-to-r from-brand-green via-light-green to-dark-green bg-clip-text animate-gradient-shift">
                Mahadev Electric Mobility?
              </span>
            </h2>
            
            {/* Premium Benefits List */}
            <div className="space-y-10 mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  data-index={index}
                  className={`benefit-item group flex items-start space-x-8 hover:translate-x-4 transition-all duration-500 ${
                    visibleElements.includes(index) ? 'animate-slide-in-left' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Premium Icon */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-18 h-18 bg-gradient-to-br ${benefit.color} text-white rounded-3xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl morph-button`}>
                      <benefit.icon className="h-9 w-9" />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-shimmer"></div>
                  </div>
                  
                  {/* Premium Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-dark-text mb-4 group-hover:gradient-text transition-all duration-300 font-roboto">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-800 transition-colors">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Premium Testimonial Card */}
            <div className="card-premium p-10 bg-gradient-to-r from-gray-50 via-white to-gray-50 shadow-2xl hover-lift animate-slide-in-left animation-delay-600">
              <div className="flex items-center space-x-4 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-7 w-7 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
                <span className="text-gray-600 ml-4 font-bold text-lg">Trusted by 500+ customers</span>
              </div>
              <blockquote className="text-gray-700 text-xl italic leading-relaxed mb-6 font-medium">
                "Exceptional service and incredibly reliable e-bikes. Mahadev Electric Mobility 
                has completely transformed my daily commute experience!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-dark-green text-white rounded-2xl flex items-center justify-center font-bold mr-4">
                  RS
                </div>
                <div>
                  <p className="text-dark-text font-bold text-lg">Rajesh Sharma</p>
                  <p className="text-gray-600">Satisfied Customer</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Right Column - Premium Visual Element */}
          <div className="relative">
            {/* Main Stats Card */}
            <div className={`stats-section aspect-square bg-gradient-to-br from-brand-green via-dark-green to-light-green rounded-[3rem] p-16 flex items-center justify-center shadow-2xl transform hover:rotate-2 transition-all duration-700 hover-glow animate-gradient-shift ${
              statsVisible ? 'animate-scale-in' : 'opacity-0'
            }`}>
              <div className="text-center text-white relative">
                {/* Main Percentage */}
                <div className="relative mb-10">
                  <div className="text-8xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent animate-shimmer">
                    98%
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce shadow-lg">
                    <Sparkles className="h-5 w-5 text-white m-1.5" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-white/30 rounded-full animate-pulse"></div>
                </div>
                
                <div className="text-3xl mb-4 font-bold">Customer Satisfaction</div>
                <div className="text-xl opacity-90 mb-12 font-medium">Premium Rating</div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-8">
                  <div className="glass backdrop-blur-lg rounded-3xl p-8 border border-white/30 hover-lift">
                    <div className="text-4xl font-bold mb-3 gradient-text bg-gradient-to-r from-white to-yellow-200 bg-clip-text">24/7</div>
                    <div className="text-sm opacity-90 font-medium">Expert Support</div>
                  </div>
                  <div className="glass backdrop-blur-lg rounded-3xl p-8 border border-white/30 hover-lift">
                    <div className="text-4xl font-bold mb-3 gradient-text bg-gradient-to-r from-white to-yellow-200 bg-clip-text">500+</div>
                    <div className="text-sm opacity-90 font-medium">Happy Customers</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Floating Elements */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-white rounded-3xl shadow-2xl flex items-center justify-center animate-float hover-lift">
              <Battery className="h-12 w-12 text-brand-green animate-pulse" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white rounded-3xl shadow-2xl flex items-center justify-center animate-float animation-delay-300 hover-lift">
              <Wrench className="h-12 w-12 text-brand-green animate-pulse animation-delay-200" />
            </div>
            <div className="absolute top-1/2 -right-6 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl shadow-2xl flex items-center justify-center animate-float animation-delay-600 hover-bounce">
              <Zap className="h-10 w-10 text-white animate-pulse animation-delay-400" />
            </div>
            <div className="absolute top-1/4 -left-6 w-18 h-18 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl shadow-2xl flex items-center justify-center animate-float animation-delay-800 hover-rotate">
              <Shield className="h-8 w-8 text-white animate-pulse animation-delay-600" />
            </div>
            
            {/* Ambient Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-green/20 to-transparent rounded-[3rem] blur-3xl -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
