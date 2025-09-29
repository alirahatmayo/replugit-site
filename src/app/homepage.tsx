import HeroCard from '@/components/homepage/HeroCard'
import ProblemSolution from '@/components/homepage/ProblemSolution'
import ReplugitDifference from '@/components/homepage/ReplugitDifference'
import ProcessTransparency from '@/components/homepage/ProcessTransparency'
import TrustBuilding from '@/components/homepage/TrustBuilding'
import EnvironmentalImpact from '@/components/homepage/EnvironmentalImpact'
import FinalCTA from '@/components/shared/FinalCTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroCard />
      <ProblemSolution />
      <ReplugitDifference />
      <ProcessTransparency />
      <TrustBuilding />
      <EnvironmentalImpact />
      <FinalCTA />
    </main>
  )
}
