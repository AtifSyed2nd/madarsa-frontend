import React from "react";
import PrivacyAndTerms from "../../Components/Layout/PrivacyAndTerms/Index";
const data = [
  {
    PageTitle: "Terms & Conditions",
    dateTime: "Wed Jul 03 2024 16:54:36",
    standardTime: "  GMT+0530 (India Standard Time)",
  },
  {
    title: "Welcome",
    content: `Welcome to Madrasa Jamiatul Irshad ("we," "us," or "our"). By accessing or using our digital platform and related services (collectively, the "Services"), you agree to comply with and be bound by the following terms and conditions ("Terms"). Please read these Terms carefully before using our Services.`,
  },

  {
    title: "1. Acceptance of Terms",
    content:
      "By using our Services, you agree to these Terms, as well as our Privacy Policy. You affirm that you are of legal age and have the legal capacity to enter into these Terms. If you are using our Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms. If you do not agree to these Terms, you are not authorized to use our Platform and Services.",
  },
  {
    title: "2. Description of Services",
    content:
      "Madrasa Jamiatul Irshad provides a digital platform for individuals and organizations to create and support donation campaigns focused on various educational causes. Campaign creators can raise funds for educational projects, initiatives, and needs, while supporters can contribute to these campaigns.",
  },
  {
    title: "3. Use of Services",
    contentPoints: [
      {
        point:
          "Eligibility: You must be at least 18 years old to use our Services. If you are under the age of 18, you may only use our Services with the consent and supervision of a parent or legal guardian",
      },
      {
        point:
          "Account Registration: To use certain features of our Services, you may need to create an account. You agree to provide accurate, complete, and current information during the registration process and to update such information to keep it accurate, complete, and current.",
      },
      {
        point: (
          <>
            <p>
              User Conduct: You agree not to use our Services for any unlawful
              or prohibited purpose, and you will comply with all applicable
              laws and regulations. You further agree not to:
            </p>
            <ul className="text-[1.375rem] max-desktop:text-[1.125rem] max-tablet:text-[1rem] leading-[33px] max-desktop:leading-[28px] max-tablet:leading-[28px] list-disc ml-5">
              <li>
                Engage in any activity that interferes with or disrupts our
                Services or networks.
              </li>
              <li>
                Upload, transmit, or distribute any content that is harmful,
                abusive, defamatory, obscene, or otherwise objectionable.
              </li>
              <li>
                Engage in any fraudulent, deceptive, or misleading behavior.
              </li>
              <li>
                Impersonate any person or entity or falsely claim an affiliation
                with any person or entity.
              </li>
            </ul>
          </>
        ),
      },
      // {
      //   point:
      //     "Engage in any activity that interferes with or disrupts our Services or networks.",
      // },
      // {
      //   point:
      //     "Upload, transmit, or distribute any content that is harmful, abusive, defamatory, obscene, or otherwise objectionable.",
      // },
      // { point: "Engage in any fraudulent, deceptive, or misleading behavior." },
      // {
      //   point:
      //     "Impersonate any person or entity or falsely claim an affiliation with any person or entity.",
      // },
    ],
  },
  {
    title: "4. Campaign Creation and Support",
    contentPoints: [
      {
        point:
          "Campaign Creators/Beneficiaries: When creating a campaign, you agree to provide accurate and truthful information about the educational cause, the intended use of funds, and any associated risks. You are responsible for managing and delivering on the promises made to supporters.",
      },
      {
        point:
          "Donors/Supporters: By supporting a campaign, you acknowledge that your contribution is voluntary and that you have no ownership or equity interest in the campaign. You understand that Madrasa Jamiatul Irshad does not guarantee the success of any campaign or the delivery of rewards promised by campaign creators.",
      },
    ],
  },
  {
    title: "5. Campaigns and Donations",
    contentPoints: [
      {
        point:
          "Campaign Creation: If you create a campaign on our platform, you are solely responsible for the accuracy and completeness of the campaign information, including images, videos, and descriptions",
      },
      {
        point:
          "Donations: When you make a donation, you acknowledge and agree that your donation is voluntary and non-refundable. Madrasa Jamiatul Irshad does not guarantee the success, outcome, or use of funds raised through campaigns.",
      },
    ],
  },
  {
    title: "6. Use of Funds",
    content:
      "Campaign creators agree to use the funds raised solely for the purposes described in their campaigns. Madrasa Jamiatul Irshad does not control or manage the use of funds by campaign creators and is not responsible for any mismanagement or misuse of funds.",
  },
  {
    title: "7. Privacy",
    content:
      "Your use of our Services is subject to our Privacy Policy, which outlines how we collect, use, and disclose your information. By using our Services, you consent to our collection and use of your information as described in the Privacy Policy.",
  },
  {
    title: "8. Intellectual Property",
    contentPoints: [
      {
        point:
          "Content Ownership: You retain ownership of the content you submit to our platform, including campaign descriptions, images, and videos.",
      },
      {
        point:
          "Madrasa Jamiatul Irshad Ownership: Madrasa Jamiatul Irshad and its licensors own all intellectual property rights in our Services and the content provided by us, including text, graphics, logos, and software.",
      },
    ],
  },
  {
    title: "9. Prohibited Content and Activities",
    contentPoints: [
      {
        point:
          "Refund Method: All refunds will be credited to the original mode of payment.",
      },
      {
        point:
          "Refund Time-frame: Refunds will be processed within 12-15 bank working days.",
      },
    ],
  },
  {
    title: "10. Limitation of Liability",
    content:
      "To the maximum extent permitted by law, Madrasa Jamiatul Irshad shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:",
    contentPoints: [
      {
        point: "Your use or inability to use our Services.",
      },
      {
        point:
          "Any unauthorized access to or use of our servers and/or any personal information stored therein.",
      },
      {
        point:
          "Any interruption, suspension, modification, or discontinuation of our Services.",
      },
    ],
  },
  {
    title: "11. Indemnification",
    content:
      "You agree to defend, indemnify, and hold Madrasa Jamiatul Irshad, its affiliates, officers, directors, employees, and agents harmless from and against any and all claims, liabilities, damages, losses, or expenses arising from your use of our Services, including reasonable attorneys' fees and costs, arising out of or in any way connected with:",
    contentPoints: [
      {
        point: "Your use of our Services.",
      },
      {
        point: "Your violation of these Terms.",
      },
      {
        point: "Your violation of any third-party rights.",
      },
    ],
  },
  {
    title: "12. Changes to Terms",
    content:
      "Madrasa Jamiatul Irshad reserves the right to modify or update these Terms & Conditions from time to time for operational, legal, or regulatory reasons. Changes will be effective upon posting to our website. Your continued use of our Services after any changes signifies your acceptance of the modified Terms.",
  },
  {
    title: "13. Termination",
    content:
      "Madrasa Jamiatul Irshad reserves the right to restrict, terminate, or suspend your account and access to our Services at any time, at our sole discretion, without notice or liability, for any reason, including but not limited to violations of these Terms.",
  },
  {
    title: "14. Governing Law and Dispute Resolution",
    content:
      "These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law principles. Any dispute arising out of or relating to these Terms or our Services shall be resolved through arbitration in accordance with the rules of [Arbitration Institution], held in [Jurisdiction], and the arbitration award shall be final and binding.",
  },
  {
    title: "15. Contact Us",
    content: (
      <p>
        If you have any questions, concerns, or suggestions regarding these
        Terms, please contact us at{" "}
        <span className="font-bold underline">
          info@madrasa-jamiatul-irshad.org.
        </span>{" "}
        Thank you for using Madrasa Jamiatul Irshad. We are dedicated to
        promoting educational causes while fostering a respectful and
        collaborative online community.
      </p>
    ),
  },
];

function Index() {
  return <PrivacyAndTerms data={data} />;
}

export default Index;
