export default function ContactPartnerSection() {
  return (
    <section className="pb-16 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Main Contact Card - Prominent */}
        <div className="bg-slate-800 rounded-2xl p-12 border border-slate-700 hover:border-emerald-400/50 transition-all duration-300 group mb-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl group-hover:shadow-emerald-400/40 transition-all duration-300">
              <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-3">Contact Us</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              For inquiries about our electronics refurbishment services, wholesale solutions, or general business questions.
            </p>
            
            <a 
              href="mailto:hello@replugit.com?subject=Business Inquiry - ReplugIT"
              className="inline-flex items-center justify-center bg-emerald-400 hover:bg-emerald-300 text-black py-4 px-8 rounded-xl text-lg font-semibold transition-all duration-300 shadow-xl shadow-emerald-400/30 hover:shadow-emerald-300/50 hover:scale-105 mb-4"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Send Email
            </a>
            
            <div className="flex items-center justify-center gap-2 text-slate-400">
              <span className="text-emerald-400 font-medium">hello@replugit.com</span>
              <span>•</span>
              <span className="text-sm">Response within 1 business day</span>
            </div>
          </div>
        </div>

        {/* Partnership Section - Smaller and Compact */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Partnership Inquiries</h3>
                <p className="text-slate-400 text-sm">Business partnerships and collaborations</p>
              </div>
            </div>
            <a 
              href="mailto:hello@replugit.com?subject=Partnership Inquiry - ReplugIT"
              className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Additional Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {/* Phone Contact */}
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-white font-medium">Phone</h4>
                <a href="tel:+1-548-503-5000" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">
                  (548) 503-5000
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp Contact */}
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488"/>
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-white font-medium">WhatsApp</h4>
                <a href="https://chat.whatsapp.com/KdPqKlFB1eS6AO3I5mConi" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">
                  Join Community
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Footer */}
        <div className="text-center mt-12 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>Toronto, Canada</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>Monday - Friday, 9 AM - 6 PM EST</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
