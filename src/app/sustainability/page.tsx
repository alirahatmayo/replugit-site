import SustainabilityHero from '@/components/sustainability/SustainabilityHero'
import EnvironmentalImpactCalculator from '@/components/sustainability/EnvironmentalImpactCalculator'
import SustainabilityStats from '@/components/sustainability/SustainabilityStats'
import CircularEconomySection from '@/components/sustainability/CircularEconomySection'
import ResearchSection from '@/components/sustainability/ResearchSection'
import CertificationsSection from '@/components/sustainability/CertificationsSection'

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen bg-white">
      <SustainabilityHero />
      <EnvironmentalImpactCalculator />
      <SustainabilityStats />
      <CircularEconomySection />
      <ResearchSection />
      <CertificationsSection />
    </main>
  )
}

export const metadata = {
  title: 'Sustainability | Replugit - Environmental Impact & Green Technology',
  description: 'Discover Replugit\'s commitment to sustainability through device refurbishment, environmental impact reduction, and circular economy principles. Calculate your environmental savings today.',
}
