'use client'

import { useState } from 'react'
import { RepricerBanner } from '@/components/repricer'

export default function BestBuyRepricerPage() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('starter')
  const [monthlySKUs, setMonthlySKUs] = useState(500)
  const [currentRevenue, setCurrentRevenue] = useState(50000)
  const [buyBoxRate, setBuyBoxRate] = useState(45)

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  // Calculate potential gains
  const potentialRevenue = Math.round(currentRevenue * 1.23) // 23% increase
  const additionalRevenue = potentialRevenue - currentRevenue
  const timeSaved = Math.round(monthlySKUs * 0.9) // 90% time reduction

  return (
    <main className="min-h-screen bg-white">
      <RepricerBanner />

      {/* The Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Stop Losing Sales to Manual Price Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every minute you spend manually checking competitor prices is a missed opportunity to win the Buy Box
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Competitors Never Sleep</h3>
              <p className="text-gray-600">
                While you're away from your computer, competitors are adjusting prices and stealing your Buy Box wins.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Manual Price Checking is Exhausting</h3>
              <p className="text-gray-600">
                Checking hundreds of SKUs daily for price changes is time-consuming and leads to missed opportunities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Profit Erosion from Price Wars</h3>
              <p className="text-gray-600">
                Without smart thresholds, you risk selling below cost or missing profitable pricing opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How BB-Repricer Works Behind the Scenes
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Understand exactly what happens when you activate automated repricing and how it drives real results
            </p>
          </div>

          {/* Detailed Process */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Real-Time Market Intelligence</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">🔍 What We Monitor Every 30 Minutes:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                      <span><strong>Competitor Prices:</strong> Track all sellers offering the same SKU and their current pricing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                      <span><strong>Inventory Levels:</strong> See how much stock competitors have (low stock = pricing opportunity)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                      <span><strong>Buy Box Status:</strong> Know instantly if you're winning, losing, or tied for the Buy Box</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                      <span><strong>Price Gaps:</strong> Identify opportunities to raise prices when you have a competitive advantage</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">💡 Smart Decision Making:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                      <span><strong>Profit Protection:</strong> Never drop below your minimum acceptable margin</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                      <span><strong>Inventory Intelligence:</strong> Avoid price wars with sellers who have low stock</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                      <span><strong>Strategic Pricing:</strong> Increase prices when you have significant competitive advantages</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                      <span><strong>Market Timing:</strong> React to competitor moves within 30 minutes, not days</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step by Step Process */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">1. Product Setup</h3>
              <p className="text-gray-600 mb-4">
                Add your SKUs, set your cost basis, and define profit thresholds.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg text-sm">
                <strong>Example:</strong> iPhone case costs you $8, minimum 40% margin = $11.20 floor price
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">2. Continuous Monitoring</h3>
              <p className="text-gray-600 mb-4">
                System checks competitor prices and market conditions every 30 minutes.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg text-sm">
                <strong>Result:</strong> Competitor drops to $14.99, you're currently at $16.99 and losing sales
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Smart Analysis</h3>
              <p className="text-gray-600 mb-4">
                Algorithm calculates optimal price considering profit margins and market conditions.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg text-sm">
                <strong>Decision:</strong> Adjust to $14.89 (still 86% margin) to win Buy Box
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">4. Automatic Execution</h3>
              <p className="text-gray-600 mb-4">
                Price updated instantly, Buy Box reclaimed, sales resume.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg text-sm">
                <strong>Outcome:</strong> Back to winning Buy Box within 30 minutes, no sales lost
              </div>
            </div>
          </div>

          {/* Real Scenarios */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Real-World Scenarios & Outcomes</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-gray-900 mb-3">🎯 Scenario 1: Competitor Price Drop</h4>
                <p className="text-gray-700 text-sm mb-3">
                  <strong>Situation:</strong> Competitor drops from $49.99 to $45.99 at 2 AM while you sleep.
                </p>
                <p className="text-green-700 text-sm">
                  <strong>BB-Repricer Action:</strong> Automatically adjusts your price to $45.89 by 2:30 AM, maintaining Buy Box and protecting overnight sales.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-gray-900 mb-3">💰 Scenario 2: Low Competition</h4>
                <p className="text-gray-700 text-sm mb-3">
                  <strong>Situation:</strong> Main competitor runs out of stock, next closest price is $15 higher.
                </p>
                <p className="text-green-700 text-sm">
                  <strong>BB-Repricer Action:</strong> Gradually increases your price to maximize profit while maintaining Buy Box dominance.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-gray-900 mb-3">🛡️ Scenario 3: Price War Protection</h4>
                <p className="text-gray-700 text-sm mb-3">
                  <strong>Situation:</strong> Competitor starts selling below cost to liquidate inventory.
                </p>
                <p className="text-green-700 text-sm">
                  <strong>BB-Repricer Action:</strong> Respects your minimum margin, doesn't follow unprofitable pricing, preserves your profitability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics & Intelligence Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced Analytics & Market Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Make data-driven pricing decisions with comprehensive market insights and performance analytics
            </p>
          </div>

          {/* Analytics Overview */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">📊 Performance Analytics Dashboard</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">Buy Box Win Rate Tracking</h4>
                  <p className="text-gray-700 mb-3">
                    Monitor your Buy Box performance across all SKUs with detailed win/loss analytics.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Daily, weekly, monthly Buy Box win percentages</li>
                    <li>• SKU-level performance breakdowns</li>
                    <li>• Historical trends and performance patterns</li>
                    <li>• Competitor comparison charts</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">Revenue Impact Analysis</h4>
                  <p className="text-gray-700 mb-3">
                    Track how repricing decisions directly impact your sales and profitability.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Revenue attribution to pricing changes</li>
                    <li>• Profit margin optimization tracking</li>
                    <li>• Sales velocity improvements</li>
                    <li>• ROI calculations from repricing activities</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">Pricing History & Trends</h4>
                  <p className="text-gray-700 mb-3">
                    Complete audit trail of all pricing decisions and their outcomes.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Detailed price change logs with timestamps</li>
                    <li>• Before/after performance comparisons</li>
                    <li>• Automated vs. manual pricing effectiveness</li>
                    <li>• Seasonal pricing pattern identification</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🎯 Competitive Intelligence</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">Competitor Behavior Analysis</h4>
                  <p className="text-gray-700 mb-3">
                    Deep insights into competitor pricing strategies and market positioning.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Competitor price change frequency patterns</li>
                    <li>• Average price positioning vs. market</li>
                    <li>• Aggressive vs. conservative pricing identification</li>
                    <li>• Response time analysis to market changes</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">Market Share Analytics</h4>
                  <p className="text-gray-700 mb-3">
                    Understand your position in the market and identify growth opportunities.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Your market share percentage by SKU</li>
                    <li>• Top competitor market share tracking</li>
                    <li>• Market concentration analysis</li>
                    <li>• Opportunity gap identification</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-yellow-500">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">Inventory Intelligence</h4>
                  <p className="text-gray-700 mb-3">
                    Leverage competitor inventory data for strategic pricing decisions.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Competitor stock level monitoring</li>
                    <li>• Low inventory opportunity alerts</li>
                    <li>• Seasonal inventory pattern analysis</li>
                    <li>• Supply constraint impact on pricing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics Features by Plan */}
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 text-white mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-yellow-300">Analytics Features by Plan Level</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="font-bold text-lg mb-4 text-blue-300">📈 Basic Plan Analytics</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Real-time Buy Box status tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Competitor price comparison tables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Profit margin calculations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Basic performance summaries</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="font-bold text-lg mb-4 text-yellow-300">⚡ Professional Plan Analytics</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Everything in Basic, plus:</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Automated repricing performance reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Historical trend analysis (30 days)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Competitor inventory level insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Weekly performance email summaries</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="font-bold text-lg mb-4 text-purple-300">🚀 Enterprise Plan Analytics</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Everything in Professional, plus:</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Advanced competitor sales volume analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Market share analysis & benchmarking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Custom reporting and data exports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Predictive pricing recommendations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Actionable Insights */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">🎯 How Analytics Drive Better Decisions</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6">📊 Example Analytics Insights</h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                    <h5 className="font-semibold text-gray-900 mb-2">Buy Box Performance Alert</h5>
                    <p className="text-sm text-gray-700">
                      <strong>Insight:</strong> "Your iPhone 15 case has a 78% Buy Box win rate, but drops to 23% between 6-8 PM when Competitor A activates aggressive pricing."
                    </p>
                    <p className="text-sm text-green-700 mt-2">
                      <strong>Action:</strong> Set time-based pricing rules to compete more aggressively during peak hours.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                    <h5 className="font-semibold text-gray-900 mb-2">Revenue Opportunity Detection</h5>
                    <p className="text-sm text-gray-700">
                      <strong>Insight:</strong> "Competitor B is out of stock for 3 days. Your closest competitor is priced $12 higher. Opportunity to increase price by $8 while maintaining Buy Box."
                    </p>
                    <p className="text-sm text-green-700 mt-2">
                      <strong>Action:</strong> Automatically increase prices to maximize profit during competitor stock-outs.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
                    <h5 className="font-semibold text-gray-900 mb-2">Competitive Behavior Pattern</h5>
                    <p className="text-sm text-gray-700">
                      <strong>Insight:</strong> "Competitor C follows your price changes within 4 hours, but never goes below $15.99, suggesting this is their cost threshold."
                    </p>
                    <p className="text-sm text-green-700 mt-2">
                      <strong>Action:</strong> Set aggressive pricing strategy knowing competitor's limit, gain sustainable advantage.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6">📈 Strategic Applications</h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">📅 Seasonal Planning</h5>
                    <p className="text-gray-700 text-sm">
                      Use historical data to predict seasonal price fluctuations and plan inventory accordingly. Identify which SKUs perform best during specific periods.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">🏆 Portfolio Optimization</h5>
                    <p className="text-gray-700 text-sm">
                      Identify your strongest performing SKUs and allocate more resources to high-ROI products. Discover underperforming items that need attention.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">💡 New Product Pricing</h5>
                    <p className="text-gray-700 text-sm">
                      Use competitive intelligence to price new products optimally from launch. Understand market positioning and profit potential before listing.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">⚠️ Risk Management</h5>
                    <p className="text-gray-700 text-sm">
                      Early warning system for aggressive competitors, market disruptions, or pricing anomalies that could impact your profitability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Results Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-yellow-200 bg-clip-text text-transparent">
              What Sellers Actually Achieve with BB-Repricer
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Real outcomes from real sellers who automated their pricing strategy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-300">📈 Revenue & Sales Impact</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-green-400 pl-6">
                  <h4 className="font-bold text-lg text-green-300 mb-2">23% Average Revenue Increase</h4>
                  <p className="text-blue-100 text-sm">
                    Sellers win more Buy Boxes, capture more sales, and reduce lost opportunities from manual price management delays.
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-400 pl-6">
                  <h4 className="font-bold text-lg text-yellow-300 mb-2">40% More Buy Box Wins</h4>
                  <p className="text-blue-100 text-sm">
                    Faster response times mean you capture sales that would otherwise go to slower-reacting competitors.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-400 pl-6">
                  <h4 className="font-bold text-lg text-purple-300 mb-2">Recover Lost Overnight Sales</h4>
                  <p className="text-blue-100 text-sm">
                    System works 24/7, ensuring you don't lose sales during off-hours when competitors make price changes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-300">💰 Profitability & Efficiency</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-green-400 pl-6">
                  <h4 className="font-bold text-lg text-green-300 mb-2">Maintain Profit Margins</h4>
                  <p className="text-blue-100 text-sm">
                    Built-in thresholds prevent you from ever selling below your acceptable profit levels, even during price wars.
                  </p>
                </div>
                
                <div className="border-l-4 border-orange-400 pl-6">
                  <h4 className="font-bold text-lg text-orange-300 mb-2">Save 15+ Hours Weekly</h4>
                  <p className="text-blue-100 text-sm">
                    Eliminate daily price checking routines and manual price updates across hundreds of SKUs.
                  </p>
                </div>
                
                <div className="border-l-4 border-pink-400 pl-6">
                  <h4 className="font-bold text-lg text-pink-300 mb-2">Identify Revenue Opportunities</h4>
                  <p className="text-blue-100 text-sm">
                    System alerts you when competitors are out of stock or priced high, allowing strategic price increases.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-8 text-center text-yellow-300">Typical Seller Journey</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-red-500/20 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">😤</span>
                </div>
                <h4 className="font-bold text-lg mb-3 text-red-300">Before BB-Repricer</h4>
                <ul className="text-sm text-blue-100 space-y-2">
                  <li>• Spending 2-3 hours daily checking prices</li>
                  <li>• Losing sales to faster competitors</li>
                  <li>• Missing overnight price changes</li>
                  <li>• Inconsistent Buy Box performance</li>
                  <li>• Stress about pricing decisions</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-500/20 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-bold text-lg mb-3 text-yellow-300">First 30 Days</h4>
                <ul className="text-sm text-blue-100 space-y-2">
                  <li>• Set up automated rules for all SKUs</li>
                  <li>• Start winning more Buy Boxes</li>
                  <li>• Free up time for business growth</li>
                  <li>• See immediate revenue increases</li>
                  <li>• Gain confidence in pricing strategy</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="bg-green-500/20 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="font-bold text-lg mb-3 text-green-300">Long-term Success</h4>
                <ul className="text-sm text-blue-100 space-y-2">
                  <li>• 20-30% revenue growth achieved</li>
                  <li>• Consistent Buy Box dominance</li>
                  <li>• Focus shifted to scaling catalog</li>
                  <li>• Optimized profit margins maintained</li>
                  <li>• Competitive advantage established</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm px-6 py-3 rounded-full text-green-300 border border-green-400/30">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">These results are typical when sellers follow our recommended setup and pricing strategies</span>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Repricing Strategy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From manual control to advanced automation - find the perfect fit for your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Plan</h3>
              <p className="text-gray-600 mb-6">Manual repricing with competitor intelligence</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Current listing win/lose status</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Competitor price monitoring</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Manual price updates</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Profit percentage tracking</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-6">Perfect for sellers who want visibility and control over pricing decisions</p>
            </div>

            {/* Professional Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Plan</h3>
              <p className="text-gray-600 mb-6">Automated repricing with smart protection</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Everything in Basic, plus:</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Automated repricing every 30 minutes</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Minimum profit threshold protection</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Competitor inventory intelligence</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Smart logic for low inventory scenarios</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-6">Perfect for active sellers who want automation while maintaining profit margins</p>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Plan</h3>
              <p className="text-gray-600 mb-6">Advanced analytics & dual-threshold strategy</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Everything in Professional, plus:</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-purple-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Sales volume analytics by competitor</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-purple-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Upper & lower price threshold strategy</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-purple-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Automatic price increase opportunities</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-purple-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Maximum profit optimization</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-6">Perfect for high-volume sellers who want sophisticated pricing strategies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400/10 rounded-full blur-xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Limited Time Offer
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-yellow-200 bg-clip-text text-transparent">
              Ready to Dominate Best Buy Canada?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join smart sellers who use BB-Repricer to automate their pricing and win more Buy Boxes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-green-300 mb-2">50K+</div>
              <div className="text-blue-200 text-sm md:text-base">SKUs monitored daily</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-purple-300 mb-2">30min</div>
              <div className="text-blue-200 text-sm md:text-base">Automated repricing cycles</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-orange-300 mb-2">24/7</div>
              <div className="text-blue-200 text-sm md:text-base">Continuous monitoring</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a 
              href="/contact" 
              className="group bg-gradient-to-r from-yellow-400 to-orange-400 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 inline-block transform hover:scale-105 shadow-lg hover:shadow-xl"
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
              className="group border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 inline-block transform hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Get Pricing & ROI Analysis
              </span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-blue-200 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No commitment required
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Custom pricing available
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
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
