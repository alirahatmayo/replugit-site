import { Check, Clock, LayoutGrid, Award, TrendingUp } from 'lucide-react'
import { Eyebrow, Button } from '@/components/shared/ui'

/*
 * Hero for the BestBuy Repricer page. Copy is unchanged. The mock dashboard on
 * the right now uses the shared theme tokens instead of its own palette.
 */
const benefits = [
  'Real-time competitor monitoring & instant price adjustments',
  'Automated Buy Box optimization & margin protection',
  'Scale across thousands of SKUs with zero manual work',
]

const recentActions = [
  { text: 'Samsung TV - Price adjusted to $1,299', tone: 'bg-accent' },
  { text: 'Apple Watch - Competitor alert at $349', tone: 'bg-foreground/30' },
  { text: 'HP Laptop - Buy Box won at $599', tone: 'bg-accent' },
]

const RepricerBanner = () => (
  <section className="pt-20 pb-10 max-[850px]:pt-12 max-[850px]:pb-6">
    <div className="max-w-5xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Side - Content */}
        <div>
          {/* Trust Badge */}
          <div className="mb-6 hero-blur-in">
            <Eyebrow icon={<span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />}>Best Buy Canada Repricing</Eyebrow>
          </div>

          <h1 className="text-5xl max-[850px]:text-3xl font-medium tracking-tight leading-[1.15] mb-5 hero-blur-in delay-1">
            Dominate Best Buy Canada with
            <br />
            <span className="text-muted-foreground/50">Intelligent Repricing</span>
          </h1>

          <p className="text-base text-muted-foreground leading-[1.75] mb-6 hero-blur-in delay-2">
            Stay competitive 24/7 with automated pricing that
            <span className="text-accent font-semibold"> protects your margins and keeps you winning Buy Box</span>
          </p>

          {/* Key Benefits List */}
          <ul className="mb-8 space-y-2 hero-blur-in delay-2">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 text-[15px] text-muted-foreground">
                <span className="w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-none">
                  <Check className="w-3 h-3" />
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 mb-6 hero-blur-in delay-3">
            <Button href="/contact">Schedule Demo</Button>
            <Button href="/contact" variant="outline">
              Get Pricing
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap items-center gap-3 text-muted-foreground text-xs hero-blur-in delay-3">
            <span className="flex items-center gap-1">
              <Check className="w-3 h-3 text-accent" />
              No setup fees
            </span>
            <span>•</span>
            <span>Flexible pricing options</span>
            <span>•</span>
            <span>No long-term commitment</span>
          </div>
        </div>

        {/* Right Side - Repricing Dashboard */}
        <div className="hidden lg:block relative hero-fade-up delay-2">
          <div className="rounded-3xl bg-surface border border-border p-4">
            <div className="rounded-2xl bg-background border border-border p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-foreground font-semibold text-base">BB-Repricer Dashboard</h3>
                  <p className="text-muted-foreground text-sm">Real-time competitive intelligence</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-border rounded-full"></div>
                  <div className="w-3 h-3 bg-border rounded-full"></div>
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                </div>
              </div>

              {/*
               * Dashboard preview: describes what the product does, not
               * Replugit's own live usage numbers. No invented SKU counts
               * or win-rate benchmarks.
               */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-card-primary p-4 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-mono text-2xl font-semibold tracking-tight text-foreground">Unlimited</div>
                    <div className="w-8 h-8 bg-accent/10 text-accent rounded-lg flex items-center justify-center">
                      <LayoutGrid className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">SKUs Tracked</div>
                </div>
                <div className="bg-card-secondary p-4 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-mono text-2xl font-semibold tracking-tight text-foreground">Auto</div>
                    <div className="w-8 h-8 bg-accent/10 text-accent rounded-lg flex items-center justify-center">
                      <Award className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">Buy Box Price Matching</div>
                </div>
              </div>

              {/* Live Pricing Example */}
              <div className="bg-muted p-4 rounded-xl mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-foreground">Dell Latitude 7410 - Live Pricing</span>
                  <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-semibold">Winning Buy Box</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-accent font-semibold">Your Price</span>
                    <span className="text-sm font-mono font-semibold text-foreground">$459.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Competitor A</span>
                    <span className="text-sm font-mono text-muted-foreground">$462.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Competitor B</span>
                    <span className="text-sm font-mono text-muted-foreground">$465.00</span>
                  </div>
                </div>
              </div>

              {/* Recent Actions */}
              <div className="space-y-2">
                <div className="text-sm font-medium text-foreground mb-2">Recent Actions</div>
                <div className="space-y-1">
                  {recentActions.map((action) => (
                    <div key={action.text} className="flex items-center gap-2 text-xs">
                      <div className={`w-2 h-2 ${action.tone} rounded-full`}></div>
                      <span className="text-muted-foreground">{action.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-3 -right-3 bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" />
                Auto-Adjusted Pricing
              </div>
            </div>
            <div className="absolute -bottom-3 -left-3 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                24/7 Monitoring
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default RepricerBanner
