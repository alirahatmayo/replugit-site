'use client'

import { useState, useEffect } from 'react'
import { Calculator, Droplets, Leaf, Trash2, Zap, TrendingUp, Laptop, Smartphone, Tablet, Monitor } from 'lucide-react'

interface DeviceType {
  name: string
  icon: React.ReactNode
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

export default function EnvironmentalImpactCalculator() {
  const [selectedDevice, setSelectedDevice] = useState('laptop')
  const [quantity, setQuantity] = useState(10)
  const [result, setResult] = useState<CalculatorResult | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const devices: Record<string, DeviceType> = {
    laptop: {
      name: 'Laptop',
      icon: <Laptop className="w-6 h-6" />,
      impacts: {
        waterSaved: 1900, // Source: Journal of Cleaner Production; Apple Environmental Reports
        carbonReduced: 220,   // Net savings: 275kg (New) - 55kg (Refurbishment Process)
        wasteAverted: 1.5,  // Source: Manufacturer Product Environmental Reports (packaging + non-recycled scrap)
        energySaved: 1200, // Source: ACEEE & EPA estimates for embodied energy
        costSavings: 420
      }
    },
    smartphone: {
      name: 'Smartphone',
      icon: <Smartphone className="w-6 h-6" />,
      impacts: {
        waterSaved: 1200, // Source: Water Footprint Network & Apple iPhone 15 LCA
        carbonReduced: 56,    // Net savings: 70kg (New) - 14kg (Refurbishment Process)
        wasteAverted: 0.2,  // Source: Manufacturer Product Environmental Reports
        energySaved: 450,  // Source: Academic LCAs published in 'Resources, Conservation and Recycling'
        costSavings: 180
      }
    },
    tablet: {
      name: 'Tablet',
      icon: <Tablet className="w-6 h-6" />,
      impacts: {
        waterSaved: 1500, // Source: Proportional estimate based on smartphone/laptop LCAs
        carbonReduced: 88,   // Net savings: 110kg (New) - 22kg (Refurbishment Process)
        wasteAverted: 0.5,  // Source: Manufacturer Product Environmental Reports
        energySaved: 600,  // Source: Proportional estimate based on device complexity
        costSavings: 230
      }
    },
    desktop: {
      name: 'Desktop',
      icon: <Monitor className="w-6 h-6" />,
      impacts: {
        waterSaved: 4000, // Source: Estimates from academic LCAs, higher due to separate components
        carbonReduced: 240,   // Net savings: 300kg (New) - 60kg (Refurbishment Process)
        wasteAverted: 7.5,  // Source: Higher due to larger chassis, PSU, and separate peripherals
        energySaved: 1800, // Source: ACEEE estimates for desktop computers
        costSavings: 650
      }
    }
  }

  useEffect(() => {
    setIsVisible(true)
    calculateImpact()
  }, [selectedDevice, quantity])

  const calculateImpact = () => {
    const device = devices[selectedDevice]

    // Simple calculation: quantity per month
    const totalDevices = quantity

    const calculatedResult: CalculatorResult = {
      totalWater: device.impacts.waterSaved * totalDevices,
      totalCarbon: device.impacts.carbonReduced * totalDevices,
      totalWaste: device.impacts.wasteAverted * totalDevices,
      totalEnergy: device.impacts.energySaved * totalDevices,
      totalCost: device.impacts.costSavings * totalDevices,
      treesEquivalent: Math.round((device.impacts.carbonReduced * totalDevices) / 21), // 1 tree absorbs ~21kg CO2/year
      carsOffRoad: Math.round((device.impacts.carbonReduced * totalDevices) / 4600) // Average car emits 4.6 tons CO2/year
    }

    setResult(calculatedResult)
  }

  const formatNumber = (num: number, decimals: number = 0) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return decimals > 0 ? num.toFixed(decimals) : Math.round(num).toLocaleString()
  }

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
              <Calculator className="w-4 h-4" />
              Environmental Impact Calculator
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Calculate Your <span className="text-emerald-600">Environmental Savings</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              See the real environmental impact of choosing refurbished devices over new ones. 
              Our calculator uses peer-reviewed research to show your contribution to a sustainable future.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Calculator Inputs */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Configure Your Impact</h3>
              
