import { Package, Truck, CheckCircle, Clock, MapPin, Shield, Settings } from 'lucide-react'
import { PageHero, Section, Grid, Card, CTASection } from '@/components/shared/ui'
import { JsonLd, breadcrumbSchema, serviceSchema } from '@/components/json-ld'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  title: "Device Preparation & Logistics Services",
  description: "Professional electronics preparation services with retail packaging, protective transit solutions, and fulfillment-ready processing for corporate and retail distribution.",
  path: '/prep-services/',
})


const benefits = [
  { icon: Clock, text: 'Fast turnaround times' },
  { icon: Shield, text: 'Secure handling and processing' },
  { icon: CheckCircle, text: 'Quality assurance at every step' },
  { icon: Package, text: 'Professional packaging solutions' },
  { icon: Truck, text: 'Reliable logistics network' },
  { icon: MapPin, text: 'Real-time tracking and updates' },
]

export default function PrepServicesPage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Prep Services', path: '/prep-services/' }])} />
      <JsonLd data={serviceSchema({ name: 'Device Preparation & Logistics Services', description: "Professional electronics preparation services with retail packaging, protective transit solutions, and fulfillment-ready processing for corporate and retail distribution.", path: '/prep-services/' })} />
      {/* Hero Section */}
      <PageHero
        badge="Prep Services"
        icon={<Package className="w-3.5 h-3.5" />}
        title="Device Preparation"
        titleMuted="& Logistics Services"
        description="Professional electronics preparation services with retail packaging, protective transit solutions, and fulfillment-ready processing for corporate and retail distribution."
      />

      {/* Key Services Grid */}
      <Section wide>
        <Grid cols={3}>
          <Card
            icon={<Package />}
            title="Retail Packaging"
            description="Professional retail packaging with protective materials and custom labeling for electronics distribution."
            items={['Retail-ready packaging standards', 'Custom bubble bags & honeycomb cushioning', 'Barcode labels & stickering']}
          />
          <Card
            icon={<Shield />}
            title="Transit Protection"
            description="Specialized protective packaging following electronics industry standards for safe transportation."
            items={['Electronics-specific protection', 'Anti-static materials', 'Impact-resistant cushioning']}
          />
          <Card
            icon={<CheckCircle />}
            title="Fulfillment Ready"
            description="Complete preparation for corporate deployment or retail fulfillment services like FBA and Walmart."
            items={['FBA & Walmart Fulfillment ready', 'Corporate deployment preparation', 'Clean, sanitized, ready-to-use']}
          />
        </Grid>
      </Section>

      {/* Process Flow */}
      <Section wide caption="Process" title="Our Preparation Process">
        <Grid cols={4}>
          <Card icon={<Settings />} title="Cleaning & Sanitizing" description="Professional cleaning and sanitization for ready-to-use condition" tone="surface" />
          <Card icon={<Package />} title="Protective Packaging" description="Custom cushioning and anti-static protection for electronics" tone="surface" />
          <Card icon={<CheckCircle />} title="Labeling & Documentation" description="Barcode labels, documentation, and warranty registration" tone="surface" />
          <Card icon={<Truck />} title="Fulfillment Ready" description="Final preparation for corporate or retail fulfillment channels" tone="surface" />
        </Grid>
      </Section>

      {/* Specialized Services Section */}
      <Section wide caption="Specialized" title="Specialized Electronics Preparation">
        <Grid cols={2}>
          <Card
            title="Packaging & Protection"
            tone="outline"
            items={[
              'Custom bubble bags for device protection',
              'Honeycomb cushioning for maximum transit safety',
              'Anti-static materials for electronics protection',
              'Retail packaging following industry standards',
            ]}
          />
          <Card
            title="Labeling & Documentation"
            tone="outline"
            items={[
              'Barcode labels and product stickering',
              'Custom documentation printing and insertion',
              'In-house warranty registration solution',
              'Fulfillment service compliance (FBA, Walmart)',
            ]}
          />
        </Grid>
      </Section>

      {/* Target Markets */}
      <Section wide caption="Channels" title="Preparation for Multiple Channels">
        <Grid cols={2}>
          <Card
            title="Corporate Deployment"
            description="Ready-to-use electronics for business environments"
            items={['Cleaned and sanitized for immediate use', 'Professional packaging and documentation', 'Warranty registration included']}
            tone="secondary"
          />
          <Card
            title="Retail Fulfillment"
            description="Prepared for major fulfillment platforms"
            items={['Amazon FBA compliant packaging', 'Walmart Fulfillment Service ready', 'Retail channel specifications met']}
            tone="secondary"
          />
        </Grid>
      </Section>

      {/* Benefits Section */}
      <Section wide caption="Why Replugit" title="Why Choose Our Prep Services">
        <div className="rounded-3xl bg-card-secondary p-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
          {benefits.map((b) => (
            <div key={b.text} className="flex items-center gap-3 text-[15px] text-foreground">
              <b.icon className="w-4 h-4 text-accent flex-none" />
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <CTASection
        title="Streamline Your Electronics Distribution"
        description="Professional electronics preparation services that ensure your products are retail-ready and fulfillment-compliant for any distribution channel."
        primary={{ label: 'Get Prep Services', href: '/contact' }}
      />
    </main>
  )
}
