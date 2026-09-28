import { Metadata } from 'next'
import { Package, TrendingUp, Shield, Truck, Globe, Smartphone, Monitor, Server, Mail, MessageCircle, Phone, Clock, CheckCircle } from 'lucide-react'
import { PageHero, Section, Grid, Card, Button } from '@/components/shared/ui'

export const metadata: Metadata = {
  title: 'Wholesale Electronics Distribution | Replugit',
  description: 'Professional wholesale electronics distribution for retailers, resellers, and enterprises. Bulk pricing, reliable supply, and business support.',
}

const WHATSAPP_URL = 'https://chat.whatsapp.com/KdPqKlFB1eS6AO3I5mConi'
const WHOLESALE_INQUIRY_URL =
  "mailto:wholesale@replugit.com?subject=Wholesale Inquiry&body=Hi Replugit team,%0D%0A%0D%0AI'm interested in your wholesale electronics program. Please provide pricing and availability for:%0D%0A%0D%0A- Product categories I'm interested in:%0D%0A- Estimated monthly volume:%0D%0A- Business information:%0D%0A%0D%0AThank you!"

/* WhatsApp links open in a new tab, which the shared Button does not do, so they stay as plain anchors with the same button classes. */
const externalButton = 'group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors bg-accent text-white hover:bg-accent/90'

function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488" />
    </svg>
  )
}

const benefits = [
  {
    icon: <TrendingUp />,
    title: 'Competitive Pricing',
    description: 'Volume-based pricing with attractive margins for resellers and retailers. Better rates for larger orders.',
    items: ['Tiered volume discounts', 'Flexible payment terms', 'No minimum order quantities'],
  },
  {
    icon: <Shield />,
    title: 'Quality Assurance',
    description: 'Every device goes through our rigorous refurbishment and testing process before reaching you.',
    items: ['100% tested devices', 'Certified data wiping', 'Warranty coverage included'],
  },
  {
    icon: <Truck />,
    title: 'Reliable Supply',
    description: 'Consistent inventory availability with fast shipping and dedicated account management.',
    items: ['48-hour shipping', 'Real-time inventory updates', 'Dedicated account manager'],
  },
]

const categories = [
  {
    icon: <Smartphone />,
    title: 'Mobile Devices',
    description: 'Smartphones, tablets, and accessories from top brands',
    items: ['iPhone & Samsung Galaxy', 'iPads & Android tablets', 'Cases & charging accessories'],
  },
  {
    icon: <Monitor />,
    title: 'Computers',
    description: 'Laptops, desktops, and workstations for business use',
    items: ['Business laptops & ultrabooks', 'Desktop computers & all-in-ones', 'Monitors & peripherals'],
  },
  {
    icon: <Server />,
    title: 'Enterprise',
    description: 'Server equipment and networking hardware',
    items: ['Rack & tower servers', 'Network switches & routers', 'Storage solutions'],
  },
  {
    icon: <Globe />,
    title: 'Consumer Electronics',
    description: 'Audio, gaming, and smart home devices',
    items: ['Gaming consoles & accessories', 'Audio equipment & headphones', 'Smart TVs & streaming devices'],
  },
]

export default function WholesalePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        badge="Wholesale Distribution"
        icon={<Package className="w-3.5 h-3.5" />}
        title="Wholesale Electronics"
        titleMuted="Distribution Partner"
        description="Join 500+ retailers and resellers in our exclusive WhatsApp community. Get instant access to daily wholesale deals, bulk pricing, and real-time inventory updates."
        align="center"
      >
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`${externalButton} px-7 py-3.5 text-base`}>
          <WhatsAppIcon />
          Join WhatsApp for Wholesale Deals
        </a>
        <div className="text-muted-foreground text-sm text-left self-center">
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle className="w-4 h-4 text-accent" />
            <span>Daily inventory updates</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-accent" />
            <span>Instant price quotes</span>
          </div>
        </div>
        <p className="w-full text-muted-foreground text-sm mt-3">
          Or email us at{' '}
          <a href="mailto:wholesale@replugit.com" className="text-accent hover:underline underline-offset-4">
            wholesale@replugit.com
          </a>
        </p>
      </PageHero>

      {/* Business Benefits */}
      <Section
        wide
        align="center"
        caption="Why Choose Replugit Wholesale"
        title="Your Trusted Wholesale Partner"
        subtitle="We handle the sourcing, quality assurance, and logistics so you can focus on growing your business"
      >
        <Grid cols={3}>
          {benefits.map((item) => (
            <Card key={item.title} icon={item.icon} title={item.title} description={item.description} items={item.items} />
          ))}
        </Grid>
      </Section>

      {/* Product Categories */}
      <Section wide align="center" title="What We Wholesale" subtitle="Comprehensive selection of refurbished and new electronics for your business needs">
        <Grid cols={4}>
          {categories.map((item) => (
            <Card key={item.title} tone="secondary" icon={item.icon} title={item.title} description={item.description} items={item.items} />
          ))}
        </Grid>
      </Section>

      {/* Contact Options */}
      <Section wide align="center" title="Ready to Start Wholesale Business?" subtitle="Choose how you'd like to connect with our wholesale team">
        <Grid cols={2}>
          <Card
            tone="surface"
            icon={<Mail />}
            title="Email for Pricing"
            description="Send us your requirements and get detailed wholesale pricing within 24 hours"
            items={['Custom pricing for your volume', 'Product availability updates', 'Account setup assistance']}
          >
            <div className="mt-6">
              <Button href={WHOLESALE_INQUIRY_URL} className="w-full" arrow={false}>
                <Mail className="w-4 h-4" />
                Send Wholesale Inquiry
              </Button>
            </div>
          </Card>

          <Card
            tone="surface"
            icon={<MessageCircle />}
            title="Join WhatsApp Group"
            description="Get instant updates on new inventory, special deals, and connect with our wholesale community"
            items={['Real-time inventory updates', 'Exclusive wholesale deals', 'Direct communication with team']}
          >
            <div className="mt-6">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`${externalButton} w-full px-5 py-2.5 text-sm`}>
                <MessageCircle className="w-4 h-4" />
                Join WhatsApp Community
              </a>
            </div>
          </Card>
        </Grid>

        {/* Contact Info */}
        <div className="mt-6 rounded-2xl border border-border bg-surface p-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-muted-foreground text-sm">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-accent" />
              <span className="font-medium">+1 (548) 503-5000</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-accent" />
              <span className="font-medium">Mon-Fri 9AM-6PM EST</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-accent" />
              <span className="font-medium">wholesale@replugit.com</span>
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
}
