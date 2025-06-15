
import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Daily Commuter',
      content: 'Outstanding service! The e-bike rental made my daily commute incredibly convenient and eco-friendly. Highly recommend!',
      rating: 5,
      avatar: 'RK',
      location: 'Uppal, Hyderabad'
    },
    {
      name: 'Vikram Singh',
      role: 'Business Owner',
      content: 'Exceptional maintenance support. Their expert team fixed my e-bike battery issue promptly and efficiently.',
      rating: 5,
      avatar: 'VS',
      location: 'ECIL, Hyderabad'
    },
    {
      name: 'Amit Patel',
      role: 'College Student',
      content: 'Affordable rental rates and well-maintained bikes. Perfect for students who need reliable transportation.',
      rating: 5,
      avatar: 'AP',
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
    <section ref={sectionRef} className="py-24 bg-background-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-6 font-roboto">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from satisfied customers across Hyderabad.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              data-index={index}
              className={`testimonial-card group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                visibleCards.includes(index) ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-brand-green text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Quote className="h-6 w-6" />
              </div>
              
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-dark-green text-white rounded-2xl flex items-center justify-center font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-dark-text">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-xs">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Indicator */}
        <div className="text-center">
          <div className="inline-flex items-center bg-white rounded-2xl px-8 py-6 shadow-lg">
            <div className="flex -space-x-2 mr-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-10 h-10 bg-gradient-to-br from-brand-green to-dark-green text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                  {testimonial.avatar}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="font-bold text-dark-text text-lg">Join 500+ Happy Customers</div>
              <div className="flex items-center mt-1">
                <div className="flex space-x-1 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 text-sm font-medium">5.0 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
