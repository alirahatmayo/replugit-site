import ContactPartnerSection from '@/components/homepage/ContactPartnerSection'
import { PageHero } from '@/components/shared/ui'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <PageHero title="Get in Touch" description="Ready to transform your electronics business? Let's connect." align="center" />

      {/* Contact Section */}
      <ContactPartnerSection />
    </main>
  )
}
