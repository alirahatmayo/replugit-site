'use client'

import { useState, useRef, useEffect } from 'react'

export default function EnvironmentalImpact() {
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

  const impactStats = [
    {
      number: '2.5M',
      label: 'Devices refurbished',
      subtext: 'Since 2018'
    },
    {
      number: '847K',
      label: 'Tons CO₂ saved',
      subtext: 'Equivalent to 184K cars off road'
    },
    {
      number: '99.2%',
      label: 'Customer satisfaction',
      subtext: 'Based on 50K+ reviews'
    },
    {
      number: '156',
      label: 'Jobs created',
      subtext: 'Local employment opportunities'
    }
  ]

  const certifications = [
    'ISO 14001 Environmental',
    'R2 Responsible Recycling',
    'e-Stewards Certified',
    'ENERGY STAR Partner'
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            Environmental impact
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            Every refurbished device prevents e-waste and reduces environmental impact.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center p-8 bg-slate-50 rounded-lg border border-slate-200">
                <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-slate-800 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-slate-600">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Environmental Benefits */}
        <div className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left: Benefits List */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-8">
                How refurbishment helps the planet
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Extends device lifecycle</h4>
                    <p className="text-slate-600">Each refurbished device stays in use 3-5 years longer than typical disposal cycles.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Reduces manufacturing demand</h4>
                    <p className="text-slate-600">Lower demand for new devices means fewer raw materials extracted and processed.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Prevents toxic e-waste</h4>
                    <p className="text-slate-600">Keeps hazardous materials out of landfills and properly manages end-of-life disposal.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Creates circular economy</h4>
                    <p className="text-slate-600">Sustainable business model that benefits environment, economy, and communities.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Visual Impact */}
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
              <div className="text-center mb-6">
                <h4 className="text-xl font-semibold text-slate-900 mb-2">Impact per device</h4>
                <p className="text-slate-600">Average environmental benefit of refurbishment vs. new purchase</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded border">
                  <span className="font-medium text-slate-800">CO₂ Reduction</span>
                  <span className="text-green-600 font-semibold">-340kg</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white rounded border">
                  <span className="font-medium text-slate-800">Water Saved</span>
                  <span className="text-blue-600 font-semibold">12,500L</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white rounded border">
                  <span className="font-medium text-slate-800">Raw Materials</span>
                  <span className="text-purple-600 font-semibold">-85kg</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white rounded border">
                  <span className="font-medium text-slate-800">Energy Saved</span>
                  <span className="text-orange-600 font-semibold">2,400kWh</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Environmental certifications</h3>
            <div className="w-24 h-px bg-slate-300 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-6 bg-slate-50 rounded-lg border border-slate-200">
                <div className="w-12 h-12 bg-slate-200 rounded-full mx-auto mb-4"></div>
                <p className="font-medium text-slate-800">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
