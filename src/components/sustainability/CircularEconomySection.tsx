'use client'

import { useState, useEffect } from 'react'
import { RotateCcw, ArrowRight, Recycle, Wrench, Package, Truck, CheckCircle } from 'lucide-react'

export default function CircularEconomySection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    
    // Auto-cycle through steps
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const circularSteps = [
    {
      id: 1,
      title: 'Collection',
      description: 'Devices are collected from enterprises and consumers through our global network',
      icon: <Package className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Assessment',
      description: 'Each device undergoes comprehensive testing and quality assessment',
      icon: <CheckCircle className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 3,
      title: 'Refurbishment',
      description: 'Professional restoration using certified processes and genuine parts',
      icon: <Wrench className="w-8 h-8" />,
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      id: 4,
      title: 'Quality Control',
      description: 'Rigorous testing ensures devices meet our high-quality standards',
      icon: <CheckCircle className="w-8 h-8" />,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 5,
      title: 'Redistribution',
      description: 'Refurbished devices reach new users through our sales channels',
      icon: <Truck className="w-8 h-8" />,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 6,
      title: 'Lifecycle Extension',
      description: 'Devices continue serving users, reducing need for new manufacturing',
      icon: <RotateCcw className="w-8 h-8" />,
      color: 'from-teal-500 to-teal-600'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-white via-emerald-50 to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
              <Recycle className="w-4 h-4" />
              Circular Economy Model
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              How We <span className="text-emerald-600">Transform</span> Technology
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our circular economy approach extends device lifecycles, reduces waste, and creates value 
              while minimizing environmental impact through every step of the process.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Circular Diagram */}
            <div className="relative">
              <div className="w-96 h-96 mx-auto relative">
                {/* Central circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-xl">
                  <RotateCcw className="w-12 h-12 text-white animate-spin-slow" />
                </div>

                {/* Steps around the circle */}
                {circularSteps.map((step, index) => {
                  const angle = (index * 60) - 90 // Start from top
                  const radius = 150
                  const x = Math.cos(angle * Math.PI / 180) * radius
                  const y = Math.sin(angle * Math.PI / 180) * radius
                  
                  return (
                    <div
                      key={step.id}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                        activeStep === index ? 'scale-110 z-10' : 'scale-100'
                      }`}
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`
                      }}
                    >
                      <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-105 transition-all duration-300 ${
                        activeStep === index ? 'ring-4 ring-emerald-300 ring-opacity-60' : ''
                      }`}
                      onClick={() => setActiveStep(index)}>
                        {step.icon}
                      </div>
                      
                      {/* Step number */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-slate-700 shadow-md">
                        {step.id}
                      </div>
                    </div>
                  )
                })}

                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="150"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                </svg>
              </div>
            </div>

            {/* Step Details */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                <div className={`w-16 h-16 bg-gradient-to-br ${circularSteps[activeStep].color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                  {circularSteps[activeStep].icon}
                </div>
                
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  {circularSteps[activeStep].title}
                </h3>
                
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  {circularSteps[activeStep].description}
                </p>

                {/* Progress indicators */}
                <div className="flex gap-2 mb-6">
                  {circularSteps.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === activeStep ? 'bg-emerald-500 w-8' : 'bg-slate-200 w-2'
                      }`}
                    />
                  ))}
                </div>

                <button 
                  onClick={() => setActiveStep((activeStep + 1) % circularSteps.length)}
                  className="flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300"
                >
                  Next Step <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-emerald-50 rounded-2xl p-6 text-center">
                  <div className="text-2xl font-bold text-emerald-700 mb-1">95%</div>
                  <div className="text-sm text-emerald-600">Less Environmental Impact</div>
                </div>
                <div className="bg-blue-50 rounded-2xl p-6 text-center">
                  <div className="text-2xl font-bold text-blue-700 mb-1">3-5 Years</div>
                  <div className="text-sm text-blue-600">Extended Device Life</div>
                </div>
                <div className="bg-purple-50 rounded-2xl p-6 text-center">
                  <div className="text-2xl font-bold text-purple-700 mb-1">70%</div>
                  <div className="text-sm text-purple-600">Cost Savings</div>
                </div>
                <div className="bg-orange-50 rounded-2xl p-6 text-center">
                  <div className="text-2xl font-bold text-orange-700 mb-1">Zero</div>
                  <div className="text-sm text-orange-600">Waste to Landfill</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
