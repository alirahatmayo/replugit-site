import { ShieldCheck, Clock } from 'lucide-react'
import { PageHero, Section, Grid, Card, Notice, StatRow } from '@/components/shared/ui'
import { pageMetadata } from '@/lib/metadata'
import { JsonLd, breadcrumbSchema } from '@/components/json-ld'

export const metadata = pageMetadata({
  title: 'Quality Assurance Service',
  description: 'Comprehensive testing and certification ensuring device reliability, performance, and compliance.',
  path: '/services/quality-assurance/',
  canonicalUrl: 'https://www.replugit.com/qc-auditing/',
  noindex: true,
})

export default function QualityAssuranceServicePage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Quality Assurance', path: '/services/quality-assurance/' }])} />
      <PageHero
        badge="Service"
        icon={<ShieldCheck className="w-3.5 h-3.5" />}
        title="Quality Assurance"
        description="Comprehensive testing and certification ensuring device reliability, performance, and compliance."
        align="center"
      />

      <Section wide>
        <Notice icon={<Clock />} title="Service Details Coming Soon">
          We&apos;re building a comprehensive overview of our quality assurance service.
        </Notice>

        <Grid cols={2} className="mt-4">
          <Card title="Key Features" items={['Certified Testing', 'Compliance Check', 'Performance Audit']} />
          <Card title="Pass Rate" tone="surface">
            <StatRow stats={[{ value: '99%', label: 'Pass Rate' }]} />
          </Card>
        </Grid>
      </Section>
    </main>
  )
}
