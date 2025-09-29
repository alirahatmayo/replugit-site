export default function RefurbishingServicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Device Refurbishing
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional restoration transforming C-Grade devices to A-Grade quality with comprehensive testing.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Service Details Coming Soon
            </h2>
            <p className="text-slate-600">
              We're building a comprehensive overview of our device refurbishing service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Features</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  Grade Improvement
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  Quality Testing
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  Warranty Included
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Success Rate</h3>
              <div className="text-center">
                <div className="text-4xl font-bold text-slate-900">95%</div>
                <div className="text-slate-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
