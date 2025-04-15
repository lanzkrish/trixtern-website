import PageHeader from "@/components/ui/page-header";
import React from "react";

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4">
        <PageHeader title="Terms of Service" description="Effective Date: 15 April 2025" />
        
      {/* <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <p className="text-gray-600 mb-4">Effective Date: [Insert Date]</p> */}
      <p className="mb-6">
        Welcome to Trixtern Technologies (“we”, “us”, or “our”). These Terms of
        Service (“Terms”) govern your access to and use of our website and
        services. By accessing or using our website, you agree to be legally
        bound by these Terms. If you do not agree with these Terms, please do
        not use our website.
      </p>

      <h2 className="text-2xl font-semibold mb-4">1. Use of Services</h2>
      <p className="mb-4">
        You agree to use our website only for lawful purposes and in accordance
        with these Terms. You shall not:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>Use our site in any way that could damage or impair it.</li>
        <li>Attempt to gain unauthorized access to any part of the website.</li>
        <li>Introduce any malicious or harmful code.</li>
      </ul>
      <p className="mb-6">
        We reserve the right to restrict access to certain areas of our website,
        or the entire website, at our discretion.
      </p>

      <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property</h2>
      <p className="mb-6">
        All content provided on this website, including text, images, graphics,
        logos, and software, is the property of Trixtern Technologies or its
        licensors and is protected under applicable intellectual property laws.
        You may not reproduce, modify, distribute, or publicly display any
        materials from this website without prior written consent.
      </p>

      <h2 className="text-2xl font-semibold mb-4">3. User Submissions</h2>
      <p className="mb-6">
        Any feedback, suggestions, or other information you provide to us shall
        be considered non-confidential and non-proprietary. By submitting any
        information to us, you grant us a worldwide, royalty-free, non-exclusive
        license to use, reproduce, display, perform, modify, and distribute it.
      </p>

      <h2 className="text-2xl font-semibold mb-4">4. Third-Party Links</h2>
      <p className="mb-6">
        This website may contain links to third-party websites. Trixtern
        Technologies has no control over, and assumes no responsibility for, the
        content or practices of any third-party sites. Use of such sites is
        entirely at your own risk.
      </p>

      <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
      <p className="mb-6">
        To the maximum extent permitted by law, Trixtern Technologies shall not
        be liable for any indirect, incidental, special, or consequential
        damages, or loss of profits or revenues, arising out of or related to
        your use of or inability to use this website or services.
      </p>

      <h2 className="text-2xl font-semibold mb-4">6. Indemnification</h2>
      <p className="mb-6">
        You agree to defend, indemnify, and hold harmless Trixtern Technologies,
        its affiliates, officers, employees, and agents from and against any and
        all claims, damages, liabilities, and costs arising from your use of our
        website or violation of these Terms.
      </p>

      <h2 className="text-2xl font-semibold mb-4">7. Changes to the Terms</h2>
      <p className="mb-6">
        We may update these Terms from time to time. When we do, we will revise
        the “Effective Date” at the top. Your continued use of the site after
        such changes constitutes your acceptance of the revised Terms.
      </p>

      <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
      <p className="mb-6">
        These Terms shall be governed by and construed in accordance with the
        laws of India, without regard to its conflict of law provisions. Any
        disputes arising under these Terms shall be subject to the exclusive
        jurisdiction of the courts located in Bhubaneswar, Odisha.
      </p>
    </div>
  );
};

export default TermsOfService;