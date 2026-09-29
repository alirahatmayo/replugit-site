import ContactPartnerSection from '@/components/homepage/ContactPartnerSection'
import { PageHero } from '@/components/shared/ui'
import { pageMetadata } from '@/lib/metadata'
import { JsonLd, breadcrumbSchema } from '@/components/json-ld'

export const metadata = pageMetadata({
  title: "Get in Touch",
  description: "Ready to transform your electronics business? Let's connect.",
  path: '/contact/',
})


export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact/' }])} />
      {/* Page Header */}
      <PageHero title="Get in Touch" description="Ready to transform your electronics business? Let's connect." align="center" />

      {/* Contact Section */}
      <ContactPartnerSection />
    </main>
  )
}
