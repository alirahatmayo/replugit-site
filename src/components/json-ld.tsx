import { SITE_URL } from '@/lib/metadata'

/*
 * Renders a JSON-LD structured-data block. Same shape as reCore's own
 * components/json-ld.tsx, so both sites follow the same convention.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

/** Home > ... > this page. `path` is relative (with slashes), e.g. "/data-wiping/". */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

/** For pages that describe a real service Replugit performs (not the reCore software itself). */
export function serviceSchema({ name, description, path }: { name: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'Replugit',
      url: SITE_URL,
    },
    areaServed: 'CA',
    url: `${SITE_URL}${path}`,
  }
}

/** Only use with question/answer text that already exists on the page, verbatim or near-verbatim. */
export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}
