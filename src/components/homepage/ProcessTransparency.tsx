'use client'

import { useState, useRef, useEffect } from 'react'

export default function ProcessTransparency() {
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

  const processSteps = [
    {
      day: 'Day 1',
      title: 'Intake & Assessment',
      description: 'Device logging, initial evaluation, and customer notification with tracking details.'
    },
    {
      day: 'Day 2-3',
      title: 'Refurbishment',
      description: 'Component upgrades, repairs, cleaning, and system optimization by certified technicians.'
    },
    {
      day: 'Day 4-5',
      title: 'Quality Testing',
      description: '47-point inspection covering hardware, software, performance, and cosmetic standards.'
    },
    {
      day: 'Day 6',
      title: 'Certification & Delivery',
      description: 'Final quality approval, documentation package, and device return with warranty.'
    }
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            Our refurbishment process
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            Transparent, efficient, and comprehensive. Track every step from intake to delivery.
          </p>
        </div>

        {/* Process Timeline */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-8">
                
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center font-semibold text-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1 bg-white p-8 rounded-lg border border-slate-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                          {step.day}
                        </span>
                        <h3 className="text-xl font-semibold text-slate-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Status Indicator */}
                    <div className="mt-4 md:mt-0 md:ml-8">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className={`mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Why our process works</h3>
            <div className="w-24 h-px bg-slate-300 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg border border-slate-200">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-slate-800 rounded-full"></div>
              </div>
              <h4 className="font-semibold text-lg text-slate-900 mb-3">Complete Transparency</h4>
              <p className="text-slate-600">Track every milestone with real-time updates and detailed reporting.</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-lg border border-slate-200">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-slate-800 rounded-full"></div>
              </div>
              <h4 className="font-semibold text-lg text-slate-900 mb-3">Consistent Quality</h4>
              <p className="text-slate-600">Standardized processes ensure every device meets Grade A standards.</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-lg border border-slate-200">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-slate-800 rounded-full"></div>
              </div>
              <h4 className="font-semibold text-lg text-slate-900 mb-3">Predictable Timeline</h4>
              <p className="text-slate-600">Know exactly when your devices will be ready with our 6-day process.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
