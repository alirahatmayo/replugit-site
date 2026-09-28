import { Zap, Heart, Users } from 'lucide-react'
import { PageHero, Section, Grid, Card } from '@/components/shared/ui'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <PageHero title="About Replugit" description="Transforming the electronics lifecycle with innovative solutions." align="center" />

      <Section
        wide
        align="center"
        title="Coming Soon"
        subtitle="We're crafting our story to share with you. Stay tuned for insights into our mission, vision, and the team behind Replugit."
      >
        <Grid cols={3}>
          <Card icon={<Zap />} title="Innovation" description="Cutting-edge solutions for electronics lifecycle management" />
          <Card icon={<Heart />} title="Sustainability" description="Committed to reducing electronic waste through refurbishment" />
          <Card icon={<Users />} title="Partnership" description="Building lasting relationships with clients worldwide" />
        </Grid>
      </Section>
    </main>
  )
}
