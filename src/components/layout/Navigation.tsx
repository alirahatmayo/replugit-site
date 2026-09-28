'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ArrowDownRight, Award, DollarSign, Shield, ClipboardCheck, Archive, BarChart3 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { RECORE_URL, recoreFeatures, recorePlatform } from '@/data/recore'

type MenuItem = { title: string; description: string; href: string; icon: LucideIcon }

/*
 * Services is reCore: the menu lists what reCore offers, sourced from
 * src/data/recore.ts so the nav and the /services page stay in step.
 */
const servicesGroups: { heading: string; items: MenuItem[] }[] = [
  { heading: 'Features', items: recoreFeatures },
  { heading: 'Platform', items: recorePlatform },
]

const solutionsItems: MenuItem[] = [
  { title: 'Warranty Program', description: 'Extended warranty coverage', href: '/warranty', icon: Award },
  { title: 'BestBuy Repricer', description: 'Automated pricing optimization', href: '/bestbuy-repricer', icon: DollarSign },
  { title: 'reCore ITAD Software', description: 'Data wiping, diagnostics and grading platform', href: RECORE_URL, icon: Shield },
  { title: 'QC Platform', description: 'Quality control management tools', href: '/platform', icon: ClipboardCheck },
  { title: 'Inventory Management', description: 'Smart inventory tracking system', href: '/platform#inventory', icon: Archive },
  { title: 'Business Dashboard', description: 'Comprehensive business analytics', href: '/platform#dashboard', icon: BarChart3 },
]

const isExternal = (href: string) => href.startsWith('http')

/*
 * Every dropdown panel is always in the DOM and only hidden with CSS, so the
 * links inside exist in the static HTML that crawlers read. Hover (via
 * group-hover) or click opens them.
 */
function MenuLink({ item, onClick }: { item: MenuItem; onClick: () => void }) {
  const Icon = item.icon
  const cls = 'flex items-start gap-3 p-2 rounded-xl hover:bg-muted/50 border border-transparent hover:border-border/50 transition-all group/item'
  const inner = (
    <>
      <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-none mt-0.5 group-hover/item:bg-accent transition-colors">
        <Icon className="w-4 h-4 text-accent group-hover/item:text-white transition-colors" />
      </div>
      <div>
        <div className="text-sm font-semibold text-foreground group-hover/item:text-accent transition-colors">{item.title}</div>
        <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.description}</div>
      </div>
    </>
  )
  return isExternal(item.href) ? (
    <a href={item.href} className={cls} onClick={onClick}>{inner}</a>
  ) : (
    <Link href={item.href} className={cls} onClick={onClick}>{inner}</Link>
  )
}

function MobileMenuLink({ item, onClick }: { item: MenuItem; onClick: () => void }) {
  const Icon = item.icon
  const cls = 'flex items-center gap-3.5 px-4 py-2.5 rounded-xl hover:bg-foreground/5'
  const inner = (
    <>
      <Icon className="w-4 h-4 text-accent flex-none" />
      <div>
        <div className="text-sm font-semibold text-foreground">{item.title}</div>
        <div className="text-xs text-muted-foreground">{item.description}</div>
      </div>
    </>
  )
  return isExternal(item.href) ? (
    <a href={item.href} className={cls} onClick={onClick}>{inner}</a>
  ) : (
    <Link href={item.href} className={cls} onClick={onClick}>{inner}</Link>
  )
}

function PanelFooterLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  const cls = 'flex items-center justify-between px-3 py-1.5 rounded-xl hover:bg-muted/40 transition-colors group/footer'
  const inner = (
    <>
      <span className="text-xs font-semibold text-foreground group-hover/footer:text-accent transition-colors">{children}</span>
      <ArrowDownRight className="w-3.5 h-3.5 text-muted-foreground group-hover/footer:text-accent group-hover/footer:-rotate-45 transition-all" />
    </>
  )
  return isExternal(href) ? (
    <a href={href} className={cls} onClick={onClick}>{inner}</a>
  ) : (
    <Link href={href} className={cls} onClick={onClick}>{inner}</Link>
  )
}

