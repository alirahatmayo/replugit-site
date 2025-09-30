import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Replugit',
  description: 'Replugit privacy policy and data protection practices for our electronics refurbishment services.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Privacy Policy
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
            <p className="text-slate-700 mb-4">
              At Replugit, we collect information to provide better services to our users and clients. This includes:
            </p>
            <ul className="text-slate-700 mb-4 list-disc pl-6">
              <li>Contact information (name, email, phone number)</li>
              <li>Business information for wholesale clients</li>
              <li>Device information for refurbishment services</li>
              <li>Usage data to improve our platform</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Security</h2>
            <p className="text-slate-700 mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="text-slate-700 mb-4 list-disc pl-6">
              <li>Secure data wiping for all refurbished devices</li>
              <li>Encrypted data transmission and storage</li>
              <li>Regular security audits and updates</li>
              <li>Limited access to personal information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
            <p className="text-slate-700 mb-4">
              We use collected information to:
            </p>
            <ul className="text-slate-700 mb-4 list-disc pl-6">
              <li>Provide refurbishment and quality assurance services</li>
              <li>Communicate about your orders and services</li>
              <li>Improve our platform and services</li>
              <li>Generate environmental impact reports</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Retention</h2>
            <p className="text-slate-700 mb-4">
              We retain personal information only as long as necessary to provide our services and comply with legal obligations. Device data is permanently wiped using industry-standard methods.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights</h2>
            <p className="text-slate-700 mb-4">
              You have the right to:
            </p>
            <ul className="text-slate-700 mb-4 list-disc pl-6">
              <li>Access your personal information</li>
              <li>Correct or update your information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-slate-700 mb-4">
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-slate-700 mb-2">
                <strong>Email:</strong> privacy@replugit.com
              </p>
              <p className="text-slate-700 mb-2">
                <strong>Phone:</strong> +1 (548) 503-5000
              </p>
              <p className="text-slate-700">
                <strong>Address:</strong> Replugit Privacy Officer, [Your Business Address]
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
