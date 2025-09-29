'use client'

import { useState, useRef, useEffect } from 'react'

export default function TechnologySolutions() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<'warranty' | 'qc' | 'impact'>('warranty')
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

  const technologies = {
    warranty: {
      title: 'Warranty Management System',
      subtitle: 'Complete tracking and transparency for every device',
      features: [
        'Real-time warranty status tracking',
        'Complete device history and documentation',
        'Automated alert system for expiration dates',
        'Bulk warranty lookups and management',
        'API integration for existing systems',
        'Custom reporting and analytics'
      ],
      benefits: [
        'Reduced customer service inquiries by 60%',
        'Improved customer satisfaction scores',
        'Streamlined returns and replacement process',
        'Complete audit trail for compliance',
        'Mobile-responsive portal access'
      ]
    },
    qc: {
      title: 'QC Software & Testing Platform',
      subtitle: 'Comprehensive testing and documentation for every device',
      features: [
        '47-point automated testing protocol',
        'Hardware performance benchmarking',
        'Display quality and dead pixel detection',
        'Battery health and lifecycle assessment',
        'Connectivity and ports verification',
        'Automated report generation with barcodes'
      ],
      benefits: [
        'Consistent quality standards across all devices',
        'Reduced testing time by 75%',
        'Complete documentation for compliance',
        'Integrated workflow management',
        'Custom branding for partner reports'
      ]
    },
    impact: {
      title: 'Environmental Impact Tracking',
      subtitle: 'Measurable sustainability metrics for every refurbishment',
      features: [
        'CO₂ savings calculation per device',
        'E-waste diversion tracking',
        'Resource conservation metrics',
        'Circular economy impact measurement',
        'Sustainability reporting dashboard',
        'ESG compliance documentation'
      ],
      benefits: [
        'Quantified environmental impact for stakeholders',
        'ESG reporting support for compliance',
        'Marketing assets for sustainability initiatives',
        'Real-time impact dashboards',
        'Industry-leading transparency'
      ]
    }
  }

  const currentTech = technologies[activeTab]

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            Technology solutions that power transparency
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            Our proprietary software platforms don't just support our refurbishment services — we license them to partners who want the same level of quality and transparency.
          </p>
        </div>

        {/* Technology Tabs */}
        <div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col sm:flex-row bg-slate-50 p-2 rounded-lg border border-slate-200">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as 'warranty' | 'qc' | 'impact')}
                className={`flex-1 px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === key
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tech.title.split(' ')[0]} {tech.title.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>

        {/* Active Technology Content */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left: Technology Details */}
            <div>
              <h3 className="text-3xl font-semibold text-slate-900 mb-4">
                {currentTech.title}
              </h3>
              <p className="text-lg text-slate-600 mb-8">
                {currentTech.subtitle}
              </p>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-slate-800 mb-4">Key Features</h4>
                <ul className="space-y-3">
                  {currentTech.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-slate-900 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-slate-800 mb-4">Business Benefits</h4>
                <ul className="space-y-3">
                  {currentTech.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Demo Interface */}
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="text-sm text-slate-500 ml-4">Dashboard Preview</div>
                </div>
                <div className="bg-white p-6 rounded border border-slate-200">
                  {activeTab === 'warranty' && (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-slate-50 rounded">
                        <span className="font-medium">Device ID: LP-2024-0892</span>
                        <span className="text-green-600 bg-green-100 px-2 py-1 rounded text-sm">Active</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-slate-500">Warranty Period</div>
                          <div className="font-medium">12 months</div>
                        </div>
                        <div>
                          <div className="text-slate-500">Days Remaining</div>
                          <div className="font-medium">287 days</div>
                        </div>
                      </div>
                      <div className="pt-3 border-t border-slate-200">
                        <div className="text-sm text-slate-500 mb-2">Recent Activity</div>
                        <div className="text-sm">Quality check completed ✓</div>
                        <div className="text-sm text-slate-400">Warranty activated</div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'qc' && (
                    <div className="space-y-4">
                      <div className="text-center mb-4">
                        <div className="text-2xl font-bold text-green-600">98.2%</div>
                        <div className="text-sm text-slate-500">Quality Score</div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Hardware Test</span>
                          <span className="text-green-600">✓ PASS</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Display Test</span>
                          <span className="text-green-600">✓ PASS</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Battery Test</span>
                          <span className="text-green-600">✓ PASS</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Connectivity</span>
                          <span className="text-green-600">✓ PASS</span>
                        </div>
                      </div>
                      <button className="w-full bg-slate-900 text-white py-2 rounded text-sm">
                        Generate Report
                      </button>
                    </div>
                  )}
                  
                  {activeTab === 'impact' && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-600">340kg</div>
                          <div className="text-xs text-slate-500">CO₂ Saved</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-600">12.5K L</div>
                          <div className="text-xs text-slate-500">Water Saved</div>
                        </div>
                      </div>
                      <div className="bg-slate-100 p-3 rounded">
                        <div className="text-sm font-medium mb-2">Environmental Impact</div>
                        <div className="text-xs text-slate-600">
                          This device refurbishment prevented 1 device from entering landfills and reduced manufacturing demand.
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-slate-500">Impact Score</div>
                        <div className="text-xl font-bold text-green-600">A+</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-slate-50 p-12 rounded-lg border border-slate-200">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              License our technology for your business
            </h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Get the same quality control and warranty management systems that power our operations. Available as standalone products or integrated solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors">
                Request Demo
              </button>
              <button className="px-8 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors">
                Download Spec Sheet
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
