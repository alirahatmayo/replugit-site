import React from 'react';

const WarrantyBanner = () => (
  <section className="relative min-h-[500px] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]"></div>
    
    <div className="relative max-w-7xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Content */}
        <div className="text-center lg:text-left">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium mb-4 border border-white/20">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            Professional Warranty Management
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Stop Losing Money to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Warranty Chaos
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 mb-6 leading-relaxed">
            Transform your Excel nightmare into an automated warranty powerhouse that saves vendors
            <span className="text-yellow-300 font-semibold"> 40% on admin costs</span>
          </p>
          
          {/* Key Benefits List - Enhanced */}
          <div className="mb-6 space-y-2">
            <div className="flex items-center gap-3 text-blue-200 text-sm">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Automated claim processing & real-time analytics</span>
            </div>
            <div className="flex items-center gap-3 text-blue-200 text-sm">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Customer self-service portal & 24/7 support</span>
            </div>
            <div className="flex items-center gap-3 text-blue-200 text-sm">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Protects E-Commerce Platform seller response metrics</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:shadow-2xl transition-all transform hover:scale-105 shadow-lg group">
              <span className="flex items-center gap-2">
                Start Free Trial
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all">
              Watch Demo
            </button>
          </div>
          
          {/* Social Proof - Condensed */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-blue-200 text-xs">
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No setup fees
            </span>
            <span>•</span>
            <span>30-day free trial</span>
            <span>•</span>
            <span>Cancel anytime</span>
          </div>
        </div>
        
        {/* Right Side - Enhanced Dashboard */}
        <div className="hidden lg:block relative">
          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-2xl">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-gray-800 font-bold text-lg">Warranty Analytics</h3>
                  <p className="text-gray-500 text-sm">Real-time dashboard</p>
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
                    <div className="text-2xl font-bold text-blue-700">1,247</div>
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 font-medium">Active Claims</div>
                  <div className="text-xs text-green-600 font-semibold">↗ +12% this month</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-2xl font-bold text-green-700">98.5%</div>
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 font-medium">Resolution Rate</div>
                  <div className="text-xs text-green-600 font-semibold">↗ +5.2% vs last quarter</div>
                </div>
              </div>
              
              {/* Enhanced Progress Section */}
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Average Processing Time</span>
                    <span className="text-sm font-bold text-blue-600">2.3 days</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full w-4/5 relative">
                      <div className="absolute right-0 top-0 w-2 h-3 bg-blue-700 rounded-r-full"></div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">85% faster than industry average</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Customer Satisfaction</span>
                    <span className="text-sm font-bold text-green-600">4.8/5.0</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full w-11/12 relative">
                      <div className="absolute right-0 top-0 w-2 h-3 bg-green-700 rounded-r-full"></div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">92% recommend our service</div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Floating Elements */}
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                </svg>
                40% Cost Savings
              </div>
            </div>
            <div className="absolute -bottom-3 -left-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
                24/7 Automated
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WarrantyBanner;
