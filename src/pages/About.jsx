import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Coffee, Heart, Leaf, Award, Users, MapPin } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Coffee,
      title: 'Quality First',
      description: 'We source only the finest beans from sustainable farms around the world.'
    },
    {
      icon: Heart,
      title: 'Community Focused',
      description: 'Building connections one cup at a time in our local community.'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Committed to environmental responsibility in every aspect of our business.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Striving for perfection in every cup we serve.'
    }
  ]

  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '15', label: 'Locations' },
    { number: '25+', label: 'Coffee Varieties' },
    { number: '5', label: 'Years of Excellence' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-200">
            ☕ Our Story
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About BCB Coffee
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded with a passion for exceptional coffee and community connection, 
            BCB Coffee has been serving premium beverages and creating memorable experiences since 2019.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Journey
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  BCB Coffee began as a dream to create more than just a coffee shop. 
                  We envisioned a place where quality meets community, where every cup 
                  tells a story, and where customers become part of our extended family.
                </p>
                <p>
                  From our humble beginnings with a single location, we've grown to serve 
                  thousands of coffee lovers across multiple cities. But our core mission 
                  remains unchanged: to deliver exceptional coffee experiences while 
                  supporting sustainable farming practices and local communities.
                </p>
                <p>
                  Every bean is carefully selected, every recipe is crafted with precision, 
                  and every interaction is an opportunity to brighten someone's day. 
                  This is what makes BCB Coffee more than just a coffee company – 
                  we're a community of coffee enthusiasts united by our love for the perfect cup.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-100 to-orange-200 rounded-2xl p-8 text-center">
                <Coffee className="h-32 w-32 text-amber-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Since 2019</h3>
                <p className="text-gray-600">Serving exceptional coffee with passion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-amber-100">
              Numbers that tell our story
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-amber-100 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The passionate people behind BCB Coffee
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'Founder & CEO', description: 'Coffee enthusiast with 15 years of industry experience' },
              { name: 'Mike Chen', role: 'Head Barista', description: 'Award-winning barista and coffee roasting expert' },
              { name: 'Emily Rodriguez', role: 'Operations Manager', description: 'Ensuring quality and consistency across all locations' }
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-amber-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-amber-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visit Us Today
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience the BCB Coffee difference at any of our locations
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-gray-600 mb-8">
            <MapPin className="h-5 w-5" />
            <span>Multiple locations across the city</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Downtown', address: '123 Main St, City Center', hours: 'Mon-Fri: 6AM-8PM' },
              { name: 'University', address: '456 College Ave, Campus District', hours: 'Mon-Sun: 7AM-10PM' },
              { name: 'Riverside', address: '789 River Rd, Riverside Plaza', hours: 'Mon-Sun: 6AM-9PM' }
            ].map((location, index) => (
              <Card key={index}>
                <CardContent className="p-4 text-left">
                  <h4 className="font-semibold text-gray-900 mb-2">{location.name}</h4>
                  <p className="text-sm text-gray-600 mb-1">{location.address}</p>
                  <p className="text-sm text-gray-600">{location.hours}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

