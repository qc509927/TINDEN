export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Refund Policy</h1>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. General Policy</h2>
              <p>
                We strive to provide quality service to all our customers. If you are not satisfied with our service,
                you may be eligible for a refund under certain conditions outlined below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Refund Eligibility</h2>
              <p>Refund requests must be submitted within 7 days of purchase. To be eligible for a refund, you must:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Have not received the complete report as described</li>
                <li>Experience technical issues that prevent access to your purchase</li>
                <li>Contact our support team with your order details</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Non-Refundable Situations</h2>
              <p>Refunds will not be provided in the following cases:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Dissatisfaction with report findings or results</li>
                <li>Change of mind after receiving the report</li>
                <li>Requests made after the 7-day refund period</li>
                <li>Reports that have been fully accessed and downloaded</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. How to Request a Refund</h2>
              <p>
                To request a refund, please contact our support team at:
                <a href="mailto:support@tindercheck.online" className="text-blue-600 hover:underline ml-1">
                  support@tindercheck.online
                </a>
              </p>
              <p className="mt-2">
                Include your order number, purchase date, and detailed reason for the refund request.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Processing Time</h2>
              <p>
                Approved refunds will be processed within 5-10 business days and credited to the original payment method
                used for the purchase.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Important Notice</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <p className="text-sm">
                  <strong>Disclaimer:</strong> This service provides informational reports with subjective and variable
                  results. We make no guarantees regarding relationship outcomes or specific findings. Refunds are based
                  on service delivery, not report content or personal expectations.
                </p>
              </div>
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
