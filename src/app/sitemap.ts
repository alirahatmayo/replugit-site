import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/metadata'

/*
 * Static export needs this; without it Next tries to generate the sitemap
 * at request time, which a static host can't do. Mirrors reCore's own
 * sitemap.ts.
 *
 * Deliberately excluded: /blog (redirects off-site), /test (smoke test,
 * noindex), the three /services/* stubs (noindex, canonical elsewhere) and
 * /thank-you (transactional, noindex). A sitemap should only list pages we
 * actually want indexed.
 */
export const dynamic = 'force-static'

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/services/', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/platform/', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/refurbishing/', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/data-wiping/', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/qc-auditing/', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/wholesale/', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/device-refurbishment/', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/prep-services/', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/environmental-reporting/', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/environmental-impact/', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/warranty/', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/bestbuy-repricer/', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/sustainability/', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/about/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/contact/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/privacy/', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms/', priority: 0.3, changeFrequency: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
