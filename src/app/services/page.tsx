import { Settings, CheckCircle, Shield } from 'lucide-react'
import { PageHero, Section, Grid, Card, CTASection, Button } from '@/components/shared/ui'
import { RECORE_URL, recoreFeatures, recorePlatform } from '@/data/recore'
import { pageMetadata } from '@/lib/metadata'
import { JsonLd, breadcrumbSchema } from '@/components/json-ld'

export const metadata = pageMetadata({
  title: 'Our Services',
  description: "reCore is the ITAD platform we built and run on our own floor: hardware diagnostics, certified data erasure, cosmetic grading and compliance reporting in one system.",
  path: '/services/',
})

/*
 * What Replugit offers as a service is reCore. The two lists below come from
 * src/data/recore.ts, the same source the Services menu uses.
 */
export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services/' }])} />
      <PageHero
        badge="Our Services"
        icon={<Settings className="w-3.5 h-3.5" />}
        title="Everything we offer"
        titleMuted="runs on reCore."
        description="reCore is the ITAD platform we built and run on our own floor: hardware diagnostics, certified data erasure, cosmetic grading and compliance reporting in one system."
        align="center"
      >
        <Button href={RECORE_URL} size="lg">
          Visit recore.replugit.com
        </Button>
        <Button href="/contact" variant="outline" size="lg">
          Talk to us
        </Button>
      </PageHero>

      <Section wide caption="Features" title="What reCore does" align="center">
        <Grid cols={3}>
          {recoreFeatures.map((item) => (
            <Card key={item.href} title={item.title} description={item.description} icon={<item.icon />} href={item.href} linkLabel="See on reCore" />
          ))}
        </Grid>
      </Section>

      <Section wide caption="Platform" title="How it deploys and scales" align="center">
        <Grid cols={3}>
          {recorePlatform.map((item) => (
            <Card key={item.href} title={item.title} description={item.description} icon={<item.icon />} href={item.href} linkLabel="See on reCore" tone="secondary" />
          ))}
        </Grid>
      </Section>

      <Section wide caption="Why Replugit" title="Why Choose Replugit Services?" subtitle="Professional expertise, industry-standard processes, and comprehensive solutions for all your electronics lifecycle needs." align="center">
        <Grid cols={3}>
          <Card icon={<CheckCircle />} title="Quality Assured" description="Professional processes with detailed documentation and quality tracking throughout." tone="surface" />
          <Card icon={<Shield />} title="Secure & Compliant" description="Industry-standard security protocols and certified tools for complete peace of mind." tone="surface" />
          <Card icon={<Settings />} title="End-to-End Solutions" description="Complete lifecycle management from refurbishment to fulfillment-ready deployment." tone="surface" />
        </Grid>
      </Section>

      <CTASection
        title="Ready to Transform Your Device Operations?"
        description="Partner with us for professional electronics services that maximize value, ensure quality, and support sustainability."
        primary={{ label: 'Get Started Today', href: '/contact' }}
        secondary={{ label: 'Explore reCore', href: RECORE_URL }}
      />
    </main>
  )
}
