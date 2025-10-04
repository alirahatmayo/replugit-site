'use client'

import { useState } from 'react'
import { RepricerBanner } from '@/components/repricer'

export default function BestBuyRepricerPage() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <main className="min-h-screen bg-white">
      <RepricerBanner />

      {/* Core Value Proposition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Turn Pricing Into Your Competitive Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While competitors manually check prices once a day, BB-Repricer monitors and adjusts every 30 minutes—automatically protecting your profits while winning more Buy Boxes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-gray-200 hover:border-blue-400 hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">The Problem</h3>
              <p className="text-gray-600 text-center">
                Competitors change prices at 2 AM. You discover it at 10 AM. You've already lost 8 hours of sales to slower manual checking.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-gray-200 hover:border-blue-400 hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">The Solution</h3>
              <p className="text-gray-600 text-center">
                BB-Repricer responds within 30 minutes, automatically adjusting your prices while you sleep—never selling below your profit thresholds.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-gray-200 hover:border-blue-400 hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">The Result</h3>
              <p className="text-gray-600 text-center">
                23% average revenue increase, 40% more Buy Box wins, and 15+ hours saved weekly—all while maintaining your profit margins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Simplified */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Simple Setup, Powerful Results
            </h2>
            <p className="text-xl text-gray-600">
              Get started in minutes, see results in hours
            </p>
          </div>

            <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-4 gap-8 relative">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Add Products</h3>
                <p className="text-gray-600 text-sm">
                  Import SKUs, set cost basis and minimum profit margins
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
                  2
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">We Monitor</h3>
                <p className="text-gray-600 text-sm">
                  System tracks all competitors every 30 minutes, 24/7
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
                  3
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Smart Decisions</h3>
                <p className="text-gray-600 text-sm">
                  Algorithm calculates optimal prices within your profit rules
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
                  4
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Auto-Adjust</h3>
                <p className="text-gray-600 text-sm">
                  Prices update instantly, Buy Box wins increase
                </p>
              </div>
            </div>
          </div>          {/* Real Example */}
          <div className="mt-16 bg-blue-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Real-Time Example</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-red-600 mb-2">2:15 AM</div>
                <p className="text-sm text-gray-600">Competitor drops price from $19.99 to $17.99</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-blue-600 mb-2">2:30 AM</div>
                <p className="text-sm text-gray-600">BB-Repricer adjusts your price to $17.89 (still 45% margin)</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-green-600 mb-2">2:31 AM</div>
                <p className="text-sm text-gray-600">You're back to winning Buy Box, no sales lost</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Overview - Condensed */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Data-Driven Pricing Intelligence
            </h2>
            <p className="text-xl text-gray-600">
              Turn market data into competitive advantage
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-sm border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">📊 What You See</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Real-Time Competitor Analysis</h4>
                    <p className="text-gray-600 text-sm">All competitor prices, inventory levels, and your Buy Box status</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Performance Tracking</h4>
                    <p className="text-gray-600 text-sm">Buy Box win rates, revenue impact, and profit margin analysis</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Opportunity Alerts</h4>
                    <p className="text-gray-600 text-sm">When competitors are out of stock or priced high</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Market Intelligence</h4>
                    <p className="text-gray-600 text-sm">Competitor behavior patterns and strategic insights</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">🎯 What You Achieve</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-bold text-blue-400">23%</div>
                  <p className="text-slate-300">Average revenue increase from faster Buy Box wins</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">15hrs</div>
                  <p className="text-slate-300">Weekly time saved from automated monitoring</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">30min</div>
                  <p className="text-slate-300">Fastest response time to market changes</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">40%</div>
                  <p className="text-slate-300">More Buy Box wins with smart automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Plans Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Choose Your Level of Automation
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Start simple, upgrade when you're ready for full automation
            </p>
          </div>

          {/* Plans Comparison Table */}
          <div className="overflow-x-auto">
            <div className="min-w-[800px] bg-white rounded-xl shadow-lg border-2 border-gray-200 overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-4 bg-gray-50">
                <div className="p-4 lg:p-6">
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">Features</h3>
                  <p className="text-gray-600 text-xs lg:text-sm">Compare what you get</p>
                </div>
                <div className="p-4 lg:p-6 border-l border-gray-200 text-center">
                  <h3 className="text-sm lg:text-lg font-bold text-gray-900 mb-1">Basic Monitor</h3>
                  <p className="text-gray-600 text-xs">See what's happening</p>
                  <div className="mt-2 text-xs text-gray-500">For beginners</div>
                </div>
                <div className="p-4 lg:p-6 border-l border-gray-200 bg-blue-50 relative text-center">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-bold whitespace-nowrap">Most Popular</span>
                  </div>
                  <h3 className="text-sm lg:text-lg font-bold text-blue-700 mb-1 mt-2">Auto Repricer</h3>
                  <p className="text-gray-600 text-xs">Hands-off automation</p>
                  <div className="mt-2 text-xs text-blue-700 font-medium">Recommended</div>
                </div>
                <div className="p-4 lg:p-6 border-l border-gray-200 text-center">
                  <h3 className="text-sm lg:text-lg font-bold text-gray-900 mb-1">Enterprise Plus</h3>
                  <p className="text-gray-600 text-xs">Advanced insights</p>
                  <div className="mt-2 text-xs text-gray-500">Large sellers</div>
                </div>
              </div>

              {/* Feature Rows */}
              <div className="divide-y divide-gray-100">
                {/* Basic Features */}
                <div className="grid grid-cols-4 hover:bg-gray-50 transition-colors">
                  <div className="p-4 lg:p-6 bg-gray-50 border-r border-gray-100">
                    <h4 className="font-semibold text-gray-900 text-sm lg:text-base mb-1">Price Monitoring</h4>
                    <p className="text-xs lg:text-sm text-gray-600">Real-time competitor tracking</p>
                  </div>
                  <div className="p-4 lg:p-6 text-center flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="p-4 lg:p-6 text-center flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="p-4 lg:p-6 text-center flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                <div className="grid grid-cols-4 hover:bg-gray-50 transition-colors">
                  <div className="p-4 lg:p-6 bg-gray-50 border-r border-gray-100">
                    <h4 className="font-semibold text-gray-900 text-sm lg:text-base mb-1">Buy Box Tracking</h4>
                    <p className="text-xs lg:text-sm text-gray-600">Win/lose notifications</p>
                  </div>
                  <div className="p-4 lg:p-6 text-center flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="p-4 lg:p-6 text-center flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="p-4 lg:p-6 text-center flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                <div className="grid grid-cols-4 hover:bg-gray-50 transition-colors">
                  <div className="p-4 lg:p-6 bg-gray-50 border-r border-gray-100">
                    <h4 className="font-semibold text-gray-900 text-sm lg:text-base mb-1">Profit Tracking</h4>
                    <p className="text-xs lg:text-sm text-gray-600">Margin calculations</p>
                  </div>
                  <div className="p-4 lg:p-6 text-center flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="p-4 lg:p-6 text-center flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="p-4 lg:p-6 text-center flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Automation Features */}
                <div className="grid grid-cols-4 hover:bg-gray-50 transition-colors">
                  <div className="p-4 lg:p-6 bg-gray-50 border-r border-gray-100">
                    <h4 className="font-semibold text-gray-900 text-sm lg:text-base mb-1">Auto Price Updates</h4>
                    <p className="text-xs lg:text-sm text-gray-600">Automatic repricing</p>
                  </div>
                  <div className="p-4 lg:p-6 text-center">
                    <div className="flex flex-col items-center">
                      <svg className="w-5 h-5 lg:w-6 lg:h-6 text-gray-300 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-xs text-gray-500">Manual</span>
                    </div>
                  </div>
                  <div className="p-4 lg:p-6 text-center">
                    <div className="flex flex-col items-center">
                      <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-500 mb-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs text-indigo-700 font-medium">30min</span>
                    </div>
                  </div>
                  <div className="p-4 lg:p-6 text-center">
                    <div className="flex flex-col items-center">
                      <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-500 mb-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs text-purple-700 font-medium">15min</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 hover:bg-gray-50 transition-colors">
                  <div className="p-4 lg:p-6 bg-gray-50 border-r border-gray-100">
                    <h4 className="font-semibold text-gray-900 text-sm lg:text-base mb-1">Profit Protection</h4>
                    <p className="text-xs lg:text-sm text-gray-600">Minimum margin rules</p>
                  </div>
                  <div className="p-4 lg:p-6 text-center flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div className="p-4 lg:p-6 text-center flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="p-4 lg:p-6 text-center flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                <div className="grid grid-cols-4 hover:bg-gray-50 transition-colors">
                  <div className="p-4 lg:p-6 bg-gray-50 border-r border-gray-100">
                    <h4 className="font-semibold text-gray-900 text-sm lg:text-base mb-1">Stock Alerts</h4>
                    <p className="text-xs lg:text-sm text-gray-600">Competitor inventory</p>
                  </div>
                  <div className="p-4 lg:p-6 text-center flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div className="p-4 lg:p-6 text-center flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="p-4 lg:p-6 text-center flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Advanced Features */}
                <div className="grid grid-cols-4 hover:bg-gray-50 transition-colors">
                  <div className="p-4 lg:p-6 bg-gray-50 border-r border-gray-100">
                    <h4 className="font-semibold text-gray-900 text-sm lg:text-base mb-1">Advanced Analytics</h4>
                    <p className="text-xs lg:text-sm text-gray-600">Performance insights</p>
                  </div>
                  <div className="p-4 lg:p-6 text-center flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div className="p-4 lg:p-6 text-center">
                    <span className="text-xs text-blue-600 font-medium">Basic</span>
                  </div>
                  <div className="p-4 lg:p-6 text-center">
                    <div className="flex flex-col items-center">
                      <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-500 mb-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs text-purple-600 font-medium">Full</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 hover:bg-gray-50 transition-colors">
                  <div className="p-4 lg:p-6 bg-gray-50 border-r border-gray-100">
                    <h4 className="font-semibold text-gray-900 text-sm lg:text-base mb-1">API & Export</h4>
                    <p className="text-xs lg:text-sm text-gray-600">Data integration</p>
                  </div>
                  <div className="p-4 lg:p-6 text-center flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div className="p-4 lg:p-6 text-center flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div className="p-4 lg:p-6 text-center flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                <div className="grid grid-cols-4 hover:bg-gray-50 transition-colors">
                  <div className="p-4 lg:p-6 bg-gray-50 border-r border-gray-100">
                    <h4 className="font-semibold text-gray-900 text-sm lg:text-base mb-1">Support</h4>
                    <p className="text-xs lg:text-sm text-gray-600">Help & training</p>
                  </div>
                  <div className="p-4 lg:p-6 text-center">
                    <span className="text-xs text-gray-500">Email</span>
                  </div>
                  <div className="p-4 lg:p-6 text-center">
                    <span className="text-xs text-blue-600 font-medium">Priority</span>
                  </div>
                  <div className="p-4 lg:p-6 text-center">
                    <span className="text-xs text-purple-600 font-medium">Dedicated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Single CTA Button */}
          <div className="text-center mt-16">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Winning More Buy Boxes?</h3>
              <p className="text-lg text-gray-600 mb-8">
                All plans include free setup assistance and can be customized to your needs
              </p>
            </div>
            
            <a 
              href="/contact" 
              className="group inline-flex items-center gap-3 bg-blue-600 text-white px-12 py-4 text-xl font-bold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Get Your Custom Demo & Pricing
            </a>
            
            <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-sm mt-6">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No long-term commitment
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Free setup & training
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Custom pricing available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Ready to Dominate Best Buy Canada?
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join smart sellers who use BB-Repricer to automate their pricing and win more Buy Boxes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">50K+</div>
              <div className="text-slate-300 text-sm md:text-base">SKUs monitored daily</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">30min</div>
              <div className="text-slate-300 text-sm md:text-base">Automated repricing cycles</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-slate-300 text-sm md:text-base">Continuous monitoring</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a 
              href="/contact" 
              className="group bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 inline-block shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule Custom Demo
              </span>
            </a>
            <a 
              href="/contact" 
              className="group border-2 border-slate-600 backdrop-blur-sm text-slate-300 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 hover:border-slate-500 transition-all duration-300 inline-block"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Get Pricing & ROI Analysis
              </span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No commitment required
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Custom pricing available
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Implementation support included
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
