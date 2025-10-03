import { Metadata } from 'next'
import { 
  Wrench, 
  Shield, 
  Recycle, 
  CheckCircle, 
  Clock, 
  Award,
  Smartphone,
  Laptop,
  Monitor,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Device Refurbishment Services | Replugit',
  description: 'Professional device refurbishment services. We restore electronics to like-new condition with quality testing and warranty coverage.',
}

export default function DeviceRefurbishmentPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
        <div className="max-w-6xl mx-auto text-center text-white">
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm text-blue-300 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-blue-500/30">
            <Wrench className="w-4 h-4" />
            <span>Professional Refurbishment</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Device Refurbishment
            <span className="block text-blue-400">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Transform your used electronics into like-new condition with our comprehensive refurbishment process. Quality testing, repairs, and warranty included.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
              <Phone className="w-5 h-5" />
              Get Quote
            </a>
            <a href="#process" className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-3">
              <Wrench className="w-5 h-5" />
              View Process
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Professional Refurbishment Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We bring damaged and used devices back to life with industry-leading refurbishment processes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Complete Restoration</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Full hardware inspection, component replacement, and software restoration to factory specifications.
              </p>
              <ul className="text-slate-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">Hardware diagnostics & repair</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">Component replacement</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">Software reinstallation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Quality Testing</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Rigorous testing protocols ensure every device meets our high standards before delivery.
              </p>
              <ul className="text-slate-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Multi-point inspection</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Performance benchmarking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Quality certification</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Warranty Coverage</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                All refurbished devices come with comprehensive warranty coverage for your peace of mind.
              </p>
              <ul className="text-slate-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500" />
                  <span className="text-sm">90-day warranty included</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500" />
                  <span className="text-sm">Extended warranty options</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500" />
                  <span className="text-sm">Support & service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Device Types */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Devices We Refurbish</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional refurbishment services for a wide range of electronic devices
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Mobile Devices</h3>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• Smartphones & tablets</li>
                <li>• Screen replacements</li>
                <li>• Battery replacements</li>
                <li>• Water damage repair</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Laptop className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Laptops</h3>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• Complete refurbishment</li>
                <li>• Hardware upgrades</li>
                <li>• Operating system refresh</li>
                <li>• Performance optimization</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Desktops</h3>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• Full system restoration</li>
                <li>• Component upgrades</li>
                <li>• Cleaning & maintenance</li>
                <li>• Software installation</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Recycle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Other Devices</h3>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• Gaming consoles</li>
                <li>• Audio equipment</li>
                <li>• Networking devices</li>
                <li>• Custom electronics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Refurbishment Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A systematic approach to bringing your devices back to life
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Initial Assessment</h3>
              <p className="text-slate-600">
                Comprehensive diagnostic to identify all issues and determine refurbishment scope
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Repair & Restore</h3>
              <p className="text-slate-600">
                Professional repair work including component replacement and hardware restoration
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Testing & QA</h3>
              <p className="text-slate-600">
                Rigorous testing protocols to ensure device meets quality standards
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Final Delivery</h3>
              <p className="text-slate-600">
                Device packaging with warranty documentation and quality certification
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Get Your Devices Refurbished</h2>
          <p className="text-xl text-slate-600 mb-12">
            Ready to restore your electronics to like-new condition? Contact our refurbishment specialists today.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-200">
              <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Call for Quote</h3>
              <p className="text-slate-600 mb-6">
                Speak directly with our technicians to discuss your refurbishment needs
              </p>
              <a 
                href="tel:+15485035000" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                +1 (548) 503-5000
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-green-200">
              <div className="w-20 h-20 bg-green-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Email for Details</h3>
              <p className="text-slate-600 mb-6">
                Send us details about your devices and get a detailed refurbishment quote
              </p>
              <a 
                href="mailto:refurbishment@replugit.com" 
                className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <Mail className="w-5 h-5" />
                refurbishment@replugit.com
              </a>
            </div>
          </div>

          {/* Location Info */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-slate-600">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Kitchener-Waterloo, Ontario</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Mon-Fri 9AM-6PM EST</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="font-medium">90-Day Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
