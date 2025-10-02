'use client'

import { useState } from 'react'
import WarrantyBanner from '@/components/warranty/WarrantyBanner'

export default function WarrantyPage() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('ecommerce')
  const [monthlyDevices, setMonthlyDevices] = useState(500)
  const [warrantyRate, setWarrantyRate] = useState(10)
  const [hoursSpent, setHoursSpent] = useState(20)

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  // Calculate savings
  const annualSavings = Math.round((hoursSpent * 50 * 12) + (monthlyDevices * warrantyRate * 0.01 * 15))
  const timeSaved = Math.round(hoursSpent * 0.85)
  const roi = Math.round((annualSavings / 3588) * 100)

  return (
    <main className="min-h-screen bg-white">
      <WarrantyBanner />

      {/* The Problem Section - Story Beginning */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Hidden Cost of Manual Warranty Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every day, electronics vendors struggle with an invisible profit killer
            </p>
          </div>

          {/* Statistics - Enhanced with better visual hierarchy */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div className="text-5xl font-bold text-red-600 mb-2">73%</div>
              <p className="text-lg text-gray-700 font-medium">of warranty claims fail</p>
              <p className="text-sm text-gray-500 mt-1">due to missing serial number records</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div className="text-5xl font-bold text-red-600 mb-2">$2,500+</div>
              <p className="text-lg text-gray-700 font-medium">monthly loss</p>
              <p className="text-sm text-gray-500 mt-1">from untracked warranties (average vendor)</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-5xl font-bold text-red-600 mb-2">6 hours</div>
              <p className="text-lg text-gray-700 font-medium">wasted weekly</p>
              <p className="text-sm text-gray-500 mt-1">managing Excel spreadsheets</p>
            </div>
          </div>

          {/* Enhanced Story Section */}
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-red-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
            </div>
            <blockquote className="text-lg text-gray-700 leading-relaxed text-center italic pt-4">
              "Every day, electronics vendors like you juggle multiple Excel files, trying to match serial numbers to customers across Walmart, Best Buy, and in-store sales. One missing record means angry customers, lost reputation, and money down the drain."
            </blockquote>
          </div>

          {/* Pain Points Visualization */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-dashed border-red-200">
              <h3 className="text-xl font-bold text-red-900 mb-4">The Daily Struggle</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span className="text-gray-700">Customer calls: "Where's my warranty?"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span className="text-gray-700">Frantically searching through Excel files</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span className="text-gray-700">"Sorry, we can't find your purchase record"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span className="text-gray-700">Negative reviews and lost customers</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-dashed border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">What Success Looks Like</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✅</span>
                  <span className="text-gray-700">Customer scans QR, instantly finds warranty</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✅</span>
                  <span className="text-gray-700">All serial numbers automatically tracked</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✅</span>
                  <span className="text-gray-700">Professional warranty experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✅</span>
                  <span className="text-gray-700">Happy customers, 5-star reviews</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section - Enhanced */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Complete Warranty Command Center
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              One system that transforms chaos into clarity
            </p>
            {/* Value Proposition Highlight */}
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Works with ANY sales channel - E-commerce OR Manual
            </div>
          </div>

          {/* Enhanced Before/After with Visual Impact */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border-2 border-red-200 relative">
              <div className="absolute -top-3 -left-3">
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">BEFORE</div>
              </div>
              <h3 className="text-2xl font-bold text-red-900 mb-6 mt-4">The Excel Nightmare</h3>
              <div className="space-y-4">
                {[
                  "Manual Excel tracking across platforms",
                  "No serial number visibility", 
                  "Lost warranty claims",
                  "Angry customers calling support",
                  "Hours spent searching records",
                  "Professional reputation at risk"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border-2 border-green-200 relative">
              <div className="absolute -top-3 -left-3">
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">AFTER</div>
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-6 mt-4">ReplugIT Automation</h3>
              <div className="space-y-4">
                {[
                  "Automated tracking for ALL sales channels",
                  "Real-time serial number mapping",
                  "99% claim success rate",
                  "Happy customers with self-service",
                  "85% faster warranty processing",
                  "Professional brand reputation"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-white/80 rounded-lg shadow-sm">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Process Flow */}
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-12 border border-blue-200">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Universal Workflow - Works for Any Business Model
            </h3>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900">Multiple Inputs</h4>
                <p className="text-sm text-gray-600">Walmart • Best Buy • Store Sales</p>
              </div>
              
              <div className="hidden lg:block text-3xl text-blue-500 animate-pulse">→</div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-xl transform scale-110">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 text-lg">ReplugIT Engine</h4>
                <p className="text-sm text-gray-600">Intelligent Processing</p>
              </div>
              
              <div className="hidden lg:block text-3xl text-blue-500 animate-pulse">→</div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900">Perfect Output</h4>
                <p className="text-sm text-gray-600">QR Codes • Analytics • Reports</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600 font-medium">
                One system handles everything - from your first sale to final warranty claim
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Enhanced Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              From Sale to Satisfaction in 4 Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              A seamless process that works for any type of sale
            </p>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Setup time: Under 30 minutes
            </div>
          </div>

          {/* Enhanced Interactive Steps */}
          <div className="max-w-5xl mx-auto space-y-8">
            {[
              {
                id: 'step1',
                number: '01',
                title: 'Connect Any Sales Channel',
                subtitle: 'Universal Integration',
                description: 'Whether it\'s Walmart, Best Buy, or your cash register - connect in minutes',
                details: [
                  'E-commerce platforms auto-sync orders instantly',
                  'Manual entry system for in-store sales',
                  'Import existing inventory with one click',
                  'Central dashboard unifies all channels'
                ],
                color: 'blue',
                benefit: 'No more platform juggling'
              },
              {
                id: 'step2',
                number: '02',
                title: 'Scan & Assign',
                subtitle: 'Smart Automation',
                description: 'Scan barcode, system generates QR code and warranty instantly',
                details: [
                  'Barcode scanner integration (phone or device)',
                  'Automatic QR code generation in seconds',
                  'Unique warranty codes for each product',
                  'Perfect serial number mapping maintained'
                ],
                color: 'purple',
                benefit: 'Zero manual data entry'
              },
              {
                id: 'step3',
                number: '03',
                title: 'Customer Activates',
                subtitle: 'Effortless Experience',
                description: 'Customer scans QR or clicks email - instant warranty activation',
                details: [
                  'Professional QR sticker on device',
                  'Backup email with activation link',
                  'Simple name + email entry process',
                  'Instant warranty confirmation & certificate'
                ],
                color: 'green',
                benefit: 'Happy customers, zero calls'
              },
              {
                id: 'step4',
                number: '04',
                title: 'Track Everything',
                subtitle: 'Complete Visibility',
                description: 'Real-time dashboard shows all warranties, claims, and analytics',
                details: [
                  'Live warranty status for every product',
                  'Automated claim management system',
                  'Customer self-service portal reduces support',
                  'Comprehensive reporting and insights'
                ],
                color: 'orange',
                benefit: 'Complete control & insights'
              }
            ].map((step, index) => (
              <div key={step.id} className="group">
                <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                  <button
                    onClick={() => toggleDropdown(step.id)}
                    className="w-full p-8 text-left flex items-start gap-6 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 rounded-2xl flex items-center justify-center shadow-lg`}>
                        <span className="text-2xl font-bold text-white">{step.number}</span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className={`inline-block px-3 py-1 bg-${step.color}-100 text-${step.color}-800 text-xs font-semibold rounded-full mb-2`}>
                            {step.subtitle}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-600 mb-2">{step.description}</p>
                          <div className={`inline-flex items-center gap-2 text-${step.color}-600 font-medium text-sm`}>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {step.benefit}
                          </div>
                        </div>
                        <div className={`transform transition-transform duration-300 ${activeDropdown === step.id ? 'rotate-180' : ''}`}>
                          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                  
                  {activeDropdown === step.id && (
                    <div className="px-8 pb-8">
                      <div className={`border-t-2 border-${step.color}-200 pt-6`}>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-4">What Happens:</h4>
                            <ul className="space-y-3">
                              {step.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="flex items-start gap-3">
                                  <div className={`w-2 h-2 bg-${step.color}-500 rounded-full mt-2 flex-shrink-0`}></div>
                                  <span className="text-gray-700">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className={`bg-${step.color}-50 p-6 rounded-xl`}>
                            <h4 className={`font-semibold text-${step.color}-900 mb-3`}>The Result:</h4>
                            <p className={`text-${step.color}-800`}>
                              {step.id === 'step1' && "All your sales channels work together seamlessly, whether you're selling on Walmart or face-to-face in your store."}
                              {step.id === 'step2' && "Every product gets its digital warranty instantly - no typing, no mistakes, no missing records."}
                              {step.id === 'step3' && "Customers get a professional warranty experience that builds trust and reduces your support workload."}
                              {step.id === 'step4' && "You have complete visibility into your warranty operations with actionable insights to grow your business."}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Connector Line */}
                {index < 3 && (
                  <div className="flex justify-center py-4">
                    <div className="w-px h-8 bg-gradient-to-b from-gray-300 to-gray-200"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Call to Action after steps */}
          <div className="text-center mt-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to See It in Action?
              </h3>
              <p className="text-gray-600 mb-6">
                Watch our 3-minute demo to see exactly how this works for your business
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg">
                Watch Demo Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              See Your Savings in Real-Time
            </h2>
            <p className="text-xl text-blue-100">
              Calculate your potential return on investment
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-blue-100 mb-2">Devices Sold Monthly</label>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  value={monthlyDevices}
                  onChange={(e) => setMonthlyDevices(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="text-2xl font-bold mt-2">{monthlyDevices.toLocaleString()}</div>
              </div>
              <div>
                <label className="block text-blue-100 mb-2">Warranty Claim Rate (%)</label>
                <input
                  type="range"
                  min="5"
                  max="25"
                  value={warrantyRate}
                  onChange={(e) => setWarrantyRate(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="text-2xl font-bold mt-2">{warrantyRate}%</div>
              </div>
              <div>
                <label className="block text-blue-100 mb-2">Hours on Warranties (Weekly)</label>
                <input
                  type="range"
                  min="5"
                  max="40"
                  value={hoursSpent}
                  onChange={(e) => setHoursSpent(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="text-2xl font-bold mt-2">{hoursSpent} hrs</div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400">${annualSavings.toLocaleString()}</div>
                  <p className="text-blue-100 mt-1">Annual Savings</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">{timeSaved} hrs/month</div>
                  <p className="text-blue-100 mt-1">Time Saved</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400">{roi}%</div>
                  <p className="text-blue-100 mt-1">ROI in Year 1</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get Detailed ROI Report
              </button>
            </div>
          </div>

          <p className="text-center text-blue-200 mt-6 italic">
            Most vendors see positive ROI within 30 days
          </p>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built for Electronics Vendors Like You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed specifically for the unique challenges of refurbished electronics warranty management
            </p>
          </div>

          {/* Key Metrics */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Industry-Leading Capabilities
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">Unlimited</div>
                <p className="text-gray-600">Warranties Managed</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">All Channels</div>
                <p className="text-gray-600">E-commerce + Manual</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">Professional</div>
                <p className="text-gray-600">Customer Experience</p>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Multi-Platform Sellers</h3>
              <p className="text-gray-600">
                "Finally, one system for all our sales channels - Walmart, Best Buy, and our website. No more juggling spreadsheets!"
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Repair Shops</h3>
              <p className="text-gray-600">
                "We don't sell online, just repairs in our shop. This gives us professional warranties without needing e-commerce."
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Growing Businesses</h3>
              <p className="text-gray-600">
                "Started with 50 devices/month, now handling 500+. The system scaled perfectly with our growth."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing - Commented out temporarily, redirecting to contact for custom demos */}
      {/*
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
              <p className="text-gray-600 mb-6">Perfect for small vendors</p>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                $299<span className="text-lg font-normal text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-700">Up to 500 warranties/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-700">All sales channels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-700">Basic analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-700">Email support</span>
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Start Free Trial
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl shadow-lg p-8 transform scale-105">
              <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <p className="text-blue-100 mb-6">For growing businesses</p>
              <div className="text-4xl font-bold mb-6">
                $599<span className="text-lg font-normal text-blue-100">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-blue-200">✓</span>
                  <span>Up to 2,000 warranties/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-200">✓</span>
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-200">✓</span>
                  <span>Priority support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-200">✓</span>
                  <span>API access</span>
                </li>
              </ul>
              <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Start Free Trial
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">For large operations</p>
              <div className="text-4xl font-bold text-gray-900 mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-700">Unlimited warranties</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-700">Custom integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-700">Dedicated support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-700">SLA guarantee</span>
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600">
              All plans include: QR code generation • Customer portal • Multi-platform support • 99.9% uptime
            </p>
          </div>
        </div>
      </section>
      */}

      {/* Enhanced Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-yellow-400/30">
            <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Limited Time: Free consultation & setup guidance
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to Transform Your 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Warranty Operations?
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join smart electronics vendors who've eliminated warranty chaos and boosted customer satisfaction
          </p>

          {/* Value Props Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Custom Demo</h3>
              <p className="text-blue-200 text-sm">Tailored to your business needs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">ROI Analysis</h3>
              <p className="text-blue-200 text-sm">See your potential savings</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Implementation Plan</h3>
              <p className="text-blue-200 text-sm">Step-by-step integration guide</p>
            </div>
          </div>
          
          {/* Main CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="/contact" 
              className="group bg-white text-blue-900 px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl border-2 border-transparent hover:border-yellow-400 inline-block"
            >
              <span className="flex items-center gap-3 justify-center">
                <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule Demo & Consultation
                <span className="text-xs bg-yellow-500 text-white px-2 py-1 rounded-full">FREE</span>
              </span>
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transition-all group inline-block"
            >
              <span className="flex items-center gap-2 justify-center">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Watch Product Demo
              </span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-blue-100 mb-8">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No commitment required
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Personalized solution design
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Implementation roadmap included
            </span>
          </div>

          {/* Final Urgency Message */}
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/30 max-w-2xl mx-auto">
            <p className="text-yellow-200 font-medium">
              <span className="font-bold text-yellow-300">Don't wait another month</span> losing money to warranty chaos. 
              Every day you delay costs you customers and profits.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}