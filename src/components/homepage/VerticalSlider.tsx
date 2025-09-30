'use client'

import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { WholesaleIcon, RefurbishingIcon, SoftwareIcon, QualityIcon, EnvironmentalIcon } from './MenuIcons'

export default function VerticalSlider() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const router = useRouter()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleLearnMore = (index: number) => {
    const solution = solutions[index]
    if (solution.link) {
      router.push(solution.link)
    }
  }

  const solutions = [
    {
      title: "Wholesale Distribution",
      subtitle: "Bulk Electronics Supply",
      description: "Access our extensive inventory of wholesale electronics with competitive pricing and global shipping. Perfect for retailers, resellers, and distributors looking for reliable supply chains.",
      features: [
        "Hundreds of units in stock",
        "Volume discounts available", 
        "Global shipping network",
        "Quality assured products",
        "Dedicated account manager"
      ],
      metrics: {
        value: "100s",
        label: "Units Monthly"
      },
      color: "blue",
      icon: WholesaleIcon,
      link: "/wholesale"
    },
    {
      title: "Device Refurbishing",
      subtitle: "Professional Restoration",
      description: "Transform your C-Grade electronics into A-Grade quality with our professional refurbishing services. Complete testing, certification, and warranty included.",
      features: [
        "C-Grade to A-Grade transformation",
        "6-day turnaround time",
        "Comprehensive testing",
        "Warranty coverage",
        "Environmental compliance"
      ],
      metrics: {
        value: "95%",
        label: "Success Rate"
      },
      color: "green",
      icon: RefurbishingIcon,
      link: "/refurbishing"
    },
    {
      title: "Software Platform",
      subtitle: "Business Management Suite",
      description: "Streamline your electronics business with our comprehensive platform. Real-time inventory tracking, order management, and detailed analytics all in one place.",
      features: [
        "Real-time inventory tracking",
        "Order management system",
        "Advanced analytics dashboard",
        "API integrations",
        "24/7 technical support"
      ],
      metrics: {
        value: "24/7",
        label: "Live Support"
      },
      color: "purple",
      icon: SoftwareIcon,
      link: "/platform"
    },
    {
      title: "Quality Assurance",
      subtitle: "Testing & Certification",
      description: "Ensure your electronics meet the highest standards with our comprehensive testing and certification services. Complete documentation and compliance reporting.",
      features: [
        "Multi-point inspection",
        "Compliance certification",
        "Performance testing",
        "Documentation package",
        "Quality guarantees"
      ],
      metrics: {
        value: "99%",
        label: "Pass Rate"
      },
      color: "red",
      icon: QualityIcon,
      link: "/services"
    },
    {
      title: "Environmental Impact",
      subtitle: "Sustainable Electronics",
      description: "Join the circular economy movement with our comprehensive e-waste reduction and sustainability initiatives. Every refurbished device prevents toxic waste and reduces carbon footprint.",
      features: [
        "E-waste reduction programs",
        "Carbon footprint tracking",
        "Certified disposal methods",
        "Sustainability reporting",
        "Green certification badges"
      ],
      metrics: {
        value: "75%",
        label: "Waste Reduced"
      },
      color: "emerald",
      icon: EnvironmentalIcon,
      link: "/sustainability"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-700 border-blue-200",
      green: "bg-green-100 text-green-700 border-green-200", 
      purple: "bg-purple-100 text-purple-700 border-purple-200",
      red: "bg-red-100 text-red-700 border-red-200",
      emerald: "bg-emerald-100 text-emerald-700 border-emerald-200"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const getActiveColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-600 text-white border-blue-600",
      green: "bg-green-600 text-white border-green-600",
      purple: "bg-purple-600 text-white border-purple-600", 
      red: "bg-red-600 text-white border-red-600",
      emerald: "bg-emerald-600 text-white border-emerald-600"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section ref={sectionRef} className="pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              Our Solutions
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-2">
              Comprehensive electronics solutions designed to grow your business
            </p>
          </div>

          {/* Mobile Horizontal Card Carousel */}
          <div className="md:hidden">
            {/* Horizontal Scroll Container with Peek Effect */}
            <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
              <div className="flex gap-4 px-4 w-max">
                {solutions.map((solution, index) => {
                  const IconComponent = solution.icon
                  const getAccentColor = (color: string) => {
                    const accents = {
                      blue: "border-l-blue-500 bg-gradient-to-br from-blue-50 via-white to-blue-50/30",
                      green: "border-l-green-500 bg-gradient-to-br from-green-50 via-white to-green-50/30", 
                      purple: "border-l-purple-500 bg-gradient-to-br from-purple-50 via-white to-purple-50/30",
                      red: "border-l-red-500 bg-gradient-to-br from-red-50 via-white to-red-50/30",
                      emerald: "border-l-emerald-500 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30"
                    }
                    return accents[color as keyof typeof accents] || accents.blue
                  }
                  
                  const getIconColor = (color: string) => {
                    const colors = {
                      blue: "text-blue-600 bg-blue-100",
                      green: "text-green-600 bg-green-100",
                      purple: "text-purple-600 bg-purple-100", 
                      red: "text-red-600 bg-red-100",
                      emerald: "text-emerald-600 bg-emerald-100"
                    }
                    return colors[color as keyof typeof colors] || colors.blue
                  }
                  
                  const getButtonColor = (color: string) => {
                    const colors = {
                      blue: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
                      green: "bg-green-600 hover:bg-green-700 focus:ring-green-500",
                      purple: "bg-purple-600 hover:bg-purple-700 focus:ring-purple-500",
                      red: "bg-red-600 hover:bg-red-700 focus:ring-red-500",
                      emerald: "bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500"
                    }
                    return colors[color as keyof typeof colors] || colors.blue
                  }
                  
                  return (
                    <div
                      key={index}
                      className="flex-none w-80 snap-center"
                    >
                      <div className={`h-full p-6 rounded-2xl border-l-4 ${getAccentColor(solution.color)} shadow-lg hover:shadow-xl transition-all duration-300 ease-out transform hover:scale-[1.02] relative overflow-hidden`}>
                        {/* Subtle background pattern */}
                        <div className="absolute top-0 right-0 w-24 h-24 opacity-5 transform rotate-12">
                          <IconComponent className="w-full h-full text-gray-400" />
                        </div>
                        
                        {/* Content */}
                        <div className="relative z-10">
                          {/* Icon & Header */}
                          <div className="flex items-start gap-4 mb-4">
                            <div className={`w-12 h-12 rounded-xl ${getIconColor(solution.color)} flex items-center justify-center flex-shrink-0`}>
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg font-bold text-slate-900 mb-1 leading-tight">{solution.title}</h3>
                              <p className="text-slate-600 text-sm">{solution.subtitle}</p>
                            </div>
                            <div className="text-right flex-shrink-0">
                              <div className="text-xl font-bold text-slate-900">
                                {solution.metrics.value}
                              </div>
                              <div className="text-slate-500 text-xs">
                                {solution.metrics.label}
                              </div>
                            </div>
                          </div>
                          
                          {/* Description */}
                          <p className="text-slate-700 mb-5 leading-relaxed text-sm">
                            {solution.description}
                          </p>
                          
                          {/* Features Grid */}
                          <div className="mb-6">
                            <h4 className="text-xs font-semibold text-slate-900 mb-3 uppercase tracking-wider">Key Features</h4>
                            <div className="space-y-2">
                              {solution.features.slice(0, 4).map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center gap-3">
                                  <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                    solution.color === 'blue' ? 'bg-blue-500' :
                                    solution.color === 'green' ? 'bg-green-500' :
                                    solution.color === 'purple' ? 'bg-purple-500' :
                                    solution.color === 'red' ? 'bg-red-500' :
                                    'bg-emerald-500'
                                  }`}></div>
                                  <span className="text-xs text-slate-700 flex-1 leading-relaxed">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* CTA Button */}
                          <button 
                            onClick={() => handleLearnMore(index)}
                            className={`w-full px-4 py-3 rounded-xl font-medium text-white transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-[1.02] ${getButtonColor(solution.color)}`}
                          >
                            Explore {solution.title}
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 gap-2">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    solution.color === 'blue' ? 'bg-blue-400' :
                    solution.color === 'green' ? 'bg-green-400' :
                    solution.color === 'purple' ? 'bg-purple-400' :
                    solution.color === 'red' ? 'bg-red-400' :
                    'bg-emerald-400'
                  }`}
                />
              ))}
            </div>
            
            {/* Swipe Hint */}
            <div className="text-center mt-4">
              <p className="text-slate-500 text-xs font-medium flex items-center justify-center gap-2">
                <span>←</span>
                <span>Swipe to explore solutions</span>
                <span>→</span>
              </p>
            </div>
          </div>

          {/* Tablet Layout */}
          <div className="hidden md:block lg:hidden">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
              {/* Navigation Tabs */}
              <div className="flex overflow-x-auto gap-2 mb-6 scrollbar-hide">
                {solutions.map((solution, index) => {
                  const IconComponent = solution.icon
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`flex-none flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeIndex === index 
                          ? getActiveColorClasses(solution.color)
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      <IconComponent className={`w-5 h-5 ${activeIndex === index ? 'text-white' : 'text-slate-600'}`} />
                      <span className="font-medium whitespace-nowrap">{solution.title}</span>
                    </button>
                  )
                })}
              </div>
              
              {/* Content */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {solutions[activeIndex].title}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {solutions[activeIndex].subtitle}
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    {solutions[activeIndex].description}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    {solutions[activeIndex].features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          solutions[activeIndex].color === 'blue' ? 'bg-blue-500' :
                          solutions[activeIndex].color === 'green' ? 'bg-green-500' :
                          solutions[activeIndex].color === 'purple' ? 'bg-purple-500' :
                          solutions[activeIndex].color === 'red' ? 'bg-red-500' :
                          'bg-emerald-500'
                        }`}></div>
                        <span className="text-sm text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <div>
                      <div className="text-2xl font-bold text-slate-900">
                        {solutions[activeIndex].metrics.value}
                      </div>
                      <div className="text-slate-600 text-sm">
                        {solutions[activeIndex].metrics.label}
                      </div>
                    </div>
                    <button 
                      onClick={() => handleLearnMore(activeIndex)}
                      className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                      solutions[activeIndex].color === 'blue' ? 'bg-blue-600 hover:bg-blue-700 text-white' :
                      solutions[activeIndex].color === 'green' ? 'bg-green-600 hover:bg-green-700 text-white' :
                      solutions[activeIndex].color === 'purple' ? 'bg-purple-600 hover:bg-purple-700 text-white' :
                      solutions[activeIndex].color === 'red' ? 'bg-red-600 hover:bg-red-700 text-white' :
                      'bg-emerald-600 hover:bg-emerald-700 text-white'
                    }`}>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-8">
            
            {/* Left Selector */}
            <div className="lg:col-span-2 space-y-4">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`group p-6 rounded-2xl border-2 cursor-pointer transition-all duration-500 ease-out relative overflow-hidden transform hover:scale-[1.02] active:scale-[0.98] ${
                    activeIndex === index 
                      ? getActiveColorClasses(solution.color) + ' shadow-xl'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-lg hover:bg-slate-50'
                  }`}
                >
                  {/* Enhanced Background Icon */}
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-60 transition-all duration-500 group-hover:scale-110 group-hover:opacity-80">
                    <solution.icon className={`w-20 h-20 transition-all duration-300 ${
                      activeIndex === index ? 'text-white' : `text-${solution.color}-500`
                    }`} />
                  </div>
                  
                  {/* Active indicator */}
                  {activeIndex === index && (
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white/30 rounded-r-full animate-pulse"></div>
                  )}
                  
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <h3 className={`text-lg font-semibold mb-1 transition-all duration-300 ${
                        activeIndex === index ? 'text-white' : 'text-slate-900 group-hover:text-slate-700'
                      }`}>
                        {solution.title}
                      </h3>
                      <p className={`text-sm transition-all duration-300 ${
                        activeIndex === index ? 'text-white/80' : 'text-slate-600 group-hover:text-slate-500'
                      }`}>
                        {solution.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Description */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 h-full transition-all duration-500 hover:shadow-2xl">
                <div className="mb-6">
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                    getColorClasses(solutions[activeIndex].color)
                  }`}>
                    {solutions[activeIndex].subtitle}
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">
                    {solutions[activeIndex].title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {solutions[activeIndex].description}
                  </p>
                </div>

                {/* Features List */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">Key Features:</h4>
                  <ul className="space-y-3">
                    {solutions[activeIndex].features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${
                          solutions[activeIndex].color === 'blue' ? 'bg-blue-500' :
                          solutions[activeIndex].color === 'green' ? 'bg-green-500' :
                          solutions[activeIndex].color === 'purple' ? 'bg-purple-500' :
                          solutions[activeIndex].color === 'red' ? 'bg-red-500' :
                          'bg-emerald-500'
                        }`}></div>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics & CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                  <div>
                    <div className="text-3xl font-bold text-slate-900">
                      {solutions[activeIndex].metrics.value}
                    </div>
                    <div className="text-slate-600 text-sm">
                      {solutions[activeIndex].metrics.label}
                    </div>
                  </div>
                  <button 
                    onClick={() => handleLearnMore(activeIndex)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    solutions[activeIndex].color === 'blue' ? 'bg-blue-600 hover:bg-blue-700 text-white' :
                    solutions[activeIndex].color === 'green' ? 'bg-green-600 hover:bg-green-700 text-white' :
                    solutions[activeIndex].color === 'purple' ? 'bg-purple-600 hover:bg-purple-700 text-white' :
                    solutions[activeIndex].color === 'red' ? 'bg-red-600 hover:bg-red-700 text-white' :
                    'bg-emerald-600 hover:bg-emerald-700 text-white'
                  }`}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
