import { Leaf, Package, Settings, RefreshCw } from 'lucide-react'
import { PageHero, Section, Grid, Card, Prose, StatRow, CTASection } from '@/components/shared/ui'
import { pageMetadata } from '@/lib/metadata'
import { JsonLd, breadcrumbSchema } from '@/components/json-ld'

export const metadata = pageMetadata({
  title: "Building a Sustainable Future",
  description: "Every refurbished device prevents toxic e-waste and reduces carbon emissions. Join us in creating a circular economy for electronics.",
  path: '/environmental-impact/',
})


/*
 * Environmental impact overview. Navigation and Footer come from the root
 * layout, so this page only renders its own sections.
 */
const impactStats = [
  { value: '75%', label: 'E-Waste Reduced' },
  { value: '10,000+', label: 'Devices Refurbished' },
  { value: '50 Tons', label: 'CO₂ Prevented' },
  { value: '95%', label: 'Materials Recovered' },
]

const benefits = [
  { value: '75%', label: 'Reduction in E-Waste', note: 'Per device refurbished vs. disposed' },
  { value: '70%', label: 'Lower Carbon Footprint', note: 'Compared to manufacturing new' },
  { value: '95%', label: 'Materials Recovered', note: 'Valuable metals and components' },
  { value: '80%', label: 'Water Conservation', note: 'Less water vs. new production' },
]

/*
 * Matches the honest status on /sustainability#progress: these are goals
 * we're actively working toward, not certifications we hold yet. Do not
 * change this to "certified" language without updating that page too.
 */
const certifications = [
  {
    badge: 'HTM',
    title: 'HTM Certification',
    description: 'Hardware Technology Management certification for professional electronics handling. In progress, targeting Q2 2025.',
  },
  {
    badge: 'ISO',
    title: 'ISO 14001 Preparation',
    description: 'Environmental Management Systems framework implementation. Planning stage, targeting Q4 2025.',
  },
  {
    badge: 'R2',
    title: 'R2 Responsible Recycling',
    description: 'Electronics recycling and data security standard compliance. Research phase, targeting 2026.',
  },
]

export default function EnvironmentalImpactPage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Environmental Impact', path: '/environmental-impact/' }])} />
      {/* Hero Section */}
      <PageHero
        badge="Environmental Impact"
        icon={<Leaf className="w-3.5 h-3.5" />}
        title="Building a Sustainable Future"
        description="Every refurbished device prevents toxic e-waste and reduces carbon emissions. Join us in creating a circular economy for electronics."
        align="center"
      />

      {/* Impact Statistics */}
      <Section wide>
        <StatRow stats={impactStats} />
      </Section>

      {/* The Problem */}
      <Section wide title="The E-Waste Crisis">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Prose>
            <p>Electronic waste is the fastest-growing waste stream globally, with over 54 million tons generated annually. Only 20% gets properly recycled.</p>
            <p>Toxic materials like lead, mercury, and cadmium contaminate soil and water, while valuable materials like gold, silver, and rare earth elements are lost forever.</p>
            <p>The production of new electronics accounts for 4% of global greenhouse gas emissions, more than the aviation industry.</p>
          </Prose>
          <Card
            title="Environmental Impact of E-Waste"
            tone="surface"
            items={[
              '54 million tons of e-waste generated annually',
              'Only 20% properly recycled worldwide',
              '$62.5 billion in materials lost annually',
              'Toxic chemicals contaminate ecosystems',
            ]}
          />
        </div>
      </Section>

      {/* Our Solution */}
      <Section
        wide
        title="Our Circular Economy Approach"
        subtitle={'We transform the linear "take-make-waste" model into a circular system where electronics are refurbished, reused, and recycled responsibly.'}
        align="center"
      >
        <Grid cols={3}>
          <Card icon={<Package />} title="Collect" description="Partner with businesses to collect end-of-life electronics and C-grade devices that would otherwise become e-waste." />
          <Card icon={<Settings />} title="Refurbish" description="Restore devices to A-grade quality through comprehensive testing, repair, and quality assurance processes." />
          <Card icon={<RefreshCw />} title="Redistribute" description="Extend device lifecycles by redistributing refurbished electronics to new users at affordable prices." />
        </Grid>
      </Section>

      {/* Environmental Benefits */}
      <Section wide title="Environmental Benefits" subtitle="Every refurbished device creates measurable environmental impact" align="center">
        <Grid cols={4}>
          {benefits.map((b) => (
            <div key={b.label} className="rounded-2xl bg-card-primary p-6">
              <div className="font-mono text-2xl font-semibold tracking-tight text-foreground">{b.value}</div>
              <div className="text-sm font-semibold text-foreground mt-2">{b.label}</div>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{b.note}</p>
            </div>
          ))}
        </Grid>
      </Section>

      {/* Certifications */}
      <Section wide title="Certifications & Standards" subtitle="Goals we're actively working toward as part of formalizing our environmental practices" align="center">
        <Grid cols={3}>
          {certifications.map((c) => (
            <Card key={c.title} icon={<span className="text-[10px] font-mono font-bold">{c.badge}</span>} title={c.title} description={c.description} tone="surface" />
          ))}
        </Grid>
        <div className="mt-4 text-center">
          <a href="/sustainability#progress" className="text-sm font-semibold text-accent hover:underline underline-offset-4">
            See our full certification journey
          </a>
        </div>
      </Section>

      {/* CTA Section */}
      <CTASection
        title="Join the Circular Economy Movement"
        description="Partner with us to reduce e-waste and create a more sustainable future for electronics. Every device matters."
        primary={{ label: 'Start Your Program', href: '/contact' }}
        secondary={{ label: 'View Impact Report', href: '/sustainability' }}
      />
    </main>
  )
}
