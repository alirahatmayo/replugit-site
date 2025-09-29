export default function QualityAssuranceServicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Quality Assurance
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive testing and certification ensuring device reliability, performance, and compliance.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Service Details Coming Soon
            </h2>
            <p className="text-slate-600">
              We're building a comprehensive overview of our quality assurance service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Features</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  Certified Testing
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  Compliance Check
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  Performance Audit
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Pass Rate</h3>
              <div className="text-center">
                <div className="text-4xl font-bold text-slate-900">99%</div>
                <div className="text-slate-600">Pass Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
