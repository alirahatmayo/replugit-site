import { Clock, Zap, CheckCircle, Check, X } from 'lucide-react'
import { RepricerBanner } from '@/components/repricer'
import { Section, Grid, Card, Button, DarkPanel } from '@/components/shared/ui'

/*
 * BestBuy Repricer landing page. Same sections and copy as before, built from
 * the shared page primitives. The plan comparison table is data-driven so the
 * nine feature rows are not repeated by hand.
 */
const steps = [
  { n: '1', title: 'Add Products', text: 'Import SKUs, set cost basis and minimum profit margins' },
  { n: '2', title: 'We Monitor', text: 'System tracks all competitors every 30 minutes, 24/7' },
  { n: '3', title: 'Smart Decisions', text: 'Algorithm calculates optimal prices within your profit rules' },
  { n: '4', title: 'Auto-Adjust', text: 'Prices update instantly, Buy Box wins increase' },
]

const example = [
  { time: '2:15 AM', text: 'Competitor drops price from $19.99 to $17.99' },
  { time: '2:30 AM', text: 'BB-Repricer adjusts your price to $17.89 (still 45% margin)' },
  { time: '2:31 AM', text: "You're back to winning Buy Box, no sales lost" },
]

const insights = [
  { title: 'Real-Time Competitor Analysis', text: 'All competitor prices, inventory levels, and your Buy Box status' },
  { title: 'Performance Tracking', text: 'Buy Box win rates, revenue impact, and profit margin analysis' },
  { title: 'Opportunity Alerts', text: 'When competitors are out of stock or priced high' },
  { title: 'Market Intelligence', text: 'Competitor behavior patterns and strategic insights' },
]

const outcomes = [
  { value: '23%', text: 'Average revenue increase from faster Buy Box wins' },
  { value: '15hrs', text: 'Weekly time saved from automated monitoring' },
  { value: '30min', text: 'Fastest response time to market changes' },
  { value: '40%', text: 'More Buy Box wins with smart automation' },
]

/* A plan cell is a plain yes/no, or a short label with an optional check or cross above it. */
type PlanCell = 'yes' | 'no' | { text: string; muted?: boolean; check?: boolean; cross?: boolean }

const planRows: { name: string; desc: string; cells: PlanCell[] }[] = [
  { name: 'Price Monitoring', desc: 'Real-time competitor tracking', cells: ['yes', 'yes', 'yes'] },
  { name: 'Buy Box Tracking', desc: 'Win/lose notifications', cells: ['yes', 'yes', 'yes'] },
  { name: 'Profit Tracking', desc: 'Margin calculations', cells: ['yes', 'yes', 'yes'] },
  {
    name: 'Auto Price Updates',
    desc: 'Automatic repricing',
    cells: [{ text: 'Manual', muted: true, cross: true }, { text: '30min', check: true }, { text: '15min', check: true }],
  },
  { name: 'Profit Protection', desc: 'Minimum margin rules', cells: ['no', 'yes', 'yes'] },
  { name: 'Stock Alerts', desc: 'Competitor inventory', cells: ['no', 'yes', 'yes'] },
  { name: 'Advanced Analytics', desc: 'Performance insights', cells: ['no', { text: 'Basic' }, { text: 'Full', check: true }] },
  { name: 'API & Export', desc: 'Data integration', cells: ['no', 'no', 'yes'] },
  { name: 'Support', desc: 'Help & training', cells: [{ text: 'Email', muted: true }, { text: 'Priority' }, { text: 'Dedicated' }] },
]

const finalStats = [
  { value: '50K+', text: 'SKUs monitored daily' },
  { value: '30min', text: 'Automated repricing cycles' },
  { value: '24/7', text: 'Continuous monitoring' },
]

function PlanCellView({ cell }: { cell: PlanCell }) {
  if (cell === 'yes') return <Check className="w-5 h-5 text-accent" />
  if (cell === 'no') return <X className="w-5 h-5 text-muted-foreground/40" />
  return (
    <div className="flex flex-col items-center gap-1">
      {cell.check && <Check className="w-5 h-5 text-accent" />}
      {cell.cross && <X className="w-5 h-5 text-muted-foreground/40" />}
      <span className={`text-xs font-medium ${cell.muted ? 'text-muted-foreground' : 'text-accent'}`}>{cell.text}</span>
    </div>
  )
}

function CheckLine({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <div className={`flex flex-wrap justify-center gap-6 text-sm ${className}`}>
      {items.map((item) => (
        <span key={item} className="flex items-center gap-2">
          <Check className="w-4 h-4 text-accent" />
          {item}
        </span>
      ))}
    </div>
  )
}

