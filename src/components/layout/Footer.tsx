import { Linkedin, MessageCircle } from 'lucide-react'
import { RECORE_URL } from '@/data/recore'

/*
 * Dark footer in reCore's style. Every page on the site is linked from here,
 * including the service pages that are no longer in the nav, so all of them
 * stay reachable and crawlable.
 */
type FooterLink = { label: string; href: string; external?: boolean }

const NAV: { heading: string; links: FooterLink[] }[] = [
  {
    heading: 'Company',
    links: [
      { label: 'Platform', href: '/platform' },
      { label: 'Services', href: '/services' },
      { label: 'Wholesale', href: '/wholesale' },
      { label: 'Warranty', href: '/warranty' },
      { label: 'Sustainability', href: '/sustainability' },
      { label: 'About', href: '/about' },
    ],
  },
  {
    heading: 'Software',
    links: [
      { label: 'reCore ITAD Platform', href: RECORE_URL },
      { label: 'Data Wiping Software', href: `${RECORE_URL}/features/data-wipe` },
      { label: 'Hardware Diagnostics', href: `${RECORE_URL}/features/diagnostics` },
      { label: 'Cosmetic Grading', href: `${RECORE_URL}/features/grading` },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Refurbishing', href: '/refurbishing' },
      { label: 'Device Refurbishment', href: '/device-refurbishment' },
      { label: 'QC and Auditing', href: '/qc-auditing' },
      { label: 'Data Wiping', href: '/data-wiping' },
      { label: 'Prep Services', href: '/prep-services' },
      { label: 'Environmental Reporting', href: '/environmental-reporting' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Environmental Impact', href: '/environmental-impact' },
      { label: 'BestBuy Repricer', href: '/bestbuy-repricer' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
  {
    heading: 'Contact',
    links: [
      { label: 'hello@replugit.com', href: 'mailto:hello@replugit.com' },
      { label: '+1 (548) 503-5000', href: 'tel:+15485035000' },
      { label: 'Contact form', href: '/contact' },
      { label: 'LinkedIn', href: 'https://linkedin.com/company/replugit', external: true },
    ],
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative mt-24 mx-2.5 max-[850px]:mx-0">
      <div className="bg-zinc-950 rounded-tr-[3rem] rounded-tl-[3rem] pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          {/* Top row: brand + nav */}
          <div className="flex items-start justify-between gap-16 max-[850px]:flex-col max-[850px]:gap-12">
            <div className="shrink-0 max-w-[220px] max-[850px]:max-w-none">
              <a href="/" className="text-xl font-semibold tracking-tight">
                <span className="text-accent">Re</span>
                <span className="text-zinc-100">plugit</span>
              </a>
              <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
                Transforming electronics lifecycle through expert refurbishment, quality assurance, and transparent environmental impact.
              </p>
              <p className="mt-3 text-[11px] text-zinc-600 font-mono tracking-wide">
                Mon-Fri 9AM-6PM EST
              </p>
            </div>

            <nav className="flex flex-wrap gap-x-12 gap-y-10 max-[850px]:gap-x-10">
              {NAV.map((col) => (
                <div key={col.heading}>
                  <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-5">{col.heading}</h3>
                  <ul className="space-y-3.5">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors whitespace-nowrap"
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          {/* Bottom bar */}
          <div className="mt-20 pt-8 border-t border-white/10 flex items-center justify-between gap-6 max-[600px]:flex-col max-[600px]:items-start">
            <p className="text-sm text-zinc-600">
              &copy; {currentYear} Replugit. Transforming technology sustainably.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/company/replugit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-zinc-600 hover:text-zinc-200 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://chat.whatsapp.com/KdPqKlFB1eS6AO3I5mConi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-zinc-600 hover:text-zinc-200 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
