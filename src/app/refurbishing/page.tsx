'use client'

import React, { useState, useEffect, useRef } from 'react'
import { 
  Smartphone, 
  Tablet, 
  Laptop, 
  Monitor,
  CheckCircle,
  ArrowRight,
  Users,
  TrendingUp,
  Search,
  Wrench,
  Shield,
  Sparkles,
  Package,
  Clock,
  Award,
  Zap,
  Eye,
  Target,
  RotateCcw,
  Battery,
  Cpu,
  HardDrive,
  Camera,
  Volume2,
  Wifi,
  PlayCircle,
  PauseCircle,
  ChevronRight,
  Heart,
  BookOpen,
  Star,
  Microscope,
  Database,
  Settings,
  Calculator
} from 'lucide-react'

interface ProcessStep {
  id: number
  title: string
  subtitle: string
  description: string
  details: string[]
  icon: React.ReactNode
  color: string
  duration: string
  storyText: string
}

interface DeviceJourney {
  device: string
  condition: string
  story: string
  outcome: string
  image: string
}

interface AnimatedCounterProps {
  target: number
  duration?: number
  suffix?: string
  decimals?: number
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  target, 
  duration = 2000, 
  suffix = '', 
  decimals = 0 
}) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const startCount = count

    const updateCount = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      const currentCount = startCount + (target - startCount) * easeOutCubic

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      } else {
        setCount(target)
      }
    }

    requestAnimationFrame(updateCount)
    return () => setCount(target)
  }, [isVisible, target, duration, count])

  const formatNumber = (num: number) => {
    if (decimals > 0) {
      return num.toFixed(decimals)
    }
    return num.toLocaleString()
  }

  return (
    <div ref={counterRef} className="tabular-nums">
      {formatNumber(count)}{suffix}
    </div>
  )
}

