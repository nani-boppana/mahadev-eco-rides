
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const services = [
    { name: 'Electric Bike Rental', path: '/services/rental' },
    { name: 'Electric Bike Services', path: '/services/repair' },
    { name: 'Lithium Batteries', path: '/services/batteries' },
    { name: 'Spare Parts', path: '/services/parts' }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-brand-green font-roboto">
            Mahadev Electric Mobility
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors ${
                isActive('/') ? 'text-brand-green' : 'text-gray-700 hover:text-brand-green'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${
                isActive('/about') ? 'text-brand-green' : 'text-gray-700 hover:text-brand-green'
              }`}
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-brand-green transition-colors">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg animate-fade-in">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-green transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    className="block px-4 py-3 text-sm font-semibold text-brand-green border-t border-gray-100 hover:bg-gray-50"
                  >
                    View All Services
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`transition-colors ${
                isActive('/contact') ? 'text-brand-green' : 'text-gray-700 hover:text-brand-green'
              }`}
            >
              Contact
            </Link>
            
            <Link
              to="/contact"
              className="bg-brand-green text-white px-6 py-2 rounded-lg hover:bg-dark-green transition-colors hover-scale"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-brand-green transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/') ? 'text-brand-green bg-gray-50' : 'text-gray-700 hover:text-brand-green hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/about') ? 'text-brand-green bg-gray-50' : 'text-gray-700 hover:text-brand-green hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/services') ? 'text-brand-green bg-gray-50' : 'text-gray-700 hover:text-brand-green hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/contact') ? 'text-brand-green bg-gray-50' : 'text-gray-700 hover:text-brand-green hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="block mx-3 mt-4 bg-brand-green text-white px-6 py-2 rounded-lg text-center hover:bg-dark-green transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
