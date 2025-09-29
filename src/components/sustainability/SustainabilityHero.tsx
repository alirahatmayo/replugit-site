'use client'

import { useState, useEffect } from 'react'
import { Leaf, Globe, Recycle, Zap, ArrowDown } from 'lucide-react'

export default function SustainabilityHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-blue-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-300 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className={`text-center transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm text-emerald-700 rounded-full text-sm font-medium mb-8 border border-emerald-200 shadow-lg">
              <Globe className="w-4 h-4" />
              Sustainability & Environmental Impact
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl font-bold text-slate-900 mb-8 leading-tight">
              Sustainable Tech,
              <br />
              <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
                Measurable Impact.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
              We believe in a circular economy. By refurbishing devices, we're not just extending their life—we're preventing waste and significantly reducing the environmental cost of technology.
            </p>

            {/* Key Stats Preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/50">
                <Leaf className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-900 mb-1">850K+</div>
                <div className="text-sm text-slate-600">Devices Refurbished</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/50">
                <Recycle className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-900 mb-1">92K+</div>
                <div className="text-sm text-slate-600">Tonnes CO₂e Saved</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/50">
                <Zap className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-900 mb-1">95M+</div>
                <div className="text-sm text-slate-600">kWh Energy Saved</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/50">
                <Globe className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-900 mb-1">1.2B+</div>
                <div className="text-sm text-slate-600">Liters Water Saved</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                Calculate Your Impact
              </button>
              <button className="bg-white/80 backdrop-blur-sm text-slate-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/50">
                View Our Research
              </button>
            </div>

            {/* Scroll indicator */}
            <div className="animate-bounce">
              <ArrowDown className="w-6 h-6 text-slate-400 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
