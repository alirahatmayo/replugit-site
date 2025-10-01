'use client'

import { useState, useEffect } from 'react'
import { Target, Leaf, Globe, TrendingUp, Star, CheckCircle, Clock, Award } from 'lucide-react'

export default function CertificationsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const pursuitGoals = [
    {
      name: "HTM Certification",
      description: "Hardware Technology Management certification for professional electronics handling",
      status: "In Progress",
      timeline: "Q2 2025",
      icon: <Award className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      progress: 65,
      why: "Ensuring professional standards in device management and refurbishment processes"
    },
    {
      name: "ISO 14001 Preparation",
      description: "Environmental Management Systems framework implementation",
      status: "Planning",
      timeline: "Q4 2025",
      icon: <Leaf className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      progress: 30,
      why: "Formalizing our environmental impact reduction processes and documentation"
    },
    {
      name: "R2 Responsible Recycling",
      description: "Electronics recycling and data security standard compliance",
      status: "Research Phase",
      timeline: "2026",
      icon: <Globe className="w-8 h-8" />,
      color: "from-teal-500 to-green-600",
      progress: 20,
      why: "Establishing industry-leading data security and electronics handling protocols"
    }
  ]

  const commitments = [
    {
      title: "Professional Excellence",
      description: "Achieve HTM certification to formalize our technical expertise",
      progress: 65,
      target: "Q2 2025",
      impact: "Enhanced credibility and professional standards"
    },
    {
      title: "Environmental Leadership",
      description: "Implement comprehensive environmental management systems",
      progress: 40,
      target: "2025-2026",
      impact: "Measurable environmental impact reduction"
    },
    {
      title: "Industry Recognition",
      description: "Establish Replugit as a certified leader in sustainable electronics",
      progress: 25,
      target: "2026-2027",
      impact: "Market leadership in responsible electronics handling"
    },
    {
      title: "Transparency Standards",
      description: "Develop comprehensive reporting and accountability frameworks",
      progress: 75,
      target: "Ongoing",
      impact: "Complete transparency in operations and impact"
    }
  ]

  const ambitions = [
    {
      goal: "Become the most certified sustainable electronics company in our region",
      timeline: "By 2027",
      icon: <Star className="w-6 h-6" />
    },
    {
      goal: "Set new industry standards for device lifecycle management",
      timeline: "2025-2026",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      goal: "Achieve multiple internationally recognized certifications",
      timeline: "2026-2027",
      icon: <Target className="w-6 h-6" />
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              Certification Journey & Goals
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              <span className="text-blue-600">Building</span> Credibility Through Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're actively pursuing industry certifications and building frameworks that will establish 
              Replugit as a leader in sustainable electronics management. Our ambitious roadmap focuses on 
              professional excellence and environmental responsibility.
            </p>
          </div>

          {/* Current Pursuit Goals */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Active Certification Pursuits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {pursuitGoals.map((goal, index) => (
                <div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${goal.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                    {goal.icon}
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold text-slate-900">{goal.name}</h4>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      {goal.status}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">{goal.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-slate-500">Progress</span>
                      <span className="font-bold text-blue-600">{goal.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${goal.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="border-t border-slate-200 pt-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-slate-500">Target:</span>
                      <span className="font-semibold text-slate-700">{goal.timeline}</span>
                    </div>
                    <p className="text-slate-600 text-sm italic">{goal.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Ambitious Vision */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-10 mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Ambitious Vision</h3>
            
            <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
              {ambitions.map((ambition, index) => (
                <div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    {ambition.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{ambition.goal}</h4>
                    <p className="text-blue-600 font-semibold text-sm">{ambition.timeline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Commitments */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-3xl p-10">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Strategic Development Goals</h3>
            
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
                  
                  <div className="mb-3">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-slate-500">Development Progress</span>
                      <span className="font-bold text-emerald-600">{commitment.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-emerald-500 to-green-600 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${commitment.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-slate-600 italic">
                    <strong>Impact:</strong> {commitment.impact}
                  </div>
                </div>
              ))}
            </div>

            {/* Journey Summary */}
            <div className="mt-8 text-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                <div className="bg-white/60 rounded-xl p-4">
                  <div className="text-2xl font-bold text-blue-600 mb-1">3</div>
                  <div className="text-sm text-slate-600">Active Pursuits</div>
                </div>
                <div className="bg-white/60 rounded-xl p-4">
                  <div className="text-2xl font-bold text-blue-600 mb-1">2025</div>
                  <div className="text-sm text-slate-600">First Target</div>
                </div>
                <div className="bg-white/60 rounded-xl p-4">
                  <div className="text-2xl font-bold text-blue-600 mb-1">45%</div>
                  <div className="text-sm text-slate-600">Avg. Progress</div>
                </div>
                <div className="bg-white/60 rounded-xl p-4">
                  <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                  <div className="text-sm text-slate-600">Committed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Join Us on Our Certification Journey
            </h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Follow our progress as we work toward industry-leading certifications and 
              sustainable practices. We're building something meaningful, and we want you to be part of it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-all duration-300">
                Track Our Progress
              </button>
              <button className="border border-blue-300 text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-300">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
