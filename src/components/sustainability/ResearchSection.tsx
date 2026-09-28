import { FileText, Droplets, Recycle, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Section, Grid, Card } from '@/components/shared/ui'

const researchSources: { title: string; icon: LucideIcon; description: string; source: string }[] = [
  {
    title: 'Carbon Footprint (CO2e)',
    icon: FileText,
    description: 'Manufacturing a new desktop computer generates ~300kg of CO2e. Our refurbishment process generates only 50-70kg, resulting in a net saving of ~240kg per device. This represents an 80% reduction in carbon emissions compared to buying new. Similar savings are seen across all device types.',
    source: 'Source: Fraunhofer USA & Journal of Industrial Ecology',
  },
  {
    title: 'Water Consumption',
    icon: Droplets,
    description: 'Semiconductor and circuit board fabrication are highly water-intensive. A single laptop requires approximately 1,900 liters of "blue water" during its manufacturing phase. Our data is cross-referenced from academic papers in the Journal of Cleaner Production and manufacturer disclosures.',
    source: 'Source: Water Footprint Network & Journal of Cleaner Production',
  },
  {
    title: 'E-Waste Reduction',
    icon: Recycle,
    description: 'The world generated 62 million tonnes of e-waste in 2022, a record high. By extending the life of devices, refurbishment directly combats this trend. The formal recycling rate is only 22.3%, making reuse the most effective environmental strategy.',
    source: 'Source: UN Global E-waste Monitor 2024',
  },
  {
    title: 'Embodied Energy Savings',
    icon: Zap,
    description: 'The energy required to manufacture a new laptop (embodied energy) is estimated at 1,200 kWh. Refurbishing a device saves approximately 80% of this energy compared to manufacturing a new one, as the most energy-intensive components are reused.',
    source: 'Source: U.S. EPA & ACEEE Reports',
  },
]

export default function ResearchSection() {
  return (
    <Section
      id="research"
      wide
      caption="Data & Research Sources"
      title="Transparent & Verifiable Data"
      subtitle="Our commitment to sustainability is backed by data from industry and academic sources."
      align="center"
    >
      <Grid cols={2}>
        {researchSources.map((item) => (
          <Card key={item.title} icon={<item.icon />} title={item.title} description={item.description} tone="outline">
            <p className="mt-4 text-xs font-mono text-muted-foreground/60">{item.source}</p>
          </Card>
        ))}
      </Grid>
    </Section>
  )
}
