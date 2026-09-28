import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowRight, ArrowDownRight } from 'lucide-react'

/*
 * Page building blocks in reCore's visual language. Every page on this site
 * is composed from these so the look stays consistent and lives in one file.
 * These are server components: no hooks, no browser APIs.
 */

const isExternal = (href: string) => href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')

/** Small pill label, used above headings and in heroes. */
export function Eyebrow({ children, icon }: { children: ReactNode; icon?: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold text-accent">
      {icon}
      {children}
    </span>
  )
}

/** Uppercase mono caption, reCore's "eyebrow" above section headings. */
export function Caption({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span className={`block text-[11px] font-bold tracking-widest uppercase text-muted-foreground/60 font-mono ${className}`}>
      {children}
    </span>
  )
}

type ButtonVariant = 'primary' | 'accent' | 'outline' | 'link'

/** Link styled as a button. `primary` is the near-black reCore button. */
export function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  arrow = true,
}: {
  href: string
  children: ReactNode
  variant?: ButtonVariant
  size?: 'sm' | 'md' | 'lg'
  className?: string
  arrow?: boolean
}) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  }
  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-foreground text-background hover:bg-foreground/90',
    accent: 'bg-accent text-white hover:bg-accent/90',
    outline: 'border border-border bg-background text-foreground hover:bg-muted',
    link: 'text-accent hover:underline underline-offset-4 px-0 py-0',
  }
  const cls = `group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors ${variant === 'link' ? '' : sizes[size]} ${variants[variant]} ${className}`
  const Arrow = variant === 'link' ? ArrowRight : ArrowDownRight
  const inner = (
    <>
      {children}
      {arrow && <Arrow className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-45" />}
    </>
  )
  if (isExternal(href)) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  )
}

