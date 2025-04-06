import React from 'react';
import { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout'; // Import the layout
import businessConfig from '@/config/business-config'; // Import business data

// TODO: Metadata generation might need adjustment for client components if not handled by Next.js automatically.
export const metadata: Metadata = {
  // TODO: Make title dynamic if needed beyond company name
  title: `Terms of Service | ${businessConfig.companyName}`,
  // TODO: Refine description
  description: `Read our terms and conditions for using the website and services of ${businessConfig.companyName}.`,
};

// Re-define TOC items for this page (including new h3 levels)
const tocItems = [
  { id: 'agreement-to-terms', title: '1. Agreement to Terms', level: 1 },
  { id: 'use-license', title: '2. Use License', level: 1 },
  { id: 'license-restrictions', title: '   - License Restrictions', level: 2 }, // Indented h3
  { id: 'disclaimer', title: '3. Disclaimer', level: 1 },
  { id: 'limitations', title: '4. Limitations', level: 1 },
  { id: 'accuracy-of-materials', title: '5. Accuracy of Materials', level: 1 },
  { id: 'links', title: '6. Links', level: 1 },
  { id: 'modifications', title: '7. Modifications', level: 1 },
  { id: 'governing-law', title: '8. Governing Law', level: 1 },
  { id: 'contact-us', title: '9. Contact Us', level: 1 },
];

export default function TermsOfServicePage() {
  const lastUpdatedDate = 'April 5, 2025'; // TODO: Make this dynamic or manage updates
  const websiteUrl = '[Your Website URL - Add to config or define here]'; // TODO: Define website URL

  return (
    // Use the LegalPageLayout component - re-added tocItems prop
    <LegalPageLayout pageTitle="Terms of Service" tocItems={tocItems}>
      {/* Content goes here as children */}
      <p className="text-sm text-muted-foreground mb-6">Last Updated: {lastUpdatedDate}</p> {/* Added mb */}

      <h2 id="agreement-to-terms" className="mb-6">1. Agreement to Terms</h2> {/* Added mb */}
      <p>
        These <strong>Terms of Service</strong> constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“<strong>you</strong>”) and <strong>{businessConfig.companyName}</strong> (“<strong>we</strong>,” “<strong>us</strong>” or “<strong>our</strong>”), concerning your access to and use of the {websiteUrl} website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “<strong>Site</strong>”).
      </p>
      <p>
        You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must discontinue use immediately.
      </p>
      <p>
        Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Service at any time and for any reason.
      </p>

      <h2 id="use-license" className="mb-6">2. Use License</h2> {/* Added mb */}
      <p>
        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “<strong>Content</strong>”) and the trademarks, service marks, and logos contained therein (the “<strong>Marks</strong>”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
      </p>
      <p>
        Permission is granted to temporarily download one copy of the materials (information or software) on {businessConfig.companyName}'s website for personal, non-commercial transitory viewing only. This is the grant of a <strong>license</strong>, not a transfer of title.
      </p>
      <h3 id="license-restrictions">License Restrictions</h3>
      <p>Under this license you may not:</p>
      <ul className="mt-4 mb-4"> {/* Added mt/mb */}
        <li>modify or copy the materials;</li>
        <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
        <li>attempt to decompile or reverse engineer any software contained on {businessConfig.companyName}'s website;</li>
        <li>remove any copyright or other proprietary notations from the materials; or</li>
        <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
      </ul>
      <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by {businessConfig.companyName} at any time.</p>

      <h2 id="disclaimer" className="mb-6">3. Disclaimer</h2> {/* Added mb */}
      <p>
        The materials on {businessConfig.companyName}'s website are provided on an 'as is' basis. {businessConfig.companyName} makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of <strong>merchantability</strong>, <strong>fitness for a particular purpose</strong>, or <strong>non-infringement</strong> of intellectual property or other violation of rights.
      </p>
      <p>
        Further, {businessConfig.companyName} does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
      </p>

      <h2 id="limitations" className="mb-6">4. Limitations</h2> {/* Added mb */}
      <p>
        In no event shall {businessConfig.companyName} or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on {businessConfig.companyName}'s website, even if {businessConfig.companyName} or a {businessConfig.companyName} authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
      </p>

      <h2 id="accuracy-of-materials" className="mb-6">5. Accuracy of Materials</h2> {/* Added mb */}
      <p>
        The materials appearing on {businessConfig.companyName}'s website could include technical, typographical, or photographic errors. {businessConfig.companyName} does not warrant that any of the materials on its website are accurate, complete or current. {businessConfig.companyName} may make changes to the materials contained on its website at any time without notice. However {businessConfig.companyName} does not make any commitment to update the materials.
      </p>

      <h2 id="links" className="mb-6">6. Links</h2> {/* Added mb */}
      <p>
        {businessConfig.companyName} has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by {businessConfig.companyName} of the site. Use of any such linked website is at the user's own risk.
      </p>

      <h2 id="modifications" className="mb-6">7. Modifications</h2> {/* Added mb */}
      <p>
        {businessConfig.companyName} may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
      </p>

      <h2 id="governing-law" className="mb-6">8. Governing Law</h2> {/* Added mb */}
      <p>
        <strong>[IMPORTANT - Review/Edit]</strong> These terms and conditions are governed by and construed in accordance with the laws of [Your State/Country] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
      </p>

      <h2 id="contact-us" className="mb-6">9. Contact Us</h2> {/* Added mb */}
      <p>
        If you have any questions about these Terms, please contact us at{' '}
        <a href={`mailto:${businessConfig.contact.email}`}>{businessConfig.contact.email}</a>.
      </p>
    </LegalPageLayout>
  );
}
