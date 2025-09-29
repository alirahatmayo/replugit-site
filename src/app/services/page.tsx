import CardWrapper from '@/components/shared/CardWrapper'

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Device Lifecycle & 
            <span className="block text-green-600">Refurbishing Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Our core services focus on extending the life of devices and maximizing value recovery for businesses.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Refurbishing & Upgrades */}
            <CardWrapper>
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Refurbishing & Upgrades</h3>
                <ul className="text-slate-600 space-y-2 mb-6">
                  <li>• Laptops, desktops, tablets, and phones</li>
                  <li>• Hardware repairs and upgrades (RAM, SSD, batteries)</li>
                  <li>• Cosmetic improvements (skins, screen guards)</li>
                  <li>• Grading systems (C-Grade to A-Grade transformation)</li>
                </ul>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Learn More
                </button>
              </div>
            </CardWrapper>

            {/* Testing & Quality Control */}
            <CardWrapper>
              <div className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">🧪</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Testing & Quality Control</h3>
                <ul className="text-slate-600 space-y-2 mb-6">
                  <li>• Automated hardware diagnostics</li>
                  <li>• Detailed reports linked to serial numbers</li>
                  <li>• Automated and manual QC workflows</li>
                  <li>• Standalone tool available per-unit basis</li>
                </ul>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Get QC Tool
                </button>
              </div>
            </CardWrapper>

            {/* Data Wiping & Compliance */}
            <CardWrapper>
              <div className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">🔐</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Data Wiping & Compliance</h3>
                <ul className="text-slate-600 space-y-2 mb-6">
                  <li>• Secure data erasure (NIST 800-88, R2, e-Stewards)</li>
                  <li>• Compliance certifications for B2B clients</li>
                  <li>• Audit logging and documentation</li>
                  <li>• Industry standard protocols</li>
                </ul>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  View Compliance
                </button>
              </div>
            </CardWrapper>

            {/* Logistics & Distribution */}
            <CardWrapper>
              <div className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">📦</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Logistics & Distribution</h3>
                <ul className="text-slate-600 space-y-2 mb-6">
                  <li>• Reverse logistics handling</li>
                  <li>• Serial number tracking system</li>
                  <li>• Redistribution and resale readiness</li>
                  <li>• Manifest preparation and mapping</li>
                </ul>
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Track Devices
                </button>
              </div>
            </CardWrapper>

            {/* Sustainability */}
            <CardWrapper>
              <div className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Sustainability</h3>
                <ul className="text-slate-600 space-y-2 mb-6">
                  <li>• Extending device lifecycles</li>
                  <li>• Reducing e-waste impact</li>
                  <li>• Eco-friendly business solutions</li>
                  <li>• Environmental responsibility reporting</li>
                </ul>
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Impact Report
                </button>
              </div>
            </CardWrapper>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Device Operations?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's discuss how our refurbishing services can help maximize your device value recovery.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 text-lg font-medium rounded-lg shadow-lg transition-colors">
            Get Started Today
          </button>
        </div>
      </section>
    </main>
  )
}
