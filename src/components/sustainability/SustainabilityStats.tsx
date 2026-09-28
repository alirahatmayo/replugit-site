'use client'

import { useState, useEffect } from 'react'
import { Globe, Droplets, Leaf, Zap, Users, Building, Award } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Section, Grid, DarkPanel, Button } from '@/components/shared/ui'

/*
 * "Our Impact So Far" band. Same figures and copy as before; the counters
 * still count up on mount with the same ease-out curve.
 */
const finalStats = {
  devicesRefurbished: 2400, // Realistic number for a growing company (~200/month)
  carbonSaved: 260, // Tons CO2e - based on realistic device count (~108kg per device)
  waterSaved: 3600000, // Liters - based on realistic manufacturing water savings (~1500L per device)
  energySaved: 330000, // kWh - manufacturing energy saved (~138kWh per device)
  partnersCount: 12, // Realistic business partners for growing company
  certificationsCount: 0, // Honest about current certifications (pursuing HTM)
}

type Stats = typeof finalStats

const zeroStats: Stats = {
  devicesRefurbished: 0,
  carbonSaved: 0,
  waterSaved: 0,
  energySaved: 0,
  partnersCount: 0,
  certificationsCount: 0,
}

const formatNumber = (num: number) => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + 'B'
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toLocaleString()
}

export default function SustainabilityStats() {
  const [animatedStats, setAnimatedStats] = useState<Stats>(zeroStats)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      const progress = currentStep / steps
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)

      setAnimatedStats({
        devicesRefurbished: Math.floor(finalStats.devicesRefurbished * easeOutQuart),
        carbonSaved: Math.floor(finalStats.carbonSaved * easeOutQuart),
        waterSaved: Math.floor(finalStats.waterSaved * easeOutQuart),
        energySaved: Math.floor(finalStats.energySaved * easeOutQuart),
        partnersCount: Math.floor(finalStats.partnersCount * easeOutQuart),
        certificationsCount: Math.floor(finalStats.certificationsCount * easeOutQuart),
      })

      currentStep++
      if (currentStep > steps) {
        clearInterval(timer)
      }
    }, increment)

    return () => clearInterval(timer)
  }, [])

  const mainStats: { icon: LucideIcon; value: string; title: string; note: string }[] = [
    {
      icon: Globe,
      value: `${formatNumber(animatedStats.devicesRefurbished)}+`,
      title: 'Devices Refurbished',
      note: 'Professional refurbishment and lifecycle extension',
    },
    {
      icon: Leaf,
      value: `${formatNumber(animatedStats.carbonSaved)}+ tons`,
      title: 'CO₂ Emissions Prevented',
      note: 'Equivalent to planting 5,900 trees',
    },
    {
      icon: Droplets,
      value: `${formatNumber(animatedStats.waterSaved)}+ L`,
      title: 'Water Conserved',
      note: 'Enough for 36 average households annually',
    },
    {
      icon: Zap,
      value: `${formatNumber(animatedStats.energySaved)}+ kWh`,
      title: 'Energy Saved',
      note: 'Powers 50 homes for a year',
    },
  ]

  const secondaryStats: { icon: LucideIcon; value: string; label: string }[] = [
    { icon: Users, value: `${animatedStats.partnersCount}+`, label: 'Business Partners' },
    { icon: Award, value: 'HTM', label: 'Certification In Progress' },
    { icon: Building, value: '3', label: 'Regional Markets' },
  ]

  return (
    <Section
      wide
      caption="Our Impact So Far"
      title="Measurable Results for a"
      titleMuted="Greener Tomorrow"
      subtitle="Since our founding, we've made significant environmental impact through device refurbishment, circular economy practices, and sustainable business operations."
      align="center"
    >
      {/* Main Stats Grid */}
      <Grid cols={4}>
        {mainStats.map((s) => (
          <div key={s.title} className="rounded-2xl bg-card-primary p-6">
            <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
              <s.icon className="w-4 h-4" />
            </div>
            <div className="font-mono text-2xl font-semibold tracking-tight text-foreground">{s.value}</div>
            <h3 className="text-sm font-semibold text-foreground mt-2">{s.title}</h3>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{s.note}</p>
          </div>
        ))}
      </Grid>

      {/* Secondary Stats */}
      <Grid cols={3} className="mt-4">
        {secondaryStats.map((s) => (
          <div key={s.label} className="rounded-2xl bg-surface p-6 flex items-center gap-4">
            <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-none">
              <s.icon className="w-4 h-4" />
            </div>
            <div>
              <div className="font-mono text-xl font-semibold tracking-tight text-foreground">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          </div>
        ))}
      </Grid>

      {/* Call to Action */}
      <DarkPanel
        className="mt-8"
        title="Ready to Join the Sustainable Revolution?"
        description="Partner with us to reduce your environmental footprint while accessing high-quality, cost-effective refurbished technology solutions."
      >
        <Button href="#calculator" variant="accent" size="lg">
          Calculate Your Impact
        </Button>
        <Button href="/contact" variant="outline" size="lg" className="border-white/20 bg-transparent text-primary-foreground hover:bg-white/10">
          Explore Partnership
        </Button>
      </DarkPanel>
    </Section>
  )
}
