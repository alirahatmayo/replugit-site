'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white px-8 sm:px-12 md:px-16 lg:px-20">
      
      {/* Main Content Card */}
      <div className="relative z-10 w-full max-w-3xl mx-auto">
        <div className={`bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20 px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Main Message */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-8 tracking-tight">
              End-to-end device
              <span className="block font-semibold text-slate-800">lifecycle solutions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
              We combine hands-on refurbishing services with powerful software tools that streamline everything from procurement to resale — including inventory, orders, warranties, compliance, and returns.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 text-lg font-medium transition-all duration-200 rounded-lg shadow-lg">
                Explore Our Services
              </button>
              <button className="text-slate-700 hover:text-green-600 px-10 py-4 text-lg font-medium border-b-2 border-transparent hover:border-green-500 transition-all duration-200">
                View Platform Tools
              </button>
            </div>
          </div>

          {/* Key Points */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 text-center border border-slate-200/50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Refurbishing Services</h3>
              <p className="text-slate-600 leading-relaxed">Complete device lifecycle management from C-Grade to A-Grade transformation with quality assurance.</p>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 text-center border border-slate-200/50">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Software Platform</h3>
              <p className="text-slate-600 leading-relaxed">Modular suite of tools for inventory, orders, warranties, compliance, and competitive analytics.</p>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 text-center border border-slate-200/50">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-green-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">B2B Solutions</h3>
              <p className="text-slate-600 leading-relaxed">End-to-end coverage from procurement to resale with compliance certifications and sustainability focus.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
