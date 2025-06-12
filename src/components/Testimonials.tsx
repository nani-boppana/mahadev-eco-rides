
import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote, Sparkles, CheckCircle } from 'lucide-react';

const Testimonials = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Daily Commuter',
      content: 'Outstanding service! The e-bike rental made my daily commute to Uppal incredibly convenient and eco-friendly. The bikes are well-maintained and the staff is extremely professional. Highly recommend Mahadev Electric Mobility!',
      rating: 5,
      avatar: 'RK',
      color: 'from-blue-500 via-blue-600 to-indigo-600',
      location: 'Uppal, Hyderabad'
    },
    {
      name: 'Vikram Singh',
      role: 'Business Owner',
      content: 'Exceptional professional service and excellent maintenance support. Their expert team fixed my e-bike battery issue promptly and efficiently. The quality of service and customer care is truly remarkable!',
      rating: 5,
      avatar: 'VS',
      color: 'from-green-500 via-emerald-600 to-teal-600',
      location: 'ECIL, Hyderabad'
    },
    {
      name: 'Amit Patel',
      role: 'College Student',
      content: 'Affordable rental rates and exceptionally well-maintained bikes. Perfect for students like me who need reliable and eco-friendly transportation around Hyderabad. The booking process is seamless!',
      rating: 5,
      avatar: 'AP',
      color: 'from-purple-500 via-violet-600 to-pink-600',
      location: 'Kompally, Hyderabad'
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

    const cards = sectionRef.current?.querySelectorAll('.testimonial-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-background-gray via-white to-gray-100 relative overflow-hidden particles">
      {/* Advanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-48 h-48 border-4 border-brand-green rounded-full animate-spin hover-glow" style={{ animationDuration: '25s' }}></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border-4 border-light-green rounded-full animate-spin hover-glow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 border-4 border-yellow-400 rounded-full animate-spin hover-glow" style={{ animationDuration: '30s' }}></div>
      </div>
      
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Premium Header Section */}
        <div className="text-center mb-24">
          {/* Premium Badge */}
          <div className="inline-flex items-center glass px-6 py-3 rounded-full mb-8 font-bold border border-brand-green/20 hover-lift animate-slide-in-bottom">
            <div className="relative mr-3">
              <Star className="h-5 w-5 text-yellow-400 animate-pulse fill-current" />
              <div className="absolute inset-0 animate-ping opacity-30">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
              </div>
            </div>
            <span className="gradient-text">Customer Reviews</span>
          </div>
          
          {/* Premium Title */}
          <h2 className="text-5xl md:text-6xl font-bold text-dark-text mb-10 font-roboto animate-slide-in-bottom animation-delay-200">
            What Our Customers
            <span className="block gradient-text bg-gradient-to-r from-brand-green via-light-green to-dark-green bg-clip-text animate-gradient-shift">
              Say About Us
            </span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto animate-slide-in-bottom animation-delay-400">
            Real experiences from our satisfied customers across Uppal and Hyderabad.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex justify-center items-center mt-10 space-x-12 animate-slide-in-bottom animation-delay-600">
            <div className="flex items-center">
              <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
              <span className="text-gray-600 font-semibold">Verified Reviews</span>
            </div>
            <div className="flex items-center">
              <Sparkles className="h-6 w-6 text-yellow-400 mr-2" />
              <span className="text-gray-600 font-semibold">5-Star Rating</span>
            </div>
          </div>
        </div>
        
        {/* Premium Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              data-index={index}
              className={`testimonial-card group relative card-premium hover-lift hover-glow transition-all duration-700 ${
                visibleCards.includes(index) ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-3xl blur-xl`}></div>
              
              {/* Premium Card Content */}
              <div className="relative bg-white/90 backdrop-blur-sm p-10 h-full border border-white/50">
                {/* Header with Quote and Rating */}
                <div className="flex justify-between items-start mb-8">
                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.color} text-white rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 morph-button`}>
                      <Quote className="h-8 w-8" />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-shimmer"></div>
                  </div>
                  
                  {/* Enhanced Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="relative">
                        <Star className="h-6 w-6 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                        <div className="absolute inset-0 animate-ping opacity-20">
                          <Star className="h-6 w-6 text-yellow-400 fill-current" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Premium Testimonial Content */}
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-10 group-hover:text-gray-800 transition-colors font-medium italic">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Enhanced Author Section */}
                <div className="flex items-center space-x-5">
                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.color} text-white rounded-3xl flex items-center justify-center font-bold text-xl shadow-2xl group-hover:scale-110 transition-all duration-300`}>
                      {testimonial.avatar}
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-shimmer"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-text text-xl font-roboto">{testimonial.name}</h4>
                    <p className="text-gray-600 font-medium">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
              
              {/* Premium Hover Border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${testimonial.color} p-[2px]`}>
                  <div className="w-full h-full rounded-3xl bg-white/95"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Premium Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center card-premium px-12 py-8 shadow-2xl hover-lift animate-slide-in-bottom animation-delay-800">
            <div className="flex -space-x-4 mr-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className={`w-14 h-14 bg-gradient-to-br ${testimonial.color} text-white rounded-full flex items-center justify-center font-bold text-lg border-4 border-white shadow-xl hover-bounce`} style={{ animationDelay: `${index * 0.1}s` }}>
                  {testimonial.avatar}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="font-bold text-dark-text text-2xl mb-2 font-roboto">Join 500+ Happy Customers</div>
              <div className="text-gray-600 text-lg font-medium">Experience the premium difference today</div>
            </div>
            <div className="ml-8">
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
              <div className="text-gray-600 font-bold mt-2">5.0 Premium Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
