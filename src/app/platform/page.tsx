import { Package, Shield, BarChart3, RefreshCw, FileText, Settings, Zap, TrendingUp, Target, Wrench, Mail } from 'lucide-react'
import { PageHero, Section, Grid, Card, Prose, DarkPanel, Eyebrow, Caption } from '@/components/shared/ui'
import { pageMetadata } from '@/lib/metadata'
import { JsonLd, breadcrumbSchema } from '@/components/json-ld'

export const metadata = pageMetadata({
  title: "Complete Electronics Lifecycle Platform",
  description: "From procurement to resale, a modular suite of tools that work independently or as part of our comprehensive platform.",
  path: '/platform/',
})


/*
 * Platform overview. The nav links to /platform#inventory and
 * /platform#dashboard, so those two cards carry anchor ids.
 */
export default function PlatformPage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Platform', path: '/platform/' }])} />
      {/* Hero Section */}
      <PageHero
        badge="ReplugIT Platform & Tools"
        icon={<Settings className="w-3.5 h-3.5" />}
        title="Complete Electronics"
        titleMuted="Lifecycle Platform"
        description="From procurement to resale - a modular suite of tools that work independently or as part of our comprehensive platform."
        align="center"
      />

      {/* Platform Overview */}
      <Section title="Powerful Tools." titleMuted="Endless Possibilities." align="center">
        <Prose className="text-center max-w-2xl mx-auto">
          <p>
            Build your perfect electronics management solution with our modular platform. Each tool works independently, or combine them for a
            complete end-to-end system that scales with your business.
          </p>
        </Prose>
      </Section>

      {/* All Tools & Platform */}

      {/* Platform Suite Tools */}
      <Section
        wide
        caption="Integrated Platform Suite"
        title="Complete Business"
        titleMuted="Automation"
        subtitle="Six powerful tools that integrate seamlessly to automate your entire electronics business workflow. From procurement to customer delivery, every step is optimized for maximum efficiency and profitability."
        align="center"
      >
        <Grid cols={3}>
          {/* Order & Inventory Management */}
          <div id="inventory" className="flex">
            <Card
              icon={<Package />}
              title="Order & Inventory Hub"
              description="Centralized command center for all your marketplace operations with real-time synchronization."
              items={[
                'Multi-platform management (Shopify, Walmart, BestBuy, Amazon)',
                'Real-time inventory sync across all channels',
                'Advanced order lifecycle tracking & analytics',
              ]}
              className="flex-1"
            >
              <Caption className="mt-4">Core Platform</Caption>
            </Card>
          </div>

          {/* Manifest & SKU Mapping */}
          <Card
            icon={<FileText />}
            title="Manifest & SKU Mapping"
            items={['Bulk manifest uploading and processing', 'Automated SKU mapping and reconciliation', 'Error handling and data validation']}
          >
            <Caption className="mt-4">Integrated Platform Tool</Caption>
          </Card>

          {/* RMA Management */}
          <Card
            icon={<RefreshCw />}
            title="RMA Management"
            items={['Partial and complete return processing', 'Automated refunds, replacements, exchanges', 'Full integration with order management']}
          >
            <Caption className="mt-4">Integrated Platform Tool</Caption>
          </Card>

          {/* Analytics & Insights */}
          <div id="dashboard" className="flex">
            <Card
              icon={<BarChart3 />}
              title="Analytics & Business Intelligence"
              items={['Comprehensive sales performance dashboards', 'Inventory turnover and profitability tracking', 'Warranty claims analysis and trends']}
              className="flex-1"
            >
              <Caption className="mt-4">Integrated Platform Tool</Caption>
            </Card>
          </div>

          {/* Compliance & Reporting */}
          <Card
            icon={<Shield />}
            title="Compliance & Reporting"
            items={['Data erasure certification and audit trails', 'Regulatory compliance documentation', 'Automated compliance reporting']}
          >
            <Caption className="mt-4">Integrated Platform Tool</Caption>
          </Card>

          {/* Integration Hub */}
          <Card
            icon={<Zap />}
            title="API & Integrations"
            items={['RESTful APIs for all platform functions', 'Third-party system integrations', 'Custom workflow automation']}
          >
            <Caption className="mt-4">Integrated Platform Tool</Caption>
          </Card>
        </Grid>
      </Section>

      {/* Standalone Tools */}
      <Section
        wide
        caption="Specialized Solutions"
        title="Purpose-Built"
        titleMuted="Power Tools"
        subtitle="Three specialized tools designed to solve specific business challenges. Use them independently for targeted solutions, or integrate with our platform suite for comprehensive automation."
        align="center"
      >
        <Grid cols={3}>
          {/* QC Tool */}
          <Card
            icon={<Wrench />}
            title="QC Testing Engine"
            description="Automated testing system with comprehensive diagnostic checks and professional-grade reporting for accurate device grading."
            items={[
              <>
                <span className="block font-medium text-foreground">Comprehensive Tests</span>
                <span className="block text-sm">Hardware, software & performance</span>
              </>,
              <>
                <span className="block font-medium text-foreground">Professional Reports</span>
                <span className="block text-sm">Detailed PDF & JSON exports</span>
              </>,
              <>
                <span className="block font-medium text-foreground">Grade Classification</span>
                <span className="block text-sm">A, B, C grading with photos</span>
              </>,
            ]}
            href="https://recore.replugit.com/features/diagnostics"
            linkLabel="Available as reCore hardware diagnostics"
            tone="secondary"
          >
            <Caption className="mt-4">Standalone Solution</Caption>
          </Card>

          {/* Warranty Tool */}
          <Card
            icon={<Shield />}
            title="Warranty Management"
            description="Complete warranty lifecycle management from activation to claims processing."
            items={['Automated warranty activation', 'Extended warranty options', 'Claims tracking system']}
            tone="secondary"
          >
            <Caption className="mt-4">Standalone Tool</Caption>
            <p className="mt-1 text-xs text-muted-foreground">Can integrate with Platform Suite</p>
          </Card>

          {/* BestBuy Repricer */}
          <Card
            icon={<TrendingUp />}
            title="BestBuy Repricer"
            description="Automated competitive pricing and Buy Box optimization for BestBuy marketplace."
            items={['24/7 automated repricing', 'Buy Box optimization', 'Competitive analytics']}
            tone="secondary"
          >
            <Caption className="mt-4">Standalone Tool</Caption>
            <p className="mt-1 text-xs text-muted-foreground">Can integrate with Platform Suite</p>
          </Card>
        </Grid>
      </Section>

      {/* Call to Action */}
      <Section wide>
        <div className="text-center mb-6">
          <Eyebrow icon={<Zap className="w-3.5 h-3.5" />}>Transform Your Business Today</Eyebrow>
        </div>
        <DarkPanel
          title={
            <>
              Ready to Scale Your
              <br />
              <span className="text-primary-foreground/50">Electronics Business?</span>
            </>
          }
          description="Choose individual tools for specific needs, or leverage our complete platform for end-to-end management."
        >
          {/* Contact Information */}
          <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-base font-semibold mb-2">Get Started Today</h3>
            <p className="text-[15px] text-primary-foreground/70 mb-3">Ready to discuss your specific needs? Contact us directly:</p>
            <div className="flex items-center justify-center gap-2 mb-3">
              <Mail className="w-4 h-4 text-accent" />
              <a href="mailto:hello@replugit.com" className="font-medium text-accent hover:underline underline-offset-4">
                hello@replugit.com
              </a>
            </div>
            <p className="text-xs text-primary-foreground/50">
              Please include a clear subject line describing your interest (e.g., &quot;Platform Demo Request&quot; or &quot;QC Tool Inquiry&quot;)
            </p>
          </div>
        </DarkPanel>

        <Grid cols={2} className="mt-4">
          <Card
            icon={<Package />}
            title="Complete Platform Suite"
            description="End-to-end automation for serious electronics businesses ready to scale rapidly"
            items={['All 9 tools fully integrated', 'Dedicated success manager', 'White-glove implementation', 'Priority support & training']}
          />

          <Card
            icon={<Target />}
            title="Individual Tools"
            description="Purpose-built solutions for specific challenges with easy integration options"
            items={['Start with what you need most', 'Fast 2-week implementation', 'Flexible month-to-month pricing', 'Easy upgrade to full platform']}
            tone="secondary"
          >
            <p className="mt-4 text-sm font-medium text-accent">Perfect for testing our capabilities</p>
          </Card>
        </Grid>

        {/* Hidden for now */}
        {/* <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="group bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-12 py-5 text-lg font-semibold rounded-2xl shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300">
            <span className="flex items-center gap-3">
              <Eye className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Schedule Live Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
          <button className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-12 py-5 text-lg font-semibold rounded-2xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105">
            <span className="flex items-center gap-3">
              <Calculator className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Calculate Your ROI
            </span>
          </button>
        </div> */}

        {/* Trust Indicators */}
      </Section>
    </main>
  )
}
