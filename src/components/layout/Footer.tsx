export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Company: [
      { name: 'About', href: '#' },
      { name: 'How It Works', href: '#process' },
      { name: 'Why Choose Us', href: '#difference' },
      { name: 'Contact', href: '/contact' }
    ],
    Services: [
      { name: 'Device Refurbishment', href: '/refurbishing' },
      { name: 'Quality Testing', href: '#' },
      { name: 'Data Wiping', href: '#' },
      { name: 'Environmental Reports', href: '#environmental' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Data Security', href: '#' },
      { name: 'Certifications', href: '#' }
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
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                <div className="w-5 h-5 bg-white rounded opacity-90"></div>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-sky-500 to-sky-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                <div className="w-4 h-4 bg-white rounded-full opacity-90"></div>
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
            <a href="#" className="text-slate-400 hover:text-primary-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-primary-400 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 hover:text-primary-400 text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
