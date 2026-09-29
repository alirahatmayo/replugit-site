import type { Metadata } from 'next'

/*
 * One place for the site's SEO identity, reused by every page's metadata
 * export and by the structured-data builders in components/json-ld.tsx.
 * Keeps title/description/canonical/OG/Twitter in sync without repeating
 * the same six fields on every route.
 */
export const SITE_URL = 'https://www.replugit.com'
export const SITE_NAME = 'Replugit'
export const DEFAULT_OG_IMAGE = '/opengraph.png'
export const DEFAULT_OG_IMAGE_SIZE = { width: 1200, height: 630 }

interface PageMetaOptions {
  /** Page-specific title, without the " | Replugit" suffix. */
  title: string
  description: string
  /** URL path including leading and trailing slash, e.g. "/data-wiping/". Use "/" for home. */
  path: string
  /**
   * Set when this page's canonical points somewhere else: a full absolute
   * URL, either another page on this site (duplicate content) or an
   * external one (a redirect page). Defaults to this page's own URL.
   */
  canonicalUrl?: string
  /** Ask search engines not to index this page (it still renders normally for visitors). */
  noindex?: boolean
  /** Home page only: use the title as-is, without the " | Replugit" suffix. */
  noSuffix?: boolean
}

export function pageMetadata({ title, description, path, canonicalUrl, noindex, noSuffix }: PageMetaOptions): Metadata {
  const fullTitle = noSuffix ? title : `${title} | ${SITE_NAME}`
  const canonical = canonicalUrl ?? `${SITE_URL}${path}`
  const ownUrl = `${SITE_URL}${path}`
  return {
    title: fullTitle,
    description,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: ownUrl,
      siteName: SITE_NAME,
      images: [{ url: DEFAULT_OG_IMAGE, ...DEFAULT_OG_IMAGE_SIZE, alt: fullTitle }],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  }
}
