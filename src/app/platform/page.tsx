'use client'

import { useState } from 'react'
import { 
  Package,
  Shield,
  BarChart3,
  RefreshCw,
  FileText,
  Settings,
  Zap,
  CheckCircle,
  ArrowRight,
  Globe,
  Smartphone,
  TrendingUp,
  Database,
  Eye,
  Clock,
  Target,
  Wrench,
  Calculator,
  Mail
} from 'lucide-react'

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          ></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/10 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-500/15 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-emerald-400/20 to-transparent rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-300 rounded-full text-sm font-semibold mb-8 backdrop-blur-md border border-emerald-500/30">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <Settings className="w-4 h-4" />
              ReplugIT Platform & Tools
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-8">
              <span className="bg-gradient-to-r from-white via-slate-100 to-emerald-100 bg-clip-text text-transparent">
                Complete Electronics
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Lifecycle Platform
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
              From procurement to resale - a modular suite of tools that work independently or as part of our comprehensive platform.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Powerful Tools. <span className="text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text">Endless Possibilities.</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Build your perfect electronics management solution with our modular platform. Each tool works independently, 
              or combine them for a complete end-to-end system that scales with your business.
            </p>
            

          </div>

        </div>
      </section>

      {/* All Tools & Platform */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Platform Suite Tools */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-100 to-cyan-100 text-emerald-700 rounded-full text-sm font-semibold mb-6">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <Zap className="w-4 h-4" />
                Integrated Platform Suite
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Complete Business <span className="text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text">Automation</span>
              </h3>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Six powerful tools that integrate seamlessly to automate your entire electronics business workflow. 
                From procurement to customer delivery, every step is optimized for maximum efficiency and profitability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Order & Inventory Management */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Package className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-xs text-blue-600 bg-blue-50 rounded-full px-3 py-1 font-medium">
                    Core Platform
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Order & Inventory Hub</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  Centralized command center for all your marketplace operations with real-time synchronization.
                </p>
                <ul className="text-slate-600 space-y-2 mb-6 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Multi-platform management (Shopify, Walmart, BestBuy, Amazon)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Real-time inventory sync across all channels</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Advanced order lifecycle tracking & analytics</span>
                  </li>
                </ul>

              </div>

              {/* Manifest & SKU Mapping */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Manifest & SKU Mapping</h3>
                <ul className="text-slate-600 space-y-2 mb-6 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Bulk manifest uploading and processing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Automated SKU mapping and reconciliation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Error handling and data validation
                  </li>
                </ul>
                <div className="text-xs text-purple-600 bg-purple-50 rounded-lg p-3 font-medium">
                  Integrated Platform Tool
                </div>
              </div>

              {/* RMA Management */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <RefreshCw className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">RMA Management</h3>
                <ul className="text-slate-600 space-y-2 mb-6 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Partial and complete return processing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Automated refunds, replacements, exchanges
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Full integration with order management
                  </li>
                </ul>
                <div className="text-xs text-orange-600 bg-orange-50 rounded-lg p-3 font-medium">
                  Integrated Platform Tool
                </div>
              </div>

              {/* Analytics & Insights */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Analytics & Business Intelligence</h3>
                <ul className="text-slate-600 space-y-2 mb-6 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Comprehensive sales performance dashboards
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Inventory turnover and profitability tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Warranty claims analysis and trends
                  </li>
                </ul>
                <div className="text-xs text-indigo-600 bg-indigo-50 rounded-lg p-3 font-medium">
                  Integrated Platform Tool
                </div>
              </div>

              {/* Compliance & Reporting */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Compliance & Reporting</h3>
                <ul className="text-slate-600 space-y-2 mb-6 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Data erasure certification and audit trails
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Regulatory compliance documentation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Automated compliance reporting
                  </li>
                </ul>
                <div className="text-xs text-green-600 bg-green-50 rounded-lg p-3 font-medium">
                  Integrated Platform Tool
                </div>
              </div>

              {/* Integration Hub */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">API & Integrations</h3>
                <ul className="text-slate-600 space-y-2 mb-6 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    RESTful APIs for all platform functions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Third-party system integrations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Custom workflow automation
                  </li>
                </ul>
                <div className="text-xs text-cyan-600 bg-cyan-50 rounded-lg p-3 font-medium">
                  Integrated Platform Tool
                </div>
              </div>

            </div>
          </div>

          {/* Standalone Tools */}
          <div>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full text-sm font-semibold mb-6">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <Target className="w-4 h-4" />
                Specialized Solutions
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Purpose-Built <span className="text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">Power Tools</span>
              </h3>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Three specialized tools designed to solve specific business challenges. Use them independently 
                for targeted solutions, or integrate with our platform suite for comprehensive automation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              
              {/* QC Tool */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Wrench className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-xs text-blue-600 bg-blue-50 rounded-full px-3 py-1 font-medium inline-block">
                    Standalone Solution
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3 text-center">QC Testing Engine</h3>
                <p className="text-slate-600 text-center mb-6 text-sm leading-relaxed">
                  Automated testing system with comprehensive diagnostic checks 
                  and professional-grade reporting for accurate device grading.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 text-sm">Comprehensive Tests</div>
                      <div className="text-xs text-slate-500">Hardware, software & performance</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 text-sm">Professional Reports</div>
                      <div className="text-xs text-slate-500">Detailed PDF & JSON exports</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 text-sm">Grade Classification</div>
                      <div className="text-xs text-slate-500">A, B, C grading with photos</div>
                    </div>
                  </div>
                </div>
                

              </div>

              {/* Warranty Tool */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Warranty Management</h3>
                <p className="text-slate-600 text-center mb-6">
                  Complete warranty lifecycle management from activation to claims processing.
                </p>
                <ul className="text-slate-600 space-y-2 mb-8 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Automated warranty activation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Extended warranty options
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Claims tracking system
                  </li>
                </ul>
                <div className="text-center">
                  <div className="text-xs text-emerald-600 bg-emerald-50 rounded-lg p-3 mb-2 font-medium">
                    Standalone Tool
                  </div>
                  <div className="text-xs text-slate-500">
                    Can integrate with Platform Suite
                  </div>
                </div>
              </div>

              {/* BestBuy Repricer */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">BestBuy Repricer</h3>
                <p className="text-slate-600 text-center mb-6">
                  Automated competitive pricing and Buy Box optimization for BestBuy marketplace.
                </p>
                <ul className="text-slate-600 space-y-2 mb-8 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    24/7 automated repricing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Buy Box optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Competitive analytics
                  </li>
                </ul>
                <div className="text-center">
                  <div className="text-xs text-orange-600 bg-orange-50 rounded-lg p-3 mb-2 font-medium">
                    Standalone Tool
                  </div>
                  <div className="text-xs text-slate-500">
                    Can integrate with Platform Suite
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400 rounded-full opacity-60 animate-ping"></div>
          <div className="absolute top-32 right-20 w-1 h-1 bg-cyan-400 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute bottom-20 left-32 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-50 animate-ping" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 right-16 w-1 h-1 bg-purple-400 rounded-full opacity-60 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          
          <div className="mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-300 rounded-full text-sm font-semibold mb-8 backdrop-blur-md border border-emerald-500/30">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <Zap className="w-4 h-4" />
              Transform Your Business Today
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-slate-100 to-emerald-100 bg-clip-text text-transparent">
                Ready to Scale Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Electronics Business?
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Choose individual tools for specific needs, or leverage our complete platform for end-to-end management.
            </p>
            
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-12 max-w-2xl mx-auto border border-white/20">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-4">Get Started Today</h3>
                <p className="text-slate-300 mb-4">
                  Ready to discuss your specific needs? Contact us directly:
                </p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <a 
                    href="mailto:hello@replugit.com" 
                    className="text-emerald-300 hover:text-emerald-200 font-medium transition-colors duration-200"
                  >
                    hello@replugit.com
                  </a>
                </div>
                <p className="text-sm text-slate-400">
                  Please include a clear subject line describing your interest (e.g., "Platform Demo Request" or "QC Tool Inquiry")
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-emerald-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Complete Platform Suite</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                End-to-end automation for serious electronics businesses ready to scale rapidly
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-left">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-300">All 9 tools fully integrated</span>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-300">Dedicated success manager</span>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-300">White-glove implementation</span>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-300">Priority support & training</span>
                </div>
              </div>
              <div className="text-center">

              </div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Individual Tools</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Purpose-built solutions for specific challenges with easy integration options
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-left">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-300">Start with what you need most</span>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-300">Fast 2-week implementation</span>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-300">Flexible month-to-month pricing</span>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-300">Easy upgrade to full platform</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-cyan-300 font-medium mb-2">Perfect for testing our capabilities</div>
              </div>
            </div>
          </div>

          {/* Hidden for now */}
          {/* <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-12 py-5 text-lg font-semibold rounded-2xl shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300">
              <span className="flex items-center gap-3">
                <Eye className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Schedule Live Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            <button className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-12 py-5 text-lg font-semibold rounded-2xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105">
              <span className="flex items-center gap-3">
                <Calculator className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Calculate Your ROI
              </span>
            </button>
          </div> */}

          {/* Trust Indicators */}


        </div>
      </section>
    </main>
  )
}
