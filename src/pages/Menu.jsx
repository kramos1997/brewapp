import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Coffee, Star, Plus } from 'lucide-react'
import { useCart } from '../utils/CartContext'

const Menu = () => {
  const { addToCart } = useCart()
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Items', color: 'bg-gray-600 hover:bg-gray-700' },
    { id: 'coffee', name: 'Coffee', color: 'bg-orange-500 hover:bg-orange-600' },
    { id: 'tea', name: 'Tea', color: 'bg-purple-500 hover:bg-purple-600' },
    { id: 'pastries', name: 'Pastries', color: 'bg-yellow-500 hover:bg-yellow-600' },
    { id: 'desserts', name: 'Desserts', color: 'bg-pink-500 hover:bg-pink-600' }
  ]

  const menuItems = [
    {
      id: 1,
      name: 'Signature Espresso',
      description: 'Rich, bold espresso with notes of chocolate and caramel',
      price: 3.50,
      category: 'coffee',
      rating: 4.9,
      isPopular: true,
      borderColor: 'border-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      id: 2,
      name: 'Honey Lavender Latte',
      description: 'Espresso and steamed milk blended with honey and lavender syrup',
      price: 4.75,
      category: 'coffee',
      rating: 4.8,
      borderColor: 'border-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      id: 3,
      name: 'Coconut Cold Brew',
      description: 'Slow-steeped cold brew made with organic Mexican coffee',
      price: 4.25,
      category: 'coffee',
      rating: 4.7,
      borderColor: 'border-green-500',
      bgColor: 'bg-green-50'
    },
    {
      id: 4,
      name: 'Strawberry Peach Iced Tea',
      description: 'Fresh brewed loose leaf Irish Breakfast tea with strawberry and peach syrup',
      price: 3.25,
      category: 'tea',
      rating: 4.6,
      borderColor: 'border-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      id: 5,
      name: 'Lavender Vanilla Sugar Cookie Bars',
      description: 'A thick vanilla sugar cookie topped with homemade lavender buttercream',
      price: 4.25,
      category: 'pastries',
      rating: 4.5,
      borderColor: 'border-yellow-500',
      bgColor: 'bg-yellow-50'
    },
    {
      id: 6,
      name: 'Strawberry Shortcake Ice Cream Pie',
      description: 'Smooth vanilla cheesecake with creamy strawberry cheesecake filling',
      price: 4.50,
      category: 'desserts',
      rating: 4.8,
      borderColor: 'border-pink-500',
      bgColor: 'bg-pink-50'
    }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory)

  const handleAddToCart = (item) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      customizations: []
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h1>
          <p className="text-xl text-gray-600">Discover our carefully crafted selection</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              className={`text-white font-medium ${
                selectedCategory === category.id 
                  ? category.color.replace('hover:', '') 
                  : category.color
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card 
              key={item.id} 
              className={`hover:shadow-lg transition-shadow duration-300 border-4 ${item.borderColor} ${item.bgColor}`}
            >
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-200 rounded-t-lg flex items-center justify-center">
                  <Coffee className="h-16 w-16 text-amber-600" />
                </div>
                {item.isPopular && (
                  <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                    Popular
                  </Badge>
                )}
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{item.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    ${item.price.toFixed(2)}
                  </span>
                  <Button 
                    size="sm" 
                    className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => handleAddToCart(item)}
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Seasonal Items Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Seasonal Items</h2>
          <p className="text-lg text-gray-600 mb-8">
            We change our seasonal selection at the beginning of each month, so check back to see what's new!
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
            Explore our menu
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Menu

