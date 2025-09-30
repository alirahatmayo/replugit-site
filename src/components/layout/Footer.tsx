export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Company: [
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Platform', href: '/platform' },
      { name: 'Sustainability', href: '/sustainability' }
    ],
    Services: [
      { name: 'Device Refurbishment', href: '/refurbishing' },
      { name: 'Quality Assurance', href: '/services' },
      { name: 'Wholesale Solutions', href: '/wholesale' },
      { name: 'Environmental Impact', href: '/environmental-impact' }
    ],
    Resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Warranty Information', href: '/warranty' },
      { name: 'Best Buy Repricer', href: '/bestbuy-repricer' },
      { name: 'Privacy Policy', href: '/privacy' }
    ]
  }

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-4">
              <span className="text-primary-400">Re</span>
              <span className="text-white">plugit</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-xs">
              Your complete electronics lifecycle partner - from wholesale procurement and expert refurbishment to quality assurance, secure data wiping, and transparent environmental impact reporting.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/replugit" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200" aria-label="LinkedIn">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                </svg>
              </a>
              <a href="mailto:hello@replugit.com" className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200" aria-label="Email">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="font-semibold mb-2 text-primary-400">Email</h4>
              <p className="text-slate-300">hello@replugit.com</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary-400">Phone</h4>
              <a href="tel:+15485035000" className="text-slate-300 hover:text-primary-400 transition-colors duration-200">
                +1 (548) 503-5000
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary-400">WhatsApp</h4>
              <a href="https://chat.whatsapp.com/KdPqKlFB1eS6AO3I5mConi" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-primary-400 transition-colors duration-200">
                Join Community
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary-400">Hours</h4>
              <p className="text-slate-300">Mon-Fri 9AM-6PM EST</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} Replugit. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="/privacy" className="text-slate-400 hover:text-primary-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-slate-400 hover:text-primary-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
