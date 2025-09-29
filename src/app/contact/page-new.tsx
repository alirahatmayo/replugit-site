import ContactPartnerSection from '@/components/homepage/ContactPartnerSection'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      {/* Page Header */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-slate-400 text-lg">
            Ready to transform your electronics business? Let's connect.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <ContactPartnerSection />
    </main>
  )
}
