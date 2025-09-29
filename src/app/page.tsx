import HeroBanner from '@/components/homepage/HeroBanner'
import VerticalSlider from '@/components/homepage/VerticalSlider'
import EnvironmentalImpactSection from '@/components/homepage/EnvironmentalImpactSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner - What we do */}
      <HeroBanner src="/banner.png" />
      
      {/* Everything You Need - Detailed Solutions */}
      <VerticalSlider />
      
      {/* Environmental Impact */}
      <EnvironmentalImpactSection />
    </main>
  );
}
