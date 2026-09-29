import SustainabilityHero from '@/components/sustainability/SustainabilityHero'
import EnvironmentalImpactCalculator from '@/components/sustainability/EnvironmentalImpactCalculator'
import SustainabilityStats from '@/components/sustainability/SustainabilityStats'
import CircularEconomySection from '@/components/sustainability/CircularEconomySection'
import ResearchSection from '@/components/sustainability/ResearchSection'
import CertificationsSection from '@/components/sustainability/CertificationsSection'
import { pageMetadata } from '@/lib/metadata'
import { JsonLd, breadcrumbSchema } from '@/components/json-ld'

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Sustainability', path: '/sustainability/' }])} />
      <SustainabilityHero />
      <EnvironmentalImpactCalculator />
      <SustainabilityStats />
      <CircularEconomySection />
      <ResearchSection />
      <CertificationsSection />
    </main>
  )
}

export const metadata = pageMetadata({
  title: 'Sustainability - Environmental Impact & Green Technology',
  description: "Discover Replugit's commitment to sustainability through device refurbishment, environmental impact reduction, and circular economy principles. Calculate your environmental savings today.",
  path: '/sustainability/',
})
