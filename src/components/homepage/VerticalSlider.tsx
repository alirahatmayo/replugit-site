'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { WholesaleIcon, RefurbishingIcon, SoftwareIcon, QualityIcon, EnvironmentalIcon } from './MenuIcons'
import { Caption, Checklist } from '@/components/shared/ui'

/*
 * "Our Solutions": tabs on desktop, a swipeable card rail on phones.
 * Same five solutions and copy as before, restyled to reCore's tokens.
 */
const solutions = [
  {
    title: 'Wholesale Distribution',
    subtitle: 'Bulk Electronics Supply',
    description:
      'Access our extensive inventory of wholesale electronics with competitive pricing and reliable shipping. Perfect for retailers, resellers, and distributors looking for reliable supply chains.',
    features: ['Hundreds of units in stock', 'Volume discounts available', 'Reliable shipping network', 'Quality assured products', 'Dedicated account manager'],
    metrics: { value: '1000s', label: 'of Units Monthly' },
    icon: WholesaleIcon,
    link: '/wholesale',
  },
  {
    title: 'Device Refurbishing',
    subtitle: 'Professional Restoration',
    description:
      'Transform your C-Grade electronics into A-Grade quality with our professional refurbishing services. Complete testing, certification, and warranty included.',
    features: ['C-Grade to A-Grade transformation', '6-day turnaround time', 'Comprehensive testing', 'Warranty coverage', 'Environmental compliance'],
    metrics: { value: 'A-Grade', label: 'Quality Standard' },
    icon: RefurbishingIcon,
    link: '/refurbishing',
  },
  {
    title: 'Software Platform',
    subtitle: 'Business Management Suite',
    description:
      'Streamline your electronics business with our comprehensive platform. Real-time inventory tracking, order management, and detailed analytics all in one place.',
    features: ['Real-time inventory tracking', 'Order management system', 'Advanced analytics dashboard', 'API integrations', '24/7 technical support'],
    metrics: { value: '24/7', label: 'Live Support' },
    icon: SoftwareIcon,
    link: '/platform',
  },
  {
    title: 'Quality Assurance',
    subtitle: 'Testing & Certification',
    description:
      'Ensure your electronics meet the highest standards with our comprehensive testing and certification services. Complete documentation and compliance reporting.',
    features: ['Multi-point inspection', 'Compliance certification', 'Performance testing', 'Documentation package', 'Quality guarantees'],
    metrics: { value: 'Full', label: 'Device Coverage' },
    icon: QualityIcon,
    link: '/qc-auditing',
  },
  {
    title: 'Environmental Impact',
    subtitle: 'Sustainable Electronics',
    description:
      'Join the circular economy movement with our comprehensive e-waste reduction and sustainability initiatives. Every refurbished device prevents toxic waste and reduces carbon footprint.',
    features: ['E-waste reduction programs', 'Carbon footprint tracking', 'Certified disposal methods', 'Sustainability reporting', 'Green certification badges'],
    metrics: { value: 'Circular', label: 'Refurbish First' },
    icon: EnvironmentalIcon,
    link: '/sustainability',
  },
]

export default function VerticalSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = solutions[activeIndex]
  const ActiveIcon = active.icon

  return (
    <section className="py-16 max-[850px]:py-10">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Caption className="mb-2">What we do</Caption>
          <h2 className="text-4xl max-[850px]:text-3xl font-semibold tracking-tight text-foreground">Our Solutions</h2>
          <p className="mt-3 text-base text-muted-foreground leading-[1.75]">Comprehensive electronics solutions designed to grow your business</p>
        </div>

        {/* Desktop: tabs + panel */}
        <div className="hidden md:block">
          <div className="flex flex-wrap justify-center gap-2 mb-6" role="tablist">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              const selected = index === activeIndex
              return (
                <button
                  key={solution.title}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveIndex(index)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                    selected ? 'bg-foreground text-background border-foreground' : 'bg-background text-foreground border-border hover:bg-muted'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="whitespace-nowrap">{solution.title}</span>
                </button>
              )
            })}
          </div>

          <div className="rounded-3xl bg-card-primary p-10 grid grid-cols-5 gap-10">
            <div className="col-span-3">
              <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
                <ActiveIcon className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-foreground">{active.title}</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">{active.subtitle}</p>
              <p className="text-base text-muted-foreground leading-[1.75]">{active.description}</p>
              <Link href={active.link} className="group mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-foreground text-background text-sm font-semibold transition-colors hover:bg-foreground/90">
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="col-span-2 flex flex-col">
              <h4 className="text-[11px] font-bold tracking-widest uppercase text-muted-foreground/60 font-mono mb-3">Key Features</h4>
              <Checklist items={active.features} />
              <div className="mt-auto pt-6 border-t border-border/40">
                <span className="font-mono text-3xl font-semibold tracking-tight text-foreground">{active.metrics.value}</span>
                <span className="text-sm text-muted-foreground ml-2">{active.metrics.label}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Phone: swipeable rail */}
        <div className="md:hidden -mx-6">
          <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2">
            <div className="flex gap-4 px-6 w-max">
              {solutions.map((solution) => {
                const Icon = solution.icon
                return (
                  <div key={solution.title} className="flex-none w-[82vw] max-w-sm snap-center rounded-2xl bg-card-primary p-6 flex flex-col">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-none">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-right">
                        <div className="font-mono text-xl font-semibold tracking-tight text-foreground leading-none">{solution.metrics.value}</div>
                        <div className="text-[11px] text-muted-foreground mt-1">{solution.metrics.label}</div>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground leading-tight">{solution.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5 mb-3">{solution.subtitle}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{solution.description}</p>
                    <h4 className="text-[11px] font-bold tracking-widest uppercase text-muted-foreground/60 font-mono mb-2">Key Features</h4>
                    <Checklist items={solution.features.slice(0, 4)} />
                    <Link href={solution.link} className="mt-5 inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-foreground text-background text-sm font-semibold">
                      Explore {solution.title}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">Swipe to explore solutions</p>
        </div>
      </div>
    </section>
  )
}
