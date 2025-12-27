import MainFooter from "@/components/MainFooter";
import MainHeader from "@/components/MainHeader";

export const metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions for our ecommerce website",
};

export default function TermsAndConditionsPage() {
  return (
    <div>
      <MainHeader />
      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="mb-6 text-3xl font-bold">Terms and Conditions</h1>
        <p className="mb-4 text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="space-y-6 text-gray-700">
          <p>
            Welcome to <strong>Our Online Store</strong> (“we”, “our”, “us”). By
            accessing or using our website <strong>https://ourshop.com</strong> (the “Site”), you agree to comply with these Terms and Conditions.
            Please read them carefully.
          </p>

          <h2 className="text-xl font-semibold">1. Use of the Site</h2>
          <p>
            You may use our Site for lawful purposes only. You agree not to:
          </p>
          <ul className="list-disc pl-6">
            <li>Violate any applicable laws or regulations</li>
            <li>Upload harmful, offensive, or inappropriate content</li>
            <li>Interfere with the operation of the Site</li>
            <li>Attempt to gain unauthorized access to our systems</li>
          </ul>

          <h2 className="text-xl font-semibold">2. Account Responsibilities</h2>
          <p>
            If you create an account, you are responsible for maintaining the
            confidentiality of your login information and for all activities
            that occur under your account.
          </p>

          <h2 className="text-xl font-semibold">3. Orders and Payments</h2>
          <p>
            By placing an order on our Site, you agree to provide accurate
            information and authorize us to charge your chosen payment method.
            Prices and availability are subject to change without notice. We
            reserve the right to cancel orders for any reason, including
            technical errors.
          </p>

          <h2 className="text-xl font-semibold">4. Shipping and Delivery</h2>
          <p>
            We aim to ship products promptly, but delivery times may vary.
            Shipping fees and estimated delivery times are provided at checkout.
          </p>

          <h2 className="text-xl font-semibold">5. Returns and Refunds</h2>
          <p>
            Returns and refunds are handled in accordance with our Return
            Policy. Please review the policy before making a purchase.
          </p>

          <h2 className="text-xl font-semibold">6. Intellectual Property</h2>
          <p>
            All content on the Site, including text, images, logos, and
            graphics, is owned by us or our licensors and is protected by
            intellectual property laws. You may not copy, reproduce, or
            distribute any content without permission.
          </p>

          <h2 className="text-xl font-semibold">7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, we are not liable for any
            direct, indirect, incidental, or consequential damages arising from
            your use of the Site or purchase of products.
          </p>

          <h2 className="text-xl font-semibold">8. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the
            laws of Federal Republic of My Country. Any disputes arising under
            these Terms will be resolved in the courts of Federal Republic of My
            Country.
          </p>

          <h2 className="text-xl font-semibold">9. Changes to Terms</h2>
          <p>
            We may update these Terms at any time. The updated Terms will be
            posted on this page with a new “Last updated” date. Your continued
            use of the Site constitutes acceptance of the updated Terms.
          </p>

          <h2 className="text-xl font-semibold">10. Contact Us</h2>
          <p>If you have questions about these Terms, please contact us:</p>
          <p>
            <strong>Email:</strong> example@github.com <br />
            <strong>Business Name:</strong> Our Online Shop <br />
            <strong>Website:</strong> https://ourshop.com
          </p>
        </section>
      </main>
      <MainFooter />
    </div>
  );
}
