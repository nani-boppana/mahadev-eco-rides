
import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote, ThumbsUp, MessageCircle } from 'lucide-react';

const Testimonials = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Daily Commuter',
      content: 'Outstanding service! The e-bike rental made my daily commute incredibly convenient and eco-friendly. Professional team with excellent support.',
      rating: 5,
      avatar: 'RK',
      location: 'Uppal, Hyderabad',
      badge: 'Verified Customer'
    },
    {
      name: 'Vikram Singh',
      role: 'Business Owner',
      content: 'Exceptional maintenance support. Their expert team fixed my e-bike battery issue promptly and efficiently. Highly recommend their services!',
      rating: 5,
      avatar: 'VS',
      location: 'ECIL, Hyderabad',
      badge: 'Premium Member'
    },
    {
      name: 'Amit Patel',
      role: 'College Student',
      content: 'Affordable rental rates and well-maintained bikes. Perfect for students who need reliable transportation. Great customer service experience!',
      rating: 5,
      avatar: 'AP',
      location: 'Kompally, Hyderabad',
      badge: 'Student Discount'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 200);
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    const cards = sectionRef.current?.querySelectorAll('.testimonial-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-background-gray via-white to-background-gray relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-brand-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-yellow-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-brand-green/10 px-6 py-3 rounded-full mb-6 border border-brand-green/20">
            <MessageCircle className="h-5 w-5 text-brand-green mr-2 animate-pulse" />
            <span className="text-brand-green font-semibold">Customer Reviews</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-dark-text mb-8 font-roboto">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Real experiences from satisfied customers across Hyderabad who trust us for their electric mobility needs.
          </p>
        </div>
        
        {/* Enhanced Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              data-index={index}
              className={`testimonial-card group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border-2 cursor-pointer overflow-hidden ${
                visibleCards.includes(index) ? 'animate-scale-in opacity-100' : 'opacity-0'
              } ${
                activeCard === index ? 'border-brand-green bg-brand-green/5 scale-105' : 'border-gray-100'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setActiveCard(index)}
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Enhanced Quote Icon with Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-dark-green text-white rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Quote className="h-8 w-8" />
                  </div>
                  <div className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {testimonial.badge}
                  </div>
                </div>
                
                {/* Enhanced Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                  <span className="ml-2 text-sm text-gray-500 font-medium">5.0</span>
                </div>
                
                {/* Enhanced Content */}
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 italic group-hover:text-gray-800 transition-colors duration-300">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Enhanced Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-dark-green text-white rounded-3xl flex items-center justify-center font-bold text-lg shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-dark-text text-lg group-hover:text-brand-green transition-colors duration-300">{testimonial.name}</h4>
                    <p className="text-gray-600 font-medium">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                  <ThumbsUp className="h-5 w-5 text-brand-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              
              {/* Accent Border */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-green to-dark-green transform transition-transform duration-500 ${
                activeCard === index ? 'scale-x-100' : 'scale-x-0'
              }`}></div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Trust Indicator */}
        <div className="text-center">
          <div className="inline-flex items-center bg-white rounded-3xl px-12 py-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 group cursor-pointer">
            <div className="flex -space-x-3 mr-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-14 h-14 bg-gradient-to-br from-brand-green to-dark-green text-white rounded-full flex items-center justify-center font-bold border-4 border-white shadow-lg hover:scale-110 transition-transform duration-300">
                  {testimonial.avatar}
                </div>
              ))}
              <div className="w-14 h-14 bg-gradient-to-br from-gray-400 to-gray-600 text-white rounded-full flex items-center justify-center font-bold border-4 border-white shadow-lg">
                <span className="text-xs">+497</span>
              </div>
            </div>
            <div className="text-left">
              <div className="font-bold text-dark-text text-2xl mb-2 group-hover:text-brand-green transition-colors duration-300">
                Join 500+ Happy Customers
              </div>
              <div className="flex items-center">
                <div className="flex space-x-1 mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 font-bold">5.0 Average Rating</span>
                <span className="ml-2 text-gray-500">• Verified Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
