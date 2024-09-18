import React from "react";
import Footer from "../Footer/Index";

import NavbarCustom from "../Navbar/NavbarCustom";
import Image from "../../../Constants/Image";
import { colors } from "../../../Constants/theme";

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

function Index({ data }) {
  return (
    <div>
      <NavbarCustom />

      <div className="w-[79.17%] max-desktop:w-[90%] m-auto pb-[100px] pt-[150px] max-tablet:pt-[110px]">
        <h1
          className="mb-16 font-roboto uppercase font-extrabold text-[2.25rem] w-full text-center max-desktop:text-[1.875rem] max-tablet:text-[1.5rem]"
          style={{ color: colors.text.light }}
        >
          {data[0].PageTitle}
        </h1>
        <div className="w-full space-y-[100px] max-desktop:space-y-[80px] max-tablet:space-y-[60px]">
          {data.slice(1).map((item, index) => {
            return (
              <div
                key={index}
                className="space-y-2 max-desktop:space-y-2 max-tablet:space-y-1 font-roboto"
                style={{ color: colors.text.dark }}
              >
                <div className="flex gap-2 max-desktop:gap-2 max-tablet:gap-1 items-center">
                  <img
                    src={Image.BulletPoint}
                    alt=""
                    className="w-[27px] h-[33px] max-desktop:w-[33px] max-tablet:w-[21px]"
                  />
                  <h1 className="text-[1.75rem]  max-tablet:text-[1.5rem] font-bold max-tablet:leading-5 ">
                    {item?.title}
                  </h1>
                </div>
                <p className="text-[1.375rem] max-desktop:text-[1.125rem] max-tablet:text-[1rem] leading-[33px] max-desktop:leading-[28px] max-tablet:leading-[23px]">
                  {item?.content}
                </p>
                <ul className="text-[1.375rem] max-desktop:text-[1.125rem] max-tablet:text-[1rem] leading-[33px] max-desktop:leading-[28px] max-tablet:leading-[28px] list-disc ml-5">
                  {item?.contentPoints?.map((item, index) => {
                    return <li key={index}>{item.point}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div
          className="w-full justify-end mt-24 text-end text-[1.125rem] leading-6 font-roboto font-normal"
          style={{ color: colors.text.dark }}
        >
          <p className="font-bold">Last Updated</p>
          <p>{data[0]?.dateTime}</p>
          <p>{data[0]?.standardTime}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
