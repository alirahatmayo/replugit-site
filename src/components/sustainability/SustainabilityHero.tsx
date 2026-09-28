import { Leaf, Globe, Wrench, Droplets } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { PageHero, Button } from '@/components/shared/ui'

/*
 * Sustainability page hero. Same copy and figures as before; the four
 * headline figures sit under the hero as a quiet stat band.
 */
const headlineStats: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: Wrench, value: '2.4K+', label: 'Devices Refurbished' },
  { icon: Leaf, value: '260+', label: 'Tonnes CO₂e Saved' },
  { icon: Globe, value: '330K+', label: 'kWh Energy Saved' },
  { icon: Droplets, value: '3.6M+', label: 'Liters Water Saved' },
]

export default function SustainabilityHero() {
  return (
    <>
      <PageHero
        badge="Sustainability & Environmental Impact"
        icon={<Globe className="w-3.5 h-3.5" />}
        title="Sustainable Tech,"
        titleMuted="Measurable Impact."
        description="We believe in a circular economy. By refurbishing devices, we're not just extending their life, we're preventing waste and significantly reducing the environmental cost of technology."
        align="center"
      >
        <Button href="#calculator" size="lg">
          Calculate Your Impact
        </Button>
        <Button href="#research" variant="outline" size="lg">
          View Our Research
        </Button>
      </PageHero>

      <section className="pb-6">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {headlineStats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-card-primary p-6">
                <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                  <s.icon className="w-4 h-4" />
                </div>
                <div className="font-mono text-2xl font-semibold tracking-tight text-foreground">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
