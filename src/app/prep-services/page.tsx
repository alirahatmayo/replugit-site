import { ArrowRight, Package, Truck, CheckCircle, Clock, MapPin, Shield, Settings } from 'lucide-react'

export default function PrepServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Navigation Spacer */}
      <div className="h-32"></div>
      
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
              <Package className="w-4 h-4" />
              Prep Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Device Preparation
              <span className="block text-orange-600 mt-2">& Logistics Services</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Professional electronics preparation services with retail packaging, protective transit solutions, and fulfillment-ready processing for corporate and retail distribution.
            </p>
          </div>

          {/* Key Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/80 backdrop-blur-sm border border-orange-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Retail Packaging</h3>
              <p className="text-slate-600 mb-4">Professional retail packaging with protective materials and custom labeling for electronics distribution.</p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Retail-ready packaging standards</li>
                <li>• Custom bubble bags & honeycomb cushioning</li>
                <li>• Barcode labels & stickering</li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-orange-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Transit Protection</h3>
              <p className="text-slate-600 mb-4">Specialized protective packaging following electronics industry standards for safe transportation.</p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Electronics-specific protection</li>
                <li>• Anti-static materials</li>
                <li>• Impact-resistant cushioning</li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-orange-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fulfillment Ready</h3>
              <p className="text-slate-600 mb-4">Complete preparation for corporate deployment or retail fulfillment services like FBA and Walmart.</p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• FBA & Walmart Fulfillment ready</li>
                <li>• Corporate deployment preparation</li>
                <li>• Clean, sanitized, ready-to-use</li>
              </ul>
            </div>
          </div>

          {/* Process Flow */}
          <div className="bg-white/60 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Our Preparation Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Cleaning & Sanitizing</h3>
                <p className="text-sm text-slate-600">Professional cleaning and sanitization for ready-to-use condition</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Protective Packaging</h3>
                <p className="text-sm text-slate-600">Custom cushioning and anti-static protection for electronics</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Labeling & Documentation</h3>
                <p className="text-sm text-slate-600">Barcode labels, documentation, and warranty registration</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Fulfillment Ready</h3>
                <p className="text-sm text-slate-600">Final preparation for corporate or retail fulfillment channels</p>
              </div>
            </div>
          </div>

          {/* Specialized Services Section */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Specialized Electronics Preparation</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Packaging & Protection</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Custom bubble bags for device protection</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Honeycomb cushioning for maximum transit safety</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Anti-static materials for electronics protection</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Retail packaging following industry standards</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Labeling & Documentation</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Barcode labels and product stickering</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Custom documentation printing and insertion</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">In-house warranty registration solution</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Fulfillment service compliance (FBA, Walmart)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Target Markets */}
          <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Preparation for Multiple Channels</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/80 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Corporate Deployment</h3>
                <p className="text-slate-600 mb-3">Ready-to-use electronics for business environments</p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• Cleaned and sanitized for immediate use</li>
                  <li>• Professional packaging and documentation</li>
                  <li>• Warranty registration included</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Retail Fulfillment</h3>
                <p className="text-slate-600 mb-3">Prepared for major fulfillment platforms</p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• Amazon FBA compliant packaging</li>
                  <li>• Walmart Fulfillment Service ready</li>
                  <li>• Retail channel specifications met</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Our Prep Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-orange-200" />
                  <span>Fast turnaround times</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-orange-200" />
                  <span>Secure handling and processing</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-200" />
                  <span>Quality assurance at every step</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Package className="w-5 h-5 text-orange-200" />
                  <span>Professional packaging solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-orange-200" />
                  <span>Reliable logistics network</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-orange-200" />
                  <span>Real-time tracking and updates</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Streamline Your Electronics Distribution</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Professional electronics preparation services that ensure your products are retail-ready and fulfillment-compliant for any distribution channel.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Get Prep Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
