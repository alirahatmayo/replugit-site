import HeroBanner from '@/components/homepage/HeroBanner'
import VerticalSlider from '@/components/homepage/VerticalSlider'
import EnvironmentalImpactSection from '@/components/homepage/EnvironmentalImpactSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero - who we are */}
      <HeroBanner />

      {/* Our Solutions */}
      <VerticalSlider />

      {/* Environmental Impact */}
      <EnvironmentalImpactSection />
    </main>
  );
}
