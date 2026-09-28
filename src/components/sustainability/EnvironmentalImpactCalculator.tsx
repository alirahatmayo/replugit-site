'use client'

import { useState } from 'react'
import { Droplets, Leaf, Trash2, Zap, TrendingUp, Laptop, Smartphone, Tablet, Monitor } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Section, Notice } from '@/components/shared/ui'

interface DeviceType {
  name: string
  icon: LucideIcon
  // Source: Blended average from manufacturer LCA reports (Apple, Dell, HP, 2022-2024).
  // Represents the "cradle-to-gate" impact (raw material extraction to factory output).
  impacts: {
    waterSaved: number // Liters
    carbonReduced: number // Kilograms of CO2 equivalent
    wasteAverted: number // Kilograms (packaging + manufacturing scrap)
    energySaved: number // kWh (Embodied energy for manufacturing)
    costSavings: number // USD - Refurbished vs new price difference
  }
}

interface CalculatorResult {
  totalWater: number
  totalCarbon: number
  totalWaste: number
  totalEnergy: number
  totalCost: number
  treesEquivalent: number
  carsOffRoad: number
}

const devices: Record<string, DeviceType> = {
  laptop: {
    name: 'Laptop',
    icon: Laptop,
    impacts: {
      waterSaved: 1900, // Source: Journal of Cleaner Production; Apple Environmental Reports
      carbonReduced: 220, // Net savings: 275kg (New) - 55kg (Refurbishment Process)
      wasteAverted: 1.5, // Source: Manufacturer Product Environmental Reports (packaging + non-recycled scrap)
      energySaved: 1200, // Source: ACEEE & EPA estimates for embodied energy
      costSavings: 420,
    },
  },
  smartphone: {
    name: 'Smartphone',
    icon: Smartphone,
    impacts: {
      waterSaved: 1200, // Source: Water Footprint Network & Apple iPhone 15 LCA
      carbonReduced: 56, // Net savings: 70kg (New) - 14kg (Refurbishment Process)
      wasteAverted: 0.2, // Source: Manufacturer Product Environmental Reports
      energySaved: 450, // Source: Academic LCAs published in 'Resources, Conservation and Recycling'
      costSavings: 180,
    },
  },
  tablet: {
    name: 'Tablet',
    icon: Tablet,
    impacts: {
      waterSaved: 1500, // Source: Proportional estimate based on smartphone/laptop LCAs
      carbonReduced: 88, // Net savings: 110kg (New) - 22kg (Refurbishment Process)
      wasteAverted: 0.5, // Source: Manufacturer Product Environmental Reports
      energySaved: 600, // Source: Proportional estimate based on device complexity
      costSavings: 230,
    },
  },
  desktop: {
    name: 'Desktop',
    icon: Monitor,
    impacts: {
      waterSaved: 4000, // Source: Estimates from academic LCAs, higher due to separate components
      carbonReduced: 240, // Net savings: 300kg (New) - 60kg (Refurbishment Process)
      wasteAverted: 7.5, // Source: Higher due to larger chassis, PSU, and separate peripherals
      energySaved: 1800, // Source: ACEEE estimates for desktop computers
      costSavings: 650,
    },
  },
}

// Simple calculation: quantity per month
const calculateImpact = (device: DeviceType, quantity: number): CalculatorResult => ({
  totalWater: device.impacts.waterSaved * quantity,
  totalCarbon: device.impacts.carbonReduced * quantity,
  totalWaste: device.impacts.wasteAverted * quantity,
  totalEnergy: device.impacts.energySaved * quantity,
  totalCost: device.impacts.costSavings * quantity,
  treesEquivalent: Math.round((device.impacts.carbonReduced * quantity) / 21), // 1 tree absorbs ~21kg CO2/year
  carsOffRoad: Math.round((device.impacts.carbonReduced * quantity) / 4600), // Average car emits 4.6 tons CO2/year
})

const formatNumber = (num: number, decimals: number = 0) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return decimals > 0 ? num.toFixed(decimals) : Math.round(num).toLocaleString()
}

