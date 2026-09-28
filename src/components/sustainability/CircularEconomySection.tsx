'use client'

import { useState, useEffect } from 'react'
import { RotateCcw, ArrowRight, Wrench, Package, Truck, CheckCircle } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Section, Grid } from '@/components/shared/ui'

/*
 * Circular economy model. The ring auto-cycles through the six steps every
 * 3 seconds; clicking a step or "Next Step" still selects it.
 */
const circularSteps: { id: number; title: string; description: string; icon: LucideIcon }[] = [
  {
    id: 1,
    title: 'Collection',
    description: 'Devices are collected from enterprises and consumers through our global network',
    icon: Package,
  },
  {
    id: 2,
    title: 'Assessment',
    description: 'Each device undergoes comprehensive testing and quality assessment',
    icon: CheckCircle,
  },
  {
    id: 3,
    title: 'Refurbishment',
    description: 'Professional restoration using certified processes and genuine parts',
    icon: Wrench,
  },
  {
    id: 4,
    title: 'Quality Control',
    description: 'Rigorous testing ensures devices meet our high-quality standards',
    icon: CheckCircle,
  },
  {
    id: 5,
    title: 'Redistribution',
    description: 'Refurbished devices reach new users through our sales channels',
    icon: Truck,
  },
  {
    id: 6,
    title: 'Lifecycle Extension',
    description: 'Devices continue serving users, reducing need for new manufacturing',
    icon: RotateCcw,
  },
]

const keyBenefits: { value: string; label: string }[] = [
  { value: '95%', label: 'Less Environmental Impact' },
  { value: '3-5 Years', label: 'Extended Device Life' },
  { value: '70%', label: 'Cost Savings' },
  { value: 'Zero', label: 'Waste to Landfill' },
]

// Steps sit on a ring at 40% of the container width, so the diagram scales with its box.
const RING_RADIUS_PCT = 40

export default function CircularEconomySection() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    // Auto-cycle through steps
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % circularSteps.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const current = circularSteps[activeStep]

  return (
    <Section
      wide
      caption="Circular Economy Model"
      title="How We Transform Technology"
      subtitle="Our circular economy approach extends device lifecycles, reduces waste, and creates value while minimizing environmental impact through every step of the process."
      align="center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Circular Diagram */}
        <div className="relative w-full max-w-[22rem] aspect-square mx-auto">
          {/* Connecting ring */}
          <svg className="absolute inset-0 w-full h-full text-border" aria-hidden="true">
            <circle cx="50%" cy="50%" r={`${RING_RADIUS_PCT}%`} fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
          </svg>

          {/* Central circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
            <RotateCcw className="w-8 h-8" />
          </div>

          {/* Steps around the circle */}
          {circularSteps.map((step, index) => {
            const angle = index * 60 - 90 // Start from top
            const x = Math.cos((angle * Math.PI) / 180) * RING_RADIUS_PCT
            const y = Math.sin((angle * Math.PI) / 180) * RING_RADIUS_PCT
            const active = activeStep === index

            return (
              <div
                key={step.id}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${50 + x}%`,
                  top: `${50 + y}%`,
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveStep(index)}
                  aria-label={step.title}
                  aria-pressed={active}
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-colors ${
                    active ? 'bg-accent text-white' : 'bg-background border border-border text-muted-foreground hover:bg-muted'
                  }`}
                >
                  <step.icon className="w-6 h-6" />
                </button>

                {/* Step number */}
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-foreground text-background flex items-center justify-center text-[11px] font-mono font-semibold">
                  {step.id}
                </div>
              </div>
            )
          })}
        </div>

        {/* Step Details */}
        <div className="space-y-4">
          <div className="rounded-3xl bg-card-primary p-8">
            <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
              <current.icon className="w-4 h-4" />
            </div>

            <h3 className="text-xl font-semibold tracking-tight mb-2">{current.title}</h3>

            <p className="text-[15px] text-muted-foreground leading-[1.75] mb-6">{current.description}</p>

            {/* Progress indicators */}
            <div className="flex gap-1.5 mb-6">
              {circularSteps.map((step, index) => (
                <div key={step.id} className={`h-1.5 rounded-full transition-all duration-300 ${index === activeStep ? 'bg-accent w-8' : 'bg-border w-2'}`} />
              ))}
            </div>

            <button
              type="button"
              onClick={() => setActiveStep((activeStep + 1) % circularSteps.length)}
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline underline-offset-4"
            >
              Next Step <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Key Benefits */}
          <Grid cols={2}>
            {keyBenefits.map((b) => (
              <div key={b.label} className="rounded-2xl bg-surface p-5">
                <div className="font-mono text-xl font-semibold tracking-tight text-foreground">{b.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{b.label}</div>
              </div>
            ))}
          </Grid>
        </div>
      </div>
    </Section>
  )
}
