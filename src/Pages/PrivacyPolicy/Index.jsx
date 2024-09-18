import React from "react";
import PrivacyAndTerms from "../../Components/Layout/PrivacyAndTerms/Index";
const data = [
  {
    PageTitle: "Privacy policy",
    dateTime: "Wed Jul 03 2024 16:54:36",
    standardTime: "  GMT+0530 (India Standard Time)",
  },
  {
    title: "Introduction",
    content:
      "At Madrasa Jamiatul Irshad, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.",
  },

  {
    title: "Information we collect",
    content:
      "Personal Information: We may collect personal information such as your name, email address, phone number, and any other information you voluntarily provide.",
    contentPoints: [
      {
        point:
          "Non-Personal Information: We may collect non-personal information such as browser type, operating system, and website usage statistics",
      },
    ],
  },
  {
    title: "How We Use Your Information",
    content:
      "To Provide Services: We use your personal information to provide you with the services and information you request.",
    contentPoints: [
      {
        point:
          "To Improve Our Website: We may use non-personal information to understand how our website is used and to improve its functionality and content.",
      },
      {
        point:
          "To Communicate: We may use your contact information to send you updates, newsletters, and other information related to Madrasa Jamiatul Irshad.",
      },
    ],
  },
  {
    title: "Information Sharing and Disclosure",
    content:
      "We do not sell, trade, or otherwise transfer to outside parties your personal information unless we provide you with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.",
  },
  {
    title: "Security of Your Information",
    content:
      "We use administrative, technical, and physical security measures to help protect your personal information. However, no transmission of data over the internet or any wireless network can be guaranteed to be 100% secure.",
  },
  {
    title: "Cookies",
    content:
      "Our website may use cookies to enhance user experience. You can choose to set your web browser to refuse cookies or to alert you when cookies are being sent. If you do so, note that some parts of the site may not function properly.",
  },
  {
    title: "Changes to This Privacy Policy",
    content:
      "Madrasa Jamiatul Irshad has the discretion to update this privacy policy at any time. When we do, we will post the revised policy on this page and update the date at the bottom.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions about this Privacy Policy, please contact us at",
    contentPoints: [
      {
        point: "Email: [Insert Email Address]",
      },
      {
        point: "Phone: [Insert Phone Number]",
      },
    ],
  },
];

function Index() {
  return <PrivacyAndTerms data={data} />;
}

export default Index;