/** Page hero, left-aligned like reCore's feature pages. */
export function PageHero({
  badge,
  icon,
  title,
  titleMuted,
  description,
  children,
  align = 'left',
}: {
  badge?: string
  icon?: ReactNode
  title: ReactNode
  titleMuted?: ReactNode
  description?: ReactNode
  children?: ReactNode
  align?: 'left' | 'center'
}) {
  const center = align === 'center'
  return (
    <section className={`pt-20 pb-10 max-[850px]:pt-12 max-[850px]:pb-6 ${center ? 'text-center' : ''}`}>
      <div className={`${center ? 'max-w-3xl' : 'max-w-3xl'} mx-auto px-6`}>
        {badge && (
          <div className="mb-6 hero-blur-in">
            <Eyebrow icon={icon}>{badge}</Eyebrow>
          </div>
        )}
        <h1 className="text-5xl max-[850px]:text-3xl font-medium tracking-tight leading-[1.15] mb-5 hero-blur-in delay-1">
          {title}
          {titleMuted && (
            <>
              <br />
              <span className="text-muted-foreground/50">{titleMuted}</span>
            </>
          )}
        </h1>
        {description && (
          <p className={`text-base text-muted-foreground leading-[1.75] hero-blur-in delay-2 ${center ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
            {description}
          </p>
        )}
        {children && <div className={`mt-8 flex flex-wrap gap-3 hero-blur-in delay-3 ${center ? 'justify-center' : ''}`}>{children}</div>}
      </div>
    </section>
  )
}

/** Content section with optional heading, matching reCore's FeatureSection. */
export function Section({
  id,
  caption,
  title,
  titleMuted,
  subtitle,
  children,
  wide = false,
  align = 'left',
  className = '',
}: {
  id?: string
  caption?: string
  title?: ReactNode
  titleMuted?: ReactNode
  subtitle?: ReactNode
  children: ReactNode
  wide?: boolean
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <section id={id} className={`py-12 max-[850px]:py-8 ${className}`}>
      <div className={`${wide ? 'max-w-5xl' : 'max-w-3xl'} mx-auto px-6`}>
        {title && (
          <div className={`mb-8 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : ''}`}>
            {caption && <Caption className="mb-2">{caption}</Caption>}
            <h2 className="text-[1.6rem] max-[850px]:text-2xl font-semibold tracking-tight text-foreground">
              {title}
              {titleMuted && (
                <>
                  <br />
                  <span className="text-muted-foreground/50">{titleMuted}</span>
                </>
              )}
            </h2>
            {subtitle && <p className="mt-2 text-base text-muted-foreground leading-[1.75]">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

/** Editorial paragraph block. */
export function Prose({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`text-base text-muted-foreground leading-[1.85] space-y-4 ${className}`}>{children}</div>
}

/** Bulleted list with reCore's small accent dot. */
export function Checklist({ items, className = '' }: { items: ReactNode[]; className?: string }) {
  return (
    <ul className={`space-y-1.5 ${className}`}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-[15px] text-muted-foreground leading-[1.7]">
          <span className="w-1 h-1 rounded-full bg-accent mt-2.5 flex-none" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

/** Compact card for grids, matching reCore's FeatureCard. Optional link. */
export function Card({
  title,
  description,
  items,
  icon,
  href,
  linkLabel = 'Learn more',
  tone = 'primary',
  className = '',
  children,
}: {
  title: ReactNode
  description?: ReactNode
  items?: ReactNode[]
  icon?: ReactNode
  href?: string
  linkLabel?: string
  tone?: 'primary' | 'secondary' | 'surface' | 'outline'
  className?: string
  children?: ReactNode
}) {
  const tones = {
    primary: 'bg-card-primary',
    secondary: 'bg-card-secondary',
    surface: 'bg-surface',
    outline: 'bg-background border border-border',
  }
  const body = (
    <>
      {icon && (
        <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center mb-4 text-accent [&>svg]:w-4 [&>svg]:h-4">
          {icon}
        </div>
      )}
      <h3 className="text-base font-semibold mb-1.5">{title}</h3>
      {description && <p className="text-muted-foreground text-[15px] leading-[1.75]">{description}</p>}
      {items && items.length > 0 && <Checklist items={items} className="mt-3" />}
      {children}
      {href && (
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
          {linkLabel}
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      )}
    </>
  )
  const cls = `group flex flex-col rounded-2xl p-6 ${tones[tone]} ${href ? 'transition-shadow hover:shadow-lg hover:shadow-foreground/5' : ''} ${className}`
  if (href) {
    return isExternal(href) ? (
      <a href={href} className={cls}>
        {body}
      </a>
    ) : (
      <Link href={href} className={cls}>
        {body}
      </Link>
    )
  }
  return <div className={cls}>{body}</div>
}

/** Responsive card grid. */
export function Grid({ children, cols = 3, className = '' }: { children: ReactNode; cols?: 2 | 3 | 4; className?: string }) {
  const c = { 2: 'md:grid-cols-2', 3: 'md:grid-cols-2 lg:grid-cols-3', 4: 'md:grid-cols-2 lg:grid-cols-4' }[cols]
  return <div className={`grid grid-cols-1 ${c} gap-4 ${className}`}>{children}</div>
}

/** Inline stat row with mono numerals, matching reCore's StatRow. */
export function StatRow({ stats }: { stats: { value: ReactNode; label: ReactNode }[] }) {
  return (
    <div className="flex flex-wrap gap-x-10 gap-y-4 py-8 border-y border-border/40">
      {stats.map((s, i) => (
        <div key={i}>
          <span className="font-mono text-2xl font-semibold tracking-tight text-foreground">{s.value}</span>
          <span className="text-[15px] text-muted-foreground ml-2">{s.label}</span>
        </div>
      ))}
    </div>
  )
}

/** Dark rounded panel for callouts and closing calls to action. */
export function DarkPanel({
  title,
  description,
  children,
  align = 'center',
  className = '',
}: {
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
  align?: 'left' | 'center'
  className?: string
}) {
  const center = align === 'center'
  return (
    <div className={`relative overflow-hidden rounded-3xl bg-primary text-primary-foreground px-10 py-14 max-[850px]:px-6 max-[850px]:py-10 ${center ? 'text-center' : ''} ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/20 blur-xl scale-125 pointer-events-none" />
      <div className={`relative z-10 ${center ? 'flex flex-col items-center' : ''}`}>
        <h2 className={`text-3xl max-[850px]:text-2xl font-medium tracking-tight ${center ? 'max-w-2xl' : ''}`}>{title}</h2>
        {description && (
          <p className={`mt-4 text-base text-primary-foreground/70 leading-[1.75] ${center ? 'max-w-2xl' : 'max-w-2xl'}`}>{description}</p>
        )}
        {children && <div className={`mt-8 flex flex-wrap gap-3 ${center ? 'justify-center' : ''}`}>{children}</div>}
      </div>
    </div>
  )
}

/** Closing call to action used at the bottom of most pages. */
export function CTASection({
  title,
  description,
  primary,
  secondary,
}: {
  title: ReactNode
  description?: ReactNode
  primary: { label: string; href: string }
  secondary?: { label: string; href: string }
}) {
  return (
    <Section wide>
      <DarkPanel title={title} description={description}>
        <Button href={primary.href} variant="accent" size="lg">
          {primary.label}
        </Button>
        {secondary && (
          <Button href={secondary.href} variant="outline" size="lg" className="border-white/20 bg-transparent text-primary-foreground hover:bg-white/10">
            {secondary.label}
          </Button>
        )}
      </DarkPanel>
    </Section>
  )
}

/** Simple "notice" strip, used where the old site had amber alerts. */
export function Notice({ icon, title, children }: { icon?: ReactNode; title: ReactNode; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 flex items-start gap-4">
      {icon && <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-none [&>svg]:w-4 [&>svg]:h-4">{icon}</div>}
      <div>
        <h3 className="text-base font-semibold mb-1.5">{title}</h3>
        <div className="text-[15px] text-muted-foreground leading-[1.75]">{children}</div>
      </div>
    </div>
  )
}
