import { Globe } from 'lucide-react'
import { PageHero, Button } from '@/components/shared/ui'

/*
 * Sustainability page hero. The four-stat band that used to sit under this
 * (2.4K+ devices refurbished, 260+ tonnes CO2e, etc.) claimed cumulative
 * company totals we have no real data for, so it's gone rather than
 * replaced with another invented number. The calculator and circular-economy
 * sections below make the real, honest case instead.
 */
export default function SustainabilityHero() {
  return (
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
  )
}
