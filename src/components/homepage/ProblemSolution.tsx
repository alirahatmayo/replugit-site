'use client'

import { useState, useRef, useEffect } from 'react'

export default function ProblemSolution() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" ref={sectionRef} className="py-20">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span>Industry Innovation Leader</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Electronics
            <span className="block bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
              Transformation
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Advanced refurbishment technology that converts electronic waste into 
            <span className="text-slate-900 font-semibold"> high-value digital assets </span>
            with complete transparency and measurable impact.
          </p>
        </div>
        
        {/* Metrics */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-1">99.8%</div>
            <div className="text-slate-500 text-sm">Success Rate</div>
          </div>
          <div className="w-px h-12 bg-slate-300"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">Real-Time</div>
            <div className="text-slate-500 text-sm">Tracking</div>
          </div>
          <div className="w-px h-12 bg-slate-300"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">89%</div>
            <div className="text-slate-500 text-sm">CO₂ Reduction</div>
          </div>
          <div className="w-px h-12 bg-slate-300"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-1">4.2x</div>
            <div className="text-slate-500 text-sm">Average ROI</div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <button className="group px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105">
            <span className="flex items-center gap-2">
              Transform Your Electronics
              <div className="w-4 h-4 bg-white/30 rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </span>
          </button>
          
          <button className="group px-8 py-3 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-semibold rounded-xl transition-all duration-300">
            <span className="flex items-center gap-2">
              View Live Demo
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </button>
        </div>
        
        <p className="text-center text-slate-500 text-sm">
          Trusted by 2,800+ companies • ISO 14001 Certified • Global Coverage
        </p>
        
        {/* Problem Statement */}
        <div className="mt-20 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-6 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>Industry Crisis</span>
            </div>
            
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              54 million tons of e-waste generated annually
            </h3>
            
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Only 20% is properly recycled while 80% ends up in landfills, 
              losing billions in recoverable value and causing environmental damage.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-red-200">
                <div className="text-2xl font-bold text-red-600 mb-2">$57B</div>
                <div className="text-sm text-slate-600">Lost Material Value</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-orange-200">
                <div className="text-2xl font-bold text-orange-600 mb-2">2.6M</div>
                <div className="text-sm text-slate-600">Tons CO₂ Emissions</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
                <div className="text-2xl font-bold text-slate-600 mb-2">80%</div>
                <div className="text-sm text-slate-600">Improperly Disposed</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Solution Statement */}
        <div className="mt-12 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-100">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-6 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span>Our Solution</span>
            </div>
            
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Turn Grade C waste into Grade A revenue
            </h3>
            
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Our advanced refurbishment process recovers maximum value from electronic waste 
              while providing complete transparency and environmental impact measurement.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200">
                <div className="text-2xl font-bold text-emerald-600 mb-2">95%</div>
                <div className="text-sm text-slate-600">Value Recovery</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-green-200">
                <div className="text-2xl font-bold text-green-600 mb-2">89%</div>
                <div className="text-sm text-slate-600">CO₂ Reduction</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
                <div className="text-2xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-sm text-slate-600">Transparency</div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
