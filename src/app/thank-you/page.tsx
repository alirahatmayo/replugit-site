import { CheckCircle, Home, Phone, Mail } from 'lucide-react'
import { PageHero, Section, Notice, Checklist, Button } from '@/components/shared/ui'
import { pageMetadata } from '@/lib/metadata'
import { JsonLd, breadcrumbSchema } from '@/components/json-ld'

export const metadata = pageMetadata({
  title: "Thank You",
  description: "We've received your message and will get back to you shortly.",
  path: '/thank-you/',
  noindex: true,
})


export default function ThankYouPage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Thank You', path: '/thank-you/' }])} />
      <PageHero title="Thank You!" description="We've received your message and will get back to you shortly." align="center" />

      <Section>
        {/* Info Box */}
        <Notice icon={<CheckCircle />} title="What Happens Next?">
          <Checklist
            className="mt-3"
            items={[
              <>
                Our team will review your inquiry within <strong className="text-foreground">24 hours</strong>
              </>,
              "You'll receive a personalized response via email or phone",
              "We'll discuss how ReplugIT can help transform your business",
            ]}
          />
        </Notice>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mt-8">
          <Button href="/" size="lg">
            <Home className="w-4 h-4" />
            Back to Home
          </Button>
          <Button href="/services" variant="outline" size="lg">
            Explore Services
          </Button>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground mb-4">Need immediate assistance?</p>
          <div className="flex flex-wrap gap-6 justify-center text-sm">
            <Button href="tel:+1234567890" variant="link" arrow={false}>
              <Phone className="w-4 h-4" />
              Call Us
            </Button>
            <Button href="mailto:info@replugit.com" variant="link" arrow={false}>
              <Mail className="w-4 h-4" />
              Email Us
            </Button>
          </div>
        </div>
      </Section>
    </main>
  )
}
