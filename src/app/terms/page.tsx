import { Metadata } from 'next'
import { PageHero, Section, Prose, Checklist } from '@/components/shared/ui'

export const metadata: Metadata = {
  title: 'Terms of Service | Replugit',
  description: 'Replugit terms of service for our electronics refurbishment and wholesale services.',
}

const h2 = 'text-lg font-semibold text-foreground mt-8 mb-2'

export default function TermsPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <main className="min-h-screen">
      <PageHero title="Terms of Service" description={`Last updated: ${lastUpdated}`} />

      <Section>
        <Prose>
          <h2 className={h2}>Agreement to Terms</h2>
          <p>
            By accessing and using Replugit's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>

          <h2 className={h2}>Our Services</h2>
          <p>Replugit provides:</p>
          <Checklist
            items={[
              'Electronics refurbishment and quality assurance',
              'Wholesale procurement and distribution',
              'Secure data wiping services',
              'Environmental impact reporting',
              'Platform tools for inventory management',
            ]}
          />

          <h2 className={h2}>Quality Assurance</h2>
          <p>We guarantee:</p>
          <Checklist
            items={[
              'Comprehensive testing of all refurbished devices',
              'Industry-standard quality control processes',
              'Transparent reporting of device conditions',
              'Warranty coverage on refurbished items',
            ]}
          />

          <h2 className={h2}>Data Security</h2>
          <p>All devices undergo secure data wiping using industry-standard methods. We ensure complete data destruction and provide certificates of data wiping when requested.</p>

          <h2 className={h2}>Limitation of Liability</h2>
          <p>
            Replugit's liability is limited to the value of services provided. We are not liable for indirect, incidental, or consequential damages arising from the use of our
            services.
          </p>

          <h2 className={h2}>Warranty</h2>
          <p>We provide warranties on refurbished devices as specified in individual service agreements. Warranty terms vary by device type and condition.</p>

          <h2 className={h2}>Termination</h2>
          <p>Either party may terminate services with appropriate notice as specified in service agreements. All data wiping and quality assurance commitments remain in effect.</p>

          <h2 className={h2}>Changes to Terms</h2>
          <p>We may update these terms periodically. Continued use of our services constitutes acceptance of updated terms.</p>

          <h2 className={h2}>Contact Information</h2>
          <p>For questions about these Terms of Service:</p>
          <div className="rounded-2xl bg-surface p-6 space-y-2">
            <p>
              <strong className="text-foreground">Email:</strong> legal@replugit.com
            </p>
            <p>
              <strong className="text-foreground">Phone:</strong> +1 (548) 503-5000
            </p>
            <p>
              <strong className="text-foreground">Business Hours:</strong> Monday-Friday, 9AM-6PM EST
            </p>
          </div>
        </Prose>
      </Section>
    </main>
  )
}
