import { Wrench, ShieldCheck, HardDrive, Package, Truck, Award, DollarSign, Leaf } from 'lucide-react'
import { PageHero, Section, Grid, Card, Prose, CTASection } from '@/components/shared/ui'
import { pageMetadata } from '@/lib/metadata'
import { JsonLd, breadcrumbSchema } from '@/components/json-ld'
import { RECORE_URL } from '@/data/recore'

export const metadata = pageMetadata({
  title: 'About Replugit',
  description:
    'Replugit refurbishes electronics and builds the software that runs the operation. Based in Kitchener-Waterloo, Ontario, we also offer reCore to other refurbishers and ITAD companies.',
  path: '/about/',
})

const services = [
  {
    icon: Wrench,
    title: 'Refurbishing',
    description: 'Transform C-grade electronics into premium Grade A devices through expert repair, component replacement, and comprehensive quality assurance testing.',
    href: '/refurbishing',
  },
  {
    icon: ShieldCheck,
    title: 'QC and Auditing',
    description: 'Comprehensive device inspection and component testing with detailed grading and reporting for electronics refurbishment quality assurance.',
    href: '/qc-auditing',
  },
  {
    icon: HardDrive,
    title: 'Data Wiping',
    description: 'Secure data erasure, run on reCore, ensuring complete data protection and compliance with privacy regulations.',
    href: '/data-wiping',
  },
  {
    icon: Package,
    title: 'Prep Services',
    description: 'Retail packaging, protective transit solutions, and fulfillment-ready processing for corporate and retail distribution.',
    href: '/prep-services',
  },
  {
    icon: Truck,
    title: 'Wholesale Distribution',
    description: 'Bulk pricing and reliable supply for retailers and resellers, coordinated through our WhatsApp community.',
    href: '/wholesale',
  },
  {
    icon: Award,
    title: 'Warranty Management',
    description: "An automated warranty system for electronics vendors, built to keep pace with rules like Quebec's Bill 29.",
    href: '/warranty',
  },
  {
    icon: DollarSign,
    title: 'BestBuy Repricer',
    description: 'AI-powered repricing that monitors competitors and adjusts pricing automatically to win more Buy Boxes.',
    href: '/bestbuy-repricer',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Every refurbished device avoids new manufacturing. We track and report the environmental impact of that work.',
    href: '/sustainability',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about/' }])} />

      <PageHero
        badge="About Replugit"
        title="We refurbish electronics."
        titleMuted="We built the software to run it."
        description="Replugit is an electronics refurbisher. To run our own floor, we built reCore, the ITAD platform for diagnostics, data erasure and grading, and now offer it to other refurbishers too."
        align="center"
      />

      <Section wide caption="What We Do" title="One operation, built on our own software">
        <Prose>
          <p>
            Every device that comes through our floor gets diagnosed, wiped and graded on reCore before it goes back out for
            resale. We built reCore because we needed it ourselves: a system that tracks a device from intake to certificate
            without gaps.
          </p>
          <p>
            reCore is also available to other refurbishers and ITAD companies as a standalone product. You can read about
            what it does at{' '}
            <a href={RECORE_URL} className="text-accent hover:underline underline-offset-4">
              recore.replugit.com
            </a>
            , or see how we use it ourselves on our{' '}
            <a href="/services" className="text-accent hover:underline underline-offset-4">
              services page
            </a>
            .
          </p>
        </Prose>
      </Section>

      <Section wide caption="Services" title="What we offer" subtitle="Refurbishing and the software behind it, plus the operational tools we built to run our own business.">
        <Grid cols={4}>
          {services.map((s) => (
            <Card key={s.title} icon={<s.icon />} title={s.title} description={s.description} href={s.href} tone="surface" />
          ))}
        </Grid>
      </Section>

      <Section wide caption="Where We Are" title="Based in Kitchener-Waterloo, Ontario">
        <Prose>
          <p>
            Our refurbishing floor is in Kitchener-Waterloo, Ontario. You can reach us at{' '}
            <a href="mailto:hello@replugit.com" className="text-accent hover:underline underline-offset-4">
              hello@replugit.com
            </a>{' '}
            or{' '}
            <a href="tel:+15485035000" className="text-accent hover:underline underline-offset-4">
              +1 (548) 503-5000
            </a>
            , Monday to Friday, 9 AM to 6 PM EST.
          </p>
        </Prose>
      </Section>

      <CTASection
        title="Want to see reCore for yourself?"
        description="It's the same platform we run our own refurbishing floor on."
        primary={{ label: 'Explore reCore', href: RECORE_URL }}
        secondary={{ label: 'Contact us', href: '/contact' }}
      />
    </main>
  )
}
