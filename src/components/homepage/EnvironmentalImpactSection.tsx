'use client'

import { useState, useRef, useEffect } from 'react'
import { 
  Laptop, 
  Smartphone, 
  Tablet, 
  Monitor,
  Droplets,
  Leaf,
  Trash2,
  Zap,
  Factory,
  Globe,
  RotateCcw
} from 'lucide-react'

export default function EnvironmentalImpactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedDevice, setSelectedDevice] = useState('laptop')
  const [animatedValues, setAnimatedValues] = useState({
    waterSaved: 0,
    carbonReduced: 0,
    wasteAverted: 0,
    energySaved: 0
  })
  const sectionRef = useRef<HTMLDivElement>(null)

  // Environmental impact data based on research
  const deviceData = {
    laptop: {
      name: 'Laptop',
      icon: <Laptop className="w-5 h-5" />,
      refurbishedPerMonth: 850,
      impacts: {
        waterSaved: 12400, // Liters per device
        carbonReduced: 300, // kg CO2 equivalent
        wasteAverted: 15.5, // kg of e-waste
        energySaved: 2100, // kWh equivalent
        rawMaterials: 18.7 // kg of raw materials saved
      },
      details: {
        manufacturing: 'Manufacturing a new laptop requires mining rare earth metals including cobalt, lithium, and gold',
        water: 'Electronic manufacturing uses water-intensive processes for cleaning semiconductors and cooling',
        carbon: 'Transportation, manufacturing, and packaging of new devices create significant carbon emissions',
        waste: 'Extends device lifecycle by 3-5 years, preventing premature disposal'
      }
    },
    smartphone: {
      name: 'Smartphone',
      icon: <Smartphone className="w-5 h-5" />,
      refurbishedPerMonth: 1200,
      impacts: {
        waterSaved: 3400,
        carbonReduced: 70,
        wasteAverted: 0.8,
        energySaved: 950,
        rawMaterials: 1.2
      },
      details: {
        manufacturing: 'Smartphone production requires over 60 different minerals including rare earth elements',
        water: 'Semiconductor fabrication for mobile processors requires ultra-pure water systems',
        carbon: 'Global supply chain and energy-intensive manufacturing processes',
        waste: 'Extends device lifecycle by 2-3 years through professional refurbishment'
      }
    },
    tablet: {
      name: 'Tablet',
      icon: <Tablet className="w-5 h-5" />,
      refurbishedPerMonth: 430,
      impacts: {
        waterSaved: 8900,
        carbonReduced: 150,
        wasteAverted: 2.1,
        energySaved: 1400,
        rawMaterials: 3.8
      },
      details: {
        manufacturing: 'Tablet screens require energy-intensive manufacturing and rare metal extraction',
        water: 'Display manufacturing and battery production consume significant water resources',
        carbon: 'Aluminum processing and glass manufacturing contribute to carbon footprint',
        waste: 'Professional refurbishment prevents premature obsolescence'
      }
    },
    desktop: {
      name: 'Desktop',
      icon: <Monitor className="w-5 h-5" />,
      refurbishedPerMonth: 320,
      impacts: {
        waterSaved: 18500,
        carbonReduced: 400,
        wasteAverted: 22.3,
        energySaved: 3200,
        rawMaterials: 28.4
      },
      details: {
        manufacturing: 'Desktop computers contain multiple components requiring diverse mineral extraction',
        water: 'Cooling systems manufacturing and component production use extensive water',
        carbon: 'Heavy materials and complex assembly processes increase carbon footprint',
        waste: 'Modular design allows component-level refurbishment and lifecycle extension'
      }
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          startAnimation()
        }
      },
      { threshold: 0.1, rootMargin: '20px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // Fallback: ensure content shows after 3 seconds if intersection observer doesn't trigger
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true)
      startAnimation()
    }, 3000)

    return () => {
      observer.disconnect()
      clearTimeout(fallbackTimer)
    }
  }, [])

  const startAnimation = () => {
    const device = deviceData[selectedDevice as keyof typeof deviceData]
    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      const progress = currentStep / steps
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)

      setAnimatedValues({
        waterSaved: Math.floor(device.impacts.waterSaved * easeOutQuart),
        carbonReduced: Math.floor(device.impacts.carbonReduced * easeOutQuart),
        wasteAverted: Math.floor(device.impacts.wasteAverted * easeOutQuart * 10) / 10,
        energySaved: Math.floor(device.impacts.energySaved * easeOutQuart)
      })

      currentStep++
      if (currentStep > steps) {
        clearInterval(timer)
      }
    }, increment)
  }

  useEffect(() => {
    if (isVisible) {
      startAnimation()
    }
  }, [selectedDevice])

  const formatNumber = (num: number, decimals: number = 0) => {
    if (decimals > 0) {
      return num.toFixed(decimals)
    }
    return num.toLocaleString()
  }

  const device = deviceData[selectedDevice as keyof typeof deviceData]
  const monthlyImpact = {
    waterSaved: device.impacts.waterSaved * device.refurbishedPerMonth,
    carbonReduced: device.impacts.carbonReduced * device.refurbishedPerMonth,
    wasteAverted: device.impacts.wasteAverted * device.refurbishedPerMonth,
    energySaved: device.impacts.energySaved * device.refurbishedPerMonth
  }

  return (
    <section ref={sectionRef} className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-emerald-50 via-green-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-24 h-24 bg-emerald-200 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm text-emerald-700 rounded-full text-sm font-medium mb-4 border border-emerald-200 shadow-sm">
              <Globe className="w-4 h-4" />
              Environmental Impact
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
              Every Device Refurbished <br />
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Makes a Real Difference
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              See the measurable environmental impact of choosing refurbished electronics over new ones.
            </p>
          </div>

          {/* Device Selector */}
          <div className="flex justify-center mb-10">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-white/50">
              <div className="flex flex-wrap justify-center gap-1">
                {Object.entries(deviceData).map(([key, data], index) => (
                  <button
                    key={key}
                    onClick={() => setSelectedDevice(key)}
                    className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                      selectedDevice === key
                        ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-md'
                        : 'text-slate-600 hover:text-emerald-600 hover:bg-emerald-50/80'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      selectedDevice === key ? 'bg-white/20' : 'bg-slate-100'
                    }`}>
                      {data.icon}
                    </div>
                    <span className="text-sm">{data.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Impact Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {/* Water Saved */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2">
                {formatNumber(animatedValues.waterSaved)}L
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-2">Water Saved</h3>
              <p className="text-xs text-slate-600">
                Per {device.name.toLowerCase()}
              </p>
            </div>

            {/* Carbon Reduced */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-2">
                {formatNumber(animatedValues.carbonReduced)}kg
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-2">CO₂ Prevented</h3>
              <p className="text-xs text-slate-600">
                Per {device.name.toLowerCase()}
              </p>
            </div>

            {/* Waste Averted */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-2">
                {formatNumber(animatedValues.wasteAverted, 1)}kg
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-2">E-Waste Avoided</h3>
              <p className="text-xs text-slate-600">
                Per {device.name.toLowerCase()}
              </p>
            </div>

            {/* Energy Saved */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent mb-2">
                {formatNumber(animatedValues.energySaved)}
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-2">kWh Saved</h3>
              <p className="text-xs text-slate-600">
                Per {device.name.toLowerCase()}
              </p>
            </div>
          </div>

          {/* Simplified Details Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-6 mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
              Monthly Impact: <span className="text-emerald-600">{device.refurbishedPerMonth} {device.name.toLowerCase()}s</span>
            </h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-lg font-bold text-blue-600">{formatNumber(monthlyImpact.waterSaved / 1000)}K L</div>
                <div className="text-xs text-slate-600">Water Saved</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-green-600">{formatNumber(monthlyImpact.carbonReduced / 1000, 1)} tons</div>
                <div className="text-xs text-slate-600">CO₂ Prevented</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-purple-600">{formatNumber(monthlyImpact.wasteAverted / 1000, 1)} tons</div>
                <div className="text-xs text-slate-600">Waste Diverted</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-orange-600">{formatNumber(monthlyImpact.energySaved / 1000)} MWh</div>
                <div className="text-xs text-slate-600">Energy Saved</div>
              </div>
            </div>
          </div>



        </div>
      </div>
    </section>
  )
}
