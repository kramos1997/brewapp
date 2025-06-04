import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Coffee, 
  Menu as MenuIcon, 
  ShoppingCart, 
  User, 
  X,
  Home,
  Info
} from 'lucide-react'
import { useCart } from '../../utils/CartContext'
import bcbLogo from '../../assets/bcb_coffee_logo.jpeg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartItems } = useCart()
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/', icon: Home, color: 'bg-blue-500 hover:bg-blue-600' },
    { name: 'Menu', href: '/menu', icon: Coffee, color: 'bg-orange-500 hover:bg-orange-600' },
    { name: 'About', href: '/about', icon: Info, color: 'bg-purple-500 hover:bg-purple-600' },
  ]

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={bcbLogo} 
              alt="BCB Coffee" 
              className="h-12 w-12 rounded-full object-cover border-2 border-green-500"
            />
            <span className="text-2xl font-bold text-gray-900">BCB Coffee</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors ${
                    isActive
                      ? item.color.replace('hover:', '')
                      : item.color
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="sm" className="relative hover:bg-green-50">
                <ShoppingCart className="h-5 w-5 text-green-600" />
                {cartItemCount > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs bg-green-500 hover:bg-green-600"
                  >
                    {cartItemCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Profile */}
            <Link to="/profile">
              <Button variant="ghost" size="sm" className="hover:bg-green-50">
                <User className="h-5 w-5 text-green-600" />
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden hover:bg-green-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-green-600" />
              ) : (
                <MenuIcon className="h-5 w-5 text-green-600" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.href
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium text-white transition-colors ${
                      isActive
                        ? item.color.replace('hover:', '')
                        : item.color
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