              {/* Device Selection */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-slate-900 mb-4">Device Type</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(devices).map(([key, device]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedDevice(key)}
                      className={`p-3 sm:p-4 rounded-2xl font-medium transition-all duration-300 flex items-center gap-3 justify-center sm:justify-start ${
                        selectedDevice === key
                          ? 'bg-emerald-600 text-white shadow-lg'
                          : 'bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600'
                      }`}
                    >
                      {device.icon}
                      <span>{device.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-slate-900 mb-4">Quantity</label>
                <input
                  type="range"
                  min="1"
                  max="1000"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-slate-500 mt-2">
                  <span>1</span>
                  <span className="text-lg font-bold text-emerald-600">{quantity} devices per month</span>
                  <span>1000</span>
                </div>
              </div>
            </div>

            {/* Results */}
            {result && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Your Environmental Impact</h3>
                  <div className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium self-start sm:self-auto">
                    {quantity} {devices[selectedDevice].name}{quantity > 1 ? 's' : ''} Per Month
                  </div>
                </div>
                
                {/* Primary Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                    <Droplets className="w-8 h-8 text-blue-600 mb-3" />
                    <div className="text-3xl font-bold text-blue-700 mb-1">{formatNumber(result.totalWater)}L</div>
                    <div className="text-sm text-blue-600">Water Saved</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
                    <Leaf className="w-8 h-8 text-green-600 mb-3" />
                    <div className="text-3xl font-bold text-green-700 mb-1">{formatNumber(result.totalCarbon / 1000, 1)} tons</div>
                    <div className="text-sm text-green-600">CO₂ Prevented</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
                    <Trash2 className="w-8 h-8 text-purple-600 mb-3" />
                    <div className="text-3xl font-bold text-purple-700 mb-1">{formatNumber(result.totalWaste / 1000, 1)} tons</div>
                    <div className="text-sm text-purple-600">Waste Avoided</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6">
                    <Zap className="w-8 h-8 text-orange-600 mb-3" />
                    <div className="text-3xl font-bold text-orange-700 mb-1">{formatNumber(result.totalEnergy / 1000)} MWh</div>
                    <div className="text-sm text-orange-600">Energy Saved</div>
                  </div>
                </div>

                {/* Comparison Stats */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">Real-World Equivalents</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Trees planted equivalent:</span>
                      <span className="font-bold text-green-600">{formatNumber(result.treesEquivalent)} trees</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Cars off the road for 1 year:</span>
                      <span className="font-bold text-blue-600">{formatNumber(result.carsOffRoad)} cars</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Cost savings vs new:</span>
                      <span className="font-bold text-emerald-600">${formatNumber(result.totalCost)}</span>
                    </div>
                  </div>
                </div>

                {/* Share Results */}
                <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-6 text-white text-center">
                  <TrendingUp className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="text-lg font-bold mb-2">Share Your Impact</h4>
                  <p className="text-emerald-100 mb-4">
                    Choosing refurbished saves {formatNumber(result.totalCarbon / 1000, 1)} tons of CO₂!
                  </p>
                  <button className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300">
                    Share Results
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Data Accuracy Note */}
          <div className="mt-12 text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50 max-w-3xl mx-auto">
              <p className="text-sm text-slate-600">
                <span className="font-semibold text-slate-600">Data Disclaimer:</span> Environmental impact figures are estimates based on publicly available Lifecycle Assessment (LCA) reports from major manufacturers (Apple, Dell, HP) and academic studies. Figures represent the "cradle-to-gate" manufacturing phase, which accounts for 70-85% of a device's total lifetime carbon footprint. Actual impact varies by model and configuration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
