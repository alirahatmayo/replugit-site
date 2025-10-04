'use client'

import Link from 'next/link'
import { CheckCircle, Home, Phone, Mail } from 'lucide-react'

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl"></div>
            <CheckCircle className="relative w-24 h-24 text-emerald-600" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Thank You!
        </h1>
        
        <p className="text-xl text-slate-600 mb-8">
          We've received your message and will get back to you shortly.
        </p>

        {/* Info Box */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            What Happens Next?
          </h2>
          
          <div className="space-y-4 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <p className="text-slate-600">
                Our team will review your inquiry within <strong className="text-slate-900">24 hours</strong>
              </p>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <p className="text-slate-600">
                You'll receive a personalized response via email or phone
              </p>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <p className="text-slate-600">
                We'll discuss how ReplugIT can help transform your business
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          
          <Link
            href="/services"
            className="inline-flex items-center justify-center space-x-2 border-2 border-slate-300 hover:border-emerald-600 text-slate-700 hover:text-emerald-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-emerald-50"
          >
            <span>Explore Services</span>
          </Link>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-slate-600 mb-4">Need immediate assistance?</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <a
              href="tel:+1234567890"
              className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
            
            <a
              href="mailto:info@replugit.com"
              className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-medium"
            >
              <Mail className="w-4 h-4" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
