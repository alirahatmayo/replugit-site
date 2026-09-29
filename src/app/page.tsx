import HeroBanner from '@/components/homepage/HeroBanner'
import { pageMetadata, SITE_NAME } from '@/lib/metadata'
import VerticalSlider from '@/components/homepage/VerticalSlider'
import EnvironmentalImpactSection from '@/components/homepage/EnvironmentalImpactSection'

export const metadata = pageMetadata({
  title: `${SITE_NAME} - The Company Behind reCore`,
  description: "Replugit builds reCore, the ITAD platform for hardware diagnostics, certified data erasure, cosmetic grading and compliance reporting. Our own refurbishing, QC, data wiping and wholesale electronics services run on it every day.",
  path: '/',
  noSuffix: true,
})

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