export default function Navigation() {
  const [open, setOpen] = useState<'services' | 'solutions' | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<'services' | 'solutions' | null>(null)
  const pathname = usePathname()
  // Short grace period so moving from the button into the panel does not close it
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const openPanel = (key: 'services' | 'solutions') => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(key)
  }
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpen(null), 200)
  }
  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current) }, [])

  // Close everything on route change
  useEffect(() => {
    setOpen(null)
    setMobileOpen(false)
  }, [pathname])

  // Keep the page from scrolling behind the open mobile menu
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))
  const closeAll = () => {
    setOpen(null)
    setMobileOpen(false)
  }

  const topLink = (href: string) =>
    `px-3 py-2 text-sm font-medium rounded-full transition-colors hover:bg-foreground/5 ${
      isActive(href) ? 'text-accent' : 'text-foreground hover:text-accent'
    }`

  const wrapCls = (key: 'services' | 'solutions', width: string) =>
    `absolute top-full left-0 pt-2 ${width} ${
      open === key ? 'pointer-events-auto' : 'pointer-events-none group-hover:pointer-events-auto'
    }`

  const panelCls = (key: 'services' | 'solutions') =>
    `rounded-2xl bg-background/95 backdrop-blur-xl border border-border/80 shadow-2xl p-3 transition-all duration-200 origin-top ${
      open === key
        ? 'opacity-100 scale-100'
        : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'
    }`

  return (
    <header
      className={
        'fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl z-[9998] bg-frame rounded-b-4xl px-6 h-18 flex items-center justify-between shadow-sm ' +
        'max-[850px]:left-0 max-[850px]:translate-x-0 max-[850px]:rounded-none max-[850px]:rounded-b-3xl max-[850px]:px-4'
      }
    >
      {/* Wordmark */}
      <Link href="/" className="flex items-center ml-2 max-[850px]:ml-0 text-xl font-semibold tracking-tight" onClick={closeAll}>
        <span className="text-accent">Re</span>
        <span className="text-foreground">plugit</span>
      </Link>

      {/* Desktop nav */}
      <nav className="flex items-center gap-1 max-[850px]:hidden">
        {/* Services (reCore) */}
        <div className="relative group" onMouseEnter={() => openPanel('services')} onMouseLeave={scheduleClose}>
          <button
            type="button"
            className={`flex items-center gap-1.5 ${topLink('/services')}`}
            aria-expanded={open === 'services'}
            onClick={() => setOpen(open === 'services' ? null : 'services')}
          >
            Services
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 ${open === 'services' ? 'rotate-180' : ''}`} />
          </button>
          <div className={wrapCls('services', 'w-[640px]')}>
          <div className={panelCls('services')}>
            <div className="grid grid-cols-2 gap-x-2">
              {servicesGroups.map((group) => (
                <div key={group.heading}>
                  <div className="px-2 pt-1 pb-2 text-[11px] font-bold tracking-widest uppercase text-muted-foreground/60 font-mono">{group.heading}</div>
                  <div className="flex flex-col gap-0.5">
                    {group.items.map((item) => (
                      <MenuLink key={item.href} item={item} onClick={closeAll} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 pt-2 border-t border-border/60 grid grid-cols-2 gap-x-2">
              <PanelFooterLink href="/services" onClick={closeAll}>All services</PanelFooterLink>
              <PanelFooterLink href={RECORE_URL} onClick={closeAll}>Visit recore.replugit.com</PanelFooterLink>
            </div>
          </div>
          </div>
        </div>

        {/* Solutions */}
        <div className="relative group" onMouseEnter={() => openPanel('solutions')} onMouseLeave={scheduleClose}>
          <button
            type="button"
            className={`flex items-center gap-1.5 ${topLink('/platform')}`}
            aria-expanded={open === 'solutions'}
            onClick={() => setOpen(open === 'solutions' ? null : 'solutions')}
          >
            Solutions
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 ${open === 'solutions' ? 'rotate-180' : ''}`} />
          </button>
          <div className={wrapCls('solutions', 'w-[370px]')}>
          <div className={panelCls('solutions')}>
            <div className="flex flex-col gap-0.5">
              {solutionsItems.map((item) => (
                <MenuLink key={item.href} item={item} onClick={closeAll} />
              ))}
            </div>
            <div className="mt-2 pt-2 border-t border-border/60">
              <PanelFooterLink href="/platform" onClick={closeAll}>Explore the QC platform</PanelFooterLink>
            </div>
          </div>
          </div>
        </div>

        <Link href="/sustainability" className={topLink('/sustainability')}>
          Sustainability
        </Link>
      </nav>

      {/* Desktop actions */}
      <div className="flex items-center gap-4 max-[850px]:hidden">
        <Link href="/wholesale" className="text-sm font-medium text-foreground hover:text-accent transition-colors whitespace-nowrap">
          Wholesale Catalog
        </Link>
        <Link href="/contact" className="group relative inline-flex items-center">
          <span className="absolute right-0 inset-y-0 w-[calc(100%-1.5rem)] rounded-xl bg-accent"></span>
          <span className="relative z-10 px-5 py-2.5 rounded-xl bg-foreground text-background text-sm font-semibold whitespace-nowrap transition-transform group-hover:scale-[1.02]">
            Contact Us
          </span>
          <span className="relative -left-px z-10 w-10 h-10 rounded-xl flex items-center justify-center text-accent-foreground">
            <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-45" />
          </span>
        </Link>
      </div>

      {/* Mobile: contact button + burger */}
      <div className="hidden max-[850px]:flex items-center gap-2">
        <Link href="/contact" className="px-4 py-2 rounded-xl bg-foreground text-background text-sm font-semibold" onClick={closeAll}>
          Contact
        </Link>
        <button
          type="button"
          className="flex items-center justify-center w-10 h-10"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className="w-7 h-4 relative flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-foreground rounded-full transition-transform duration-200 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-foreground rounded-full transition-transform duration-200 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile menu, always rendered, shown with CSS */}
      <div
        className={`absolute top-full left-0 right-0 bg-frame border-t border-border rounded-b-3xl shadow-2xl p-5 transition-all duration-300 origin-top hidden max-[850px]:block max-h-[85vh] overflow-y-auto ${
          mobileOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-1 mb-4">
          {/* Services accordion */}
          <button
            type="button"
            className="flex items-center justify-between w-full px-4 py-3 rounded-xl hover:bg-foreground/5 text-left"
            aria-expanded={mobileSection === 'services'}
            onClick={() => setMobileSection(mobileSection === 'services' ? null : 'services')}
          >
            <span className="text-base font-medium text-foreground">Services</span>
            <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${mobileSection === 'services' ? 'rotate-180' : ''}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${mobileSection === 'services' ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="pl-3 pb-1 flex flex-col gap-1">
              {servicesGroups.map((group) => (
                <div key={group.heading}>
                  <div className="px-4 pt-2 pb-1 text-[11px] font-bold tracking-widest uppercase text-muted-foreground/60 font-mono">{group.heading}</div>
                  {group.items.map((item) => (
                    <MobileMenuLink key={item.href} item={item} onClick={closeAll} />
                  ))}
                </div>
              ))}
              <Link href="/services" className="px-4 py-2 text-xs font-semibold text-accent hover:underline" onClick={closeAll}>
                All services
              </Link>
            </div>
          </div>

          {/* Solutions accordion */}
          <button
            type="button"
            className="flex items-center justify-between w-full px-4 py-3 rounded-xl hover:bg-foreground/5 text-left"
            aria-expanded={mobileSection === 'solutions'}
            onClick={() => setMobileSection(mobileSection === 'solutions' ? null : 'solutions')}
          >
            <span className="text-base font-medium text-foreground">Solutions</span>
            <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${mobileSection === 'solutions' ? 'rotate-180' : ''}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${mobileSection === 'solutions' ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="pl-3 pb-1 flex flex-col gap-1">
              {solutionsItems.map((item) => (
                <MobileMenuLink key={item.href} item={item} onClick={closeAll} />
              ))}
            </div>
          </div>

          <Link href="/sustainability" className="px-4 py-3 text-base font-medium text-foreground rounded-xl hover:bg-foreground/5" onClick={closeAll}>
            Sustainability
          </Link>
        </nav>
        <div className="flex flex-col gap-3 pt-4 border-t border-border">
          <Link href="/wholesale" className="text-sm font-medium text-center text-foreground py-2" onClick={closeAll}>
            Wholesale Catalog
          </Link>
          <Link href="/contact" className="flex items-center justify-center gap-2 px-6 py-3.5 bg-foreground text-background rounded-xl text-sm font-semibold" onClick={closeAll}>
            Contact Us <ArrowDownRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Frame curves that join the bar to the page frame */}
      <svg className="absolute top-0 -left-[49px] rotate-180 text-frame pointer-events-none max-[850px]:hidden" width="50" height="50" viewBox="0 0 50 50" fill="none">
        <path d="M5.50871e-06 0C-0.00788227 37.3001 8.99616 50.0116 50 50H5.50871e-06V0Z" fill="currentColor"></path>
      </svg>
      <svg className="absolute top-0 -right-[49px] rotate-90 text-frame pointer-events-none max-[850px]:hidden" width="50" height="50" viewBox="0 0 50 50" fill="none">
        <path d="M5.50871e-06 0C-0.00788227 37.3001 8.99616 50.0116 50 50H5.50871e-06V0Z" fill="currentColor"></path>
      </svg>
    </header>
  )
}
