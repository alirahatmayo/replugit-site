'use client'
import React, { useState } from 'react'

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState<'contact' | 'partner'>('contact')

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Drawer */}
      <div className="lg:hidden">
        <div className="p-6 bg-gray-50">
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setActiveTab('contact')}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${
                activeTab === 'contact'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300'
              }`}
            >
              Contact Us
            </button>
            <button
              onClick={() => setActiveTab('partner')}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${
                activeTab === 'partner'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300'
              }`}
            >
              Partner With Us
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            {activeTab === 'contact' ? (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 mb-6">Get in touch with our team</p>
                <form className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
                  <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
                  <textarea placeholder="Your Message" rows={4} className="w-full p-3 border rounded-lg"></textarea>
                  <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold">
                    Send Message
                  </button>
                </form>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Partner With Us</h2>
                <p className="text-gray-600 mb-6">Join our partner network</p>
                <form className="space-y-4">
                  <input type="text" placeholder="Company Name" className="w-full p-3 border rounded-lg" />
                  <input type="email" placeholder="Business Email" className="w-full p-3 border rounded-lg" />
                  <select className="w-full p-3 border rounded-lg">
                    <option>Partnership Type</option>
                    <option>Technology Partner</option>
                    <option>Service Partner</option>
                    <option>Reseller Partner</option>
                  </select>
                  <textarea placeholder="Tell us about your business" rows={4} className="w-full p-3 border rounded-lg"></textarea>
                  <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold">
                    Apply for Partnership
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto py-16 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-8">Get in touch with our team</p>
              <form className="space-y-6">
                <input type="text" placeholder="Your Name" className="w-full p-4 border rounded-lg" />
                <input type="email" placeholder="Your Email" className="w-full p-4 border rounded-lg" />
                <textarea placeholder="Your Message" rows={5} className="w-full p-4 border rounded-lg"></textarea>
                <button className="w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold text-lg">
                  Send Message
                </button>
              </form>
            </div>

            {/* Partnership Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner With Us</h2>
              <p className="text-gray-600 mb-8">Join our partner network</p>
              <form className="space-y-6">
                <input type="text" placeholder="Company Name" className="w-full p-4 border rounded-lg" />
                <input type="email" placeholder="Business Email" className="w-full p-4 border rounded-lg" />
                <select className="w-full p-4 border rounded-lg">
                  <option>Partnership Type</option>
                  <option>Technology Partner</option>
                  <option>Service Partner</option>
                  <option>Reseller Partner</option>
                </select>
                <textarea placeholder="Tell us about your business" rows={5} className="w-full p-4 border rounded-lg"></textarea>
                <button className="w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold text-lg">
                  Apply for Partnership
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
