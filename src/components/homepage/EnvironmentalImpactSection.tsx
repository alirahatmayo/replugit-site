'use client'

import { useState, useRef, useEffect } from 'react'
import { 
  Droplets,
  Leaf,
  Trash2,
  Zap,
  Globe,
  TreePine,
  Factory,
  Waves,
  Wind,
  BarChart3,
  TrendingUp,
  Smartphone
} from 'lucide-react'

const EnvironmentalImpactSection = () => {
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

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
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
    const duration = 2500
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

  const CircularProgress = ({ value, max, color, children }: { value: number, max: number, color: string, children: React.ReactNode }) => {
    const percentage = (value / max) * 100
    const strokeDasharray = 2 * Math.PI * 25
    const strokeDashoffset = strokeDasharray - (strokeDasharray * percentage) / 100

    return (
      <div className="relative w-16 h-16">
        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 60 60">
          <circle
            cx="30"
            cy="30"
            r="25"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            className="text-gray-200"
          />
          <circle
            cx="30"
            cy="30"
            r="25"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            className={color}
            style={{
              strokeDasharray,
              strokeDashoffset: isVisible ? strokeDashoffset : strokeDasharray,
              transition: 'stroke-dashoffset 2s ease-in-out'
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      </div>
    )
  }

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 text-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-100/40 via-green-50/60 to-teal-100/40"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400/60 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-green-400/60 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-teal-400/60 rounded-full animate-bounce delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm text-emerald-700 rounded-full text-sm font-medium mb-4 border border-emerald-200 shadow-sm">
            <Globe className="w-4 h-4" />
            Environmental Impact
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight text-slate-900">
            Our Planet,
            <span className="block bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Our Impact
            </span>
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Real-time environmental benefits from our refurbishment operations
          </p>
        </div>

        {/* Main Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column - Main Metric */}
          <div className={`lg:col-span-1 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-2xl p-6 h-full shadow-lg">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl mb-4 shadow-lg">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Devices Transformed</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-2">
                  {formatNumber(animatedValues.devicesRefurbished)}
                </div>
                <p className="text-slate-600 text-sm mb-2">Monthly Refurbishments</p>
                <p className="text-gray-500 text-xs leading-tight">
                  Each refurbished device prevents new manufacturing
                  <br />
                  Saving resources & reducing environmental impact
                </p>
                
                {/* Progress bar */}
                <div className="mt-4">
                  <div className="w-full bg-emerald-100 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-emerald-500 to-green-500 h-2 rounded-full transition-all duration-2000 ease-out shadow-sm"
                      style={{ width: isVisible ? '85%' : '0%' }}
                    ></div>
                  </div>
                  <p className="text-slate-500 text-xs mt-1">85% of monthly target</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Impact Metrics Grid */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
              
              {/* Water Impact */}
              <div className="bg-white/70 backdrop-blur-sm border border-blue-200 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Droplets className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Water Saved</h4>
                      <p className="text-blue-700 text-xs">Manufacturing reduction</p>
                    </div>
                  </div>
                  <CircularProgress value={animatedValues.waterSaved} max={monthlyImpacts.waterSaved} color="text-blue-500">
                    <Waves className="w-4 h-4 text-blue-500" />
                  </CircularProgress>
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">
                  {formatNumber(animatedValues.waterSaved)} L
                </div>
                <p className="text-blue-700 text-xs mb-2">= Clean water for 31,000 people daily</p>
                <p className="text-gray-500 text-xs leading-tight">
                  Each laptop manufacturing requires 12,400L of water
                  <br />
                  Every refurbished device protects these precious resources
                </p>
              </div>

              {/* Carbon Impact */}
              <div className="bg-white/70 backdrop-blur-sm border border-green-200 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <Leaf className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">CO₂ Reduced</h4>
                      <p className="text-green-700 text-xs">Carbon footprint</p>
                    </div>
                  </div>
                  <CircularProgress value={animatedValues.carbonReduced} max={monthlyImpacts.carbonReduced} color="text-green-500">
                    <TreePine className="w-4 h-4 text-green-500" />
                  </CircularProgress>
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">
                  {formatNumber(animatedValues.carbonReduced)} kg
                </div> 
                <p className="text-green-700 text-xs mb-2">= 34,000 trees planted</p>
                <p className="text-gray-500 text-xs leading-tight">
                  Each laptop manufacturing produces 300kg CO₂
                  <br />
                  Refurbishing reduces this carbon footprint significantly
                </p>
              </div>

              {/* Waste Impact */}
              <div className="bg-white/70 backdrop-blur-sm border border-purple-200 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Trash2 className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Waste Prevented</h4>
                      <p className="text-purple-700 text-xs">E-waste reduction</p>
                    </div>
                  </div>
                  <CircularProgress value={animatedValues.wasteAverted} max={monthlyImpacts.wasteAverted} color="text-purple-500">
                    <Factory className="w-4 h-4 text-purple-500" />
                  </CircularProgress>
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">
                  {formatNumber(animatedValues.wasteAverted)} kg
                </div>
                <p className="text-purple-700 text-xs mb-2">= 25 cars worth</p>
                <p className="text-gray-500 text-xs leading-tight">
                  Each laptop manufacturing creates 15.5kg toxic waste
                  <br />
                  Refurbishing keeps this out of landfills
                </p>
              </div>

              {/* Energy Impact */}
              <div className="bg-white/70 backdrop-blur-sm border border-orange-200 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Energy Saved</h4>
                      <p className="text-orange-700 text-xs">Manufacturing power</p>
                    </div>
                  </div>
                  <CircularProgress value={animatedValues.energySaved} max={monthlyImpacts.energySaved} color="text-orange-500">
                    <Wind className="w-4 h-4 text-orange-500" />
                  </CircularProgress>
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">
                  {formatNumber(animatedValues.energySaved)} kWh
                </div>
                <p className="text-orange-700 text-xs mb-2">= 4,800 homes/month</p>
                <p className="text-gray-500 text-xs leading-tight">
                  Each laptop manufacturing consumes 1,020kWh energy
                  <br />
                  Refurbishing conserves this industrial power demand
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default EnvironmentalImpactSection
