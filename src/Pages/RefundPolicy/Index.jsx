import React from "react";
import PrivacyAndTerms from "../../Components/Layout/PrivacyAndTerms/Index";
const data = [
  {
    PageTitle: "pricing & refunds POLICY",
    dateTime: "Wed Jul 03 2024 16:54:36",
    standardTime: " GMT+0530 (India Standard Time)",
  },
  {
    title: "Simple Fees, Services at Large",
    content:
      "Administrative Fees: 3% of the total funds raised goes towards our administrative development and expenses.",
    contentPoints: [
      {
        point:
          "Payment Gateway Fees: An additional 2% for the local payment gateway is applicable on the funds raised.",
      },
      {
        point:
          "Total Fees: A total of 5% fee of the total funds raised is applicable.",
      },
      {
        point:
          "Taxes: GST of 18% will be charged additionally on the Platform Fee and Payment Gateway fee.",
      },
      {
        point:
          "Currency and Payments: Payments are allowed only in INR and from bank accounts within India.",
      },
      {
        point:
          "Queries: If you have any queries, feel free to ask by emailing us at: info@madrasa-jamiatul-irshad.org.",
      },
    ],
  },

  {
    title: "Cancellation and Refund Policy",
    content:
      "Donations and payments made through Madrasa Jamiatul Irshad are final and cannot be refunded, except in accordance with the Madrasa Jamiatul Irshad Refund Policy. However, Madrasa Jamiatul Irshad will issue refunds for the following exceptional scenarios",
    contentPoints: [
      {
        point:
          "Fraudulent Campaigns: A campaign has been identified as fraudulent or violating the terms of service and no funds have yet been transferred to the recipient/beneficiary. In such cases, Madrasa Jamiatul Irshad will decide to refund all donations received to the respective donors.",
      },
      {
        point:
          "Campaign Cancellation: The campaign creator has posted an update that the intended purpose of the fundraising campaign is no longer possible, and no funds have yet been transferred to the recipient/beneficiary. In such cases, refunds will be issued.",
      },
      {
        point:
          "Management Discretion: Any other claims for refunds shall be honored at the discretion of the Madrasa Jamiatul Irshad Management Team.",
      },
    ],
  },
  {
    title: "Refund Processing",

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
];

function Index() {
  return <PrivacyAndTerms data={data} />;
}

export default Index;
