export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, including but not limited to: phone numbers,
                photos, and other personal information you submit through our service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, to process your
                requests, and to communicate with you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized or unlawful processing, accidental loss, destruction, or damage.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Data Retention</h2>
              <p>
                Your data is encrypted and automatically deleted after 24 hours of processing your request, unless
                otherwise required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. You may also object to or
                restrict certain processing of your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
                <a href="mailto:support@tindercheck.online" className="text-blue-600 hover:underline ml-1">
                  support@tindercheck.online
                </a>
              </p>
            </section>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                <strong>Mugiwara Ventures LTDA</strong>
                <br />
                CNPJ: 49.159.132/0001-50
                <br />
                Last Updated: December 2024
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a href="/" className="text-blue-600 hover:underline">
              Return to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
