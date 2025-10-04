import { ArrowRight, Wrench, Sparkles, Shield, Search, Battery, Cpu, Award, CheckCircle, Settings, Eye, Target } from 'lucide-react'

export default function RefurbishingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white">
      {/* Navigation Spacer */}
      <div className="h-32"></div>
      
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
              <Wrench className="w-4 h-4" />
              Device Refurbishing
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Professional Device
              <span className="block text-emerald-600 mt-2">Refurbishment Services</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Transform C-grade electronics into premium Grade A devices through expert repair, component replacement, and comprehensive quality assurance testing.
            </p>
          </div>

          {/* Key Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Comprehensive Diagnostics</h3>
              <p className="text-slate-600 mb-4">Complete device assessment with advanced diagnostic software and physical inspection to identify all repair needs.</p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• 50+ point diagnostic testing</li>
                <li>• Component functionality analysis</li>
                <li>• Battery health assessment</li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Expert Repairs</h3>
              <p className="text-slate-600 mb-4">Professional repair services using genuine OEM and certified aftermarket parts for optimal device performance.</p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Screen and digitizer replacement</li>
                <li>• Battery and charging port repair</li>
                <li>• Micro-soldering for board repairs</li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Quality Certification</h3>
              <p className="text-slate-600 mb-4">Rigorous quality assurance testing and professional grade assignment based on industry standards.</p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• 47-point QA protocol</li>
                <li>• Grade A/A-/B+ certification</li>
                <li>• Complete documentation</li>
              </ul>
            </div>
          </div>

          {/* Refurbishment Process */}
          <div className="bg-white/60 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Our Refurbishment Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Initial Assessment</h3>
                <p className="text-sm text-slate-600">Comprehensive diagnostics and damage evaluation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Precision Disassembly</h3>
                <p className="text-sm text-slate-600">Careful teardown and component inspection</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Expert Repair</h3>
                <p className="text-sm text-slate-600">Component replacement and micro-soldering</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Quality Assurance</h3>
                <p className="text-sm text-slate-600">47-point testing and grade certification</p>
              </div>
            </div>
          </div>

          {/* Repair Capabilities */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Comprehensive Repair Capabilities</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Physical Repairs</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Display and digitizer replacement</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Battery replacement and optimization</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Back housing and frame restoration</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Camera and speaker replacement</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Technical Repairs</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Micro-soldering and board-level repair</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Charging port and connector repair</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Logic board cleaning and restoration</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Water damage recovery and repair</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Device Types */}
          <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Devices We Refurbish</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/80 rounded-xl p-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Smartphones</h3>
                <p className="text-slate-600 mb-3">iPhone and Android device refurbishment</p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• iPhone models (6 to latest)</li>
                  <li>• Samsung Galaxy series</li>
                  <li>• Google Pixel devices</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Tablets</h3>
                <p className="text-slate-600 mb-3">iPad and Android tablet restoration</p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• iPad and iPad Pro</li>
                  <li>• Samsung Galaxy Tab</li>
                  <li>• Microsoft Surface tablets</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Battery className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Laptops</h3>
                <p className="text-slate-600 mb-3">MacBook and PC laptop refurbishment</p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• MacBook Air and Pro</li>
                  <li>• Dell, HP, Lenovo laptops</li>
                  <li>• Chromebook devices</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Our Refurbishment Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Wrench className="w-5 h-5 text-emerald-200" />
                  <span>Expert technicians with years of experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-emerald-200" />
                  <span>OEM and certified aftermarket parts</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-200" />
                  <span>47-point quality assurance testing</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-emerald-200" />
                  <span>Industry-standard grade certification</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-emerald-200" />
                  <span>Maximum value recovery from damaged devices</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-emerald-200" />
                  <span>Fast turnaround times</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Transform Your Devices?</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Let our expert technicians restore your C-grade electronics to premium Grade A condition
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
