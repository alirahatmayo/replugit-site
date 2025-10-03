export default function WholesaleServicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 9l3-3m3 3v0" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Wholesale Electronics
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Global bulk distribution for retailers, resellers, and enterprises with competitive pricing and reliable supply chains.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Service Details Coming Soon
            </h2>
            <p className="text-slate-600">
              We're building a comprehensive overview of our wholesale electronics service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Features</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  Bulk Pricing
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  Global Shipping
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  Volume Discounts
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Monthly Metrics</h3>
              <div className="text-center">
                <div className="text-4xl font-bold text-slate-900">10,000+</div>
                <div className="text-slate-600">Units Monthly</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
