import { Check } from 'lucide-react'
import { Eyebrow, Checklist, Button } from '@/components/shared/ui'

/*
 * Warranty page hero: copy on the left, a small dashboard mockup on the
 * right (large screens only). Same padding rhythm as PageHero.
 */
export default function WarrantyBanner() {
  return (
    <section className="pt-20 pb-10 max-[850px]:pt-12 max-[850px]:pb-6">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Content */}
          <div>
            {/* Trust Badge */}
            <div className="mb-6 hero-blur-in">
              <Eyebrow>Professional Warranty Management</Eyebrow>
            </div>

            <h1 className="text-5xl max-[850px]:text-3xl font-medium tracking-tight leading-[1.15] mb-5 hero-blur-in delay-1">
              Stop Losing Money to
              <br />
              <span className="text-muted-foreground/50">Warranty Chaos</span>
            </h1>

            <p className="text-base text-muted-foreground leading-[1.75] mb-6 hero-blur-in delay-2">
              Replace the Excel spreadsheet with an automated warranty system that
              <span className="text-foreground font-medium"> cuts the admin work</span> and ensures{' '}
              <span className="text-accent font-medium">Quebec Bill 29 compliance</span>
            </p>

            {/* Key Benefits List - Minimal */}
            <div className="mb-8 hero-blur-in delay-2">
              <Checklist
                items={[
                  'Automated claim processing & real-time analytics',
                  'Customer self-service portal & 24/7 support',
                  'Protects E-Commerce Platform seller response metrics',
                ]}
              />
            </div>

            <div className="flex flex-wrap gap-3 mb-6 hero-blur-in delay-3">
              <Button href="/contact" size="lg">
                Schedule Consultation
              </Button>
              <Button href="/contact" variant="outline" size="lg" arrow={false}>
                Get Custom Quote
              </Button>
            </div>

            {/* Social Proof - Condensed */}
            <div className="flex flex-wrap items-center gap-3 text-muted-foreground/70 text-xs hero-blur-in delay-3">
              <span className="flex items-center gap-1">
                <Check className="w-3 h-3 text-accent" />
                No setup fees
              </span>
              <span>•</span>
              <span>Custom pricing available</span>
              <span>•</span>
              <span>Implementation support included</span>
            </div>
          </div>

          {/* Right Side - Enhanced Dashboard */}
          <div className="hidden lg:block relative hero-fade-up delay-2">
            <div className="rounded-3xl bg-primary p-4">
              <div className="rounded-2xl bg-background p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-foreground font-semibold text-base">Warranty Analytics</h3>
                    <p className="text-muted-foreground text-sm">Real-time dashboard</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 bg-muted-foreground/20 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-muted-foreground/20 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-muted-foreground/20 rounded-full"></div>
                  </div>
                </div>

                {/*
                 * Dashboard preview: what the interface does, not a claim
                 * about Replugit's own live customer numbers. No invented
                 * counts, ratings or comparative benchmarks here, only
                 * mechanism facts already established elsewhere on this
                 * page (30-second QR activation, bilingual documentation).
                 */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-card-primary p-4 rounded-2xl">
                    <div className="font-mono text-2xl font-semibold tracking-tight text-foreground mb-2">Auto</div>
                    <div className="text-xs text-muted-foreground font-medium">Warranty Record Keeping</div>
                  </div>
                  <div className="bg-card-secondary p-4 rounded-2xl">
                    <div className="font-mono text-2xl font-semibold tracking-tight text-foreground mb-2">Live</div>
                    <div className="text-xs text-muted-foreground font-medium">Claim & Status Tracking</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-surface p-4 rounded-2xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">Warranty Activation</span>
                      <span className="text-sm font-semibold font-mono text-accent">~30 seconds</span>
                    </div>
                    <div className="w-full bg-muted-foreground/10 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-accent h-1.5 rounded-full w-11/12"></div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Customer scans a QR code to activate</div>
                  </div>
                  <div className="bg-surface p-4 rounded-2xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">Documentation</span>
                      <span className="text-sm font-semibold font-mono text-accent">FR / EN</span>
                    </div>
                    <div className="w-full bg-muted-foreground/10 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-accent h-1.5 rounded-full w-full"></div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Bilingual, as Bill 29 requires</div>
                  </div>
                </div>
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute -top-3 -right-3 bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold">Bill 29 Ready</div>
              <div className="absolute -bottom-3 -left-3 bg-foreground text-background px-4 py-2 rounded-full text-sm font-semibold">24/7 Automated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
