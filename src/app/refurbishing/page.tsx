import { Wrench, Sparkles, Shield, Search, Battery, Cpu, Award, CheckCircle, Settings, Eye, Target } from 'lucide-react'
import { PageHero, Section, Grid, Card, CTASection } from '@/components/shared/ui'

const benefits = [
  { icon: Wrench, text: 'Expert technicians with years of experience' },
  { icon: Shield, text: 'OEM and certified aftermarket parts' },
  { icon: CheckCircle, text: '47-point quality assurance testing' },
  { icon: Award, text: 'Industry-standard grade certification' },
  { icon: Sparkles, text: 'Maximum value recovery from damaged devices' },
  { icon: Target, text: 'Fast turnaround times' },
]

export default function RefurbishingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        badge="Device Refurbishing"
        icon={<Wrench className="w-3.5 h-3.5" />}
        title="Professional Device"
        titleMuted="Refurbishment Services"
        description="Transform C-grade electronics into premium Grade A devices through expert repair, component replacement, and comprehensive quality assurance testing."
      />

      {/* Key Services Grid */}
      <Section wide>
        <Grid cols={3}>
          <Card
            icon={<Search />}
            title="Comprehensive Diagnostics"
            description="Complete device assessment with advanced diagnostic software and physical inspection to identify all repair needs."
            items={['50+ point diagnostic testing', 'Component functionality analysis', 'Battery health assessment']}
          />
          <Card
            icon={<Wrench />}
            title="Expert Repairs"
            description="Professional repair services using genuine OEM and certified aftermarket parts for optimal device performance."
            items={['Screen and digitizer replacement', 'Battery and charging port repair', 'Micro-soldering for board repairs']}
          />
          <Card
            icon={<Shield />}
            title="Quality Certification"
            description="Rigorous quality assurance testing and professional grade assignment based on industry standards."
            items={['47-point QA protocol', 'Grade A/A-/B+ certification', 'Complete documentation']}
          />
        </Grid>
      </Section>

      {/* Refurbishment Process */}
      <Section wide caption="Process" title="Our Refurbishment Process">
        <Grid cols={4}>
          <Card icon={<Eye />} title="Initial Assessment" description="Comprehensive diagnostics and damage evaluation" tone="surface" />
          <Card icon={<Settings />} title="Precision Disassembly" description="Careful teardown and component inspection" tone="surface" />
          <Card icon={<Sparkles />} title="Expert Repair" description="Component replacement and micro-soldering" tone="surface" />
          <Card icon={<Award />} title="Quality Assurance" description="47-point testing and grade certification" tone="surface" />
        </Grid>
      </Section>

      {/* Repair Capabilities */}
      <Section wide caption="Capabilities" title="Comprehensive Repair Capabilities">
        <Grid cols={2}>
          <Card
            title="Physical Repairs"
            tone="outline"
            items={[
              'Display and digitizer replacement',
              'Battery replacement and optimization',
              'Back housing and frame restoration',
              'Camera and speaker replacement',
            ]}
          />
          <Card
            title="Technical Repairs"
            tone="outline"
            items={[
              'Micro-soldering and board-level repair',
              'Charging port and connector repair',
              'Logic board cleaning and restoration',
              'Water damage recovery and repair',
            ]}
          />
        </Grid>
      </Section>

      {/* Device Types */}
      <Section wide caption="Devices" title="Devices We Refurbish">
        <Grid cols={3}>
          <Card
            icon={<Cpu />}
            title="Smartphones"
            description="iPhone and Android device refurbishment"
            items={['iPhone models (6 to latest)', 'Samsung Galaxy series', 'Google Pixel devices']}
            tone="secondary"
          />
          <Card
            icon={<Target />}
            title="Tablets"
            description="iPad and Android tablet restoration"
            items={['iPad and iPad Pro', 'Samsung Galaxy Tab', 'Microsoft Surface tablets']}
            tone="secondary"
          />
          <Card
            icon={<Battery />}
            title="Laptops"
            description="MacBook and PC laptop refurbishment"
            items={['MacBook Air and Pro', 'Dell, HP, Lenovo laptops', 'Chromebook devices']}
            tone="secondary"
          />
        </Grid>
      </Section>

      {/* Benefits Section */}
      <Section wide caption="Why Replugit" title="Why Choose Our Refurbishment Services">
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
        title="Ready to Transform Your Devices?"
        description="Let our expert technicians restore your C-grade electronics to premium Grade A condition"
        primary={{ label: 'Get Started Today', href: '/contact' }}
      />
    </main>
  )
}
