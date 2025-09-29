'use client'

import { useState, useEffect } from 'react'
import { FileText, Droplets, Recycle, Zap, Globe } from 'lucide-react';

const researchSources = [
  {
    title: 'Carbon Footprint (CO2e)',
    icon: <FileText className="w-6 h-6 text-emerald-600" />,
    description: 'Manufacturing a new desktop computer generates ~300kg of CO2e. Our refurbishment process generates only 50-70kg, resulting in a net saving of ~240kg per device. This represents an 80% reduction in carbon emissions compared to buying new. Similar savings are seen across all device types.',
    source: 'Source: Fraunhofer USA & Journal of Industrial Ecology',
  },
  {
    title: 'Water Consumption',
    icon: <Droplets className="w-6 h-6 text-emerald-600" />,
    description: 'Semiconductor and circuit board fabrication are highly water-intensive. A single laptop requires approximately 1,900 liters of "blue water" during its manufacturing phase. Our data is cross-referenced from academic papers in the Journal of Cleaner Production and manufacturer disclosures.',
    source: 'Source: Water Footprint Network & Journal of Cleaner Production',
  },
  {
    title: 'E-Waste Reduction',
    icon: <Recycle className="w-6 h-6 text-emerald-600" />,
    description: 'The world generated 62 million tonnes of e-waste in 2022, a record high. By extending the life of devices, refurbishment directly combats this trend. The formal recycling rate is only 22.3%, making reuse the most effective environmental strategy.',
    source: 'Source: UN Global E-waste Monitor 2024',
  },
  {
    title: 'Embodied Energy Savings',
    icon: <Zap className="w-6 h-6 text-emerald-600" />,
    description: 'The energy required to manufacture a new laptop (embodied energy) is estimated at 1,200 kWh. Refurbishing a device saves approximately 80% of this energy compared to manufacturing a new one, as the most energy-intensive components are reused.',
    source: 'Source: U.S. EPA & ACEEE Reports',
  },
];

export default function ResearchSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-24 bg-slate-50" id="research">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              Data & Research Sources
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              <span className="text-blue-600">Transparent</span> & Verifiable Data
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our commitment to sustainability is backed by data from industry and academic sources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchSources.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">{item.title}</h3>
                    <p className="mt-2 text-slate-600">{item.description}</p>
                    <p className="mt-4 text-xs font-medium text-slate-400">{item.source}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
