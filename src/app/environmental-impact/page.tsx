import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export default function EnvironmentalImpactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Environmental Impact
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Building a Sustainable Future
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Every refurbished device prevents toxic e-waste and reduces carbon emissions. 
              Join us in creating a circular economy for electronics.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">75%</div>
              <div className="text-slate-600">E-Waste Reduced</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">10,000+</div>
              <div className="text-slate-600">Devices Refurbished</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">50 Tons</div>
              <div className="text-slate-600">CO₂ Prevented</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">95%</div>
              <div className="text-slate-600">Materials Recovered</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                The E-Waste Crisis
              </h2>
              <div className="space-y-6 text-lg text-slate-600">
                <p>
                  Electronic waste is the fastest-growing waste stream globally, with over 
                  54 million tons generated annually. Only 20% gets properly recycled.
                </p>
                <p>
                  Toxic materials like lead, mercury, and cadmium contaminate soil and water, 
                  while valuable materials like gold, silver, and rare earth elements are lost forever.
                </p>
                <p>
                  The production of new electronics accounts for 4% of global greenhouse gas emissions, 
                  more than the aviation industry.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Environmental Impact of E-Waste
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">54 million tons of e-waste generated annually</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Only 20% properly recycled worldwide</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">$62.5 billion in materials lost annually</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Toxic chemicals contaminate ecosystems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Our Circular Economy Approach
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We transform the linear "take-make-waste" model into a circular system 
              where electronics are refurbished, reused, and recycled responsibly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Collect */}
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Collect</h3>
              <p className="text-slate-600">
                Partner with businesses to collect end-of-life electronics and 
                C-grade devices that would otherwise become e-waste.
              </p>
            </div>

            {/* Refurbish */}
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Refurbish</h3>
              <p className="text-slate-600">
                Restore devices to A-grade quality through comprehensive testing, 
                repair, and quality assurance processes.
              </p>
            </div>

            {/* Redistribute */}
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Redistribute</h3>
              <p className="text-slate-600">
                Extend device lifecycles by redistributing refurbished electronics 
                to new users at affordable prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Benefits */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Environmental Benefits
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every refurbished device creates measurable environmental impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-emerald-600 mb-2">75%</div>
              <div className="text-slate-600 text-sm">Reduction in E-Waste</div>
              <p className="text-xs text-slate-500 mt-2">
                Per device refurbished vs. disposed
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-emerald-600 mb-2">70%</div>
              <div className="text-slate-600 text-sm">Lower Carbon Footprint</div>
              <p className="text-xs text-slate-500 mt-2">
                Compared to manufacturing new
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-emerald-600 mb-2">95%</div>
              <div className="text-slate-600 text-sm">Materials Recovered</div>
              <p className="text-xs text-slate-500 mt-2">
                Valuable metals and components
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-emerald-600 mb-2">80%</div>
              <div className="text-slate-600 text-sm">Water Conservation</div>
              <p className="text-xs text-slate-500 mt-2">
                Less water vs. new production
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Certifications & Standards
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our environmental practices are verified by leading certification bodies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-600 font-bold text-lg">ISO</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">ISO 14001</h3>
              <p className="text-slate-600">
                Environmental Management System certification ensuring systematic 
                approach to environmental responsibility.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-600 font-bold text-lg">R2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">R2 Certified</h3>
              <p className="text-slate-600">
                Responsible Recycling standard for electronics recyclers, 
                ensuring data security and environmental protection.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-600 font-bold text-lg">EPA</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">EPA Compliant</h3>
              <p className="text-slate-600">
                Full compliance with Environmental Protection Agency 
                guidelines for electronic waste management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join the Circular Economy Movement
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Partner with us to reduce e-waste and create a more sustainable future 
            for electronics. Every device matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
              Start Your Program
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
              View Impact Report
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
