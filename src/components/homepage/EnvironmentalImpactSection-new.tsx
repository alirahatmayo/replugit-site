'use client'

import { useState, useRef, useEffect } from 'react'
import { 
  Droplets,
  Leaf,
  Trash2,
  Zap,
  Globe,
  TreePine,
  Car,
  Lightbulb,
  Recycle,
  Target,
  TrendingUp
} from 'lucide-react'

export default function EnvironmentalImpactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState({
    devicesRefurbished: 0,
    waterSaved: 0,
    carbonReduced: 0,
    wasteAverted: 0,
    energySaved: 0
  })
  const sectionRef = useRef<HTMLDivElement>(null)

  // Real impact data - monthly averages
  const monthlyImpacts = {
    devicesRefurbished: 2500,
    waterSaved: 31000000, // Liters
    carbonReduced: 750000, // kg CO2
    wasteAverted: 38750, // kg e-waste
    energySaved: 5250000 // kWh
  }

  // Impact cards data
  const impactCards = [
    {
      id: 'water',
      title: 'Water Conservation',
      icon: Droplets,
      value: monthlyImpacts.waterSaved,
      unit: 'Liters',
      color: 'blue',
      description: 'Water saved from manufacturing processes',
      comparison: 'Enough for 620,000 showers',
      visualIcon: Droplets,
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 'carbon',
      title: 'Carbon Reduction',
      icon: Leaf,
      value: monthlyImpacts.carbonReduced,
      unit: 'kg CO₂',
      color: 'green',
      description: 'Carbon emissions prevented',
      comparison: 'Same as planting 34,000 trees',
      visualIcon: TreePine,
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      id: 'waste',
      title: 'E-Waste Reduction',
      icon: Recycle,
      value: monthlyImpacts.wasteAverted,
      unit: 'kg',
      color: 'purple',
      description: 'Electronic waste diverted from landfills',
      comparison: 'Weight of 25 cars prevented from disposal',
      visualIcon: Trash2,
      gradient: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      id: 'energy',
      title: 'Energy Conservation',
      icon: Zap,
      value: monthlyImpacts.energySaved,
      unit: 'kWh',
      color: 'orange',
      description: 'Energy saved in manufacturing',
      comparison: 'Powers 4,800 homes for a month',
      visualIcon: Lightbulb,
      gradient: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  ]

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          startAnimation()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  const startAnimation = () => {
    if (isVisible) return

    // Animate the counters
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps

      setAnimatedValues({
        devicesRefurbished: Math.floor(monthlyImpacts.devicesRefurbished * progress),
        waterSaved: Math.floor(monthlyImpacts.waterSaved * progress),
        carbonReduced: Math.floor(monthlyImpacts.carbonReduced * progress),
        wasteAverted: Math.floor(monthlyImpacts.wasteAverted * progress),
        energySaved: Math.floor(monthlyImpacts.energySaved * progress)
      })

      if (step >= steps) {
        clearInterval(timer)
        setAnimatedValues(monthlyImpacts)
      }
    }, stepDuration)
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K'
    }
    return num.toLocaleString()
  }

  const getCardColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-600 bg-blue-100 border-blue-200',
      green: 'text-green-600 bg-green-100 border-green-200',
      purple: 'text-purple-600 bg-purple-100 border-purple-200',
      orange: 'text-orange-600 bg-orange-100 border-orange-200'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-green-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-100 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm text-emerald-700 rounded-full text-sm font-medium mb-6 border border-emerald-200 shadow-sm">
              <Globe className="w-4 h-4" />
              Environmental Impact
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              Real Impact,
              <span className="block bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Real Numbers
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Every month, our refurbished electronics make a measurable difference for our planet
            </p>
          </div>

          {/* Total Devices Counter */}
          <div className="text-center mb-12">
            <div className="inline-block p-8 bg-white rounded-3xl shadow-xl border border-slate-200">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-4xl font-bold text-slate-900">
                    {formatNumber(animatedValues.devicesRefurbished)}
                  </div>
                  <div className="text-slate-600 text-sm font-medium">Devices Refurbished Monthly</div>
                </div>
              </div>
              <div className="text-emerald-600 text-sm font-medium flex items-center justify-center gap-1">
                <TrendingUp className="w-4 h-4" />
                Growing every month
              </div>
            </div>
          </div>

          {/* Mobile: Horizontal Impact Cards */}
          <div className="md:hidden mb-8">
            <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
              <div className="flex gap-4 px-4 w-max">
                {impactCards.map((card, index) => {
                  const IconComponent = card.icon
                  const VisualIcon = card.visualIcon
                  return (
                    <div
                      key={card.id}
                      className="flex-none w-80 snap-center"
                    >
                      <div className={`h-full p-6 rounded-2xl bg-white border shadow-lg hover:shadow-xl transition-all duration-300 ${card.borderColor} relative overflow-hidden`}>
                        {/* Background gradient */}
                        <div className={`absolute top-0 right-0 w-24 h-24 ${card.bgColor} rounded-full -translate-y-12 translate-x-12 opacity-50`}></div>
                        
                        <div className="relative z-10">
                          {/* Header */}
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`w-12 h-12 rounded-xl ${getCardColorClasses(card.color)} flex items-center justify-center`}>
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="font-bold text-slate-900">{card.title}</h3>
                              <p className="text-slate-600 text-sm">{card.description}</p>
                            </div>
                          </div>

                          {/* Main Stat */}
                          <div className="text-center py-6">
                            <div className="text-4xl font-bold text-slate-900 mb-2">
                              {formatNumber(animatedValues[card.id as keyof typeof animatedValues] || card.value)}
                            </div>
                            <div className="text-slate-600 font-medium">{card.unit} Monthly</div>
                          </div>

                          {/* Comparison */}
                          <div className={`p-4 rounded-xl ${card.bgColor} border ${card.borderColor}`}>
                            <div className="flex items-center gap-3">
                              <VisualIcon className={`w-5 h-5 ${card.color === 'blue' ? 'text-blue-600' : card.color === 'green' ? 'text-green-600' : card.color === 'purple' ? 'text-purple-600' : 'text-orange-600'}`} />
                              <p className="text-sm text-slate-700 font-medium">{card.comparison}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Mobile Navigation Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {impactCards.map((card, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    card.color === 'blue' ? 'bg-blue-400' :
                    card.color === 'green' ? 'bg-green-400' :
                    card.color === 'purple' ? 'bg-purple-400' :
                    'bg-orange-400'
                  }`}
                />
              ))}
            </div>

            {/* Mobile Swipe Hint */}
            <div className="text-center mt-4">
              <p className="text-slate-500 text-xs font-medium flex items-center justify-center gap-2">
                <span>←</span>
                <span>Swipe to see our impact</span>
                <span>→</span>
              </p>
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactCards.map((card, index) => {
              const IconComponent = card.icon
              const VisualIcon = card.visualIcon
              return (
                <div
                  key={card.id}
                  className={`p-6 rounded-2xl bg-white border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${card.borderColor} relative overflow-hidden`}
                >
                  {/* Background gradient */}
                  <div className={`absolute top-0 right-0 w-20 h-20 ${card.bgColor} rounded-full -translate-y-10 translate-x-10 opacity-50`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl ${getCardColorClasses(card.color)} flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-slate-900 mb-2">{card.title}</h3>

                    {/* Main Stat */}
                    <div className="text-3xl font-bold text-slate-900 mb-1">
                      {formatNumber(animatedValues[card.id as keyof typeof animatedValues] || card.value)}
                    </div>
                    <div className="text-slate-600 text-sm font-medium mb-4">{card.unit} Monthly</div>

                    {/* Comparison */}
                    <div className={`p-3 rounded-lg ${card.bgColor} border ${card.borderColor}`}>
                      <div className="flex items-center gap-2">
                        <VisualIcon className={`w-4 h-4 ${card.color === 'blue' ? 'text-blue-600' : card.color === 'green' ? 'text-green-600' : card.color === 'purple' ? 'text-purple-600' : 'text-orange-600'}`} />
                        <p className="text-xs text-slate-700 font-medium">{card.comparison}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="inline-block p-6 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-2">Join Our Environmental Mission</h3>
              <p className="text-emerald-100 mb-4">Every refurbished device counts towards a sustainable future</p>
              <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 border border-white/30">
                Explore Our Solutions
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
