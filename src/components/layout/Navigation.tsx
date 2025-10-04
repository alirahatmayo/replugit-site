'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Leaf, 
  Wrench, 
  Lightbulb, 
  Phone, 
  ShoppingCart,
  CheckCircle,
  FileText,
  Package,
  Shield,
  Award,
  DollarSign,
  BarChart3,
  Archive,
  ClipboardCheck
} from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  
  // Timeout refs for dropdown delays
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const solutionsTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) {
        clearTimeout(servicesTimeoutRef.current)
      }
      if (solutionsTimeoutRef.current) {
        clearTimeout(solutionsTimeoutRef.current)
      }
    }
  }, [])

  const navItems = [
    { 
      name: 'Services', 
      href: '/services',
      icon: Wrench,
      dropdown: [
        { name: 'Refurbishing', href: '/refurbishing', description: 'Professional electronics refurbishment', icon: Wrench },
        { name: 'QC and Auditing', href: '/qc-auditing', description: 'Quality control and auditing services', icon: CheckCircle },
        { name: 'Environmental Reporting', href: '/environmental-reporting', description: 'Sustainability impact tracking', icon: FileText },
        { name: 'Prep Services', href: '/prep-services', description: 'Device preparation and logistics', icon: Package },
        { name: 'Data Wiping', href: '/data-wiping', description: 'Secure data erasure services', icon: Shield }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/platform',
      icon: Lightbulb,
      dropdown: [
        { name: 'Warranty Program', href: '/warranty', description: 'Extended warranty coverage', icon: Award },
        { name: 'BestBuy Repricer', href: '/bestbuy-repricer', description: 'Automated pricing optimization', icon: DollarSign },
        { name: 'QC Platform', href: '/platform', description: 'Quality control management tools', icon: ClipboardCheck },
        { name: 'Inventory Management', href: '/platform#inventory', description: 'Smart inventory tracking system', icon: Archive },
        { name: 'Business Dashboard', href: '/platform#dashboard', description: 'Comprehensive business analytics', icon: BarChart3 }
      ]
    },
    { 
      name: 'Sustainability', 
      href: '/sustainability',
      icon: Leaf 
    }
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/60 shadow-xl shadow-slate-900/5' 
        : 'bg-white/90 backdrop-blur-lg border-b border-slate-100/60 shadow-lg shadow-slate-900/3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="text-2xl font-bold tracking-tight transition-all duration-300 group-hover:scale-105">
              <span className="text-emerald-600 font-bold">Re</span>
              <span className="text-slate-900 font-bold">plugit</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => {
                      if (item.name === 'Services') {
                        if (servicesTimeoutRef.current) {
                          clearTimeout(servicesTimeoutRef.current)
                        }
                        setIsServicesDropdownOpen(true)
                      }
                      if (item.name === 'Solutions') {
                        if (solutionsTimeoutRef.current) {
                          clearTimeout(solutionsTimeoutRef.current)
                        }
                        setIsSolutionsDropdownOpen(true)
                      }
                    }}
                    onMouseLeave={() => {
                      if (item.name === 'Services') {
                        servicesTimeoutRef.current = setTimeout(() => {
                          setIsServicesDropdownOpen(false)
                        }, 150)
                      }
                      if (item.name === 'Solutions') {
                        solutionsTimeoutRef.current = setTimeout(() => {
                          setIsSolutionsDropdownOpen(false)
                        }, 150)
                      }
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-2 px-5 py-2.5 text-base font-semibold rounded-xl transition-all duration-300 ${
                        isActive(item.href)
                          ? 'text-emerald-600 bg-emerald-50/80 shadow-sm' 
                          : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50/80 hover:shadow-sm'
                      }`}
                    >
                      {item.icon && <item.icon className="w-4 h-4" />}
                      <span className="font-semibold">{item.name}</span>
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    
                    {/* Dropdown Menu */}
                    {((item.name === 'Services' && isServicesDropdownOpen) || (item.name === 'Solutions' && isSolutionsDropdownOpen)) && (
                      <div className="absolute top-full left-0 pt-2 w-80 z-50">
                        <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-slate-200/60 py-3">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="flex items-center space-x-3 px-4 py-3 mx-2 text-sm hover:bg-slate-50/80 rounded-xl transition-all duration-200 hover:shadow-sm group"
                            >
                              {dropdownItem.icon && (
                                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                                  <dropdownItem.icon className="w-4 h-4 text-slate-600 group-hover:text-emerald-600" />
                                </div>
                              )}
                              <div>
                                <div className="font-semibold text-slate-900">{dropdownItem.name}</div>
                                <div className="text-slate-500 text-xs mt-0.5 font-normal leading-relaxed">{dropdownItem.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-2 px-5 py-2.5 text-base font-semibold rounded-xl transition-all duration-300 ${
                      isActive(item.href)
                        ? 'text-emerald-600 bg-emerald-50/80 shadow-sm' 
                        : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50/80 hover:shadow-sm'
                    }`}
                  >
                    {item.icon && <item.icon className="w-4 h-4" />}
                    <span className="font-semibold">{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/wholesale"
              className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 px-5 py-2.5 text-base font-semibold border border-emerald-200/80 rounded-xl hover:bg-emerald-50/80 hover:border-emerald-300 transition-all duration-300 hover:shadow-sm"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Wholesale Catalog</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-emerald-500/25"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Mobile CTA Buttons - Always Visible */}
          <div className="md:hidden flex items-center space-x-2">
            <Link
              href="/wholesale"
              className="text-emerald-600 hover:text-emerald-700 px-3 py-2 text-sm font-semibold border border-emerald-200/80 rounded-lg hover:bg-emerald-50/80 transition-all duration-300"
            >
              Catalog
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-slate-700 hover:text-emerald-600 hover:bg-slate-100/80 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all duration-300 hover:shadow-sm"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200/60">
          <div className="px-4 sm:px-6 pt-4 pb-6 space-y-3 max-h-[calc(100vh-6rem)] overflow-y-auto overscroll-contain">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-emerald-600 bg-emerald-50/80 shadow-sm' 
                      : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50/80 hover:shadow-sm'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon && <item.icon className="w-5 h-5" />}
                  <span>{item.name}</span>
                </Link>
                
                {/* Mobile Services Submenu */}
                {item.dropdown && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-sm font-semibold text-slate-600 hover:text-emerald-600 hover:bg-slate-50/80 rounded-xl transition-all duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Mobile CTA Buttons */}
            <div className="pt-4 space-y-3 border-t border-slate-200/60">
              <Link
                href="/wholesale"
                className="block w-full text-center text-emerald-600 border border-emerald-200/80 px-4 py-3 text-base font-semibold rounded-xl hover:bg-emerald-50/80 hover:border-emerald-300 transition-all duration-300 hover:shadow-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Wholesale Catalog
              </Link>
              <Link
                href="/contact"
                className="block w-full text-center bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
