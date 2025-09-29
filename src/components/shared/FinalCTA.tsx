'use client'

import { useState, useRef, useEffect } from 'react'

export default function FinalCTA() {
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

  const offerings = [
    {
      title: 'Refurbishment Services',
      subtitle: 'Transform your Grade C inventory',
      action: 'Get Quote',
      description: 'Professional refurbishment with warranty tracking'
    },
    {
      title: 'Technology Licensing',
      subtitle: 'Power your operations with our software',
      action: 'Request Demo',
      description: 'QC software and warranty management systems'
    },
    {
      title: 'Partnership Program',
      subtitle: 'Join our certified network',
      action: 'Apply Now',
      description: 'Training, support, and co-branded solutions'
    }
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Content */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Ready to transform your electronics business?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto font-light">
            Whether you need refurbishment services, want to license our technology, or join our partner network — let's discuss how Replugit can accelerate your success.
          </p>
        </div>

        {/* Quick Navigation to Details */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              Learn more about our solutions
            </h3>
          </div>
          <div className="grid sm:grid-cols-4 gap-4">
            <button className="px-4 py-3 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700 transition-colors border border-slate-700">
              Our Process
            </button>
            <button className="px-4 py-3 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700 transition-colors border border-slate-700">
              Technology
            </button>
            <button className="px-4 py-3 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700 transition-colors border border-slate-700">
              Partnerships
            </button>
            <button className="px-4 py-3 bg-slate-800 text-white rounded-lg font-medium hover:bg-green-600 transition-colors border border-slate-700 hover:border-green-500">
              Sustainability
            </button>
          </div>
        </div>

        {/* Offerings Grid */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <div key={index} className="bg-slate-800 p-8 rounded-lg border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {offering.title}
                </h3>
                <p className="text-slate-300 mb-4">
                  {offering.subtitle}
                </p>
                <p className="text-sm text-slate-400 mb-6">
                  {offering.description}
                </p>
                <button className="w-full px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                  {offering.action}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Company Stats */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid sm:grid-cols-4 gap-8 border-t border-slate-700 pt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-slate-400">Devices refurbished</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-slate-400">Quality score average</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-slate-400">Warranty tracking</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">6 Days</div>
              <div className="text-slate-400">Average turnaround</div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4">
                Let's discuss your specific needs
              </h3>
              <p className="text-slate-300 mb-6">
                Schedule a call with our team to explore how Replugit technology and services can support your business goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <button className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Schedule Consultation
                </button>
                <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors">
                  View Technology Demo
                </button>
              </div>
              
              <div className="border-t border-slate-700 pt-6">
                <p className="text-slate-400 mb-4">
                  Prefer to reach out directly?
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center text-white">
                  <a href="mailto:partnerships@replugit.com" className="hover:text-green-400 transition-colors">
                    partnerships@replugit.com
                  </a>
                  <span className="hidden sm:block text-slate-600">|</span>
                  <a href="tel:+15485035000" className="hover:text-green-400 transition-colors">
                    +1 (548) 503-5000
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
