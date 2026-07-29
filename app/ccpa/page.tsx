import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CCPA() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">CCPA Compliance</h1>
          <div className="max-w-4xl prose prose-lg">
            <p className="text-gray-700 mb-6">
              PMG B2B is committed to complying with the California Consumer Privacy Act (CCPA) and protecting the privacy of California residents.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights Under CCPA</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Right to know what personal information we collect, use, and share</li>
              <li>Right to delete personal information</li>
              <li>Right to opt-out of the sale of personal information</li>
              <li>Right to non-discrimination for exercising privacy rights</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect personal information such as name, email address, phone number, and business information when you interact with our services or contact us.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use your information to provide our B2B lead generation services, communicate with you, and improve our offerings. We do not sell your personal information to third parties.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-4">
              As an ISO 27001-certified organization, we implement robust security measures to protect your personal information from unauthorized access.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">How to Exercise Your Rights</h2>
            <p className="text-gray-700 mb-4">
              To exercise your CCPA rights, please contact us at hr@pmg-b2b.com. We will respond to your request within 45 days.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Do Not Sell My Personal Information</h2>
            <p className="text-gray-700 mb-4">
              PMG B2B does not sell personal information. If you would like to verify this or have any questions, please contact us.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
