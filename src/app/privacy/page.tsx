import { Metadata } from 'next'
import { PageHero, Section, Prose, Checklist } from '@/components/shared/ui'

export const metadata: Metadata = {
  title: 'Privacy Policy | Replugit',
  description: 'Replugit privacy policy and data protection practices for our electronics refurbishment services.',
}

const h2 = 'text-lg font-semibold text-foreground mt-8 mb-2'

export default function PrivacyPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <main className="min-h-screen">
      <PageHero title="Privacy Policy" description={`Last updated: ${lastUpdated}`} />

      <Section>
        <Prose>
          <h2 className={h2}>Information We Collect</h2>
          <p>At Replugit, we collect information to provide better services to our users and clients. This includes:</p>
          <Checklist
            items={[
              'Contact information (name, email, phone number)',
              'Business information for wholesale clients',
              'Device information for refurbishment services',
              'Usage data to improve our platform',
            ]}
          />

          <h2 className={h2}>Data Security</h2>
          <p>We implement industry-standard security measures to protect your information:</p>
          <Checklist
            items={[
              'Secure data wiping for all refurbished devices',
              'Encrypted data transmission and storage',
              'Regular security audits and updates',
              'Limited access to personal information',
            ]}
          />

          <h2 className={h2}>How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <Checklist
            items={[
              'Provide refurbishment and quality assurance services',
              'Communicate about your orders and services',
              'Improve our platform and services',
              'Generate environmental impact reports',
            ]}
          />

          <h2 className={h2}>Data Retention</h2>
          <p>
            We retain personal information only as long as necessary to provide our services and comply with legal obligations. Device data is permanently wiped using
            industry-standard methods.
          </p>

          <h2 className={h2}>Your Rights</h2>
          <p>You have the right to:</p>
          <Checklist items={['Access your personal information', 'Correct or update your information', 'Request deletion of your data', 'Opt-out of marketing communications']} />

          <h2 className={h2}>Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us:</p>
          <div className="rounded-2xl bg-surface p-6 space-y-2">
            <p>
              <strong className="text-foreground">Email:</strong> privacy@replugit.com
            </p>
            <p>
              <strong className="text-foreground">Phone:</strong> +1 (548) 503-5000
            </p>
            <p>
              <strong className="text-foreground">Address:</strong> Replugit Privacy Officer, [Your Business Address]
            </p>
          </div>
        </Prose>
      </Section>
    </main>
  )
}
