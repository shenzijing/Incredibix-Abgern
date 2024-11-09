import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose dark:prose-invert max-w-none space-y-6">
        <p className="text-lg text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
          <p>By accessing and using abgerny.art, you accept and agree to be bound by these Terms of Service.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Use License</h2>
          <p>We grant you a limited, non-exclusive, non-transferable license to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access and use the website for personal entertainment</li>
            <li>Create and share music mixes using our platform</li>
            <li>Participate in the community features</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. Intellectual Property</h2>
          <p>All content on abgerny.art, including but not limited to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Game characters and animations</li>
            <li>Sound samples and music</li>
            <li>Visual design and artwork</li>
            <li>Website code and functionality</li>
          </ul>
          <p>are owned by us and protected by intellectual property laws.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. User Conduct</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the service for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Share inappropriate or offensive content</li>
            <li>Interfere with other users&apos; enjoyment of the service</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Disclaimer</h2>
          <p>The service is provided &quot;as is&quot; without warranties of any kind. We are not responsible for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Service interruptions or errors</li>
            <li>Loss of data or content</li>
            <li>Any damages resulting from use of our service</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Contact</h2>
          <p>For questions about these Terms of Service, please contact:</p>
          <p>Email: info@abgerny.art</p>
        </section>

        <div className="mt-8">
          <Link href="/" className="text-primary hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}