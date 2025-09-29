'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function BannerCards() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const router = useRouter()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleLearnMore = (serviceIndex: number) => {
    const routes = [
      '/wholesale',  // Wholesale Electronics -> existing wholesale page
      '/services/refurbishing', 
      '/platform',
      '/services/quality-assurance'
    ]
    router.push(routes[serviceIndex])
  }

  const handleGetStarted = () => {
    router.push('/contact')
  }

  const handleScheduleConsultation = () => {
    router.push('/contact')
  }

  const services = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 9l3-3m3 3v0" />
        </svg>
      ),
      title: "Wholesale Electronics",
      description: "Global bulk distribution for retailers, resellers, and enterprises. Competitive pricing with reliable supply chains.",
      metric: "10,000+",
      metricLabel: "Units Monthly",
      features: ["Bulk Pricing", "Global Shipping", "Volume Discounts"]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ), 
      title: "Device Refurbishing",
      description: "Professional restoration transforming C-Grade devices to A-Grade quality with comprehensive testing.",
      metric: "95%",
      metricLabel: "Success Rate",
      features: ["Grade Improvement", "Quality Testing", "Warranty Included"]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: "Software Platform", 
      description: "Complete business management suite with inventory tracking, order processing, and analytics.",
      metric: "24/7",
      metricLabel: "Live Support",
      features: ["Real-time Tracking", "Analytics", "API Integration"]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Quality Assurance",
      description: "Comprehensive testing and certification ensuring device reliability, performance, and compliance.",
      metric: "99%",
      metricLabel: "Pass Rate",
      features: ["Certified Testing", "Compliance Check", "Performance Audit"]
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            How We Help
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
             Ways We Work
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Choose the solution that fits your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Service Icon */}
              <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              {/* Service Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>
                
                {/* Key Metric */}
                <div className="mb-6">
                  <div className="text-3xl font-bold text-slate-900">{service.metric}</div>
                  <div className="text-sm text-slate-500">{service.metricLabel}</div>
                </div>

                {/* Features List */}
                <div className={`space-y-2 transition-all duration-300 ${
                  hoveredService === index ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'
                }`}>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className={`mt-6 transition-all duration-300 ${
                  hoveredService === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  <button 
                    onClick={() => handleLearnMore(index)}
                    className="w-full bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-slate-900">500+</div>
              <div className="text-slate-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">50,000+</div>
              <div className="text-slate-600">Devices Processed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">99.8%</div>
              <div className="text-slate-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-8">Ready to transform your electronics business?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleGetStarted}
              className="bg-slate-900 text-white px-8 py-4 rounded-lg hover:bg-slate-800 transition-colors font-medium cursor-pointer"
            >
              Get Started Today
            </button>
            <button 
              onClick={handleScheduleConsultation}
              className="border border-slate-300 text-slate-900 px-8 py-4 rounded-lg hover:bg-slate-50 transition-colors font-medium cursor-pointer"
            >
              Schedule Consultation
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
