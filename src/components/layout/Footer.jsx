import { Link } from 'react-router-dom'
import { Coffee, MapPin, Phone, Mail, Clock } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold">BCB Coffee</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Experience the finest coffee crafted with passion and precision. 
              From bean to cup, we deliver exceptional quality in every sip.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Multiple locations across the city</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-green-400 transition-colors">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-300 hover:text-green-400 transition-colors">
                  My Account
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="h-4 w-4" />
                <span>(555) 123-COFFEE</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="h-4 w-4" />
                <span>hello@bcbcoffee.com</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-gray-300">
                <Clock className="h-4 w-4 mt-0.5" />
                <div>
                  <div>Mon-Fri: 6:00 AM - 8:00 PM</div>
                  <div>Sat-Sun: 7:00 AM - 9:00 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 BCB Coffee. All rights reserved. Crafted with ❤️ for coffee lovers.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Follow us on Instagram @bcbcoffee
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

