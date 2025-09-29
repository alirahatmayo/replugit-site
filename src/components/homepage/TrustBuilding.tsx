'use client'

import { useState, useRef, useEffect } from 'react'

export default function TrustBuilding() {
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

  const partnershipTypes = [
    {
      title: 'Refurbishment Services',
      description: 'Complete electronics refurbishment with our proprietary quality control and warranty management.',
      benefits: ['Grade A quality guarantee', '6-day turnaround', 'Complete tracking & documentation', 'Environmental impact reporting'],
      cta: 'Get Quote'
    },
    {
      title: 'Technology Licensing',
      description: 'License our QC software and warranty management systems for your own refurbishment operations.',
      benefits: ['Complete software platform', 'Training & support', 'Custom branding options', 'API integration'],
      cta: 'Request Demo'
    },
    {
      title: 'Partnership Program',
      description: 'Join our network of certified partners using Replugit technology and processes.',
      benefits: ['Certification training', 'Marketing support', 'Ongoing technical support', 'Co-branded solutions'],
      cta: 'Apply Now'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'IT Director',
      company: 'TechCorp Solutions',
      content: 'The warranty management system alone has reduced our customer service inquiries by 60%. The transparency builds incredible trust with our clients.',
      focus: 'warranty'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Operations Manager', 
      company: 'GreenTech Industries',
      content: 'Their QC software has standardized our entire testing process. We now have consistent quality documentation across all our refurbishment sites.',
      focus: 'qc'
    },
    {
      name: 'Lisa Thompson',
      role: 'Procurement Lead',
      company: 'Urban Innovations',
      content: 'The combination of refurbishment services and technology licensing gives us flexibility to scale our operations exactly how we need.',
      focus: 'partnership'
    }
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            Multiple ways to work with us
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            Whether you need refurbishment services, want to license our technology, or join our partner network — we have solutions that scale with your business.
          </p>
        </div>

        {/* Partnership Options */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-3 gap-8">
            {partnershipTypes.map((partnership, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {partnership.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {partnership.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="font-medium text-slate-800 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {partnership.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors">
                  {partnership.cta}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Client Success Stories */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Client success stories</h3>
            <div className="w-24 h-px bg-slate-300 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-slate-200">
                <div className="mb-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-slate-900 rounded-full"></div>
                    ))}
                  </div>
                  <p className="text-slate-700 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="border-t border-slate-200 pt-6">
                  <div className="font-semibold text-slate-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-600">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-slate-500">
                    {testimonial.company}
                  </div>
                  <div className="mt-2">
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                      {testimonial.focus === 'warranty' && 'Warranty Management'}
                      {testimonial.focus === 'qc' && 'QC Software'}
                      {testimonial.focus === 'partnership' && 'Partnership Program'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className={`mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white p-12 rounded-lg border border-slate-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Why companies choose Replugit
              </h3>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-slate-800 rounded"></div>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Proven Technology</h4>
                <p className="text-sm text-slate-600">Battle-tested software platforms powering thousands of device refurbishments</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-slate-800 rounded-full"></div>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Complete Transparency</h4>
                <p className="text-sm text-slate-600">Every process documented, every test recorded, every warranty tracked</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-slate-800 rounded-lg"></div>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Flexible Partnerships</h4>
                <p className="text-sm text-slate-600">Services, technology, or partnerships — we adapt to your business needs</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-slate-800" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Measurable Impact</h4>
                <p className="text-sm text-slate-600">Quantified environmental benefits and business value from every refurbishment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
