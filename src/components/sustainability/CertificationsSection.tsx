'use client'

import { useState, useEffect } from 'react'
import { Award, Shield, Leaf, Globe, CheckCircle, Star, ExternalLink } from 'lucide-react'

export default function CertificationsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const certifications = [
    {
      name: "ISO 14001",
      description: "Environmental Management Systems",
      issuer: "International Organization for Standardization",
      year: "2024",
      icon: <Leaf className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      status: "Certified"
    },
    {
      name: "R2 Responsible Recycling",
      description: "Electronics Recycling Standard",
      issuer: "SERI (Sustainable Electronics Initiative)",
      year: "2024",
      icon: <Shield className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      status: "Certified"
    },
    {
      name: "EPEAT Gold",
      description: "Electronic Product Environmental Assessment",
      issuer: "Green Electronics Council",
      year: "2024",
      icon: <Star className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-600",
      status: "Gold Level"
    },
    {
      name: "Carbon Neutral Certified",
      description: "Carbon Footprint Verification",
      issuer: "Climate Action Reserve",
      year: "2024",
      icon: <Globe className="w-8 h-8" />,
      color: "from-teal-500 to-green-600",
      status: "Verified"
    },
    {
      name: "B Corp Certification",
      description: "Social and Environmental Performance",
      issuer: "B Lab",
      year: "2023",
      icon: <Award className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      status: "Certified"
    },
    {
      name: "Energy Star Partner",
      description: "Energy Efficiency Partnership",
      issuer: "US Environmental Protection Agency",
      year: "2024",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-600",
      status: "Partner"
    }
  ]

  const commitments = [
    {
      title: "2030 Carbon Neutral",
      description: "Achieve net-zero carbon emissions across all operations",
      progress: 75,
      target: "2030"
    },
    {
      title: "Zero Waste to Landfill",
      description: "Ensure 100% of processed devices avoid landfill disposal",
      progress: 92,
      target: "2025"
    },
    {
      title: "Sustainable Supply Chain",
      description: "Partner only with certified sustainable suppliers",
      progress: 68,
      target: "2026"
    },
    {
      title: "Community Impact",
      description: "Provide technology access to 1M underserved individuals",
      progress: 45,
      target: "2028"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Certifications & Commitments
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              <span className="text-emerald-600">Verified</span> Sustainability Leadership
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our commitment to sustainability is verified by leading certification bodies 
              and backed by measurable goals and transparent progress reporting.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Industry Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                    {cert.icon}
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold text-slate-900">{cert.name}</h4>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">
                      {cert.status}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">{cert.description}</p>
                  
                  <div className="border-t border-slate-200 pt-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Issued by:</span>
                      <span className="font-semibold text-slate-700">{cert.year}</span>
                    </div>
                    <p className="text-slate-600 text-sm mt-1">{cert.issuer}</p>
                  </div>
                  
                  <button className="mt-4 flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300">
                    <ExternalLink className="w-4 h-4" />
                    Verify Certificate
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Sustainability Commitments */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-3xl p-10">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our 2030 Sustainability Goals</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {commitments.map((commitment, index) => (
                <div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-slate-900">{commitment.title}</h4>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                      {commitment.target}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 mb-4">{commitment.description}</p>
                  
                  <div className="mb-2">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-slate-500">Progress</span>
                      <span className="font-bold text-emerald-600">{commitment.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-emerald-500 to-green-600 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${commitment.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Summary */}
            <div className="mt-8 text-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                <div className="bg-white/60 rounded-xl p-4">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">70%</div>
                  <div className="text-sm text-slate-600">Avg. Progress</div>
                </div>
                <div className="bg-white/60 rounded-xl p-4">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">6</div>
                  <div className="text-sm text-slate-600">Active Goals</div>
                </div>
                <div className="bg-white/60 rounded-xl p-4">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">2025</div>
                  <div className="text-sm text-slate-600">Next Milestone</div>
                </div>
                <div className="bg-white/60 rounded-xl p-4">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">100%</div>
                  <div className="text-sm text-slate-600">Transparency</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Stay Updated on Our Sustainability Journey
            </h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Subscribe to receive quarterly sustainability reports, certification updates, 
              and progress on our environmental commitments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-emerald-700 transition-all duration-300">
                Download 2024 Report
              </button>
              <button className="border border-emerald-300 text-emerald-600 px-8 py-4 rounded-2xl font-semibold hover:bg-emerald-50 transition-all duration-300">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
