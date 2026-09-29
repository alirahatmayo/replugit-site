'use client'

import { useState, useRef, useEffect } from 'react'
import { Droplets, Leaf, Zap, Globe, Recycle } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Eyebrow } from '@/components/shared/ui'

/*
 * Homepage environmental section. Figures match the cited sources on
 * /sustainability#research (Fraunhofer USA & Journal of Industrial Ecology;
 * Water Footprint Network & Journal of Cleaner Production; U.S. EPA &
 * ACEEE), not a claim about Replugit's own volume. The previous version
 * multiplied unsourced per-device guesses by an invented "2,500 devices a
 * month" to produce monthly totals and a fake "85% of monthly target"
 * progress bar; both are gone. There's no sourced per-device toxic-waste
 * figure available, so that metric was dropped rather than guessed.
 */
const perDeviceImpacts = {
  waterSaved: 1900, // Liters, laptop manufacturing water footprint (Water Footprint Network)
  carbonReduced: 300, // kg CO2e, laptop manufacturing footprint (Fraunhofer USA)
  energySaved: 1200, // kWh, laptop embodied manufacturing energy (U.S. EPA / ACEEE)
}

type Key = keyof typeof perDeviceImpacts

const metrics: { key: Key; title: string; subtitle: string; unit: string; note: string; icon: LucideIcon }[] = [
  {
    key: 'waterSaved',
    title: 'Water',
    subtitle: 'Manufacturing footprint',
    unit: 'L',
    note: 'One new laptop takes about 1,900L of water to manufacture. Refurbishing one avoids that.',
    icon: Droplets,
  },
  {
    key: 'carbonReduced',
    title: 'CO₂',
    subtitle: 'Carbon footprint',
    unit: 'kg',
    note: 'Manufacturing one new laptop produces roughly 300kg of CO₂e. Refurbishing sidesteps it.',
    icon: Leaf,
  },
  {
    key: 'energySaved',
    title: 'Energy',
    subtitle: 'Manufacturing power',
    unit: 'kWh',
    note: 'Manufacturing one new laptop takes around 1,200kWh of embodied energy. Refurbishing conserves it.',
    icon: Zap,
  },
]

const formatNumber = (num: number) => {
  if (num >= 1000) return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + 'K'
  return num % 1 === 0 ? num.toLocaleString() : num.toFixed(1)
}

export default function EnvironmentalImpactSection() {
  const [progress, setProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    let timer: ReturnType<typeof setInterval> | null = null
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || timer) return
        const steps = 60
        let step = 0
        timer = setInterval(() => {
          step++
          setProgress(Math.min(1, step / steps))
          if (step >= steps && timer) clearInterval(timer)
        }, 2000 / steps)
        observer.disconnect()
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      if (timer) clearInterval(timer)
    }
  }, [])

  const value = (key: Key) => perDeviceImpacts[key] * progress

  return (
    <section ref={sectionRef} className="py-16 max-[850px]:py-10">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="mb-4">
            <Eyebrow icon={<Globe className="w-3.5 h-3.5" />}>Environmental Impact</Eyebrow>
          </div>
          <h2 className="text-4xl max-[850px]:text-3xl font-semibold tracking-tight text-foreground">
            Our Planet,
            <br />
            <span className="text-muted-foreground/50">Our Impact</span>
          </h2>
          <p className="mt-3 text-base text-muted-foreground leading-[1.75]">What manufacturing one new laptop costs the planet, and what refurbishing one instead avoids</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Headline message: the concept, not an invented company-wide count */}
          <div className="rounded-3xl bg-primary text-primary-foreground p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                <Recycle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold">One Device Refurbished</h3>
              <div className="font-mono text-4xl font-semibold tracking-tight mt-2">= One Less Made</div>
              <p className="text-xs text-primary-foreground/50 mt-4 leading-relaxed">
                Every device we refurbish is one that didn&apos;t need to be manufactured from scratch, with all the water,
                carbon, waste and energy that takes.
              </p>
            </div>
          </div>

          {/* Metric grid: per-device manufacturing footprint avoided, sourced on /sustainability#research */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {metrics.map((m) => (
              <div key={m.key} className="rounded-2xl bg-card-primary p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                    <m.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{m.title}</h4>
                    <p className="text-xs text-muted-foreground">{m.subtitle}</p>
                  </div>
                </div>
                <div className="font-mono text-2xl font-semibold tracking-tight text-foreground">
                  {formatNumber(value(m.key))} {m.unit}
                  <span className="text-xs font-sans font-normal text-muted-foreground"> per device</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mt-2">{m.note}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Figures are published manufacturing-footprint research, not Replugit's own measured totals.{' '}
          <a href="/sustainability#research" className="text-accent hover:underline underline-offset-4">
            See sources
          </a>
          .
        </p>
      </div>
    </section>
  )
}
