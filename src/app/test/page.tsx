import { PageHero, Section } from '@/components/shared/ui'

/* Smoke test for Tailwind: one swatch per theme token. */
const swatches = [
  { cls: 'bg-background border border-border', label: 'Background' },
  { cls: 'bg-muted', label: 'Muted' },
  { cls: 'bg-surface', label: 'Surface' },
  { cls: 'bg-card-primary', label: 'Card primary' },
  { cls: 'bg-card-secondary', label: 'Card secondary' },
  { cls: 'bg-primary text-primary-foreground', label: 'Primary' },
  { cls: 'bg-accent text-white', label: 'Accent' },
]

export default function TestPage() {
  return (
    <main className="min-h-screen">
      <PageHero title="Replugit Test Page" description="If you can see this page styled with the site's theme tokens, Tailwind is working!" align="center" />
      <Section wide>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {swatches.map((s) => (
            <div key={s.label} className={`${s.cls} p-4 rounded-xl text-sm font-medium`}>
              {s.label}
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}
