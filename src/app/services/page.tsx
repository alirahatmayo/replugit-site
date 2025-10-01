import Link from 'next/link'
import { ArrowRight, Settings, Shield, Leaf, Package, CheckCircle, Wrench } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      title: "Device Refurbishing",
      description: "Professional electronics refurbishment services transforming C-grade devices to A-grade quality.",
      features: [
        "Laptops, desktops, tablets, and phones",
        "Hardware repairs and upgrades (RAM, SSD, batteries)",
        "Cosmetic improvements and restoration",
        "Professional grading systems"
      ],
      href: "/refurbishing",
      icon: Wrench,
      color: "blue",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      title: "QC and Auditing",
      description: "Comprehensive quality control with detailed device inspection and component testing.",
      features: [
        "Physical condition assessment",
        "Component functionality testing",
        "Detailed grading reports",
        "Serial number tracking and documentation"
      ],
      href: "/qc-auditing",
      icon: CheckCircle,
      color: "purple",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      buttonColor: "bg-purple-600 hover:bg-purple-700"
    },
    {
      title: "Data Wiping",
      description: "Secure data erasure services using certified software and industry-standard protocols.",
      features: [
        "DoD and NIST compliant erasure",
        "Certified software tools",
        "Complete documentation",
        "Physical destruction options"
      ],
      href: "/data-wiping",
      icon: Shield,
      color: "red",
      bgColor: "bg-red-50",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      buttonColor: "bg-red-600 hover:bg-red-700"
    },
    {
      title: "Prep Services",
      description: "Electronics preparation with retail packaging and fulfillment-ready processing.",
      features: [
        "Retail packaging and protection",
        "Custom labeling and documentation",
        "FBA and Walmart fulfillment ready",
        "Corporate deployment preparation"
      ],
      href: "/prep-services",
      icon: Package,
      color: "orange",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      buttonColor: "bg-orange-600 hover:bg-orange-700"
    },
    {
      title: "Environmental Reporting",
      description: "Sustainability impact tracking and comprehensive environmental reporting.",
      features: [
        "Real-time impact metrics",
        "Custom sustainability reports",
        "Environmental trend analysis",
        "Framework alignment documentation"
      ],
      href: "/environmental-reporting",
      icon: Leaf,
      color: "green",
      bgColor: "bg-emerald-50",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      buttonColor: "bg-emerald-600 hover:bg-emerald-700"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Navigation Spacer */}
      <div className="h-32"></div>
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-6">
            <Settings className="w-4 h-4" />
            Our Services
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Complete Electronics
            <span className="block text-emerald-600">Lifecycle Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Professional refurbishment, quality control, and preparation services designed to maximize device value and extend product lifecycles.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={service.title} className={`${service.bgColor} border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                  <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="text-slate-600 space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href={service.href}
                    className={`inline-flex items-center ${service.buttonColor} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg group`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Replugit Services?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Professional expertise, industry-standard processes, and comprehensive solutions for all your electronics lifecycle needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Assured</h3>
              <p className="text-slate-300">Professional processes with detailed documentation and quality tracking throughout.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure & Compliant</h3>
              <p className="text-slate-300">Industry-standard security protocols and certified tools for complete peace of mind.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">End-to-End Solutions</h3>
              <p className="text-slate-300">Complete lifecycle management from refurbishment to fulfillment-ready deployment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Device Operations?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
            Partner with us for professional electronics services that maximize value, ensure quality, and support sustainability.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-emerald-600 px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
