'use client'

import { useState, useRef, useEffect } from 'react'

export default function ReplugitDifference() {
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
    <section id="difference" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            How we deliver results
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            Our systematic approach ensures quality, transparency, and measurable impact.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Track Everything */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-10 h-10 bg-slate-800 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Track Everything</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Real-time visibility into every step with detailed progress reports and complete device history.
              </p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Device #4521</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Active</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-slate-700">Intake Complete</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-slate-700">Refurbishment Complete</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-slate-700">Testing in Progress</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-3 h-3 bg-slate-300 rounded-full mr-3"></div>
                    <span className="text-slate-400">Final Certification</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Test Everything */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-10 h-10 bg-slate-800 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Test Everything</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                47-point quality inspection covering hardware, performance, and cosmetic standards.
              </p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg">
              <h4 className="font-semibold text-slate-900 mb-4 text-sm">Quality Check Results</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">CPU Performance:</span>
                  <span className="text-green-600 font-medium">PASS (97%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Display Quality:</span>
                  <span className="text-green-600 font-medium">PASS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Battery Health:</span>
                  <span className="text-green-600 font-medium">PASS (94%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Connectivity:</span>
                  <span className="text-green-600 font-medium">PASS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Physical Condition:</span>
                  <span className="text-green-600 font-medium">Grade A</span>
                </div>
              </div>
            </div>
          </div>

          {/* Prove Everything */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-10 h-10 bg-slate-800 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Prove Everything</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Quantified environmental impact with detailed sustainability reporting.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="font-semibold text-slate-900 mb-4 text-sm">Environmental Impact</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">70kg</div>
                  <div className="text-xs text-slate-600">CO₂ Saved</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">4 years</div>
                  <div className="text-xs text-slate-600">Extended Life</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">15kg</div>
                  <div className="text-xs text-slate-600">E-waste Avoided</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">3 trees</div>
                  <div className="text-xs text-slate-600">Equivalent</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 text-lg font-medium transition-all duration-200 rounded-lg shadow-lg">
              Get Started Today
            </button>
          </div>
          
          {/* Quick Links to Details */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <button className="text-slate-600 hover:text-green-600 underline underline-offset-4">
              View detailed process →
            </button>
            <button className="text-slate-600 hover:text-green-600 underline underline-offset-4">
              Explore our technology →
            </button>
            <button className="text-slate-600 hover:text-green-600 underline underline-offset-4">
              Learn about partnerships →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
