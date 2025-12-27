import MainFooter from "@/components/MainFooter";
import MainHeader from "@/components/MainHeader";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for our ecommerce website",
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <MainHeader />
      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>
        <p className="mb-4 text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="space-y-6 text-gray-700">
          <p>
            Welcome to <strong>Our Online Store</strong> (“we”, “our”, “us”).
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you
            visit or make a purchase from our website.
          </p>

          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email
            address, phone number, billing and shipping address, and payment
            details when you place an order or contact us.
          </p>

          <p>
            We also automatically collect certain information including your IP
            address, browser type, device information, and pages visited to help
            improve our services.
          </p>

          <h2 className="text-xl font-semibold">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6">
            <li>Process and fulfill orders</li>
            <li>Provide customer support</li>
            <li>Improve our website and services</li>
            <li>Prevent fraud and enhance security</li>
            <li>Send updates or promotional emails (if you opt in)</li>
          </ul>

          <h2 className="text-xl font-semibold">
            3. Cookies and Tracking Technologies
          </h2>
          <p>
            We use cookies and similar technologies to enhance your browsing
            experience and analyze website traffic. You can control cookies
            through your browser settings.
          </p>

          <h2 className="text-xl font-semibold">4. Third-Party Services</h2>
          <p>
            We use trusted third-party services for payment processing,
            analytics, shipping, and email communication. These providers only
            receive the information necessary to perform their services.
          </p>

          <h2 className="text-xl font-semibold">5. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal
            information. However, no method of transmission over the Internet is
            completely secure.
          </p>

          <h2 className="text-xl font-semibold">6. Your Rights</h2>
          <p>
            Depending on your location, you may have the right to access,
            correct, or delete your personal data, or to object to certain
            processing activities.
          </p>

          <h2 className="text-xl font-semibold">7. Children’s Privacy</h2>
          <p>
            Our website is not intended for children under the age of 13, and we
            do not knowingly collect personal data from children.
          </p>

          <h2 className="text-xl font-semibold">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated date.
          </p>

          <h2 className="text-xl font-semibold">9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>
          <p>
            <strong>Email:</strong> example@github.com. <br />
            <strong>Business Name:</strong> Our Online Store
          </p>
        </section>
      </main>
      <MainFooter />
    </div>
  );
}
