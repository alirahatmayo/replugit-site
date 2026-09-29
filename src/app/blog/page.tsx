import { PageHero, Button } from '@/components/shared/ui'
import { RECORE_URL } from '@/data/recore'

/*
 * Replugit has no blog of its own; reCore's blog covers the same ITAD/
 * refurbishing ground with real content. This page redirects visitors and
 * crawlers there via meta refresh (this is a static export, so there is no
 * server-side 301). The cross-domain canonical tells search engines the
 * authoritative URL is reCore's, not this one.
 *
 * Next.js hoists any <meta>/<link>/<title> tag rendered inside a page's JSX
 * into the document <head>, the same mechanism the Metadata API itself
 * uses, so the httpEquiv="refresh" tag below works even though there is no
 * first-class "redirect" field in the Metadata type.
 */
const BLOG_URL = `${RECORE_URL}/blog/`

export const metadata = {
  title: "Blog | Replugit",
  description: "Replugit's blog has moved to reCore, where we write about ITAD, data sanitization and electronics refurbishment.",
  alternates: { canonical: BLOG_URL },
  robots: { index: false, follow: true },
}

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <meta httpEquiv="refresh" content={`0; url=${BLOG_URL}`} />
      <PageHero
        title="Our blog has moved"
        description="Replugit's writing now lives on reCore's blog, where we cover ITAD, data sanitization and electronics refurbishment. You'll be redirected automatically."
        align="center"
      >
        <Button href={BLOG_URL}>Go to reCore's blog</Button>
      </PageHero>
    </main>
  )
}
