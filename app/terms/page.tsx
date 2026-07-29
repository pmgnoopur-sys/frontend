import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="max-w-4xl prose prose-lg">
            <p className="text-gray-700 mb-6">
              Welcome to PMG B2B. By using our services, you agree to these Terms of Service.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Services</h2>
            <p className="text-gray-700 mb-4">
              PMG B2B provides B2B lead generation, account-based marketing, demand generation, and data solutions services. We reserve the right to modify or discontinue any service at any time.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Client Responsibilities</h2>
            <p className="text-gray-700 mb-4">
              Clients agree to provide accurate information and cooperate with our team to ensure successful campaign execution. Clients are responsible for the content they provide for marketing campaigns.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Payment Terms</h2>
            <p className="text-gray-700 mb-4">
              Payment terms are outlined in individual service agreements. Failure to pay may result in suspension of services.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Confidentiality</h2>
            <p className="text-gray-700 mb-4">
              Both parties agree to maintain confidentiality of proprietary information shared during the course of our business relationship.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              PMG B2B shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms of Service, please contact us at hr@pmg-b2b.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
