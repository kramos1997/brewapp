import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Coffee, 
  Star, 
  Clock, 
  MapPin, 
  Award,
  ArrowRight,
  Leaf,
  Heart
} from 'lucide-react'

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Signature Espresso',
      description: 'Rich, bold espresso with notes of chocolate and caramel',
      price: 3.50,
      image: '/api/placeholder/300/200',
      rating: 4.9,
      isPopular: true
    },
    {
      id: 2,
      name: 'Vanilla Latte',
      description: 'Smooth espresso with steamed milk and vanilla syrup',
      price: 4.75,
      image: '/api/placeholder/300/200',
      rating: 4.8,
      isNew: true
    },
    {
      id: 3,
      name: 'Cold Brew',
      description: 'Slow-steeped for 12 hours, served over ice',
      price: 4.25,
      image: '/api/placeholder/300/200',
      rating: 4.7,
      isPopular: true
    }
  ]

  const features = [
    {
      icon: Coffee,
      title: 'Premium Quality',
      description: 'Sourced from the finest coffee farms worldwide'
    },
    {
      icon: Clock,
      title: 'Fast Service',
      description: 'Order ahead and skip the line'
    },
    {
      icon: Award,
      title: 'Loyalty Rewards',
      description: 'Earn points with every purchase'
    },
    {
      icon: Leaf,
      title: 'Sustainable',
      description: 'Ethically sourced and environmentally conscious'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-200">
                ☕ Premium Coffee Experience
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Crafted with
                <span className="text-amber-600 block">Passion & Precision</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Experience the perfect blend of artisanal coffee craftsmanship and modern convenience. 
                From bean to cup, every sip tells a story.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/menu">
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                    Explore Menu
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  <MapPin className="mr-2 h-4 w-4" />
                  Find Locations
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <Coffee className="h-32 w-32 text-amber-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-center mb-2">BCB Coffee</h3>
                <p className="text-gray-600 text-center">Where every cup matters</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Favorites
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most loved beverages, crafted to perfection by our expert baristas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-200 rounded-t-lg flex items-center justify-center">
                    <Coffee className="h-16 w-16 text-amber-600" />
                  </div>
                  {product.isPopular && (
                    <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                      Popular
                    </Badge>
                  )}
                  {product.isNew && (
                    <Badge className="absolute top-2 left-2 bg-green-500 text-white">
                      New
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-600">
                      ${product.price.toFixed(2)}
                    </span>
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/menu">
              <Button variant="outline" size="lg">
                View Full Menu
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose BCB Coffee?
            </h2>
            <p className="text-xl text-gray-600">
              We're committed to delivering excellence in every aspect of your coffee experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <Icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Coffee Journey?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Join thousands of coffee lovers who trust BCB Coffee for their daily dose of perfection
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button size="lg" variant="secondary" className="bg-white text-amber-600 hover:bg-gray-100">
                <Coffee className="mr-2 h-5 w-5" />
                Order Now
              </Button>
            </Link>
            <Link to="/profile">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600">
                <Heart className="mr-2 h-5 w-5" />
                Join Loyalty Program
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

