import Link from 'next/link';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Use | PMG B2B',
};

const linkClass = 'underline hover:text-black';

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-3">Terms of Use</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: October 27, 2026</p>
          <div className="max-w-4xl prose prose-lg text-gray-700">
            <h2 className="text-2xl font-bold mt-8 mb-4">1. About these terms</h2>
            <p className="mb-4">
              These terms cover your use of pmg-b2b.com, which is operated by Proffer Media Group (PMG B2B) in Boston, MA. By using the site, you accept these terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Use of the site</h2>
            <p className="mb-4">
              Please use the site lawfully. Don&apos;t attempt to disrupt it, gain unauthorized access to it, or scrape it at scale.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Content and intellectual property</h2>
            <p className="mb-4">
              The content on this site, including text, graphics, the PMG name and the names Proffer.ai, Prospect Pinnacle™, Impact Sphere™, Inbox Oracle™ and Data Dynamo™, belongs to PMG. You&apos;re welcome to share links to the site, but copying or republishing its content requires our written permission.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Information on the site</h2>
            <p className="mb-4">
              The content on this site is general information about PMG&apos;s services. It is not an offer or a contract; client work is governed by separate signed agreements.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Third-party links</h2>
            <p className="mb-4">
              Links to other websites are provided for convenience. PMG isn&apos;t responsible for the content or practices of those sites.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Your information</h2>
            <p className="mb-4">
              Information you submit through forms on this site is handled as described in our{' '}
              <Link href="/privacy-policy" className={linkClass}>Privacy Policy</Link> and{' '}
              <Link href="/ccpa" className={linkClass}>CCPA notice</Link>.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Disclaimer and limitation of liability</h2>
            <p className="mb-4">
              The site is provided &quot;as is&quot;. To the extent the law allows, PMG isn&apos;t liable for any losses arising from your use of the site.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Changes</h2>
            <p className="mb-4">
              PMG may update these terms from time to time. The &quot;last updated&quot; date at the top of this page shows the current version.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Contact</h2>
            <p className="mb-4">
              If you have questions about these terms, email{' '}
              <a href="mailto:info@pmg-b2b.com" className={linkClass}>info@pmg-b2b.com</a> or call{' '}
              <a href="tel:+17817501320" className={linkClass}>+1 781 750 1320</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
