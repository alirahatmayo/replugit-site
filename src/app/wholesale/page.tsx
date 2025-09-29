'use client'

import { useState } from 'react'

export default function WholesalePage() {
  const [activeCategory, setActiveCategory] = useState<'laptops' | 'desktops' | 'phones' | 'tablets' | 'accessories' | 'servers' | 'networking' | 'audio'>('laptops')

  const categories = {
    laptops: {
      title: 'Business Laptops',
      description: 'Professional-grade laptops for business and enterprise use',
      icon: '💻',
      color: 'emerald',
      items: [
        'Dell Latitude Series',
        'HP EliteBook Series', 
        'Lenovo ThinkPad Series',
        'Microsoft Surface Pro',
        'MacBook Pro & Air',
        'Gaming Laptops',
        'Ultrabooks',
        'Custom Configuration Available'
      ]
    },
    desktops: {
      title: 'Desktop Systems',
      description: 'Reliable desktop computers for office and industrial applications',
      icon: '🖥️',
      color: 'blue',
      items: [
        'Dell OptiPlex Series',
        'HP ProDesk Series',
        'Lenovo ThinkCentre Series',
        'iMac & Mac Mini',
        'All-in-One Solutions',
        'Gaming Desktops',
        'Workstations',
        'Custom Builds Available'
      ]
    },
    phones: {
      title: 'Smartphones',
      description: 'Enterprise and consumer smartphones for business communication',
      icon: '📱',
      color: 'purple',
      items: [
        'iPhone Models (Latest & Previous Gen)',
        'Samsung Galaxy Series',
        'Google Pixel Devices',
        'OnePlus Smartphones',
        'Refurbished Options',
        'Enterprise Bulk Orders',
        'Carrier Unlocked Models',
        'Accessories Included'
      ]
    },
    tablets: {
      title: 'Tablets & 2-in-1s',
      description: 'Versatile tablets and convertible devices for mobile productivity',
      icon: '📲',
      color: 'indigo',
      items: [
        'iPad & iPad Pro',
        'Microsoft Surface Tablets',
        'Samsung Galaxy Tab Series',
        'Android Business Tablets',
        'Rugged Tablets',
        '2-in-1 Convertibles',
        'Digital Drawing Tablets',
        'Bulk Educational Pricing'
      ]
    },
    accessories: {
      title: 'Components & Accessories',
      description: 'Essential components and accessories for complete solutions',
      icon: '🔌',
      color: 'amber',
      items: [
        'Monitors & Displays (4K, Ultra-wide)',
        'Keyboards & Mice (Wireless/Wired)',
        'Docking Stations & Hubs',
        'Memory & Storage (SSD/HDD)',
        'Power Adapters & Cables',
        'Webcams & Audio Equipment',
        'Cases & Protection',
        'Charging Solutions'
      ]
    },
    servers: {
      title: 'Server Equipment',
      description: 'Enterprise server solutions for data centers and businesses',
      icon: '🖧',
      color: 'red',
      items: [
        'Rack Servers (1U, 2U, 4U)',
        'Tower Servers',
        'Blade Server Systems',
        'Storage Systems & NAS',
        'Enterprise Switches',
        'UPS & Power Solutions',
        'Server Accessories',
        'Refurbished Enterprise Gear'
      ]
    },
    networking: {
      title: 'Networking Equipment',
      description: 'Professional networking hardware for enterprise connectivity',
      icon: '🌐',
      color: 'cyan',
      items: [
        'Enterprise Routers',
        'Managed Switches',
        'Wireless Access Points',
        'Firewalls & Security',
        'Network Cables & Fiber',
        'Patch Panels',
        'Network Monitoring Tools',
        'Cisco, Ubiquiti, Netgear'
      ]
    },
    audio: {
      title: 'Audio & Visual',
      description: 'Professional audio visual equipment and consumer electronics',
      icon: '🎧',
      color: 'pink',
      items: [
        'Professional Headphones',
        'Conference Room Systems',
        'Speakers & Sound Bars',
        'Microphones & Recording',
        'Projectors & Displays',
        'Smart TVs',
        'Streaming Devices',
        'AV Cables & Adapters'
      ]
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900">
        <div className="max-w-7xl mx-auto text-center text-white">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/20 backdrop-blur-sm text-emerald-300 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-emerald-500/30">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span>Bulk Electronics Distribution</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Wholesale Electronics
            <span className="block text-emerald-400">Distribution</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Our core business serving retailers, resellers, and enterprises with quality electronic equipment at competitive wholesale prices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">
              Request Wholesale Pricing
            </button>
            <button className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300">
              Download Inventory
            </button>
          </div>
        </div>
      </section>

      {/* Business Benefits
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose Our Wholesale Program</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Established wholesale operations with reliable supply chains and competitive pricing for business customers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Bulk Pricing</h3>
              <p className="text-slate-600 leading-relaxed">
                Competitive wholesale rates for volume purchases. Tiered pricing structure rewards larger orders with better margins.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">📦</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Reliable Supply</h3>
              <p className="text-slate-600 leading-relaxed">
                Consistent inventory availability with established supplier relationships. Regular stock updates and availability forecasting.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Business Support</h3>
              <p className="text-slate-600 leading-relaxed">
                Dedicated account management, flexible payment terms, and logistics support for your business needs.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Product Categories */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Product Catalog
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Product Categories</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive selection of business electronics and equipment with competitive wholesale pricing
            </p>
          </div>
          
          {/* Category Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
            {Object.entries(categories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key as any)}
                className={`group relative p-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === key
                    ? `bg-${category.color}-600 text-white shadow-xl`
                    : 'bg-white text-slate-600 hover:bg-slate-50 shadow-lg border border-slate-200'
                }`}
              >
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-2xl md:text-3xl">{category.icon}</span>
                  <span className="text-xs md:text-sm font-medium text-center leading-tight">
                    {category.title}
                  </span>
                </div>
                
                {/* Active indicator */}
                {activeCategory === key && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-lg"></div>
                )}
              </button>
            ))}
          </div>
          
          {/* Active Category Content */}
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
            {/* Category Header */}
            <div className={`bg-gradient-to-r from-${categories[activeCategory].color}-600 to-${categories[activeCategory].color}-700 p-8 text-white`}>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-4xl">{categories[activeCategory].icon}</span>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold">
                    {categories[activeCategory].title}
                  </h3>
                  <p className="text-lg md:text-xl opacity-90 mt-2">
                    {categories[activeCategory].description}
                  </p>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm opacity-80">Models Available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">48h</div>
                  <div className="text-sm opacity-80">Shipping Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">15%+</div>
                  <div className="text-sm opacity-80">Bulk Discounts</div>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {categories[activeCategory].items.map((item, index) => (
                  <div key={index} className="group bg-slate-50 rounded-xl p-4 hover:bg-slate-100 transition-all duration-300 hover:shadow-lg border border-slate-100">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full bg-${categories[activeCategory].color}-500 flex-shrink-0`}></div>
                      <div className="text-sm font-medium text-slate-900 group-hover:text-slate-700">
                        {item}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Call to Action */}
              <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      Interested in {categories[activeCategory].title}?
                    </h4>
                    <p className="text-slate-600">
                      Get wholesale pricing and availability for this category
                    </p>
                  </div>
                  <div className="flex space-x-3">
                    <button className={`bg-${categories[activeCategory].color}-600 hover:bg-${categories[activeCategory].color}-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300`}>
                      Get Quote
                    </button>
                    <button className="border-2 border-slate-300 text-slate-700 hover:bg-slate-100 px-6 py-3 rounded-xl font-semibold transition-colors duration-300">
                      View Catalog
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Community Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-6 py-3 rounded-full text-sm font-medium mb-8">
            <span className="text-2xl">💬</span>
            <span>Join Our Community</span>
          </div>
          
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Join Our Wholesale WhatsApp Group</h2>
          <p className="text-xl text-slate-600 mb-8">
            Connect with other wholesale partners, get instant updates on new inventory, exclusive deals, and direct communication with our team.
          </p>
          
          <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Instant Updates</h3>
                <p className="text-slate-600 text-sm">Get notified about new stock arrivals and special wholesale offers</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Direct Communication</h3>
                <p className="text-slate-600 text-sm">Quick responses from our wholesale team for urgent inquiries</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Partner Network</h3>
                <p className="text-slate-600 text-sm">Connect with other wholesale partners and share opportunities</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://chat.whatsapp.com/KdPqKlFB1eS6AO3I5mConi" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3">
              <span className="text-2xl">📱</span>
              <span>Join WhatsApp Community</span>
            </a>
            <button className="border-2 border-green-600 text-green-700 hover:bg-green-50 px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300">
              Get Group Link via Email
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Start Wholesale Purchasing?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Get in touch with our wholesale team to discuss pricing, availability, and custom requirements.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-emerald-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Wholesale Inquiries</h3>
              <p className="text-slate-600 mb-6">
                Contact our wholesale team for pricing, availability, and custom orders.
              </p>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300">
                Contact Wholesale Team
              </button>
            </div>
            
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Account Setup</h3>
              <p className="text-slate-600 mb-6">
                Establish a wholesale account with credit terms and preferred pricing.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300">
                Apply for Account
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