export default function EnvironmentalImpactCalculator() {
  const [selectedDevice, setSelectedDevice] = useState('laptop')
  const [quantity, setQuantity] = useState(10)

  const device = devices[selectedDevice]
  const result = calculateImpact(device, quantity)

  const primaryStats: { icon: LucideIcon; value: string; label: string }[] = [
    { icon: Droplets, value: formatNumber(result.totalWater) + 'L', label: 'Water Saved' },
    { icon: Leaf, value: formatNumber(result.totalCarbon / 1000, 1) + ' tons', label: 'CO₂ Prevented' },
    { icon: Trash2, value: formatNumber(result.totalWaste / 1000, 1) + ' tons', label: 'Waste Avoided' },
    { icon: Zap, value: formatNumber(result.totalEnergy / 1000) + ' MWh', label: 'Energy Saved' },
  ]

  const equivalents: { label: string; value: string }[] = [
    { label: 'Trees planted equivalent:', value: formatNumber(result.treesEquivalent) + ' trees' },
    { label: 'Cars off the road for 1 year:', value: formatNumber(result.carsOffRoad) + ' cars' },
    { label: 'Cost savings vs new:', value: '$' + formatNumber(result.totalCost) },
  ]

  return (
    <Section
      id="calculator"
      wide
      caption="Environmental Impact Calculator"
      title="Calculate Your"
      titleMuted="Environmental Savings"
      subtitle="See the real environmental impact of choosing refurbished devices over new ones. Our calculator uses peer-reviewed research to show your contribution to a sustainable future."
      align="center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Calculator Inputs */}
        <div className="rounded-3xl bg-surface p-6 lg:p-8">
          <h3 className="text-lg font-semibold tracking-tight mb-6">Configure Your Impact</h3>

          {/* Device Selection */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-foreground mb-3">Device Type</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.entries(devices).map(([key, d]) => {
                const selected = selectedDevice === key
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedDevice(key)}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center gap-3 justify-center sm:justify-start ${
                      selected ? 'bg-foreground text-background' : 'bg-background border border-border text-muted-foreground hover:bg-muted'
                    }`}
                  >
                    <d.icon className="w-4 h-4" />
                    <span>{d.name}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <label htmlFor="impact-quantity" className="block text-sm font-semibold text-foreground mb-3">
              Quantity
            </label>
            <input
              id="impact-quantity"
              type="range"
              min="1"
              max="1000"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-full h-2 bg-border rounded-full appearance-none cursor-pointer accent-accent"
            />
            <div className="flex justify-between items-center text-xs text-muted-foreground font-mono mt-3">
              <span>1</span>
              <span className="text-base font-semibold tracking-tight text-foreground">{quantity} devices per month</span>
              <span>1000</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h3 className="text-lg font-semibold tracking-tight">Your Environmental Impact</h3>
            <span className="inline-flex self-start sm:self-auto px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold text-accent">
              {quantity} {device.name}
              {quantity > 1 ? 's' : ''} Per Month
            </span>
          </div>

          {/* Primary Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {primaryStats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-card-primary p-6">
                <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                  <s.icon className="w-4 h-4" />
                </div>
                <div className="font-mono text-2xl font-semibold tracking-tight text-foreground">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Comparison Stats */}
          <div className="rounded-2xl border border-border bg-background p-6">
            <h4 className="text-base font-semibold mb-4">Real-World Equivalents</h4>
            <div className="space-y-3">
              {equivalents.map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-4 text-[15px]">
                  <span className="text-muted-foreground">{row.label}</span>
                  <span className="font-mono font-semibold tracking-tight text-foreground">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Share Results */}
          <div className="rounded-3xl bg-primary text-primary-foreground p-6 text-center">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h4 className="text-base font-semibold mb-1.5">Share Your Impact</h4>
            <p className="text-sm text-primary-foreground/70 mb-5">
              Choosing refurbished saves{' '}
              <span className="font-mono font-semibold tracking-tight text-primary-foreground">{formatNumber(result.totalCarbon / 1000, 1)} tons</span> of CO₂!
            </p>
            <button type="button" className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold bg-accent text-white hover:bg-accent/90 transition-colors">
              Share Results
            </button>
          </div>
        </div>
      </div>

      {/* Data Accuracy Note */}
      <div className="mt-8 max-w-3xl mx-auto">
        <Notice title="Data Disclaimer">
          Environmental impact figures are estimates based on publicly available Lifecycle Assessment (LCA) reports from major manufacturers (Apple, Dell, HP) and academic studies. Figures represent the &quot;cradle-to-gate&quot; manufacturing phase, which accounts for 70-85% of a device&apos;s total lifetime carbon footprint. Actual impact varies by model and configuration.
        </Notice>
      </div>
    </Section>
  )
}
