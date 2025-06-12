
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-text text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-brand-green mb-4 font-roboto">
              Mahadev Electric Mobility
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of eco-friendly electric bike rental services in Uppal, Hyderabad. 
              We're committed to sustainable transportation solutions with expert service and quality parts.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-green" />
                <span className="text-gray-300">+91 99519 12925</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-green" />
                <span className="text-gray-300">mahadevelectricmobility@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-brand-green" />
                <span className="text-gray-300">Gokul Nagar, Mallapur, Hyderabad</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-brand-green transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-brand-green transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-brand-green transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-brand-green transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/rental" className="text-gray-300 hover:text-brand-green transition-colors">
                  E-Bike Rental
                </Link>
              </li>
              <li>
                <Link to="/services/repair" className="text-gray-300 hover:text-brand-green transition-colors">
                  Maintenance & Repair
                </Link>
              </li>
              <li>
                <Link to="/services/batteries" className="text-gray-300 hover:text-brand-green transition-colors">
                  Lithium Batteries
                </Link>
              </li>
              <li>
                <Link to="/services/parts" className="text-gray-300 hover:text-brand-green transition-colors">
                  Spare Parts
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Mahadev Electric Mobility. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-300 text-sm">Serving Uppal & Surrounding Areas</span>
              <span className="text-brand-green text-sm">• 24/7 Support Available</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
