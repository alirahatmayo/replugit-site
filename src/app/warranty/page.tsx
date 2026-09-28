import type { ReactNode } from 'react'
import {
  AlertTriangle,
  BarChart3,
  Calculator,
  Check,
  CheckCircle,
  ClipboardList,
  FileText,
  QrCode,
  ShoppingCart,
  Smartphone,
  Star,
  X,
} from 'lucide-react'
import { Section, Grid, Card, Prose, StatRow, DarkPanel, Notice, Button, Caption } from '@/components/shared/ui'
import WarrantyBanner from '@/components/warranty/WarrantyBanner'

/* Bulleted list with a small icon instead of the accent dot, used where the bullet carries meaning (a problem vs a fix). */
function IconList({ items, icon }: { items: ReactNode[]; icon: ReactNode }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-[15px] text-muted-foreground leading-[1.7]">
          <span className="mt-1.5 flex-none [&>svg]:w-4 [&>svg]:h-4">{icon}</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

const problemIcon = <X className="text-muted-foreground/60" />
const fixIcon = <Check className="text-accent" />
const warnIcon = <AlertTriangle className="text-muted-foreground/60" />

const steps = [
  {
    id: 'step1',
    number: '1',
    title: 'You Sell a Device',
    description: "On Walmart, Best Buy, Amazon, eBay, or your local store - doesn't matter where",
    icon: <ShoppingCart className="w-5 h-5" />,
  },
  {
    id: 'step2',
    number: '2',
    title: 'We Record Everything',
    description: 'Serial number, customer name, email, order details - all saved automatically',
    icon: <FileText className="w-5 h-5" />,
  },
  {
    id: 'step3',
    number: '3',
    title: 'Customer Gets QR Code',
    description: 'They scan it (or click email link) and activate their warranty in 30 seconds',
    icon: <Smartphone className="w-5 h-5" />,
  },
  {
    id: 'step4',
    number: '4',
    title: 'You Have Complete Records',
    description: 'Track warranties, handle claims, view analytics - all from one dashboard',
    icon: <BarChart3 className="w-5 h-5" />,
  },
]

export default function WarrantyPage() {
  return (
    <main className="min-h-screen">
      <WarrantyBanner />

      {/* The Problem Section - Story Beginning */}
      <Section wide title="The Hidden Cost of Manual Warranty Management" subtitle="Every day, electronics vendors struggle with an invisible profit killer">
        {/* Statistics */}
        <Grid cols={3}>
          <div className="rounded-2xl bg-surface p-6">
            <div className="font-mono text-3xl font-semibold tracking-tight text-foreground mb-2">73%</div>
            <p className="text-[15px] font-medium text-foreground">of warranty claims fail</p>
            <p className="text-sm text-muted-foreground mt-1">due to missing serial number records</p>
          </div>
          <div className="rounded-2xl bg-surface p-6">
            <div className="font-mono text-3xl font-semibold tracking-tight text-foreground mb-2">$2,500+</div>
            <p className="text-[15px] font-medium text-foreground">monthly loss</p>
            <p className="text-sm text-muted-foreground mt-1">from untracked warranties (average vendor)</p>
          </div>
          <div className="rounded-2xl bg-surface p-6">
            <div className="font-mono text-3xl font-semibold tracking-tight text-foreground mb-2">6 hours</div>
            <p className="text-[15px] font-medium text-foreground">wasted weekly</p>
            <p className="text-sm text-muted-foreground mt-1">managing Excel spreadsheets</p>
          </div>
        </Grid>

        {/* Core Problem Statement */}
        <div className="mt-4">
          <DarkPanel
            align="left"
            title="The Problem:"
            description={
              <>
                You sell refurbished devices on Walmart, Best Buy, and Amazon. A customer calls: &quot;Where&apos;s my warranty?&quot; You frantically
                search Excel files, can&apos;t find the serial number, and lose the customer forever.{' '}
                <span className="font-semibold text-primary-foreground">This happens every single day.</span>
              </>
            }
          />
        </div>

        {/* Pain Points Visualization */}
        <Grid cols={2} className="mt-4">
          <Card title="The Daily Struggle" tone="outline">
            <div className="mt-3">
              <IconList
                icon={problemIcon}
                items={[
                  'Customer calls: "Where\'s my warranty?"',
                  'Frantically searching through Excel files',
                  '"Sorry, we can\'t find your purchase record"',
                  'Negative reviews and lost customers',
                ]}
              />
            </div>
          </Card>
          <Card title="What Success Looks Like" tone="primary">
            <div className="mt-3">
              <IconList
                icon={fixIcon}
                items={[
                  'Customer scans QR, instantly finds warranty',
                  'All serial numbers automatically tracked',
                  'Professional warranty experience',
                  'Happy customers, 5-star reviews',
                ]}
              />
            </div>
          </Card>
        </Grid>
      </Section>

      {/* The Solution Section */}
      <Section wide caption="The Solution" title="What ReplugIT Does For You" subtitle="A simple, automated warranty system that works for any sales channel">
        {/* 3 Core Features - Big & Clear */}
        <Grid cols={3}>
          <Card
            icon={<FileText />}
            title="Automatic Record Keeping"
            description="Every device you sell is automatically recorded with its serial number, customer info, and warranty details. Never lose track again."
          />
          <Card
            icon={<Smartphone />}
            title="Customer Self-Service"
            description="Customers scan a QR code or click a link to activate warranties and file claims themselves. No more support calls."
          />
          <Card
            icon={<Star />}
            title="Build Loyalty & Reviews"
            description="Offer extended warranties or incentives in exchange for reviews. Turn warranty activations into 5-star ratings."
          />
        </Grid>

        {/* Simple Value Proposition */}
        <div className="mt-4 rounded-3xl bg-surface p-8 max-[850px]:p-6">
          <h3 className="text-xl font-semibold tracking-tight text-foreground mb-6">Here&apos;s What Makes It Special</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-none">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-foreground mb-1">Works with ANY Sales Channel</h4>
                <p className="text-[15px] text-muted-foreground leading-[1.75]">Walmart, Best Buy, Amazon, eBay, in-store sales - all in one place</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-none">
                <QrCode className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-foreground mb-1">QR Code Activation</h4>
                <p className="text-[15px] text-muted-foreground leading-[1.75]">Customers scan a sticker on their device - warranty activated in seconds</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-none">
                <Smartphone className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-foreground mb-1">Serial Number → Customer Matching</h4>
                <p className="text-[15px] text-muted-foreground leading-[1.75]">Know exactly which device went to which customer, instantly</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-none">
                <Star className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-foreground mb-1">Incentivize Reviews</h4>
                <p className="text-[15px] text-muted-foreground leading-[1.75]">Offer extended warranty in exchange for honest reviews</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Quebec Bill 29 Compliance Section */}
      <Section
        wide
        caption="Quebec Bill 29 Compliant"
        title="Stay Compliant with Quebec's New Warranty Laws"
        subtitle={
          <>
            Quebec&apos;s Bill 29 (2023) requires all merchants selling household appliances and electronics to provide mandatory &quot;good working
            order&quot; warranties. <span className="font-medium text-foreground">Non-compliance penalties: Up to 5% of worldwide revenue.</span>
          </>
        }
      >
        <Grid cols={2}>
          <Card title="Bill 29 Requirements" tone="outline">
            <div className="mt-3">
              <IconList
                icon={warnIcon}
                items={[
                  'Provide mandatory warranty for prescribed goods',
                  'Disclose warranty information in French before sale',
                  'Maintain detailed warranty records for all sales',
                  'Provide repair information and replacement parts',
                  'Allow consumer access to warranty documentation',
                ]}
              />
            </div>
          </Card>
          <Card title="How ReplugIT Helps" tone="primary">
            <div className="mt-3">
              <IconList
                icon={fixIcon}
                items={[
                  'Automatic warranty record keeping with serial numbers',
                  'Bilingual documentation (French/English)',
                  'Complete audit trail for compliance verification',
                  'Customer portal for warranty information access',
                  'QR codes for instant warranty activation & tracking',
                ]}
              />
            </div>
          </Card>
        </Grid>

        <div className="mt-4">
          <Notice icon={<AlertTriangle />} title="Don't Risk Penalties">
            <p>
              Bill 29 penalties can reach <span className="font-semibold text-foreground">up to 5% of your worldwide turnover</span>. Directors and
              officers are personally liable. Let ReplugIT handle your compliance automatically.
            </p>
            <p className="mt-3 text-sm italic text-muted-foreground/80">
              Reference: An Act to protect consumers from planned obsolescence and to promote the durability, repairability and maintenance of goods
              (2023, Chapter 21)
            </p>
          </Notice>
        </div>
      </Section>

      {/* How It Works - Simplified */}
      <Section wide title="How It Works (Really Simple)" subtitle="Four steps that happen automatically">
        {/* Simplified Steps */}
        <div className="space-y-4">
          {steps.map((step) => (
            <div key={step.id} className="rounded-2xl bg-card-primary p-6 flex items-start gap-5">
              <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-none">{step.icon}</div>
              <div>
                <Caption className="mb-1">Step {step.number}</Caption>
                <h3 className="text-base font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-[1.75]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* That's It Message */}
        <div className="mt-4">
          <DarkPanel
            title="That's It. Seriously."
            description="No complicated setup. No training required. Just professional warranty management that actually works."
          />
        </div>
      </Section>

      {/* Social Proof */}
      <Section
        wide
        title="Built for Electronics Vendors Like You"
        subtitle="Designed specifically for the unique challenges of refurbished electronics warranty management"
      >
        {/* Key Metrics */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">Industry-Leading Capabilities</h3>
          <StatRow
            stats={[
              { value: 'Unlimited', label: 'Warranties Managed' },
              { value: 'All Channels', label: 'E-commerce + Manual' },
              { value: 'Professional', label: 'Customer Experience' },
            ]}
          />
        </div>

        {/* Use Cases */}
        <Grid cols={3}>
          <Card
            title="Multi-Platform Sellers"
            description="&quot;Finally, one system for all our sales channels - Walmart, Best Buy, and our website. No more juggling spreadsheets!&quot;"
            tone="surface"
          />
          <Card
            title="Repair Shops"
            description="&quot;We don't sell online, just repairs in our shop. This gives us professional warranties without needing e-commerce.&quot;"
            tone="surface"
          />
          <Card
            title="Growing Businesses"
            description="&quot;Started with 50 devices/month, now handling 500+. The system scaled perfectly with our growth.&quot;"
            tone="surface"
          />
        </Grid>
      </Section>

      {/* Pricing - Commented out temporarily, redirecting to contact for custom demos */}
      {/*
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
              <p className="text-gray-600 mb-6">Perfect for small vendors</p>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                $299<span className="text-lg font-normal text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-700">Up to 500 warranties/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-700">All sales channels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-700">Basic analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-700">Email support</span>
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Start Free Trial
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl shadow-lg p-8 transform scale-105">
              <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <p className="text-blue-100 mb-6">For growing businesses</p>
              <div className="text-4xl font-bold mb-6">
                $599<span className="text-lg font-normal text-blue-100">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-blue-200">✓</span>
                  <span>Up to 2,000 warranties/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-200">✓</span>
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-200">✓</span>
                  <span>Priority support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-200">✓</span>
                  <span>API access</span>
                </li>
              </ul>
              <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Start Free Trial
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">For large operations</p>
              <div className="text-4xl font-bold text-gray-900 mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-700">Unlimited warranties</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-700">Custom integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-700">Dedicated support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-700">SLA guarantee</span>
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600">
              All plans include: QR code generation • Customer portal • Multi-platform support • 99.9% uptime
            </p>
          </div>
        </div>
      </section>
      */}

      {/* Enhanced Final CTA */}
      <Section wide>
        <DarkPanel
          title={
            <>
              Ready to Transform Your
              <br />
              <span className="text-primary-foreground/50">Warranty Operations?</span>
            </>
          }
          description="Join smart electronics vendors who've eliminated warranty chaos and boosted customer satisfaction"
        >
          <div className="w-full">
            {/* Value Props Grid */}
            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="w-9 h-9 rounded-xl bg-white/10 text-accent flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <h3 className="text-base font-semibold mb-1">Custom Consultation</h3>
                <p className="text-sm text-primary-foreground/60">Tailored to your business needs</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="w-9 h-9 rounded-xl bg-white/10 text-accent flex items-center justify-center mx-auto mb-3">
                  <Calculator className="w-4 h-4" />
                </div>
                <h3 className="text-base font-semibold mb-1">ROI Analysis</h3>
                <p className="text-sm text-primary-foreground/60">See your potential savings</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="w-9 h-9 rounded-xl bg-white/10 text-accent flex items-center justify-center mx-auto mb-3">
                  <ClipboardList className="w-4 h-4" />
                </div>
                <h3 className="text-base font-semibold mb-1">Implementation Plan</h3>
                <p className="text-sm text-primary-foreground/60">Step-by-step integration guide</p>
              </div>
            </div>

            {/* Main CTA */}
            <div className="flex flex-col items-center gap-4 mt-8">
              <Button href="/contact" variant="accent" size="lg">
                Let&apos;s Talk About Your Business
              </Button>
              <p className="text-sm text-primary-foreground/60">Free consultation • No commitment • Custom solution design</p>
            </div>

            {/* Simple Closing Message */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 max-w-2xl mx-auto">
              <Prose className="text-primary-foreground/70">
                <p>
                  We&apos;ll show you exactly how this works for <span className="font-semibold text-primary-foreground">your specific business</span>{' '}
                  - whether you sell 50 devices a month or 5,000.
                </p>
              </Prose>
            </div>
          </div>
        </DarkPanel>
      </Section>
    </main>
  )
}
