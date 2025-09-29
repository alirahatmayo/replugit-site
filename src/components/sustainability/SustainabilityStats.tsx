'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, Globe, Droplets, Leaf, Trash2, Zap, Users, Building, Award } from 'lucide-react'

export default function SustainabilityStats() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedStats, setAnimatedStats] = useState({
    devicesRefurbished: 0,
    carbonSaved: 0,
    waterSaved: 0,
    energySaved: 0,
    partnersCount: 0,
    certificationsCount: 0
  })

  useEffect(() => {
    setIsVisible(true)
    animateStats()
  }, [])

  const finalStats = {
    devicesRefurbished: 850000, // More realistic number for a growing company
    carbonSaved: 92000, // Tons CO2e - based on updated net savings (avg ~108kg per device)
    waterSaved: 1200000000, // Liters - based on updated blended average
    energySaved: 95000000, // kWh - manufacturing energy saved
    partnersCount: 180, // Global business partners
    certificationsCount: 8 // Industry certifications
  }

  const animateStats = () => {
    const duration = 2000
    const steps = 60
    const increment = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      const progress = currentStep / steps
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)

      setAnimatedStats({
        devicesRefurbished: Math.floor(finalStats.devicesRefurbished * easeOutQuart),
        carbonSaved: Math.floor(finalStats.carbonSaved * easeOutQuart),
        waterSaved: Math.floor(finalStats.waterSaved * easeOutQuart),
        energySaved: Math.floor(finalStats.energySaved * easeOutQuart),
        partnersCount: Math.floor(finalStats.partnersCount * easeOutQuart),
        certificationsCount: Math.floor(finalStats.certificationsCount * easeOutQuart)
      })

      currentStep++
      if (currentStep > steps) {
        clearInterval(timer)
      }
    }, increment)
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1) + 'B'
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toLocaleString()
  }

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-emerald-100 rounded-full text-sm font-medium mb-6 border border-white/20">
              <TrendingUp className="w-4 h-4" />
              Our Impact So Far
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Measurable Results for a{' '}
              <span className="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
                Greener Tomorrow
              </span>
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Since our founding, we've made significant environmental impact through device refurbishment, 
              circular economy practices, and sustainable business operations.
            </p>
          </div>

          {/* Main Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
            {/* Devices Refurbished */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-3">
                {formatNumber(animatedStats.devicesRefurbished)}+
              </div>
              <h3 className="text-lg font-semibold text-emerald-100 mb-2">Devices Refurbished</h3>
              <p className="text-sm text-emerald-200">
                Extending device lifecycles across the globe
              </p>
            </div>

            {/* Carbon Saved */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-3">
                {formatNumber(animatedStats.carbonSaved)}+ tons
              </div>
              <h3 className="text-lg font-semibold text-emerald-100 mb-2">CO₂ Emissions Prevented</h3>
              <p className="text-sm text-emerald-200">
                Equivalent to planting 2.1M trees
              </p>
            </div>

            {/* Water Saved */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-3">
                {formatNumber(animatedStats.waterSaved)}+ L
              </div>
              <h3 className="text-lg font-semibold text-emerald-100 mb-2">Water Conserved</h3>
              <p className="text-sm text-emerald-200">
                Enough to fill 12,000 Olympic pools
              </p>
            </div>

            {/* Energy Saved */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-3">
                {formatNumber(animatedStats.energySaved)}+ kWh
              </div>
              <h3 className="text-lg font-semibold text-emerald-100 mb-2">Energy Saved</h3>
              <p className="text-sm text-emerald-200">
                Powers 15,000 homes for a year
              </p>
            </div>
          </div>

          {/* Secondary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
              <Users className="w-8 h-8 text-emerald-300 mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">{animatedStats.partnersCount}+</div>
              <div className="text-emerald-100">Global Partners</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
              <Award className="w-8 h-8 text-emerald-300 mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">{animatedStats.certificationsCount}</div>
              <div className="text-emerald-100">Certifications</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
              <Building className="w-8 h-8 text-emerald-300 mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">15</div>
              <div className="text-emerald-100">Countries Served</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join the Sustainable Revolution?
            </h3>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Partner with us to reduce your environmental footprint while accessing high-quality, 
              cost-effective refurbished technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-800 px-8 py-4 rounded-2xl font-semibold hover:bg-emerald-50 transition-all duration-300">
                Calculate Your Impact
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300">
                Explore Partnership
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
