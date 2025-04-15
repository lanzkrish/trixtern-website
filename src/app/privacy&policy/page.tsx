import PageHeader from "@/components/ui/page-header";
import React from "react";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4">
      <PageHeader title="Privacy Policy" description="Effective Date: 15 April 2025" />

      <p className="mb-6">
        At Trixtern Technologies, we are committed to protecting your privacy.
        This Privacy Policy explains how we collect, use, disclose, and
        safeguard your information when you visit our website.
      </p>

      <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
      <p className="mb-4">We may collect the following types of information:</p>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Personal Information</strong> such as your name, email
          address, company name, phone number, and any other details you provide
          via contact forms or inquiries.
        </li>
        <li>
          <strong>Usage Data</strong> including your IP address, browser type,
          referring URLs, and pages viewed while using our website.
        </li>
        <li>
          <strong>Cookies and Tracking Technologies</strong> to enhance the
          functionality of our site and improve your experience.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
      <p className="mb-6">We may use the information we collect to:</p>
      <ul className="list-disc list-inside mb-6">
        <li>Respond to your inquiries and provide support.</li>
        <li>Improve our website and services.</li>
        <li>Send updates, promotions, or marketing materials (only with your consent).</li>
        <li>Detect and prevent fraud or unauthorized activities.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">3. Sharing of Information</h2>
      <p className="mb-6">
        We do not sell, trade, or rent your personal information. However, we
        may share your data with trusted third-party service providers who help
        us operate the website and deliver services, provided they comply with
        strict data protection obligations.
      </p>
      <p className="mb-6">
        We may also disclose information when required to comply with legal
        obligations or protect our rights.
      </p>

      <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
      <p className="mb-6">
        We implement appropriate technical and organizational measures to
        protect your information from unauthorized access, alteration,
        disclosure, or destruction. However, no method of transmission over the
        internet is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
      <p className="mb-6">You have the right to:</p>
      <ul className="list-disc list-inside mb-6">
        <li>Access and review the personal data we hold about you.</li>
        <li>Request corrections or deletion of your personal data.</li>
        <li>Withdraw your consent to our data processing activities.</li>
        <li>Opt out of receiving marketing communications at any time.</li>
      </ul>
      <p className="mb-6">
        To exercise any of these rights, please contact us at the email address
        provided below.
      </p>

      <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
      <p className="mb-6">
        We use cookies to enhance user experience and analyze website
        performance. You may choose to disable cookies in your browser settings;
        however, this may affect the functionality of certain parts of our
        website.
      </p>

      <h2 className="text-2xl font-semibold mb-4">7. Changes to This Privacy Policy</h2>
      <p className="mb-6">
        We may revise this Privacy Policy from time to time. Any changes will be
        reflected on this page with an updated “Effective Date.” We encourage
        you to review this page periodically to stay informed.
      </p>

      <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
      <p className="mb-6">
        If you have any questions or concerns regarding these Terms or our
        Privacy Policy, you may contact us at:
      </p>
      <ul className="list-none mb-6">
        <li>
          <strong>Trixtern Technologies</strong>
        </li>
        <li>Email: <Link href={"mailto:contact@trixtern.com"}> contact@trixtern.com </Link></li>
        <li>Address: Bhubaneswar, Odisha</li>
        <li>Form Page: <Link href={"/contact-us"}> Contact us</Link></li>
        <li>Website: <Link href={"https://www.trixtern.com"}> www.trixtern.com </Link></li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;