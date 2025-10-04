import { Metadata } from 'next'
import { 
  Package,
  Users,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  MessageCircle,
  Mail,
  Phone,
  Truck,
  Globe,
  Smartphone,
  Monitor,
  Server
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Wholesale Electronics Distribution | Replugit',
  description: 'Professional wholesale electronics distribution for retailers, resellers, and enterprises. Bulk pricing, reliable supply, and business support.',
}

export default function WholesalePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900">
        <div className="max-w-6xl mx-auto text-center text-white">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/20 backdrop-blur-sm text-emerald-300 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-emerald-500/30">
            <Package className="w-4 h-4" />
            <span>Wholesale Distribution</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Wholesale Electronics
            <span className="block text-emerald-400">Distribution Partner</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Join 500+ retailers and resellers in our exclusive WhatsApp community. Get instant access to daily wholesale deals, bulk pricing, and real-time inventory updates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://chat.whatsapp.com/KdPqKlFB1eS6AO3I5mConi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-5 text-xl font-bold rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <svg className="w-7 h-7 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488"/>
              </svg>
              Join WhatsApp for Wholesale Deals
            </a>
            <div className="text-emerald-200 text-sm">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle className="w-4 h-4" />
                <span>Daily inventory updates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Instant price quotes</span>
              </div>
            </div>
          </div>
          
          <p className="text-emerald-200 text-sm mt-6">
            Or email us at <a href="mailto:wholesale@replugit.com" className="underline hover:text-white">wholesale@replugit.com</a>
          </p>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Why Choose Replugit Wholesale
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Your Trusted Wholesale Partner
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We handle the sourcing, quality assurance, and logistics so you can focus on growing your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Competitive Pricing</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Volume-based pricing with attractive margins for resellers and retailers. Better rates for larger orders.
              </p>
              <ul className="text-slate-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm">Tiered volume discounts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm">Flexible payment terms</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm">No minimum order quantities</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Quality Assurance</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Every device goes through our rigorous refurbishment and testing process before reaching you.
              </p>
              <ul className="text-slate-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">100% tested devices</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">Certified data wiping</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">Warranty coverage included</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Reliable Supply</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Consistent inventory availability with fast shipping and dedicated account management.
              </p>
              <ul className="text-slate-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500" />
                  <span className="text-sm">48-hour shipping</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500" />
                  <span className="text-sm">Real-time inventory updates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500" />
                  <span className="text-sm">Dedicated account manager</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">What We Wholesale</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive selection of refurbished and new electronics for your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Mobile Devices</h3>
              <p className="text-slate-600 text-sm mb-4">Smartphones, tablets, and accessories from top brands</p>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• iPhone & Samsung Galaxy</li>
                <li>• iPads & Android tablets</li>
                <li>• Cases & charging accessories</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Computers</h3>
              <p className="text-slate-600 text-sm mb-4">Laptops, desktops, and workstations for business use</p>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• Business laptops & ultrabooks</li>
                <li>• Desktop computers & all-in-ones</li>
                <li>• Monitors & peripherals</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Enterprise</h3>
              <p className="text-slate-600 text-sm mb-4">Server equipment and networking hardware</p>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• Rack & tower servers</li>
                <li>• Network switches & routers</li>
                <li>• Storage solutions</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Consumer Electronics</h3>
              <p className="text-slate-600 text-sm mb-4">Audio, gaming, and smart home devices</p>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• Gaming consoles & accessories</li>
                <li>• Audio equipment & headphones</li>
                <li>• Smart TVs & streaming devices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Start Wholesale Business?</h2>
          <p className="text-xl text-slate-600 mb-12">
            Choose how you'd like to connect with our wholesale team
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-emerald-200">
              <div className="w-20 h-20 bg-emerald-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Email for Pricing</h3>
              <p className="text-slate-600 mb-6">
                Send us your requirements and get detailed wholesale pricing within 24 hours
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span>Custom pricing for your volume</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span>Product availability updates</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span>Account setup assistance</span>
                </div>
              </div>
              <a 
                href="mailto:wholesale@replugit.com?subject=Wholesale Inquiry&body=Hi Replugit team,%0D%0A%0D%0AI'm interested in your wholesale electronics program. Please provide pricing and availability for:%0D%0A%0D%0A- Product categories I'm interested in:%0D%0A- Estimated monthly volume:%0D%0A- Business information:%0D%0A%0D%0AThank you!"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <Mail className="w-5 h-5" />
                Send Wholesale Inquiry
              </a>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-green-200">
              <div className="w-20 h-20 bg-green-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Join WhatsApp Group</h3>
              <p className="text-slate-600 mb-6">
                Get instant updates on new inventory, special deals, and connect with our wholesale community
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Real-time inventory updates</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Exclusive wholesale deals</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Direct communication with team</span>
                </div>
              </div>
              <a 
                href="https://chat.whatsapp.com/KdPqKlFB1eS6AO3I5mConi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Join WhatsApp Community
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-slate-600">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-600" />
                <span className="font-medium">+1 (548) 503-5000</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-emerald-600" />
                <span className="font-medium">Mon-Fri 9AM-6PM EST</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-600" />
                <span className="font-medium">wholesale@replugit.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
