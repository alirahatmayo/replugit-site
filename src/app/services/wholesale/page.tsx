import { Package, Clock } from 'lucide-react'
import { PageHero, Section, Grid, Card, Notice } from '@/components/shared/ui'
import { pageMetadata } from '@/lib/metadata'
import { JsonLd, breadcrumbSchema } from '@/components/json-ld'

export const metadata = pageMetadata({
  title: 'Wholesale Electronics Service',
  description: 'Bulk distribution for retailers, resellers, and enterprises with competitive pricing and reliable supply chains.',
  path: '/services/wholesale/',
  canonicalUrl: 'https://www.replugit.com/wholesale/',
  noindex: true,
})

export default function WholesaleServicePage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Wholesale', path: '/services/wholesale/' }])} />
      <PageHero
        badge="Service"
        icon={<Package className="w-3.5 h-3.5" />}
        title="Wholesale Electronics"
        description="Bulk distribution for retailers, resellers, and enterprises with competitive pricing and reliable supply chains."
        align="center"
      />

      <Section wide>
        <Notice icon={<Clock />} title="Service Details Coming Soon">
          We&apos;re building a comprehensive overview of our wholesale electronics service.
        </Notice>

        <Grid cols={2} className="mt-4">
          <Card title="Key Features" items={['Bulk Pricing', 'Reliable Shipping', 'Volume Discounts']} />
          <Card title="How It Works" tone="surface" description="Join our WhatsApp community for daily deals and real-time inventory updates." />
        </Grid>
      </Section>
    </main>
  )
}
