import { RefreshCw, Clock } from 'lucide-react'
import { PageHero, Section, Grid, Card, Notice, StatRow } from '@/components/shared/ui'

export default function RefurbishingServicePage() {
  return (
    <main className="min-h-screen">
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
          <Card title="Success Rate" tone="surface">
            <StatRow stats={[{ value: '95%', label: 'Success Rate' }]} />
          </Card>
        </Grid>
      </Section>
    </main>
  )
}
