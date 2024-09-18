import React from "react";
import NavbarCustom from "../../Components/Layout/Navbar/NavbarCustom";
import Swiper from "../../Components/Layout/Swiper/Swiper";
import Dashboard from "../../Components/Layout/Dashboard/Index";
import Footer from "../../Components/Layout/Footer/Index";
import Image from "../../Constants/Image";
import Card1 from "../../Components/Layout/landingCard/LandingCard";
import Timeline from "../../Components/Layout/Timeline/Index";

const cardData = [
  {
    title: "Innovative Islamic Education",
    content:
      "Combining tradition with innovation, Madrasa Dar-Ul-Uloom Rasheedia Rasheedia offers a unique educational experience that prepares students for the challenges of the modern world. Our curriculum integrates Islamic studies with science, technology, and the arts, providing a well-rounded education that inspires critical thinking and creativity.",
    img: Image.LandingCardImg3,
  },

  {
    title: "Path to Spiritual growth",
    content:
      "At Madrasa Dar-Ul-Uloom Rasheedia Rasheedia, we prioritize spiritual development alongside academic excellence. Our students engage in regular Quranic studies, memorization, and understanding of Hadith, cultivating a deep and abiding connection with their faith. Join our community and watch your child grow in wisdom and spirituality.",
    img: Image.LandingCardImg,
  },
  {
    title: "Building future Leaders",
    content:
      "Madrasa Dar-Ul-Uloom Rasheedia Rasheedia is committed to developing future leaders through rigorous academic programs and spiritual growth. Our dedicated faculty provide personalized attention, nurturing each student's potential. Explore our programs and discover how we can help your child thrive in a supportive and inspiring environment.",
    img: Image.Empowering,
  },
  {
    title: "A Compassionate Community",
    content:
      "Join the Madrasa Dar-Ul-Uloom Rasheedia Rasheedia family, where we foster a strong sense of community and belonging. Our students, parents, and staff work together to create an environment of mutual respect, compassion, and shared values. Experience the warmth and support of our madrasa and see how we nurture not just students, but well-rounded individuals.",
    img: Image.LandingCardImg2,
  },
];

function Home() {
  return (
    <div>
      <NavbarCustom />

      <Swiper />
      <Dashboard />
      {/* <div className="w-full flex flex-col max-desktop:gap-y-32 max-tablet:gap-y-20"> */}
      {cardData.map((item, index) => (
        <Card1
          key={index}
          title={item.title}
          content={item.content}
          img={item.img}
          imageOnLeft={index % 2 === 0}
          index={index}
        />
      ))}
      {/* </div> */}
      <Timeline />
      <Footer />
    </div>
  );
}

export default Home;
