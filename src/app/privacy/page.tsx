export default function PrivacyPolicy() {
  return (
    <main className="bg-gray-950 relative overflow-hidden">
      {/* Global Background gradients */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_50%)] pointer-events-none"></div>

      <section className="relative min-h-[95vh] px-6 py-20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-lg text-gray-400">
                Last updated: October 15, 2025
              </p>
            </div>

            <div className="space-y-8 text-gray-300">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  Information We Collect
                </h2>
                <p className="leading-relaxed">
                  When you contact us through our contact form, we collect:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your name</li>
                  <li>Your email address</li>
                  <li>Your message content</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  How We Use Your Information
                </h2>
                <p className="leading-relaxed">
                  We use the information you provide to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Respond to your inquiries and messages</li>
                  <li>Provide the services or information you requested</li>
                  <li>
                    Communicate with you about potential projects or
                    collaborations
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  Data Protection
                </h2>
                <p className="leading-relaxed">
                  We take data protection seriously. Your personal information
                  is:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Never shared with third parties without your consent</li>
                  <li>Stored securely using industry-standard practices</li>
                  <li>Only accessed by authorized personnel</li>
                  <li>
                    Retained only as long as necessary to fulfill the purpose
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  Your Rights
                </h2>
                <p className="leading-relaxed">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Request access to your personal data</li>
                  <li>Request correction of your personal data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  Contact Information
                </h2>
                <p className="leading-relaxed">
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us through the contact form on
                  our website.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  Changes to This Policy
                </h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the &ldquo;Last updated&rdquo; date.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
