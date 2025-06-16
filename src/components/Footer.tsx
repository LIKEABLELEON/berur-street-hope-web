
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-full">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Berur Street Care International</h2>
                <p className="text-gray-400 text-sm">Education as a lasting way out of poverty</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              We believe in school and education as a lasting way out of poverty. 
              We help street children from Eldoret, Kenya get the opportunity to go to school 
              and build brighter futures through God's love.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-300 hover:text-white transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/partner" className="text-gray-300 hover:text-white transition-colors">
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-orange-400" />
                <span className="text-gray-300 text-sm">Eldoret, Kenya</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-400" />
                <span className="text-gray-300 text-sm">+47 917 22 036</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-400" />
                <span className="text-gray-300 text-sm">berurnorge@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Berur Street Care International. All rights reserved. | 
            <span className="ml-1">Registered Charity Organization</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
