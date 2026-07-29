import Link from 'next/link';
import WorldMap from '@/components/ui/world-map';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white py-12 border-t-4 isolate" style={{borderTopColor: '#FECB0F'}}>
      <WorldMap
        className="opacity-60 mix-blend-screen"
        lineColor="#FECB0F"
        dots={[
          { start: { lat: 19.076, lng: 72.8777 }, end: { lat: 40.7128, lng: -74.006 } },
          { start: { lat: 19.076, lng: 72.8777 }, end: { lat: 51.5074, lng: -0.1278 } },
          { start: { lat: 19.076, lng: 72.8777 }, end: { lat: 1.3521, lng: 103.8198 } },
        ]}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/55 to-black/80 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{color: '#FECB0F'}}>PMG B2B</h3>
            <p className="text-gray-400 mb-4">
              Your trusted B2B lead generation agency helping businesses attract qualified leads and drive sustainable growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{color: '#FECB0F'}}>Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-[#FECB0F] transition">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-[#FECB0F] transition">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-[#FECB0F] transition">Services</Link></li>
              <li><Link href="/proffer" className="text-gray-400 hover:text-[#FECB0F] transition">Proffer.ai</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-[#FECB0F] transition">Blog</Link></li>
              <li><Link href="/life-at-pmg" className="text-gray-400 hover:text-[#FECB0F] transition">Life at PMG</Link></li>
              <li><Link href="/career" className="text-gray-400 hover:text-[#FECB0F] transition">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-[#FECB0F] transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{color: '#FECB0F'}}>Our Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/prospect-pinnacle" className="text-gray-400 hover:text-[#FECB0F] transition">Targeted Lead Generation</Link></li>
              <li><Link href="/services/impact-sphere" className="text-gray-400 hover:text-[#FECB0F] transition">Account-Based Engagement</Link></li>
              <li><Link href="/services/inbox-oracle" className="text-gray-400 hover:text-[#FECB0F] transition">Email Marketing Solutions</Link></li>
              <li><Link href="/services/data-dynamo" className="text-gray-400 hover:text-[#FECB0F] transition">B2B Data Solutions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{color: '#FECB0F'}}>Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <strong>Mumbai:</strong><br />
                Block A, Millennium Business Park,<br />
                TTC Industrial Area Sector 3 Mahape,<br />
                Navi Mumbai, Maharashtra, India 400710
              </li>
              <li>
                <strong>Pune:</strong><br />
                Office No. 708, Seventh Floor,<br />
                Pride-Icon, Thite Nagar, Kharadi,<br />
                Pune, Maharashtra India 411014
              </li>
              <li>
                <strong>Phone:</strong> +91 7972722487
              </li>
              <li>
                <strong>Email:</strong> hr@pmg-b2b.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-gray-400" style={{borderTopColor: '#FECB0F'}}>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link href="/privacy" className="hover:text-[#FECB0F] transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#FECB0F] transition">Terms of Service</Link>
            <Link href="/ccpa" className="hover:text-[#FECB0F] transition">CCPA</Link>
          </div>
          <p>&copy; {new Date().getFullYear()} PMG B2B. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
