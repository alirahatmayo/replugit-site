import { Package, Clock } from 'lucide-react'
import { PageHero, Section, Grid, Card, Notice, StatRow } from '@/components/shared/ui'
import { pageMetadata } from '@/lib/metadata'
import { JsonLd, breadcrumbSchema } from '@/components/json-ld'

export const metadata = pageMetadata({
  title: 'Wholesale Electronics Service',
  description: 'Global bulk distribution for retailers, resellers, and enterprises with competitive pricing and reliable supply chains.',
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
        description="Global bulk distribution for retailers, resellers, and enterprises with competitive pricing and reliable supply chains."
        align="center"
      />

      <Section wide>
        <Notice icon={<Clock />} title="Service Details Coming Soon">
          We&apos;re building a comprehensive overview of our wholesale electronics service.
        </Notice>

        <Grid cols={2} className="mt-4">
          <Card title="Key Features" items={['Bulk Pricing', 'Global Shipping', 'Volume Discounts']} />
          <Card title="Monthly Metrics" tone="surface">
            <StatRow stats={[{ value: '10,000+', label: 'Units Monthly' }]} />
          </Card>
        </Grid>
      </Section>
    </main>
  )
}
