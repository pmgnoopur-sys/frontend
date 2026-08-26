import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CCPA() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">CCPA Compliance</h1>
          <div className="max-w-4xl prose prose-lg text-gray-700">
            <p className="mb-4">
              Personal information does not include
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Publicly available information from government records</li>
              <li>Deidentified or aggregated consumer information</li>
              <li>Information excluded from CCPA's scope like:
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>Health or medical information covered by the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and the California Confidentiality of Medical Information Act (CMIA) or clinical trial data</li>
                  <li>Personal information covered by certain sector-specific privacy laws, including the Fair Credit Reporting Act (FRCA), the Gramm-Leach- Bliley Act (GLBA) or California Financial Information Privacy Act (FIPA), and the Driver's Privacy Protection Act of 1994</li>
                </ul>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Sources of Personal Information</h2>
            <p className="mb-4">
              PMG B2B obtains the categories of information listed above from the following categories of sources
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Directly: for example, when you send us an email via the email addresses listed on our website.</li>
              <li>Indirectly: for example, by observing your actions on our Website; by placing online identifiers as defined below.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Purposes for Using Personal Information</h2>
            <p className="mb-4">
              We may use, sell, or disclose the personal information we collect for one or more of the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>To fulfill or meet the reason you provided the information. For example, if you share your name and contact information to request information about our services, we will use that personal information to respond to your inquiry</li>
              <li>To process your requests for white paper downloads</li>
              <li>To provide you with support and to respond to your inquiries, including to investigate and address your concerns and monitor and improve our responses</li>
              <li>To personalize your website experience and to deliver content and product and service offerings relevant to your interests, including targeted offers and ads through our Website, third-party sites, and via email or text message (with your consent, where required by law)</li>
              <li>As described to you when collecting your personal information or as otherwise set forth in the CCPA.</li>
            </ul>
            <p className="mb-4">
              PMG B2B will not collect additional categories of personal information or use the personal information we collected for materially different, unrelated, or incompatible purposes without providing you notice.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Sharing Personal Information</h2>
            <p className="mb-4">
              PMG B2B may disclose your personal information to a third party for a business purpose or sell your personal information, subject to your right to opt-out of those sales. When we disclose personal information for a business purpose, we enter a contract that describes the purpose and requires the recipient to both keep that personal information confidential and not use it for any purpose except performing the contract. The CCPA prohibits third parties who purchase the personal information we hold from reselling it unless you have received explicit notice and an opportunity to opt-out of further sales.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Disclosures of Personal Information for a Business Purpose</h2>
            <p className="mb-4">
              In the preceding twelve (12) months, Company has not disclosed personal information for a business purpose/has disclosed the following categories of personal information for a business purpose:
            </p>
            <p className="mb-4">
              <strong>Identifiers:</strong> a persistent identifier that can be used to recognize a consumer, a family, or a device that is linked to a consumer or family, over time and across different services, including, but not limited to, a device identifier; an Internet Protocol address; cookies, beacons, pixel tags, mobile ad identifiers, or similar technology or other forms of persistent or probabilistic identifiers that can be used to identify a particular consumer or device.
            </p>
            <p className="mb-4">
              We disclose your personal information for a business purpose to the following categories of third parties:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Data providers</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Sales of Personal Information</h2>
            <p className="mb-4">
              In the preceding twelve (12) months, Company has not disclosed personal information for a business purpose/has disclosed the following categories of personal information for a business purpose:
            </p>
            <p className="mb-4">
              <strong>Identifiers:</strong> a persistent identifier that can be used to recognize a consumer, a family, or a device that is linked to a consumer or family, over time and across different services, including, but not limited to, a device identifier; an Internet Protocol address; cookies, beacons, pixel tags, mobile ad identifiers, or similar technology or other forms of persistent or probabilistic identifiers that can be used to identify a particular consumer or device.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights and Choices</h2>
            <p className="mb-4">
              The CCPA provides consumers (California residents) with specific rights regarding their personal information. This section describes your CCPA rights and explains how to exercise those rights.
            </p>
            <p className="mb-4">
              You have the right to request that PMG B2B disclose certain information to you about our collection and use of your personal information over the past 12 months. Once we receive and confirm your verifiable consumer request, we will disclose to you:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>The categories of personal information we collected about you</li>
              <li>The categories of sources for the personal information we collected about you</li>
              <li>Our business or commercial purpose for collecting or selling that personal information</li>
              <li>The categories of third parties with whom we share that personal information</li>
              <li>The specific pieces of personal information we collected about you (also called a data portability request)</li>
              <li>If we sold or disclosed your personal information for a business purpose, two separate lists disclosing:
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>sales, identifying the personal information categories that each category of recipient purchased; and</li>
                  <li>disclosures for a business purpose, identifying the personal information categories that each category of recipient obtained</li>
                </ul>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Deletion Request Rights</h2>
            <p className="mb-4">
              You have the right to request that PMG B2B delete any of your personal information that we collected from you and retained, subject to certain exceptions. Once we receive and confirm your verifiable consumer request, we will delete your personal information from our records, unless an exception applies.
            </p>
            <p className="mb-4">
              We may deny your deletion request if retaining the information is necessary for us or our service provider(s) to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Complete the transaction for which we collected the personal information, provide a service that you requested, take actions reasonably anticipated within the context of our ongoing business relationship with you, or otherwise perform our contract with you.</li>
              <li>Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible for such activities.</li>
              <li>Exercise free speech, ensure the right of another consumer to exercise their free speech rights, or exercise another right provided for by law.</li>
              <li>Comply with the California Electronic Communications Privacy Act (Cal. Penal Code § 1546 et. seq.).</li>
              <li>Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when the information's deletion may likely render impossible or seriously impair the research's achievement, if you previously provided informed consent.</li>
              <li>Enable solely internal uses that are reasonably aligned with consumer expectations based on your relationship with us.</li>
              <li>Comply with a legal obligation.</li>
              <li>Make other internal and lawful uses of that information that are compatible with the context in which you provided it.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Exercising Access, Data Portability, and Deletion Rights</h2>
            <p className="mb-4">
              To exercise the access, data portability, and deletion rights described above, please submit a verifiable consumer request to us by either
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Calling us at 408-763-5612</li>
            </ul>
            <p className="mb-4">
              Only you, or someone legally authorized to act on your behalf, may make a verifiable consumer request related to your personal information. You may also make a verifiable consumer request on behalf of your minor child.
            </p>
            <p className="mb-4">
              You may only make a verifiable consumer request for access or data portability twice within a 12-month period. The verifiable consumer request must provide sufficient information that allows us to reasonably verify you are the person about whom we collected personal information or an authorized representative
            </p>
            <p className="mb-4">
              Describe your request with sufficient detail that allows us to properly understand, evaluate, and respond to it. We cannot respond to your request or provide you with personal information if we cannot verify your identity or authority to make the request and confirm the personal information relates to you. Making a verifiable consumer request does not require you to create an account with us. We will only use personal information provided in a verifiable consumer request to verify the requestor's identity or authority to make the request.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Response Timing and Format</h2>
            <p className="mb-4">
              We endeavour to respond to a verifiable consumer request within forty-five (45) days of its receipt. If we require more time (up to 90days), we will inform you of the reason and extension period in writing.
            </p>
            <p className="mb-4">
              We will deliver our written response by mail or electronically, at your option.
            </p>
            <p className="mb-4">
              Any disclosures we provide will only cover the 12-month period preceding the verifiable consumer request's receipt. The response we provide will also explain the reasons we cannot comply with a request, if applicable. For data portability requests, we will select a format to provide your personal information that is readily useable and should allow you to transmit the information from one entity to another entity without hindrance.
            </p>
            <p className="mb-4">
              We do not charge a fee to process or respond to your verifiable consumer request unless it is excessive, repetitive, or manifestly unfounded. If we determine that the request warrants a fee, we will tell you why we made that decision and provide you with a cost estimate before completing your request.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Non-Discrimination</h2>
            <p className="mb-4">
              We will not discriminate against you for exercising any of your CCPA rights. Unless permitted by the CCPA, we will not:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Deny you any services</li>
              <li>Charge you different prices or rates for services, including through granting discounts or other benefits, or imposing penalties</li>
              <li>Provide you a different level or quality of services</li>
              <li>Suggest that you may receive a different price or rate for goods or services or a different level or quality of goods or services</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Changes to Our Privacy Notice</h2>
            <p className="mb-4">
              PMG B2B reserves the right to amend this privacy notice at our discretion and at any time. When we make changes to this privacy notice, we will post the updated notice on the Website and update the notice's effective date. Your continued use of our Website following the posting of changes constitutes your acceptance of such changes.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Information</h2>
            <p className="mb-4">
              If you have any questions or comments about this notice, the ways in which PMG B2B collects and uses your information described below and in the Privacy Policy, your choices and rights regarding such use, or wish to exercise your rights under California law, please do not hesitate to contact us at:
            </p>
            <div className="mb-4">
              <p className="mb-2"><strong>Phone:</strong> +91 7972722487</p>
              <p className="mb-2"><strong>Headquarters:</strong> Boston, Massachusetts</p>
              <p className="mb-2"><strong>Address:</strong> City Vista, Kharadi, Pune</p>
              <p className="mb-2"><strong>Website:</strong> https://pmg-b2b.com/</p>
              <p className="mb-2"><strong>Email:</strong> info@pmg-b2b.com</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
