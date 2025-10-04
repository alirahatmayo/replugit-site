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

          {/* Core Problem Statement */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl border-2 border-slate-700">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full flex-shrink-0">
                  <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-red-400">The Problem:</h3>
                  <p className="text-lg leading-relaxed text-slate-300">
                    You sell refurbished devices on Walmart, Best Buy, and Amazon. A customer calls: "Where's my warranty?" You frantically search Excel files, can't find the serial number, and lose the customer forever. <span className="font-bold text-white">This happens every single day.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pain Points Visualization */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Daily Struggle</h3>
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
            <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What Success Looks Like</h3>
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

      {/* The Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
              ✨ THE SOLUTION
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What ReplugIT Does For You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple, automated warranty system that works for any sales channel
            </p>
          </div>

          {/* 3 Core Features - Big & Clear */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-gray-200 hover:border-blue-400 hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Automatic Record Keeping</h3>
              <p className="text-gray-600 text-lg">
                Every device you sell is automatically recorded with its serial number, customer info, and warranty details. Never lose track again.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-gray-200 hover:border-blue-400 hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Customer Self-Service</h3>
              <p className="text-gray-600 text-lg">
                Customers scan a QR code or click a link to activate warranties and file claims themselves. No more support calls.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-gray-200 hover:border-blue-400 hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Build Loyalty & Reviews</h3>
              <p className="text-gray-600 text-lg">
                Offer extended warranties or incentives in exchange for reviews. Turn warranty activations into 5-star ratings.
              </p>
            </div>
          </div>

          {/* Simple Value Proposition */}
          <div className="bg-white rounded-2xl p-12 text-center max-w-4xl mx-auto shadow-sm border-2 border-gray-200">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">Here's What Makes It Special</h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-blue-50 p-3 rounded-xl flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-gray-900">Works with ANY Sales Channel</h4>
                    <p className="text-gray-600">Walmart, Best Buy, Amazon, eBay, in-store sales - all in one place</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-xl flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-gray-900">Serial Number → Customer Matching</h4>
                    <p className="text-gray-600">Know exactly which device went to which customer, instantly</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-blue-50 p-3 rounded-xl flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-gray-900">QR Code Activation</h4>
                    <p className="text-gray-600">Customers scan a sticker on their device - warranty activated in seconds</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-xl flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-gray-900">Incentivize Reviews</h4>
                    <p className="text-gray-600">Offer extended warranty in exchange for honest reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quebec Bill 29 Compliance Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-200 p-8 md:p-12">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-bold mb-4">
                  🇨🇦 QUEBEC BILL 29 COMPLIANT
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Stay Compliant with Quebec's New Warranty Laws
                </h2>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Quebec's Bill 29 (2023) requires all merchants selling household appliances and electronics to provide mandatory "good working order" warranties. <span className="font-semibold text-gray-900">Non-compliance penalties: Up to 5% of worldwide revenue.</span>
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  Bill 29 Requirements
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">⚠️</span>
                    <span>Provide mandatory warranty for prescribed goods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">⚠️</span>
                    <span>Disclose warranty information in French before sale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">⚠️</span>
                    <span>Maintain detailed warranty records for all sales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">⚠️</span>
                    <span>Provide repair information and replacement parts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">⚠️</span>
                    <span>Allow consumer access to warranty documentation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  How ReplugIT Helps
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✅</span>
                    <span>Automatic warranty record keeping with serial numbers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✅</span>
                    <span>Bilingual documentation (French/English)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✅</span>
                    <span>Complete audit trail for compliance verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✅</span>
                    <span>Customer portal for warranty information access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✅</span>
                    <span>QR codes for instant warranty activation & tracking</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-amber-900 mb-2">Don't Risk Penalties</h4>
                  <p className="text-gray-700 mb-3">
                    Bill 29 penalties can reach <span className="font-bold text-amber-900">up to 5% of your worldwide turnover</span>. Directors and officers are personally liable. Let ReplugIT handle your compliance automatically.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    Reference: An Act to protect consumers from planned obsolescence and to promote the durability, repairability and maintenance of goods (2023, Chapter 21)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Simplified */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It Works (Really Simple)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four steps that happen automatically
            </p>
          </div>

          {/* Simplified Steps */}
          <div className="max-w-5xl mx-auto space-y-6">
            {[
              {
                id: 'step1',
                number: '1',
                title: 'You Sell a Device',
                description: 'On Walmart, Best Buy, Amazon, eBay, or your local store - doesn\'t matter where',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                color: 'blue'
              },
              {
                id: 'step2',
                number: '2',
                title: 'We Record Everything',
                description: 'Serial number, customer name, email, order details - all saved automatically',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                color: 'purple'
              },
              {
                id: 'step3',
                number: '3',
                title: 'Customer Gets QR Code',
                description: 'They scan it (or click email link) and activate their warranty in 30 seconds',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                color: 'indigo'
              },
              {
                id: 'step4',
                number: '4',
                title: 'You Have Complete Records',
                description: 'Track warranties, handle claims, view analytics - all from one dashboard',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                color: 'purple'
              }
            ].map((step, index) => (
              <div key={step.id} className="bg-white rounded-xl shadow-sm border-2 border-gray-200 p-8 hover:border-blue-400 hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">
                        Step {step.number}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-lg text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* That's It Message */}
          <div className="text-center mt-12">
            <div className="bg-blue-600 text-white p-8 rounded-xl shadow-sm max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">That's It. Seriously.</h3>
              <p className="text-xl text-blue-50">
                No complicated setup. No training required. Just professional warranty management that actually works.
              </p>
            </div>
          </div>
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
                <div className="text-4xl font-bold text-gray-900 mb-2">Unlimited</div>
                <p className="text-gray-600">Warranties Managed</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">All Channels</div>
                <p className="text-gray-600">E-commerce + Manual</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">Professional</div>
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
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative">
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Ready to Transform Your 
            <span className="block text-blue-400">
              Warranty Operations?
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join smart electronics vendors who've eliminated warranty chaos and boosted customer satisfaction
          </p>

          {/* Value Props Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-white">Custom Consultation</h3>
              <p className="text-slate-400 text-sm">Tailored to your business needs</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-white">ROI Analysis</h3>
              <p className="text-slate-400 text-sm">See your potential savings</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-white">Implementation Plan</h3>
              <p className="text-slate-400 text-sm">Step-by-step integration guide</p>
            </div>
          </div>
          
          {/* Main CTA */}
          <div className="flex flex-col items-center gap-6 mb-12">
            <a 
              href="/contact" 
              className="group bg-blue-600 text-white px-12 py-6 rounded-xl font-bold text-2xl hover:bg-blue-700 transition-all shadow-lg inline-block"
            >
              <span className="flex items-center gap-3 justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Let's Talk About Your Business
              </span>
            </a>
            <p className="text-slate-300 text-lg">
              Free consultation • No commitment • Custom solution design
            </p>
          </div>

          {/* Simple Closing Message */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 max-w-2xl mx-auto">
            <p className="text-xl text-slate-300 text-center">
              We'll show you exactly how this works for <span className="font-bold text-white">your specific business</span> - whether you sell 50 devices a month or 5,000.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}