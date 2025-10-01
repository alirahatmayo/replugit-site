import { ArrowRight, CheckCircle, Shield, Search, Award, BarChart3, Settings, Target } from 'lucide-react'

export default function QCAuditingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation Spacer */}
      <div className="h-32"></div>
      
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4" />
              QC and Auditing
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Quality Control
              <span className="block text-blue-600 mt-2">& Auditing Services</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive device inspection and component testing with detailed grading and reporting for electronics refurbishment quality assurance.
            </p>
          </div>

          {/* Key Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Physical Inspection</h3>
              <p className="text-slate-600 mb-4">Detailed physical examination of device condition including exterior and screen assessment.</p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Dents and breakage detection</li>
                <li>• Screen blemishes and scratches</li>
                <li>• Scuffs and wear assessment</li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Component Testing</h3>
              <p className="text-slate-600 mb-4">Comprehensive internal component verification through software diagnostics and physical inspection.</p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Internal hardware testing</li>
                <li>• Software diagnostic scans</li>
                <li>• Performance benchmarking</li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Detailed Grading</h3>
              <p className="text-slate-600 mb-4">Professional grading system with detailed notes and comprehensive reporting for each device.</p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Condition grade assignment</li>
                <li>• Detailed inspection notes</li>
                <li>• Component functionality rating</li>
              </ul>
            </div>
          </div>

          {/* Inspection Process */}
          <div className="bg-white/60 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Our Inspection Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Device Intake</h3>
                <p className="text-sm text-slate-600">Serial number logging and initial device identification</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Physical Assessment</h3>
                <p className="text-sm text-slate-600">Comprehensive exterior and screen condition evaluation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Component Testing</h3>
                <p className="text-sm text-slate-600">Internal hardware and software diagnostic verification</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Report Generation</h3>
                <p className="text-sm text-slate-600">Detailed grading report with specifications and notes</p>
              </div>
            </div>
          </div>

          {/* Detailed Reporting Section */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Comprehensive QC Reports</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Device Information Captured</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Serial Number & Asset Tags</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Make, Model & Model Number</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">RAM, Storage (SSD/HDD) Specifications</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Screen Resolution & Display Quality</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Graphics Card & Processor Details</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Quality Assessment Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Condition Grade (A, B, C, D)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Physical Damage Assessment</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Component Functionality Status</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Detailed Inspection Notes</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Repair Recommendations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Our QC & Auditing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-blue-200" />
                  <span>Industry-standard quality processes</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-blue-200" />
                  <span>Experienced QC professionals</span>
                </div>
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-blue-200" />
                  <span>Detailed performance metrics</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-200" />
                  <span>Quality assurance focus</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-blue-200" />
                  <span>Continuous improvement approach</span>
                </div>
                <div className="flex items-center gap-3">
                  <Settings className="w-5 h-5 text-blue-200" />
                  <span>Process optimization recommendations</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Ensure Quality & Standards</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Partner with us for comprehensive QC and auditing services that help maintain quality standards and improve processes.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Get QC & Auditing Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
