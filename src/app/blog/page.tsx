import { Info, BarChart3, Puzzle } from 'lucide-react'
import { PageHero, Section, Grid, Card } from '@/components/shared/ui'

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <PageHero title="Resources & Insights" description="Industry insights, guides, and updates from the Replugit team." align="center" />

      <Section
        wide
        align="center"
        title="Coming Soon"
        subtitle="We're preparing valuable content including industry insights, best practices, and guides to help you maximize your electronics business."
      >
        {/* Preview Cards */}
        <Grid cols={3}>
          <Card tone="outline" icon={<Info />} title="Industry Guides" description="Best practices for electronics refurbishment and wholesale" />
          <Card tone="outline" icon={<BarChart3 />} title="Market Insights" description="Market trends and opportunities in the electronics industry" />
          <Card tone="outline" icon={<Puzzle />} title="Case Studies" description="Success stories and real-world implementations" />
        </Grid>
      </Section>
    </main>
  )
}
