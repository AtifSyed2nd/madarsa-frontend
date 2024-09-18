/** @format */

import React from "react";
import NavbarCustom from "../../Components/Layout/Navbar/NavbarCustom";
import Footer from "../../Components/Layout/Footer/Index";
import AboutUsHeaderimg from "../../Components/Layout/AboutUsHeaderImg/Index";
import TabBox from "../../Components/Layout/TabBox/Index";
import { chipColors, colors } from "../../Constants/theme";

function Index() {
  return (
    <div>
      <NavbarCustom />
      <div className='w-full h-[488px] max-desktop:h-[375px] flex items-end'>
        <AboutUsHeaderimg />
      </div>
      <div className='w-[79.17%] max-desktop:w-[90%] m-auto pb-[100px] pt-[80px] max-tablet:pt-[40px]'>
        <div
          className='w-full flex flex-col items-center gap-[20px] text-[1.125rem] max-tablet:text-[1rem] text-justify font-normal font-roboto '
          style={{ color: colors.text.dark }}
        >
          <h1
            className='font-roboto text-[2.25rem] font-extrabold max-tablet:text-[1.5rem] max-desktop:text-[1.875rem]  '
            style={{ color: colors.text.light }}
          >
            About us
          </h1>
          <p>
            Darul-Uloom-Rasheedia was established in the year 2000 by Maulana
            Mohammad Ali Qasmi, Darul-Uloom-Rasheedia Madrasa was founded with a
            clear vision of providing high-quality Deeni (religious) education
            alongside modern academic learning. The goal was to create an
            environment where students can grow both spiritually and
            intellectually, preparing them to face the challenges of the modern
            world while remaining deeply rooted in Islamic teachings.
          </p>
          <p>
            The madrasa offers a wide-ranging curriculum that includes core
            Islamic subjects like Quran, Hadith, Fiqh, Arabic, and Farsi,
            alongside modern subjects such as Science and Computer studies. This
            comprehensive approach ensures that students receive a well-rounded
            education. Currently, Darul-Uloom-Rasheedia serves about 400
            students, ranging from ages 4 to 20, and accommodates classes from
            1st to 8th grade. The madrasa is supported by a dedicated faculty of
            20 teachers and 5 staff members, many of whom hold advanced degrees
            in Islamic studies (such as Qari, Molvi, and Mufti), as well as
            professional qualifications like B.Ed, M.Com, and M.Sc.
          </p>
          <p>
            Darul-Uloom-Rasheedia is well-equipped with 18 classrooms, providing
            ample learning space for its students. Additionally, the madrasa
            boasts a library with over 1,500 books, catering to both religious
            and academic studies. A computer lab with 3 computers supports the
            students' technological learning, while the mosque on campus serves
            as a spiritual center where both students and staff gather for daily
            prayers. The madrasa also ensures that all students receive lunch,
            promoting their well-being alongside their education.
          </p>
          <p>
            Apart from academics, Darul-Uloom-Rasheedia offers other valuable
            facilities, including a sports ground and a dedicated Quran
            memorization program. Over the years, the madrasa has achieved
            numerous accolades, with its students winning Quran recitation
            competitions, which highlights the institution's commitment to
            nurturing both academic excellence and spiritual growth in its
            students.
          </p>
        </div>
        <div className='w-full mt-[60px] max-tablet:w-full  m-auto'>
          <TabBox />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
