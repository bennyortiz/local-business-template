import React from 'react';
import { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout'; // Import the layout
import businessConfig from '@/config/business-config'; // Import business data

// TODO: Metadata generation might need adjustment for client components if not handled by Next.js automatically.
export const metadata: Metadata = {
  // TODO: Make title dynamic if needed beyond company name
  title: `Privacy Policy | ${businessConfig.companyName}`,
  // TODO: Refine description
  description: `Read our privacy policy regarding data collection and usage for ${businessConfig.companyName}.`,
};

// Re-define TOC items for this page (including new h3 levels)
const tocItems = [
  { id: 'introduction', title: '1. Introduction', level: 1 },
  { id: 'information-we-collect', title: '2. Information We Collect', level: 1 },
  { id: 'info-disclosed', title: '   - Information You Disclose', level: 2 }, // Indented h3
  { id: 'info-auto-collected', title: '   - Information Automatically Collected', level: 2 }, // Indented h3
  { id: 'how-we-use-information', title: '3. How We Use Your Information', level: 1 },
  { id: 'sharing-information', title: '4. Will Your Information Be Shared?', level: 1 },
  { id: 'sharing-legal-basis', title: '   - Legal Basis for Sharing', level: 2 }, // Indented h3
  { id: 'cookies', title: '5. Cookies and Tracking', level: 1 },
  { id: 'data-retention', title: '6. Data Retention', level: 1 },
  { id: 'data-security', title: '7. Data Security', level: 1 },
  { id: 'user-rights', title: '8. Your Privacy Rights', level: 1 },
  { id: 'policy-updates', title: '9. Policy Updates', level: 1 },
  { id: 'contact-us', title: '10. Contact Us', level: 1 },
];

export default function PrivacyPolicyPage() {
  const lastUpdatedDate = 'April 5, 2025'; // TODO: Make this dynamic or manage updates

  return (
    // Use the LegalPageLayout component - re-added tocItems prop
    <LegalPageLayout pageTitle="Privacy Policy" tocItems={tocItems}>
      {/* Content goes here as children */}
      <p className="text-sm text-muted-foreground mb-6">Last Updated: {lastUpdatedDate}</p> {/* Added mb */}

      <h2 id="introduction" className="mb-6">1. Introduction</h2> {/* Added mb */}
      <p>
        Welcome to <strong>{businessConfig.companyName}</strong>. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this <strong>privacy notice</strong>, or our practices with regards to your personal information, please contact us at{' '}
        <a href={`mailto:${businessConfig.contact.email}`}>{businessConfig.contact.email}</a>.
      </p>
      <p>
        This privacy notice describes how we might use your information if you visit our website at [Your Website URL - Add to config if needed] (the "<strong>Website</strong>") or otherwise engage with us (the "<strong>Services</strong>"). Reading this privacy notice will help you understand your privacy rights and choices.
      </p>

      <h2 id="information-we-collect" className="mb-6">2. Information We Collect</h2> {/* Added mb */}

      <h3 id="info-disclosed">Information You Disclose to Us</h3>
      <p>
        <strong>[Standard Boilerplate - Review/Edit]</strong> We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than [Specify timeframe, e.g., 2 years] after users' interaction with our site ceases.
      </p>
      <p>
        The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following: Name, Email Address, Phone Number, and any other information you choose to provide in message fields.
      </p>

      <h3 id="info-auto-collected">Information Automatically Collected</h3>
      <p>
         We automatically collect certain information when you visit, use or navigate the Website. This information does not reveal your specific identity (like your name or contact information) but may include <strong>device and usage information</strong>, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Website and other technical information. This information is primarily needed to maintain the security and operation of our Website, and for our internal analytics and reporting purposes.
      </p>

      <h2 id="how-we-use-information" className="mb-6">3. How We Use Your Information</h2> {/* Added mb */}
      <p>
        We use personal information collected via our Website for a variety of <strong>business purposes</strong> described below. We process your personal information for these purposes in reliance on our <strong>legitimate business interests</strong>, in order to enter into or perform a <strong>contract</strong> with you, with your <strong>consent</strong>, and/or for compliance with our <strong>legal obligations</strong>. We indicate the specific processing grounds we rely on next to each purpose listed below.
      </p>
      <ul className="mt-4 mb-4"> {/* Added mt/mb */}
        <li>To respond to user inquiries/offer support to users.</li>
        <li>To send administrative information to you.</li>
        <li>To protect our Services (e.g., for fraud monitoring and prevention).</li>
        <li>To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.</li>
        <li>For other Business Purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Website, products, marketing and your experience.</li>
        {/* Add/remove purposes specific to your business */}
      </ul>

      <h2 id="sharing-information" className="mb-6">4. Will Your Information Be Shared With Anyone?</h2> {/* Added mb */}
      <p>
        We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
      </p>
      <h3 id="sharing-legal-basis">Legal Basis for Processing</h3>
      <p>
         We may process or share your data that we hold based on the following <strong>legal basis</strong>:
      </p>
      <ul className="mt-4 mb-4"> {/* Added mt/mb */}
        <li><strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
        <li><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
        <li><strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</li>
        <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
        <li><strong>Vital Interests:</strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.</li>
      </ul>
      <p>More specifically, we may need to process your data or share your personal information in the following situations: Business Transfers, Affiliates, Business Partners [Specify if applicable, e.g., service providers like hosting, email marketing].</p>
      <p><strong>[IMPORTANT - Review/Edit]</strong> We currently do not share your information with third-party advertisers or analytics providers beyond basic operational needs. [Adjust this statement based on actual practices, e.g., if using Google Analytics].</p>

      <h2 id="cookies" className="mb-6">5. Cookies and Tracking Technologies</h2> {/* Added mb */}
      <p>
        We may use <strong>cookies</strong> and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy [Link to Cookie Policy if you have one, otherwise detail here].
      </p>
      <p><strong>[Standard Boilerplate - Review/Edit]</strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Website.</p>

      <h2 id="data-retention" className="mb-6">6. Data Retention</h2> {/* Added mb */}
      <p>
        <strong>[Standard Boilerplate - Review/Edit]</strong> We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than [Specify timeframe, e.g., 2 years] after users' interaction with our site ceases.
      </p>
      <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>

      <h2 id="data-security" className="mb-6">7. Data Security</h2> {/* Added mb */}
      <p>
        <strong>[Standard Boilerplate - Review/Edit]</strong> We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Website is at your own risk. You should only access the Website within a secure environment.
      </p>

      <h2 id="user-rights" className="mb-6">8. Your Privacy Rights</h2> {/* Added mb */}
      <p>
        <strong>[Standard Boilerplate - Review/Edit based on Jurisdiction, e.g., GDPR, CCPA]</strong> Depending on your location, you may have certain rights regarding your personal information under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. To make such a request, please use the contact details provided below. We will consider and act upon any request in accordance with applicable data protection laws.
      </p>
      <p>If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. If you are located in Switzerland, you may contact the Federal Data Protection and Information Commissioner.</p>
      <p><strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. Please note however that this will not affect the lawfulness of the processing before its withdrawal, nor will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>

      <h2 id="policy-updates" className="mb-6">9. Policy Updates</h2> {/* Added mb */}
      <p>
        We may update this privacy notice from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
      </p>

      <h2 id="contact-us" className="mb-6">10. Contact Us</h2> {/* Added mb */}
      <p>
        If you have questions or comments about this notice, you may email us at{' '}
        <a href={`mailto:${businessConfig.contact.email}`}>{businessConfig.contact.email}</a> or by post to:
      </p>
      <address className="not-italic">
        {businessConfig.companyName}<br />
        {businessConfig.contact.address.split(',').map((line, index) => (
          <React.Fragment key={index}>
            {line.trim()}
            <br />
          </React.Fragment>
        ))}
      </address>
    </LegalPageLayout>
  );
}
