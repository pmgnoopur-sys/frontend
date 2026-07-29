import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="max-w-4xl prose prose-lg">
            <p className="text-gray-700 mb-6">
              At PMG B2B, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect information that you voluntarily provide to us when you fill out forms on our website, subscribe to our services, or contact us for inquiries.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-4">
              As an ISO 27001-certified organization, we implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">GDPR and CCPA Compliance</h2>
            <p className="text-gray-700 mb-4">
              We are fully compliant with GDPR and CCPA regulations. You have the right to access, correct, or delete your personal data. Please contact us if you wish to exercise these rights.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us at hr@pmg-b2b.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
