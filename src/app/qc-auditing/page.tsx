import { CheckCircle, Shield, Search, Award, BarChart3, Settings, Target } from 'lucide-react'
import { PageHero, Section, Grid, Card, CTASection } from '@/components/shared/ui'

const benefits = [
  { icon: Shield, text: 'Industry-standard quality processes' },
  { icon: Award, text: 'Experienced QC professionals' },
  { icon: BarChart3, text: 'Detailed performance metrics' },
  { icon: CheckCircle, text: 'Quality assurance focus' },
  { icon: Target, text: 'Continuous improvement approach' },
  { icon: Settings, text: 'Process optimization recommendations' },
]

export default function QCAuditingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        badge="QC and Auditing"
        icon={<CheckCircle className="w-3.5 h-3.5" />}
        title="Quality Control"
        titleMuted="& Auditing Services"
        description="Comprehensive device inspection and component testing with detailed grading and reporting for electronics refurbishment quality assurance."
      />

      {/* Key Services Grid */}
      <Section wide>
        <Grid cols={3}>
          <Card
            icon={<Search />}
            title="Physical Inspection"
            description="Detailed physical examination of device condition including exterior and screen assessment."
            items={['Dents and breakage detection', 'Screen blemishes and scratches', 'Scuffs and wear assessment']}
          />
          <Card
            icon={<Settings />}
            title="Component Testing"
            description={
              <>
                Comprehensive internal component verification through{' '}
                <a href="https://recore.replugit.com/features/diagnostics" className="text-accent underline underline-offset-4 hover:no-underline">
                  automated hardware diagnostics
                </a>{' '}
                and physical inspection.
              </>
            }
            items={['Internal hardware testing', 'Software diagnostic scans', 'Performance benchmarking']}
          />
          <Card
            icon={<Award />}
            title="Detailed Grading"
            description="Professional grading system with detailed notes and comprehensive reporting for each device."
            items={['Condition grade assignment', 'Detailed inspection notes', 'Component functionality rating']}
          />
        </Grid>
      </Section>

      {/* Inspection Process */}
      <Section wide caption="Process" title="Our Inspection Process">
        <Grid cols={4}>
          <Card icon={<Target />} title="Device Intake" description="Serial number logging and initial device identification" tone="surface" />
          <Card icon={<Search />} title="Physical Assessment" description="Comprehensive exterior and screen condition evaluation" tone="surface" />
          <Card icon={<Settings />} title="Component Testing" description="Internal hardware and software diagnostic verification" tone="surface" />
          <Card icon={<BarChart3 />} title="Report Generation" description="Detailed grading report with specifications and notes" tone="surface" />
        </Grid>
      </Section>

      {/* Detailed Reporting Section */}
      <Section wide caption="Reports" title="Comprehensive QC Reports">
        <Grid cols={2}>
          <Card
            title="Device Information Captured"
            tone="outline"
            items={[
              'Serial Number & Asset Tags',
              'Make, Model & Model Number',
              'RAM, Storage (SSD/HDD) Specifications',
              'Screen Resolution & Display Quality',
              'Graphics Card & Processor Details',
            ]}
          />
          <Card
            title="Quality Assessment Details"
            tone="outline"
            items={[
              'Condition Grade (A, B, C, D)',
              'Physical Damage Assessment',
              'Component Functionality Status',
              'Detailed Inspection Notes',
              'Repair Recommendations',
            ]}
          />
        </Grid>
      </Section>

      {/* Benefits Section */}
      <Section wide caption="Why Replugit" title="Why Choose Our QC & Auditing">
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
        title="Ensure Quality & Standards"
        description="Partner with us for comprehensive QC and auditing services that help maintain quality standards and improve processes."
        primary={{ label: 'Get QC & Auditing Services', href: '/contact' }}
      />
    </main>
  )
}
