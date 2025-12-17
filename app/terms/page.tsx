export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Use</h1>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this service, you accept and agree to be bound by the terms and provisions of
                this agreement. If you do not agree to these terms, please do not use our service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Service Description</h2>
              <p>
                Our service provides informational reports based on publicly available data and user-submitted
                information. Results are informational and subjective in nature, with no guarantees of accuracy or
                specific outcomes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. User Responsibilities</h2>
              <p>
                You agree to use this service legally and ethically. You are responsible for maintaining the
                confidentiality of any reports you receive and must not share or distribute them without proper
                authorization.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Disclaimer of Warranties</h2>
              <p>
                This service is provided "as is" without any warranties, express or implied. We do not guarantee
                specific results, relationship outcomes, or success rates. Individual results may vary significantly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Limitation of Liability</h2>
              <p>
                We shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising
                out of or relating to your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Payment Terms</h2>
              <p>
                All payments are processed securely through third-party payment processors. By making a purchase, you
                agree to the payment terms and refund policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Modifications to Service</h2>
              <p>We reserve the right to modify or discontinue the service at any time without prior notice.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Contact Information</h2>
              <p>
                For questions about these Terms of Use, contact us at:
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
