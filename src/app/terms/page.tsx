import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Replugit',
  description: 'Replugit terms of service for our electronics refurbishment and wholesale services.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-slate-600">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Agreement to Terms</h2>
            <p className="text-slate-700 mb-4">
              By accessing and using Replugit's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-slate-700 mb-4">
              Replugit provides:
            </p>
            <ul className="text-slate-700 mb-4 list-disc pl-6">
              <li>Electronics refurbishment and quality assurance</li>
              <li>Wholesale procurement and distribution</li>
              <li>Secure data wiping services</li>
              <li>Environmental impact reporting</li>
              <li>Platform tools for inventory management</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Quality Assurance</h2>
            <p className="text-slate-700 mb-4">
              We guarantee:
            </p>
            <ul className="text-slate-700 mb-4 list-disc pl-6">
              <li>Comprehensive testing of all refurbished devices</li>
              <li>Industry-standard quality control processes</li>
              <li>Transparent reporting of device conditions</li>
              <li>Warranty coverage on refurbished items</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Security</h2>
            <p className="text-slate-700 mb-4">
              All devices undergo secure data wiping using industry-standard methods. We ensure complete data destruction and provide certificates of data wiping when requested.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitation of Liability</h2>
            <p className="text-slate-700 mb-4">
              Replugit's liability is limited to the value of services provided. We are not liable for indirect, incidental, or consequential damages arising from the use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Warranty</h2>
            <p className="text-slate-700 mb-4">
              We provide warranties on refurbished devices as specified in individual service agreements. Warranty terms vary by device type and condition.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Termination</h2>
            <p className="text-slate-700 mb-4">
              Either party may terminate services with appropriate notice as specified in service agreements. All data wiping and quality assurance commitments remain in effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to Terms</h2>
            <p className="text-slate-700 mb-4">
              We may update these terms periodically. Continued use of our services constitutes acceptance of updated terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Information</h2>
            <p className="text-slate-700 mb-4">
              For questions about these Terms of Service:
            </p>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-slate-700 mb-2">
                <strong>Email:</strong> legal@replugit.com
              </p>
              <p className="text-slate-700 mb-2">
                <strong>Phone:</strong> +1 (548) 503-5000
              </p>
              <p className="text-slate-700">
                <strong>Business Hours:</strong> Monday-Friday, 9AM-6PM EST
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
