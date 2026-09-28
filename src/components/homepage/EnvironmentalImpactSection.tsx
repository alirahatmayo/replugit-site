'use client'

import { useState, useRef, useEffect } from 'react'
import { Droplets, Leaf, Trash2, Zap, Globe, Smartphone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Eyebrow } from '@/components/shared/ui'

/*
 * Homepage environmental section. Same figures and copy as before; the
 * counters still animate in when the section scrolls into view.
 */
const monthlyImpacts = {
  devicesRefurbished: 2500,
  waterSaved: 31000000, // Liters
  carbonReduced: 750000, // kg CO2
  wasteAverted: 38750, // kg e-waste
  energySaved: 5250000, // kWh
}

type Key = keyof typeof monthlyImpacts

const metrics: { key: Key; title: string; subtitle: string; unit: string; equivalent: string; note: string; icon: LucideIcon }[] = [
  {
    key: 'waterSaved',
    title: 'Water Saved',
    subtitle: 'Manufacturing reduction',
    unit: 'L',
    equivalent: '= Clean water for 31,000 people daily',
    note: 'Each laptop manufacturing requires 12,400L of water. Every refurbished device protects these precious resources.',
    icon: Droplets,
  },
  {
    key: 'carbonReduced',
    title: 'CO₂ Reduced',
    subtitle: 'Carbon footprint',
    unit: 'kg',
    equivalent: '= 34,000 trees planted',
    note: 'Each laptop manufacturing produces 300kg CO₂. Refurbishing reduces this carbon footprint significantly.',
    icon: Leaf,
  },
  {
    key: 'wasteAverted',
    title: 'Waste Prevented',
    subtitle: 'E-waste reduction',
    unit: 'kg',
    equivalent: '= 25 cars worth',
    note: 'Each laptop manufacturing creates 15.5kg toxic waste. Refurbishing keeps this out of landfills.',
    icon: Trash2,
  },
  {
    key: 'energySaved',
    title: 'Energy Saved',
    subtitle: 'Manufacturing power',
    unit: 'kWh',
    equivalent: '= 4,800 homes/month',
    note: 'Each laptop manufacturing consumes 1,020kWh energy. Refurbishing conserves this industrial power demand.',
    icon: Zap,
  },
]

const formatNumber = (num: number) => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
  if (num >= 1000) return (num / 1000).toFixed(0) + 'K'
  return num.toLocaleString()
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
        }, 2500 / steps)
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

  const value = (key: Key) => Math.floor(monthlyImpacts[key] * progress)

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
          <p className="mt-3 text-base text-muted-foreground leading-[1.75]">Real-time environmental benefits from our refurbishment operations</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Headline metric */}
          <div className="rounded-3xl bg-primary text-primary-foreground p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold">Devices Transformed</h3>
              <div className="font-mono text-5xl font-semibold tracking-tight mt-2">{formatNumber(value('devicesRefurbished'))}</div>
              <p className="text-sm text-primary-foreground/60 mt-1">Monthly Refurbishments</p>
              <p className="text-xs text-primary-foreground/50 mt-4 leading-relaxed">
                Each refurbished device prevents new manufacturing, saving resources and reducing environmental impact.
              </p>
            </div>
            <div className="mt-8">
              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                <div className="bg-accent h-1.5 rounded-full transition-[width] duration-[2000ms] ease-out" style={{ width: `${85 * progress}%` }} />
              </div>
              <p className="text-xs text-primary-foreground/50 mt-2 font-mono">85% of monthly target</p>
            </div>
          </div>

          {/* Metric grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                </div>
                <p className="text-xs text-accent mt-1 mb-2">{m.equivalent}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{m.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
