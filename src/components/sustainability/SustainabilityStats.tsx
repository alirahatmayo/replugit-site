import { Recycle, ShieldCheck, FileText, HeartHandshake } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Section, Grid, DarkPanel, Button } from '@/components/shared/ui'

/*
 * This section used to be "Our Impact So Far": four animated counters
 * (2,400+ devices refurbished, 260+ tons CO2, 3.6M+ L water, 330K+ kWh) plus
 * "12+ Business Partners" and "3 Regional Markets," with source comments
 * literally reading "Realistic number for a growing company" - i.e. made up
 * to look established. We don't have real cumulative or partner-count data,
 * so rather than invent replacement numbers, this now describes how the
 * operation actually works. No invented scale.
 */
const practices: { icon: LucideIcon; title: string; note: string }[] = [
  {
    icon: Recycle,
    title: 'Circular by Design',
    note: 'Every device we take in is assessed for refurbishment before anything else is considered.',
  },
  {
    icon: ShieldCheck,
    title: 'Tested Before Resale',
    note: 'Devices are inspected and graded, not just wiped and shipped.',
  },
  {
    icon: FileText,
    title: 'Serial-Tracked',
    note: 'Each device is tracked by serial number from intake through resale.',
  },
  {
    icon: HeartHandshake,
    title: 'Working Toward Certification',
    note: 'See our certification journey below for exactly where that stands.',
  },
]

export default function SustainabilityStats() {
  return (
    <Section
      wide
      caption="How We Operate"
      title="A Circular Process, Not Just a"
      titleMuted="Promise"
      subtitle="Refurbishing responsibly means testing every device, tracking it end to end, and being honest about where our certifications actually stand."
      align="center"
    >
      <Grid cols={4}>
        {practices.map((s) => (
          <div key={s.title} className="rounded-2xl bg-card-primary p-6">
            <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
              <s.icon className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-foreground mt-2">{s.title}</h3>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{s.note}</p>
          </div>
        ))}
      </Grid>

      {/* Call to Action */}
      <DarkPanel
        className="mt-8"
        title="Ready to Join the Sustainable Revolution?"
        description="Partner with us to reduce your environmental footprint while accessing high-quality, cost-effective refurbished technology solutions."
      >
        <Button href="#calculator" variant="accent" size="lg">
          Calculate Your Impact
        </Button>
        <Button href="/contact" variant="outline" size="lg" className="border-white/20 bg-transparent text-primary-foreground hover:bg-white/10">
          Explore Partnership
        </Button>
      </DarkPanel>
    </Section>
  )
}
