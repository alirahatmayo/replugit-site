import { Shield, HardDrive, Lock, FileX, CheckCircle, Award, AlertTriangle } from 'lucide-react'
import { PageHero, Section, Grid, Card, DarkPanel, Notice, CTASection, Button } from '@/components/shared/ui'
import { JsonLd, breadcrumbSchema, serviceSchema } from '@/components/json-ld'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  title: "Secure Data Erasure Services",
  description: "Military-grade data destruction and secure erasure services ensuring complete data protection and compliance with privacy regulations.",
  path: '/data-wiping/',
})


const benefits = [
  { icon: Shield, text: 'Certified software and tools' },
  { icon: Award, text: 'Industry-standard processes' },
  { icon: CheckCircle, text: 'Verified data destruction' },
  { icon: Lock, text: 'Complete process documentation' },
  { icon: FileX, text: 'Detailed destruction reports' },
  { icon: HardDrive, text: 'All storage types supported' },
]

const darkLink = 'text-primary-foreground underline underline-offset-4 decoration-primary-foreground/40 hover:decoration-primary-foreground'

export default function DataWipingPage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Data Wiping', path: '/data-wiping/' }])} />
      <JsonLd data={serviceSchema({ name: 'Secure Data Erasure Services', description: "Military-grade data destruction and secure erasure services ensuring complete data protection and compliance with privacy regulations.", path: '/data-wiping/' })} />
      {/* Hero Section */}
      <PageHero
        badge="Data Wiping"
        icon={<Shield className="w-3.5 h-3.5" />}
        title="Secure Data"
        titleMuted="Erasure Services"
        description="Military-grade data destruction and secure erasure services ensuring complete data protection and compliance with privacy regulations."
      />

      {/* Key Services Grid */}
      <Section wide>
        <Grid cols={3}>
          <Card
            icon={<HardDrive />}
            title="Complete Data Erasure"
            description="Thorough data wiping using industry-standard protocols to ensure all data is permanently erased."
            items={['DoD 5220.22-M standards', 'Multiple overwrite passes', 'Verification processes']}
          />
          <Card
            icon={<Lock />}
            title="Compliance Documentation"
            description="Detailed documentation and certificates from our certified data wiping software for your records."
            items={['Software compliance certificates', 'Data destruction reports', 'Audit trail documentation']}
          />
          <Card
            icon={<FileX />}
            title="Physical Destruction"
            description="Physical destruction of storage media for maximum security when required by sensitive data policies."
            items={['Hard drive shredding', 'SSD destruction', 'Witnessed destruction']}
          />
        </Grid>
      </Section>

      {/* Security Standards */}
      <Section wide caption="Standards" title="Our Data Wiping Standards">
        <Grid cols={4}>
          <Card icon={<Shield />} title="DoD Standards" description="Using certified software following DoD 5220.22-M protocols" tone="surface" />
          <Card icon={<Award />} title="NIST Guidelines" description="Software certified to NIST SP 800-88 sanitization standards" tone="surface" />
          <Card icon={<CheckCircle />} title="Certified Tools" description="Industry-certified data wiping software and tools" tone="surface" />
          <Card icon={<Lock />} title="Process Tracking" description="Complete documentation and tracking throughout process" tone="surface" />
        </Grid>
      </Section>

      {/* The software behind the service */}
      <Section wide>
        <DarkPanel
          align="left"
          title="Powered by reCore, our own data wiping software"
          description={
            <>
              Every drive we wipe runs through{' '}
              <a href="https://recore.replugit.com" className={darkLink}>
                reCore
              </a>
              , the ITAD platform we built for our own facility. It sanitizes drives to{' '}
              <a href="https://recore.replugit.com/standards/nist-sp-800-88" className={darkLink}>
                NIST SP 800-88 Rev 2
              </a>{' '}
              and{' '}
              <a href="https://recore.replugit.com/standards/ieee-2883-2022" className={darkLink}>
                IEEE 2883-2022
              </a>
              , tracks every drive by serial number, and issues a tamper-evident certificate you can verify independently.
            </>
          }
        >
          <p className="w-full text-sm text-primary-foreground/60">reCore is also available to other refurbishers and ITAD companies as a standalone product.</p>
          <Button href="https://recore.replugit.com/features/data-wipe" variant="accent">
            See reCore data wiping
          </Button>
        </DarkPanel>
      </Section>

      {/* Security Alert */}
      <Section wide>
        <Notice icon={<AlertTriangle />} title="Why Professional Data Wiping Matters">
          <p className="mb-3">Simply deleting files or formatting drives doesn&apos;t permanently remove data. Professional data wiping ensures:</p>
          <ul className="space-y-1.5">
            {[
              'Complete protection against data recovery attempts',
              'Compliance with privacy regulations and industry standards',
              'Protection of sensitive personal and business information',
              'Peace of mind for your organization and customers',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-accent mt-2.5 flex-none" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Notice>
      </Section>

      {/* Benefits Section */}
      <Section wide caption="Why Replugit" title="Why Choose Our Data Wiping Services">
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
        title="Protect Your Data & Reputation"
        description="Ensure complete data security with our professional data wiping services. Protect your organization and comply with regulations."
        primary={{ label: 'Get Secure Data Wiping', href: '/contact' }}
      />
    </main>
  )
}
