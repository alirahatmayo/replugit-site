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
    const strokeDasharray = 2 * Math.PI * 45
    const strokeDashoffset = strokeDasharray - (strokeDasharray * percentage) / 100

    return (
      <div className="relative w-32 h-32">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-gray-200"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
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
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 text-slate-900 relative overflow-hidden">
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
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm text-emerald-700 rounded-full text-sm font-medium mb-6 border border-emerald-200 shadow-sm">
            <Globe className="w-4 h-4" />
            Environmental Impact
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-slate-900">
            Our Planet,
            <span className="block bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Our Impact
            </span>
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Real-time environmental benefits from our refurbishment operations
          </p>
        </div>

        {/* Main Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Left Column - Main Metric */}
          <div className={`lg:col-span-1 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-3xl p-8 h-full shadow-xl">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl mb-6 shadow-lg">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Devices Transformed</h3>
                <div className="text-6xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-4">
                  {formatNumber(animatedValues.devicesRefurbished)}
                </div>
                <p className="text-slate-600 text-lg">Monthly Refurbishments</p>
                
                {/* Progress bar */}
                <div className="mt-8">
                  <div className="w-full bg-emerald-100 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-emerald-500 to-green-500 h-3 rounded-full transition-all duration-2000 ease-out shadow-sm"
                      style={{ width: isVisible ? '85%' : '0%' }}
                    ></div>
                  </div>
                  <p className="text-slate-500 text-sm mt-2">85% of monthly target</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Impact Metrics Grid */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
              
              {/* Water Impact */}
              <div className="bg-white/70 backdrop-blur-sm border border-blue-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Droplets className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Water Saved</h4>
                      <p className="text-blue-700 text-sm">Manufacturing reduction</p>
                    </div>
                  </div>
                  <CircularProgress value={animatedValues.waterSaved} max={monthlyImpacts.waterSaved} color="text-blue-500">
                    <Waves className="w-6 h-6 text-blue-500" />
                  </CircularProgress>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {formatNumber(animatedValues.waterSaved)}L
                </div>
                <p className="text-blue-700 text-sm">= 620,000 showers</p>
              </div>

              {/* Carbon Impact */}
              <div className="bg-white/70 backdrop-blur-sm border border-green-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Leaf className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">CO₂ Reduced</h4>
                      <p className="text-green-700 text-sm">Carbon footprint</p>
                    </div>
                  </div>
                  <CircularProgress value={animatedValues.carbonReduced} max={monthlyImpacts.carbonReduced} color="text-green-500">
                    <TreePine className="w-6 h-6 text-green-500" />
                  </CircularProgress>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {formatNumber(animatedValues.carbonReduced)}kg
                </div>
                <p className="text-green-700 text-sm">= 34,000 trees planted</p>
              </div>

              {/* Waste Impact */}
              <div className="bg-white/70 backdrop-blur-sm border border-purple-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Trash2 className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Waste Prevented</h4>
                      <p className="text-purple-700 text-sm">E-waste reduction</p>
                    </div>
                  </div>
                  <CircularProgress value={animatedValues.wasteAverted} max={monthlyImpacts.wasteAverted} color="text-purple-500">
                    <Factory className="w-6 h-6 text-purple-500" />
                  </CircularProgress>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {formatNumber(animatedValues.wasteAverted)}kg
                </div>
                <p className="text-purple-700 text-sm">= 25 cars worth</p>
              </div>

              {/* Energy Impact */}
              <div className="bg-white/70 backdrop-blur-sm border border-orange-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Energy Saved</h4>
                      <p className="text-orange-700 text-sm">Manufacturing power</p>
                    </div>
                  </div>
                  <CircularProgress value={animatedValues.energySaved} max={monthlyImpacts.energySaved} color="text-orange-500">
                    <Wind className="w-6 h-6 text-orange-500" />
                  </CircularProgress>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {formatNumber(animatedValues.energySaved)}kWh
                </div>
                <p className="text-orange-700 text-sm">= 4,800 homes/month</p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-2xl p-6 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Monthly Impact Growth</h3>
                  <p className="text-slate-600">Tracking our environmental progress</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-xl border border-emerald-200 shadow-sm">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
                <span className="text-emerald-700 font-medium">+23% this quarter</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block p-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-3xl shadow-2xl border border-emerald-300">
            <h3 className="text-2xl font-bold mb-3 text-white">Join Our Environmental Mission</h3>
            <p className="text-emerald-50 mb-6 text-lg">Every refurbished device contributes to a sustainable future</p>
            <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 border border-white/30 backdrop-blur-sm text-lg shadow-lg hover:shadow-xl">
              Explore Our Impact →
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default EnvironmentalImpactSection
