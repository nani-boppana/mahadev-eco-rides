import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Bike, Wrench, Battery, Settings, CheckCircle, ArrowRight, Phone, Star } from 'lucide-react';

const ServiceDetail = () => {
  const { serviceType } = useParams();

  const serviceData = {
    rental: {
      icon: Bike,
      title: 'Electric Bike Rental',
      subtitle: 'Flexible and affordable e-bike rental solutions',
      description: 'Experience the freedom of electric mobility with our premium e-bike rental service. Perfect for daily commuting, weekend adventures, or business needs in Uppal and surrounding areas.',
      features: [
        'Daily, weekly, and monthly rental options',
        'Well-maintained premium electric bikes',
        'Free helmet and safety gear included',
        'Comprehensive insurance coverage',
        'Free pickup and delivery within 5km',
        '24/7 roadside assistance',
        'No maintenance worries',
        'Flexible rental terms'
      ],
      included: [
        'Premium electric bike',
        'Safety helmet and gear',
        'Basic maintenance during rental',
        'Insurance coverage',
        'Customer support'
      ]
    },
    repair: {
      icon: Wrench,
      title: 'Electric Bike Services',
      subtitle: 'Professional maintenance and repair services',
      description: 'Keep your electric bike running at peak performance with our expert maintenance and repair services. Our certified technicians ensure your e-bike delivers optimal range, safety, and reliability.',
      features: [
        'Complete diagnostic assessment',
        'Motor and electrical system repairs',
        'Battery health check and optimization',
        'Brake and suspension servicing',
        'Software updates and calibration',
        'Tire replacement and alignment',
        'Preventive maintenance programs',
        'Emergency repair services'
      ],
      included: [
        'Diagnostic assessment',
        'Safety inspection',
        'Performance optimization',
        'Service warranty',
        'Expert consultation'
      ]
    },
    batteries: {
      icon: Battery,
      title: 'Lithium Batteries',
      subtitle: 'High-performance battery solutions',
      description: 'Upgrade your electric bike with our premium lithium-ion batteries. Get extended range, faster charging, and longer lifespan with our quality-assured battery solutions.',
      features: [
        'Premium lithium-ion technology',
        'Extended range up to 80km per charge',
        'Fast charging (3-4 hours)',
        'Long lifespan (800+ charge cycles)',
        'BMS protection system',
        'Temperature management',
        'Warranty coverage',
        'Professional installation'
      ],
      included: [
        'Lithium-ion battery',
        'BMS protection system',
        'Charging adapter',
        'Installation service',
        '1-year warranty'
      ]
    },
    parts: {
      icon: Settings,
      title: 'Spare Parts',
      subtitle: 'Genuine parts and accessories',
      description: 'Keep your electric bike in perfect condition with our wide range of genuine spare parts and accessories. Quality components ensure optimal performance and safety.',
      features: [
        'Original manufacturer parts',
        'Quality-assured components',
        'Wide compatibility range',
        'Expert installation available',
        'Quick delivery service',
        'Warranty on parts',
        'Technical support',
        'Competitive pricing'
      ],
      included: [
        'Genuine spare parts',
        'Quality certification',
        'Installation guide',
        'Technical support',
        'Parts warranty'
      ]
    }
  };

  const service = serviceData[serviceType];

  if (!service) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-dark-text mb-4">Service Not Found</h1>
          <Link to="/services" className="text-brand-green hover:text-dark-green">
            ← Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-green to-light-green py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white text-brand-green rounded-lg flex items-center justify-center mr-4">
                  <service.icon className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold font-roboto">{service.title}</h1>
                  <p className="text-xl opacity-90">{service.subtitle}</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-8">{service.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-brand-green px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Get Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+919951912925"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-green transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-dark-text mb-6">What's Included</h3>
              <ul className="space-y-3">
                {service.included.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-green" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-dark-text text-center mb-16 font-roboto">
            Service Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="bg-background-gray rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="h-8 w-8 text-brand-green mb-4" />
                <p className="text-gray-700 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-dark-text text-center mb-16 font-roboto">
            Happy Customers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background-gray rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/lovable-uploads/571692b9-cccf-4385-a570-6438addbd85e.png" 
                alt="Satisfied customer with Hero Electric bike from Mahadev Electric Mobility"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-dark-text mb-2">Excellent Service Experience</h3>
                <p className="text-gray-600">Our customer enjoying the smooth ride and reliability of our Hero Electric bike rental service. Clean, well-maintained bikes delivered right to your doorstep.</p>
              </div>
            </div>
            
            <div className="bg-background-gray rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/lovable-uploads/58a87c7c-800c-41cb-a217-6da7771c695e.png" 
                alt="Another happy customer with electric bike rental from Mahadev Electric Mobility"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-dark-text mb-2">Reliable & Affordable</h3>
                <p className="text-gray-600">Quality electric bikes with excellent battery performance. Our customers appreciate the affordability and convenience of our rental services in Uppal area.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-brand-green rounded-lg p-8 text-white max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Customer Satisfaction Stats</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">98%</div>
                  <p>Customer Satisfaction</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <p>Happy Customers</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">4.8★</div>
                  <p>Average Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bike Gallery Section */}
      <section className="py-20 bg-background-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-dark-text text-center mb-16 font-roboto">
            Our Electric Bike Fleet
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/lovable-uploads/a13d4e17-e315-4ba8-9dc3-f62921fef556.png" 
                alt="Organized fleet of Hero Electric bikes available for rental at Mahadev Electric Mobility"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark-text mb-2">Premium Hero Electric Fleet</h3>
                <p className="text-gray-600">Our extensive collection of Hero Electric bikes, professionally organized and maintained for optimal performance and reliability.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/lovable-uploads/095266d2-1781-4301-bab0-0571d67057d6.png" 
                alt="Well-maintained electric bike inventory at Mahadev Electric Mobility facility"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark-text mb-2">Systematic Fleet Management</h3>
                <p className="text-gray-600">Our systematically organized bike inventory ensures quick availability, proper maintenance, and consistent quality for all rental customers.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-dark-text mb-4">Fleet Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-green mb-2">50+</div>
                  <p className="text-gray-600">Electric Bikes Available</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-green mb-2">100%</div>
                  <p className="text-gray-600">Well Maintained</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-green mb-2">24/7</div>
                  <p className="text-gray-600">Ready for Rental</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-green to-light-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-roboto">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Contact us today for personalized recommendations and competitive pricing for your electric mobility needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-brand-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors hover-scale"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+919951912925"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-brand-green transition-all duration-300 hover-scale"
            >
              Call: +91 99519 12925
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