export default function RefurbishingPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [selectedJourney, setSelectedJourney] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  const refurbishmentSteps: ProcessStep[] = [
    {
      id: 1,
      title: "The Arrival",
      subtitle: "Initial Assessment & Diagnostics",
      description: "Every device tells a story. When your C-grade electronics arrive at our facility, we begin with a comprehensive health check.",
      details: [
        "Complete visual inspection for physical damage",
        "Advanced diagnostic software testing",
        "Component functionality assessment", 
        "Battery health and charging system analysis",
        "Data recovery evaluation and secure wiping preparation",
        "Detailed condition documentation with photos"
      ],
      icon: <Search className="w-6 h-6" />,
      color: "blue",
      duration: "2-4 hours",
      storyText: "Imagine a cracked iPhone arriving in our workshop. Its screen is shattered, the home button is unresponsive, and the battery barely holds a charge. But beneath that damaged exterior, we see potential. Our technicians carefully examine every detail, running over 50 diagnostic tests to understand exactly what needs healing."
    },
    {
      id: 2,
      title: "The Teardown",
      subtitle: "Precision Disassembly & Component Analysis",
      description: "With surgical precision, we carefully disassemble each device, treating every component with the respect it deserves.",
      details: [
        "ESD-safe workspace with professional tools",
        "Component-by-component disassembly",
        "Internal damage assessment and photography",
        "Cleaning of all internal components",
        "Circuit board inspection under magnification",
        "Component testing and replacement planning"
      ],
      icon: <Wrench className="w-6 h-6" />,
      color: "orange",
      duration: "1-3 hours",
      storyText: "Our skilled technician gently removes the iPhone's display assembly, revealing the intricate world inside. Each screw is carefully organized, every cable disconnected with precision. We discover water damage near the charging port and corrosion on the logic board - challenges that would deter others, but opportunities for us to showcase our expertise."
    },
    {
      id: 3,
      title: "The Restoration",
      subtitle: "Expert Repair & Component Replacement",
      description: "This is where the magic happens. Using genuine and high-quality aftermarket parts, we bring devices back to life.",
      details: [
        "Genuine OEM and certified aftermarket parts",
        "Micro-soldering for complex board repairs", 
        "Screen and digitizer replacement",
        "Battery installation with capacity testing",
        "Camera, speaker, and sensor replacement",
        "Precision reassembly with quality checks"
      ],
      icon: <Sparkles className="w-6 h-6" />,
      color: "purple", 
      duration: "3-6 hours",
      storyText: "Watch as our technician carefully cleans the corroded charging port with precision tools, installs a brand new high-capacity battery, and replaces the shattered screen with a pristine display. Each repair is performed with the same care you'd expect from the original manufacturer - because we believe every device deserves a second chance at brilliance."
    },
    {
      id: 4,
      title: "The Testing",
      subtitle: "Comprehensive Quality Assurance",
      description: "Before any device earns our Grade A certification, it must pass our rigorous 47-point quality assurance protocol.",
      details: [
        "Complete functionality testing of all features",
        "Battery performance and charging optimization",
        "Display calibration and touch sensitivity testing",
        "Camera, audio, and connectivity verification",
        "Stress testing under various conditions",
        "Final cosmetic inspection and grading"
      ],
      icon: <Shield className="w-6 h-6" />,
      color: "green",
      duration: "2-4 hours", 
      storyText: "The once-broken iPhone now powers on with a satisfying chime. Every tap responds perfectly, the camera captures crystal-clear photos, and the battery charges to 100%. Our quality assurance team puts it through the same tests Apple would - because we don't just fix devices, we restore them to their original glory."
    },
    {
      id: 5,
      title: "The Certification",
      subtitle: "Documentation & Grade Assignment",
      description: "Each device receives detailed documentation of its journey and official grade certification based on industry standards.",
      details: [
        "Comprehensive repair documentation",
        "Before and after photography",
        "Grade assignment (A, A-, B+, B)",
        "Warranty documentation preparation",
        "Quality certificate generation",
        "Inventory system updates"
      ],
      icon: <Award className="w-6 h-6" />,
      color: "indigo",
      duration: "30 minutes",
      storyText: "Our iPhone has earned its Grade A certification - the highest possible rating. It looks, feels, and performs like new. Complete with documentation showing its remarkable transformation from damaged goods to premium product, ready to delight its next owner and generate maximum value for your business."
    },
    {
      id: 6,
      title: "The New Beginning", 
      subtitle: "Packaging & Delivery Preparation",
      description: "Beautifully packaged and ready for its next chapter, each device leaves our facility as a testament to quality craftsmanship.",
      details: [
        "Professional cleaning and polishing",
        "Protective packaging with accessories",
        "Final quality inspection",
        "Inventory tracking and labeling",
        "Secure packaging for shipment",
        "Customer documentation package"
      ],
      icon: <Package className="w-6 h-6" />,
      color: "emerald",
      duration: "15 minutes",
      storyText: "What started as a broken, seemingly worthless device is now pristinely packaged, looking indistinguishable from a brand new product. This iPhone's journey from 'broken to brilliant' is complete - transformed from a $50 C-grade device into a $400 Grade A smartphone, representing a 700% value increase and a perfect example of sustainable electronics at its finest."
    }
  ]

  const deviceJourneys: DeviceJourney[] = [
    {
      device: "iPhone 12 Pro - Water Damaged",
      condition: "C-Grade: $45",
      story: "Sarah dropped her phone in a puddle during a rainstorm. Screen cracked, charging port corroded, camera fogged up. Local repair shop said it was beyond saving.",
      outcome: "Grade A: $420 (833% increase)",
      image: "📱"
    },
    {
      device: "iPad Air - Screen & Battery Issues", 
      condition: "C-Grade: $120",
      story: "Mark's iPad collected dust for months after the display started flickering and the battery began draining in hours instead of days. He thought it was obsolete.",
      outcome: "Grade A-: $485 (304% increase)",
      image: "📱"
    },    
    {
      device: "MacBook Pro - 'Dead' Logic Board",
      condition: "C-Grade: $200", 
      story: "Jessica's laptop wouldn't turn on after a coffee spill. Three repair shops declared the logic board dead. She was ready to throw it away.",
      outcome: "Grade A: $1,200 (500% increase)",
      image: "💻"
    }
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % refurbishmentSteps.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, refurbishmentSteps.length])

  useEffect(() => {
    const journeyInterval = setInterval(() => {
      setSelectedJourney((prev) => (prev + 1) % deviceJourneys.length)
    }, 5000)

    return () => clearInterval(journeyInterval)
  }, [deviceJourneys.length])

  const currentStepData = refurbishmentSteps[currentStep]
  const currentJourney = deviceJourneys[selectedJourney]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600', 
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
      red: 'from-red-500 to-red-600',
      indigo: 'from-indigo-500 to-indigo-600',
      emerald: 'from-emerald-500 to-emerald-600'
    }
    return colors[color as keyof typeof colors] || 'from-blue-500 to-blue-600'
  }

  const refurbishmentProcess = [
    {
      title: 'Initial Assessment',
      description: 'Comprehensive device evaluation and grading',
      icon: <Microscope className="w-8 h-8" />,
      details: [
        'Visual inspection for physical damage',
        'Functional testing of all components',
        'Battery health assessment',
        'Screen quality evaluation',
        'Port and connectivity testing'
      ],
      color: 'blue'
    },
    {
      title: 'Data Sanitization',
      description: 'Secure data wiping per NIST standards',
      icon: <Database className="w-8 h-8" />,
      details: [
        'DoD 5220.22-M 3-pass wipe',
        'NIST 800-88 compliance',
        'Certificate of data destruction',
        'Factory reset verification',
        'Secure disposal of non-wipeable media'
      ],
      color: 'red'
    },
    {
      title: 'Component Replacement',
      description: 'High-quality parts and professional repair',
      icon: <Wrench className="w-8 h-8" />,
      details: [
        'OEM or certified equivalent parts',
        'Battery replacement when needed',
        'Screen and digitizer repair',
        'Internal cleaning and maintenance',
        'Precision micro-soldering when required'
      ],
      color: 'green'
    },
    {
      title: 'Quality Testing',
      description: 'Rigorous multi-point inspection process',
      icon: <Target className="w-8 h-8" />,
      details: [
        '50+ point quality checklist',
        'Stress testing under load',
        'Camera and audio verification',
        'Network connectivity testing',
        'Performance benchmarking'
      ],
      color: 'purple'
    },
    {
      title: 'Cosmetic Restoration',
      description: 'Professional cleaning and finishing',
      icon: <RotateCcw className="w-8 h-8" />,
      details: [
        'Ultrasonic cleaning process',
        'Scratch and scuff removal',
        'Housing replacement if needed',
        'Screen protector application',
        'Final cosmetic inspection'
      ],
      color: 'orange'
    },
    {
      title: 'Final Certification',
      description: 'Grade A certification and packaging',
      icon: <Award className="w-8 h-8" />,
      details: [
        'Comprehensive functionality test',
        'Cosmetic grading verification',
        'Warranty certification',
        'Professional packaging',
        'Quality assurance documentation'
      ],
      color: 'emerald'
    }
  ]

  const valueProposition = [
    {
      title: 'Maximize Resale Value',
      description: 'Transform C-Grade devices into premium A-Grade products, increasing resale value by up to 300%',
      icon: <TrendingUp className="w-12 h-12" />,
      benefits: [
        'Higher profit margins on resale',
        'Access to premium market segments',
        'Faster inventory turnover',
        'Enhanced brand reputation'
      ]
    },
    {
      title: 'Professional Standards',
      description: 'Industry-leading refurbishment processes following international standards and certifications',
      icon: <Shield className="w-12 h-12" />,
      benefits: [
        'ISO 14001 environmental compliance',
        'R2 responsible recycling certification',
        'NIST data security standards',
        'IPC electronics assembly standards'
      ]
    },
    {
      title: 'Scalable Capacity',
      description: 'High-volume processing with consistent quality and rapid turnaround times',
      icon: <Settings className="w-12 h-12" />,
      benefits: [
        '850+ devices processed monthly',
        '6-day average turnaround',
        'Bulk processing discounts',
        'Dedicated account management'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0">
          {/* Animated Gradient Mesh */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-cyan-500/5 to-blue-500/5 animate-pulse"></div>
          
          {/* Sophisticated Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                radial-gradient(circle at 50% 50%, rgba(16,185,129,0.2) 2px, transparent 2px)
              `,
              backgroundSize: '60px 60px, 60px 60px, 30px 30px'
            }}
          ></div>
          
          {/* Dynamic Floating Elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-2 h-2 bg-emerald-400 rounded-full opacity-60 animate-ping"></div>
            <div className="absolute top-20 right-20 w-1 h-1 bg-cyan-400 rounded-full opacity-40 animate-pulse"></div>
            <div className="absolute bottom-20 left-32 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-50 animate-ping" style={{animationDelay: '1s'}}></div>
          </div>
          
          {/* Large Gradient Orbs */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-500/15 to-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-bl from-cyan-400/15 to-transparent rounded-full blur-2xl"></div>
          
          {/* Diagonal Light Rays */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-emerald-500/30 via-transparent to-transparent transform -skew-x-12"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-cyan-500/20 via-transparent to-transparent transform skew-x-12"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-20">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-300 rounded-full text-sm font-semibold mb-8 backdrop-blur-md border border-emerald-500/30 shadow-2xl shadow-emerald-500/10">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <Wrench className="w-4 h-4" />
              Device Refurbishment Excellence
            </div>
            
            {/* Enhanced Typography */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-8">
              <span className="bg-gradient-to-r from-white via-slate-100 to-emerald-100 bg-clip-text text-transparent">
                Professional Device
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Refurbishment
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
              Transform your C-grade devices into <span className="text-emerald-300 font-medium">retail-ready Grade A products</span> with our comprehensive refurbishment process backed by industry-leading expertise.
            </p>
            
            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105">
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                View Process Details
              </button>
            </div>
            
            {/* Enhanced Key Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  <AnimatedCounter target={15000} suffix="+" />
                </div>
                <div className="text-slate-300 text-sm font-medium">Devices Processed</div>
              </div>
              
              <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  <AnimatedCounter target={94} suffix="%" />
                </div>
                <div className="text-slate-300 text-sm font-medium">Success Rate</div>
              </div>
              
              <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-orange-500/30 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  <AnimatedCounter target={200} suffix="%" />
                </div>
                <div className="text-slate-300 text-sm font-medium">Value Increase</div>
              </div>
              
              <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  <AnimatedCounter target={5} />
                </div>
                <div className="text-slate-300 text-sm font-medium">Days Average</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Business Value Recovery */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Business Value Recovery
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our systematic approach consistently recovers more value than standard disposal methods.
            </p>
          </div>

          {/* Value Recovery Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 rounded-xl bg-white border border-slate-200">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-emerald-600 mb-1">65-78%</div>
              <div className="text-slate-600">Value Recovery Rate</div>
              <div className="text-sm text-slate-500 mt-1">vs. 15-25% for disposal</div>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-white border border-slate-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-1">10-14</div>
              <div className="text-slate-600">Business Days</div>
              <div className="text-sm text-slate-500 mt-1">full process completion</div>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-white border border-slate-200">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-orange-600 mb-1">99.2%</div>
              <div className="text-slate-600">Quality Pass Rate</div>
              <div className="text-sm text-slate-500 mt-1">final inspection standards</div>
            </div>
          </div>

        </div>
      </section>

      {/* The QC System */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Proprietary QC Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              In-house developed testing system that processes 1,000 units in 3 days with comprehensive reporting.
            </p>
          </div>

          {/* Value Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-5 h-5 bg-red-500 rounded text-white text-xs font-bold flex items-center justify-center">C</span>
                Grade C Devices
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-600">Typical Sale Price:</span>
                  <span className="font-semibold">$150</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Market Demand:</span>
                  <span className="text-red-600">Limited</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-5 h-5 bg-green-500 rounded text-white text-xs font-bold flex items-center justify-center">A</span>
                Grade A Devices
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-600">Premium Sale Price:</span>
                  <span className="font-semibold text-green-600">$350+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Market Demand:</span>
                  <span className="text-green-600">High Volume</span>
                </div>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-3 text-emerald-700">1. QC Assessment</h4>
              <p className="text-slate-600 mb-3">
                Our in-house QC tool runs comprehensive diagnostics with detailed reporting.
              </p>
              <div className="text-sm text-emerald-600">
                Battery • Physical • Components
              </div>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-3 text-blue-700">2. Transparent Quote</h4>
              <p className="text-slate-600 mb-3">
                Detailed refurbishment quote based on QC findings with approval process.
              </p>
              <div className="text-sm text-blue-600">
                Cost Analysis • ROI • Timeline
              </div>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-3 text-orange-700">3. Retail-Ready Processing</h4>
              <p className="text-slate-600 mb-3">
                Deep sanitation, data wiping, testing, and optional premium packaging.
              </p>
              <div className="text-sm text-orange-600">
                Sanitation • Data Security • Testing
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* The Refurbishment Process */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Refurbishment Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A systematic 6-step process that transforms damaged devices into retail-ready products.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold text-slate-900">Initial Assessment</h3>
              </div>
              <p className="text-slate-600 mb-3">
                Comprehensive device evaluation and diagnostic testing.
              </p>
              <div className="text-sm text-slate-500">
                2-4 hours • Visual inspection • Component testing
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold text-slate-900">Disassembly</h3>
              </div>
              <p className="text-slate-600 mb-3">
                Precision disassembly and internal component analysis.
              </p>
              <div className="text-sm text-slate-500">
                1-3 hours • ESD-safe workspace • Component cataloging
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold text-slate-900">Repair & Replace</h3>
              </div>
              <p className="text-slate-600 mb-3">
                Component replacement with genuine or certified parts.
              </p>
              <div className="text-sm text-slate-500">
                3-6 hours • OEM parts • Micro-soldering
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">
                  4
                </div>
                <h3 className="text-lg font-bold text-slate-900">Quality Testing</h3>
              </div>
              <p className="text-slate-600 mb-3">
                Comprehensive functionality testing and validation.
              </p>
              <div className="text-sm text-slate-500">
                2-4 hours • 47-point checklist • Stress testing
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">
                  5
                </div>
                <h3 className="text-lg font-bold text-slate-900">Certification</h3>
              </div>
              <p className="text-slate-600 mb-3">
                Grade assignment and quality documentation.
              </p>
              <div className="text-sm text-slate-500">
                30 minutes • Grade certification • Documentation
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">
                  6
                </div>
                <h3 className="text-lg font-bold text-slate-900">Final Packaging</h3>
              </div>
              <p className="text-slate-600 mb-3">
                Professional cleaning, packaging, and delivery preparation.
              </p>
              <div className="text-sm text-slate-500">
                15 minutes • Protective packaging • Quality inspection
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Our Refurbishment Service
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Professional refurbishment that delivers consistent results and maximum value recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Quality Guarantee</h3>
              <p className="text-slate-600 mb-4">
                Every device undergoes comprehensive testing and comes with our quality guarantee.
              </p>
              <div className="text-2xl font-bold text-green-600">99.2%</div>
              <div className="text-sm text-slate-500">Quality pass rate</div>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Value Recovery</h3>
              <p className="text-slate-600 mb-4">
                Transform low-value devices into premium products with significant return on investment.
              </p>
              <div className="text-2xl font-bold text-blue-600">200%+</div>
              <div className="text-sm text-slate-500">Average value increase</div>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fast Turnaround</h3>
              <p className="text-slate-600 mb-4">
                Quick processing times with our efficient workflow and dedicated team.
              </p>
              <div className="text-2xl font-bold text-blue-600">5-10</div>
              <div className="text-sm text-slate-500">Business days</div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Devices?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Let us help you maximize the value of your device inventory with our professional refurbishment service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-slate-700 hover:bg-slate-800 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-colors">
              Get Started
            </button>
            <button className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-colors">
              Learn More
            </button>
          </div>

        </div>
      </section>

    </div>
  )
}
