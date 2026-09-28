import { ShieldCheck, Clock } from 'lucide-react'
import { PageHero, Section, Grid, Card, Notice, StatRow } from '@/components/shared/ui'

export default function QualityAssuranceServicePage() {
  return (
    <main className="min-h-screen">
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
