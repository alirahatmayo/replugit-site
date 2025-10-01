import { ArrowRight, BarChart3, Leaf, TrendingUp, FileText, Globe, Shield } from 'lucide-react'

export default function EnvironmentalReportingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white">
      {/* Navigation Spacer */}
      <div className="h-32"></div>
      
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
              <Leaf className="w-4 h-4" />
              Environmental Reporting
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Sustainability Impact
              <span className="block text-emerald-600 mt-2">Tracking & Reporting</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive environmental impact measurement and transparent reporting for your refurbishment operations.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Impact Metrics</h3>
              <p className="text-slate-600 mb-4">Real-time tracking of water saved, carbon reduced, and waste diverted from your refurbishment activities.</p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Water consumption tracking</li>
                <li>• Carbon footprint calculation</li>
                <li>• E-waste diversion metrics</li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Custom Reports</h3>
              <p className="text-slate-600 mb-4">Detailed environmental reports tailored for compliance, certification, and stakeholder communication.</p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Monthly impact summaries</li>
                <li>• Annual sustainability reports</li>
                <li>• Certification documentation</li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Trend Analysis</h3>
              <p className="text-slate-600 mb-4">Historical data analysis and forecasting to optimize your environmental performance over time.</p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Performance trends</li>
                <li>• Optimization insights</li>
                <li>• Goal tracking</li>
              </ul>
            </div>
          </div>

          {/* What's Included */}
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">What's Included in Environmental Reporting</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-emerald-200" />
                  <span>Professional documentation support</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-emerald-200" />
                  <span>Global sustainability framework alignment</span>
                </div>
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-emerald-200" />
                  <span>Real-time dashboard access</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-emerald-200" />
                  <span>Monthly and annual reports</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-emerald-200" />
                  <span>Performance benchmarking</span>
                </div>
                <div className="flex items-center gap-3">
                  <Leaf className="w-5 h-5 text-emerald-200" />
                  <span>Environmental impact calculations</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to Track Your Environmental Impact?</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Get detailed insights into your sustainability performance and demonstrate your commitment to environmental responsibility.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Get Environmental Reporting
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
