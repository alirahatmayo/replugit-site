import { Wrench, Shield, Recycle, CheckCircle, Clock, Award, Smartphone, Laptop, Monitor, Phone, Mail, MapPin } from 'lucide-react'
import { PageHero, Section, Grid, Card, Button } from '@/components/shared/ui'
import { pageMetadata } from '@/lib/metadata'
import { JsonLd, breadcrumbSchema } from '@/components/json-ld'

export const metadata = pageMetadata({
  title: 'Device Refurbishment Services',
  description: 'Professional device refurbishment services. We restore electronics to like-new condition with quality testing and warranty coverage.',
  path: '/device-refurbishment/',
})

const steps = [
  { n: '1', title: 'Initial Assessment', text: 'Comprehensive diagnostic to identify all issues and determine refurbishment scope' },
  { n: '2', title: 'Repair & Restore', text: 'Professional repair work including component replacement and hardware restoration' },
  { n: '3', title: 'Testing & QA', text: 'Rigorous testing protocols to ensure device meets quality standards' },
  { n: '4', title: 'Final Delivery', text: 'Device packaging with warranty documentation and quality certification' },
]

export default function DeviceRefurbishmentPage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Device Refurbishment', path: '/device-refurbishment/' }])} />
      {/* Hero Section */}
      <PageHero
        badge="Professional Refurbishment"
        icon={<Wrench className="w-3.5 h-3.5" />}
        title="Device Refurbishment"
        titleMuted="Services"
        description="Transform your used electronics into like-new condition with our comprehensive refurbishment process. Quality testing, repairs, and warranty included."
        align="center"
      >
        <Button href="#contact" size="lg" arrow={false}>
          <Phone className="w-4 h-4" />
          Get Quote
        </Button>
        <Button href="#process" variant="outline" size="lg" arrow={false}>
          <Wrench className="w-4 h-4" />
          View Process
        </Button>
      </PageHero>

      {/* Services Overview */}
      <Section
        wide
        caption="Services"
        title="Professional Refurbishment Services"
        subtitle="We bring damaged and used devices back to life with industry-leading refurbishment processes"
        align="center"
      >
        <Grid cols={3}>
          <Card
            icon={<Wrench />}
            title="Complete Restoration"
            description="Full hardware inspection, component replacement, and software restoration to factory specifications."
            items={['Hardware diagnostics & repair', 'Component replacement', 'Software reinstallation']}
          />
          <Card
            icon={<Shield />}
            title="Quality Testing"
            description="Rigorous testing protocols ensure every device meets our high standards before delivery."
            items={['Multi-point inspection', 'Performance benchmarking', 'Quality certification']}
          />
          <Card
            icon={<Award />}
            title="Warranty Coverage"
            description="All refurbished devices come with comprehensive warranty coverage for your peace of mind."
            items={['90-day warranty included', 'Extended warranty options', 'Support & service']}
          />
        </Grid>
      </Section>

      {/* Device Types */}
      <Section wide caption="Devices" title="Devices We Refurbish" subtitle="Professional refurbishment services for a wide range of electronic devices" align="center">
        <Grid cols={4}>
          <Card icon={<Smartphone />} title="Mobile Devices" items={['Smartphones & tablets', 'Screen replacements', 'Battery replacements', 'Water damage repair']} tone="secondary" />
          <Card icon={<Laptop />} title="Laptops" items={['Complete refurbishment', 'Hardware upgrades', 'Operating system refresh', 'Performance optimization']} tone="secondary" />
          <Card icon={<Monitor />} title="Desktops" items={['Full system restoration', 'Component upgrades', 'Cleaning & maintenance', 'Software installation']} tone="secondary" />
          <Card icon={<Recycle />} title="Other Devices" items={['Gaming consoles', 'Audio equipment', 'Networking devices', 'Custom electronics']} tone="secondary" />
        </Grid>
      </Section>

      {/* Process Section */}
      <Section id="process" wide caption="Process" title="Our Refurbishment Process" subtitle="A systematic approach to bringing your devices back to life" align="center">
        <Grid cols={4}>
          {steps.map((s) => (
            <Card key={s.n} icon={<span className="font-mono text-sm font-semibold">{s.n}</span>} title={s.title} description={s.text} tone="surface" />
          ))}
        </Grid>
      </Section>

      {/* Contact Section */}
      <Section
        id="contact"
        wide
        caption="Contact"
        title="Get Your Devices Refurbished"
        subtitle="Ready to restore your electronics to like-new condition? Contact our refurbishment specialists today."
        align="center"
      >
        <Grid cols={2}>
          <Card icon={<Phone />} title="Call for Quote" description="Speak directly with our technicians to discuss your refurbishment needs">
            <div className="mt-5">
              <Button href="tel:+15485035000" arrow={false}>
                <Phone className="w-4 h-4" />
                +1 (548) 503-5000
              </Button>
            </div>
          </Card>
          <Card icon={<Mail />} title="Email for Details" description="Send us details about your devices and get a detailed refurbishment quote">
            <div className="mt-5">
              <Button href="mailto:refurbishment@replugit.com" arrow={false}>
                <Mail className="w-4 h-4" />
                refurbishment@replugit.com
              </Button>
            </div>
          </Card>
        </Grid>

        {/* Location Info */}
        <div className="mt-4 rounded-2xl border border-border bg-surface p-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-[15px] text-muted-foreground">
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="font-medium">Kitchener-Waterloo, Ontario</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-accent" />
            <span className="font-medium">Mon-Fri 9AM-6PM EST</span>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="w-4 h-4 text-accent" />
            <span className="font-medium">90-Day Warranty</span>
          </div>
        </div>
      </Section>
    </main>
  )
}
