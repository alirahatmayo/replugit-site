import { RefreshCw, Clock } from 'lucide-react'
import { PageHero, Section, Grid, Card, Notice } from '@/components/shared/ui'
import { pageMetadata } from '@/lib/metadata'
import { JsonLd, breadcrumbSchema } from '@/components/json-ld'

export const metadata = pageMetadata({
  title: 'Device Refurbishing Service',
  description: 'Professional restoration transforming C-Grade devices to A-Grade quality with comprehensive testing.',
  path: '/services/refurbishing/',
  canonicalUrl: 'https://www.replugit.com/refurbishing/',
  noindex: true,
})

export default function RefurbishingServicePage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Refurbishing', path: '/services/refurbishing/' }])} />
      <PageHero
        badge="Service"
        icon={<RefreshCw className="w-3.5 h-3.5" />}
        title="Device Refurbishing"
        description="Professional restoration transforming C-Grade devices to A-Grade quality with comprehensive testing."
        align="center"
      />

      <Section wide>
        <Notice icon={<Clock />} title="Service Details Coming Soon">
          We&apos;re building a comprehensive overview of our device refurbishing service.
        </Notice>

        <Grid cols={2} className="mt-4">
          <Card title="Key Features" items={['Grade Improvement', 'Quality Testing', 'Warranty Included']} />
          <Card title="Every Device" tone="surface" description="Tested and quality-checked before it ships, with a warranty included." />
        </Grid>
      </Section>
    </main>
  )
}
