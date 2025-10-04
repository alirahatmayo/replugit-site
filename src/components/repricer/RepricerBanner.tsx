import React from 'react';

const RepricerBanner = () => (
  <section className="relative min-h-[500px] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]"></div>
    
    <div className="relative max-w-7xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Content */}
        <div className="text-center lg:text-left">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium mb-4 border border-white/20">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            Best Buy Canada Repricing
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Dominate Best Buy Canada with
            <span className="block text-blue-400">
              Intelligent Repricing
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed">
            Stay competitive 24/7 with AI-powered pricing that maximizes profits and wins
            <span className="text-blue-400 font-semibold"> 30% more Buy Boxes</span>
          </p>
          
          {/* Key Benefits List */}
          <div className="mb-6 space-y-2">
            <div className="flex items-center gap-3 text-slate-300 text-sm">
              <div className="w-5 h-5 bg-slate-700 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Real-time competitor monitoring & instant price adjustments</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300 text-sm">
              <div className="w-5 h-5 bg-slate-700 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Automated Buy Box optimization & margin protection</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300 text-sm">
              <div className="w-5 h-5 bg-slate-700 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Scale across thousands of SKUs with zero manual work</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <a 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-2xl transition-all transform hover:scale-105 shadow-lg group inline-block text-center"
            >
              <span className="flex items-center gap-2 justify-center">
                Schedule Demo
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            <a 
              href="/contact" 
              className="border-2 border-slate-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all inline-block text-center"
            >
              Get Pricing
            </a>
          </div>
          
          {/* Social Proof */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-slate-400 text-xs">
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No setup fees
            </span>
            <span>•</span>
            <span>Flexible pricing options</span>
            <span>•</span>
            <span>ROI guarantee</span>
          </div>
        </div>
        
        {/* Right Side - Enhanced Repricing Dashboard */}
        <div className="hidden lg:block relative">
          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-2xl">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-gray-800 font-bold text-lg">BB-Repricer Dashboard</h3>
                  <p className="text-gray-500 text-sm">Real-time competitive intelligence</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              
              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-2xl font-bold text-blue-700">2,847</div>
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 font-medium">Active SKUs</div>
                  <div className="text-xs text-green-600 font-semibold">↗ +347 this month</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-2xl font-bold text-green-700">67.3%</div>
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 font-medium">Buy Box Win Rate</div>
                  <div className="text-xs text-green-600 font-semibold">↗ +12.3% vs last quarter</div>
                </div>
              </div>
              
              {/* Live Pricing Example */}
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Dell Latitude 7410 - Live Pricing</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-semibold">Winning Buy Box</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-blue-600 font-semibold">Your Price</span>
                    <span className="text-sm font-bold text-green-600">$459.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Competitor A</span>
                    <span className="text-sm text-gray-600">$462.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Competitor B</span>
                    <span className="text-sm text-gray-600">$465.00</span>
                  </div>
                </div>
              </div>

              {/* Recent Actions */}
              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-700 mb-2">Recent Actions</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Samsung TV - Price adjusted to $1,299</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">Apple Watch - Competitor alert at $349</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">HP Laptop - Buy Box won at $599</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Floating Elements */}
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                  <path fillRule="evenodd" d="M5.293 4.293a1 1 0 011.414 0L10 7.586l3.293-3.293a1 1 0 111.414 1.414L11.414 9l3.293 3.293a1 1 0 01-1.414 1.414L10 10.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 9 5.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
                30% More Buy Boxes
              </div>
            </div>
            <div className="absolute -bottom-3 -left-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
                24/7 Monitoring
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default RepricerBanner;
