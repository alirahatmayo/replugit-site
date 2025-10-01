import { ArrowRight, Shield, HardDrive, Lock, FileX, CheckCircle, Award, AlertTriangle } from 'lucide-react'

export default function DataWipingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Navigation Spacer */}
      <div className="h-32"></div>
      
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Data Wiping
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Secure Data
              <span className="block text-red-600 mt-2">Erasure Services</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Military-grade data destruction and secure erasure services ensuring complete data protection and compliance with privacy regulations.
            </p>
          </div>

          {/* Key Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/80 backdrop-blur-sm border border-red-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <HardDrive className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Complete Data Erasure</h3>
              <p className="text-slate-600 mb-4">Thorough data wiping using industry-standard protocols to ensure all data is permanently erased.</p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• DoD 5220.22-M standards</li>
                <li>• Multiple overwrite passes</li>
                <li>• Verification processes</li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-red-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Compliance Documentation</h3>
              <p className="text-slate-600 mb-4">Detailed documentation and certificates from our certified data wiping software for your records.</p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Software compliance certificates</li>
                <li>• Data destruction reports</li>
                <li>• Audit trail documentation</li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-red-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <FileX className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Physical Destruction</h3>
              <p className="text-slate-600 mb-4">Physical destruction of storage media for maximum security when required by sensitive data policies.</p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Hard drive shredding</li>
                <li>• SSD destruction</li>
                <li>• Witnessed destruction</li>
              </ul>
            </div>
          </div>

          {/* Security Standards */}
          <div className="bg-white/60 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Our Data Wiping Standards</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">DoD Standards</h3>
                <p className="text-sm text-slate-600">Using certified software following DoD 5220.22-M protocols</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">NIST Guidelines</h3>
                <p className="text-sm text-slate-600">Software certified to NIST SP 800-88 sanitization standards</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Certified Tools</h3>
                <p className="text-sm text-slate-600">Industry-certified data wiping software and tools</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Process Tracking</h3>
                <p className="text-sm text-slate-600">Complete documentation and tracking throughout process</p>
              </div>
            </div>
          </div>

          {/* Security Alert */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 mb-16">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Why Professional Data Wiping Matters</h3>
                <p className="text-slate-600 mb-4">
                  Simply deleting files or formatting drives doesn't permanently remove data. Professional data wiping ensures:
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Complete protection against data recovery attempts</li>
                  <li>• Compliance with privacy regulations and industry standards</li>
                  <li>• Protection of sensitive personal and business information</li>
                  <li>• Peace of mind for your organization and customers</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Our Data Wiping Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-red-200" />
                  <span>Certified software and tools</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-red-200" />
                  <span>Industry-standard processes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-200" />
                  <span>Verified data destruction</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Lock className="w-5 h-5 text-red-200" />
                  <span>Complete process documentation</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileX className="w-5 h-5 text-red-200" />
                  <span>Detailed destruction reports</span>
                </div>
                <div className="flex items-center gap-3">
                  <HardDrive className="w-5 h-5 text-red-200" />
                  <span>All storage types supported</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Protect Your Data & Reputation</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Ensure complete data security with our professional data wiping services. Protect your organization and comply with regulations.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Get Secure Data Wiping
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