export default function BestBuyRepricerPage() {
  return (
    <main className="min-h-screen">
      <RepricerBanner />

      {/* Core Value Proposition */}
      <Section
        wide
        align="center"
        title="Turn Pricing Into Your Competitive Advantage"
        subtitle="While competitors manually check prices once a day, BB-Repricer monitors and adjusts every 30 minutes, automatically protecting your profits while winning more Buy Boxes."
      >
        <Grid cols={3}>
          <Card
            icon={<Clock />}
            title="The Problem"
            description="Competitors change prices at 2 AM. You discover it at 10 AM. You've already lost 8 hours of sales to slower manual checking."
          />
          <Card
            icon={<Zap />}
            title="The Solution"
            description="BB-Repricer responds within 30 minutes, automatically adjusting your prices while you sleep, never selling below your profit thresholds."
          />
          <Card
            icon={<CheckCircle />}
            title="The Result"
            description="23% average revenue increase, 40% more Buy Box wins, and 15+ hours saved weekly, all while maintaining your profit margins."
          />
        </Grid>
      </Section>

      {/* How It Works */}
      <Section wide align="center" title="Simple Setup, Powerful Results" subtitle="Get started in minutes, see results in hours">
        <Grid cols={4}>
          {steps.map((step) => (
            <Card key={step.n} tone="secondary" icon={<span className="font-mono text-sm font-semibold">{step.n}</span>} title={step.title} description={step.text} />
          ))}
        </Grid>

        {/* Real Example */}
        <div className="mt-10 rounded-3xl bg-card-primary p-8 max-[850px]:p-6">
          <h3 className="text-base font-semibold text-foreground mb-6 text-center">Real-Time Example</h3>
          <Grid cols={3}>
            {example.map((item) => (
              <div key={item.time} className="rounded-2xl bg-background p-6 text-center">
                <div className="font-mono text-xl font-semibold tracking-tight text-accent mb-2">{item.time}</div>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </Grid>
        </div>
      </Section>

      {/* Analytics Overview */}
      <Section wide align="center" title="Data-Driven Pricing Intelligence" subtitle="Turn market data into competitive advantage">
        <Grid cols={2}>
          <Card tone="outline" title="📊 What You See">
            <div className="mt-4 space-y-4">
              {insights.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-none" />
                  <div>
                    <h4 className="font-semibold text-foreground text-[15px]">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="rounded-2xl bg-primary text-primary-foreground p-6">
            <h3 className="text-base font-semibold mb-6">🎯 What You Achieve</h3>
            <div className="space-y-6">
              {outcomes.map((item) => (
                <div key={item.value}>
                  <div className="font-mono text-3xl font-semibold tracking-tight text-accent">{item.value}</div>
                  <p className="text-primary-foreground/70 text-[15px]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Grid>
      </Section>

      {/* Plans Section */}
      <Section wide align="center" title="Choose Your Level of Automation" subtitle="Start simple, upgrade when you're ready for full automation">
        {/* Plans Comparison Table */}
        <div className="overflow-x-auto">
          <div className="min-w-[800px] rounded-2xl border border-border overflow-hidden bg-background">
            {/* Header */}
            <div className="grid grid-cols-4 bg-muted">
              <div className="p-4 lg:p-6">
                <h3 className="text-lg font-semibold text-foreground mb-1">Features</h3>
                <p className="text-muted-foreground text-xs lg:text-sm">Compare what you get</p>
              </div>
              <div className="p-4 lg:p-6 border-l border-border text-center">
                <h3 className="text-sm lg:text-base font-semibold text-foreground mb-1">Basic Monitor</h3>
                <p className="text-muted-foreground text-xs">See what's happening</p>
                <div className="mt-2 text-xs text-muted-foreground">For beginners</div>
              </div>
              <div className="p-4 lg:p-6 border-l border-border bg-card-primary text-center">
                <span className="inline-block bg-accent text-white px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap mb-2">Most Popular</span>
                <h3 className="text-sm lg:text-base font-semibold text-accent mb-1">Auto Repricer</h3>
                <p className="text-muted-foreground text-xs">Hands-off automation</p>
                <div className="mt-2 text-xs text-accent font-medium">Recommended</div>
              </div>
              <div className="p-4 lg:p-6 border-l border-border text-center">
                <h3 className="text-sm lg:text-base font-semibold text-foreground mb-1">Enterprise Plus</h3>
                <p className="text-muted-foreground text-xs">Advanced insights</p>
                <div className="mt-2 text-xs text-muted-foreground">Large sellers</div>
              </div>
            </div>

            {/* Feature Rows */}
            <div className="divide-y divide-border">
              {planRows.map((row) => (
                <div key={row.name} className="grid grid-cols-4 hover:bg-muted/50 transition-colors">
                  <div className="p-4 lg:p-6 bg-muted/50 border-r border-border">
                    <h4 className="font-semibold text-foreground text-sm lg:text-base mb-1">{row.name}</h4>
                    <p className="text-xs lg:text-sm text-muted-foreground">{row.desc}</p>
                  </div>
                  {row.cells.map((cell, i) => (
                    <div key={i} className="p-4 lg:p-6 flex items-center justify-center">
                      <PlanCellView cell={cell} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Single CTA Button */}
        <div className="text-center mt-12">
          <h3 className="text-2xl max-[850px]:text-xl font-semibold tracking-tight text-foreground mb-3">Ready to Start Winning More Buy Boxes?</h3>
          <p className="text-base text-muted-foreground mb-8">All plans include free setup assistance and can be customized to your needs</p>
          <Button href="/contact" size="lg">
            Get Your Custom Demo & Pricing
          </Button>
          <CheckLine className="text-muted-foreground mt-6" items={['No long-term commitment', 'Free setup & training', 'Custom pricing available']} />
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section wide>
        <DarkPanel
          title="Ready to Dominate Best Buy Canada?"
          description="Join smart sellers who use BB-Repricer to automate their pricing and win more Buy Boxes"
        >
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {finalStats.map((stat) => (
                <div key={stat.value} className="rounded-2xl bg-white/5 border border-white/10 p-6">
                  <div className="font-mono text-4xl font-semibold tracking-tight text-accent mb-1">{stat.value}</div>
                  <div className="text-primary-foreground/70 text-sm">{stat.text}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <Button href="/contact" variant="accent" size="lg">
                Schedule Custom Demo
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white/20 bg-transparent text-primary-foreground hover:bg-white/10">
                Get Pricing & ROI Analysis
              </Button>
            </div>

            <CheckLine className="text-primary-foreground/60" items={['No commitment required', 'Custom pricing available', 'Implementation support included']} />
          </div>
        </DarkPanel>
      </Section>
    </main>
  )
}
