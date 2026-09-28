import { BarChart3, Leaf, TrendingUp, FileText, Globe, Shield } from 'lucide-react'
import { PageHero, Section, Grid, Card, CTASection } from '@/components/shared/ui'

const included = [
  { icon: Shield, text: 'Professional documentation support' },
  { icon: Globe, text: 'Global sustainability framework alignment' },
  { icon: BarChart3, text: 'Real-time dashboard access' },
  { icon: FileText, text: 'Monthly and annual reports' },
  { icon: TrendingUp, text: 'Performance benchmarking' },
  { icon: Leaf, text: 'Environmental impact calculations' },
]

export default function EnvironmentalReportingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        badge="Environmental Reporting"
        icon={<Leaf className="w-3.5 h-3.5" />}
        title="Sustainability Impact"
        titleMuted="Tracking & Reporting"
        description="Comprehensive environmental impact measurement and transparent reporting for your refurbishment operations."
      />

      {/* Key Features Grid */}
      <Section wide>
        <Grid cols={3}>
          <Card
            icon={<BarChart3 />}
            title="Impact Metrics"
            description="Real-time tracking of water saved, carbon reduced, and waste diverted from your refurbishment activities."
            items={['Water consumption tracking', 'Carbon footprint calculation', 'E-waste diversion metrics']}
          />
          <Card
            icon={<FileText />}
            title="Custom Reports"
            description="Detailed environmental reports tailored for compliance, certification, and stakeholder communication."
            items={['Monthly impact summaries', 'Annual sustainability reports', 'Certification documentation']}
          />
          <Card
            icon={<TrendingUp />}
            title="Trend Analysis"
            description="Historical data analysis and forecasting to optimize your environmental performance over time."
            items={['Performance trends', 'Optimization insights', 'Goal tracking']}
          />
        </Grid>
      </Section>

      {/* What's Included */}
      <Section wide caption="Included" title="What's Included in Environmental Reporting">
        <div className="rounded-3xl bg-card-secondary p-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
          {included.map((b) => (
            <div key={b.text} className="flex items-center gap-3 text-[15px] text-foreground">
              <b.icon className="w-4 h-4 text-accent flex-none" />
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Track Your Environmental Impact?"
        description="Get detailed insights into your sustainability performance and demonstrate your commitment to environmental responsibility."
        primary={{ label: 'Get Environmental Reporting', href: '/contact' }}
      />
    </main>
  )
}
