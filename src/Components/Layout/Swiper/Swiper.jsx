/** @format */

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Navigation, A11y } from "swiper/modules";
import Image from "../../../Constants/Image";
import { colors } from "../../../Constants/theme";

let data = [
  {
    backgroundImage: Image.SlideOne,
    smallBackgroundImage: Image.SlideOneSmall,
    ayat: "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ أَنفِقُوا۟ مِمَّا رَزَقْنَـٰكُم مِّن قَبْلِ أَن يَأْتِىَ يَوْمٌۭ لَّا بَيْعٌۭ فِيهِ وَلَا خُلَّةٌۭ وَلَا شَفَـٰعَةٌۭ ۗ وَٱلْكَـٰفِرُونَ هُمُ ٱلظَّـٰلِمُونَ ٢٥٤",
    EnglishTranslationHeading: "O believers, Donate from  ",
    EnglishTranslation:
      "what We have provided for you before the arrival of a Day when there will be no bargaining, friendship or intercession. Those who disbelieve are truly the wrongdoers.",
    UrduTranslation:
      "اے ایمان والو! جو کچھ ہم نے تمہیں دیا ہے اس میں سے اس دن کے آنے سے پہلے عطیہ کرو جس دن کوئی سودا،  دوستی،  یا شفاعت نہیں ہوگی۔ جن لوگوں نے کفر کیا وہی ظالم ہیں۔",
    reference: "Surah Al-Baqarah 254",
  },
  {
    backgroundImage: Image.SlideTwo,
    smallBackgroundImage: Image.SlideTwoSmall,
    ayat: "ٱلَّذِينَ يُنفِقُونَ أَمْوَٰلَهُم بِٱلَّيْلِ وَٱلنَّهَارِ سِرًّۭا وَعَلَانِيَةًۭ فَلَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ ",
    EnglishTranslationHeading: "Those who spend",
    EnglishTranslation:
      "their wealth in charity day and night, secretly and openly—their reward is with their Lord, and there will be no fear for them, nor will they grieve.",
    UrduTranslation:
      "جو لوگ اپنا مال رات دن چھپے اور کھلے خرچ کرتے ہیں ان کے لیے ان کے رب کے پاس اجر ہے اور ان پر نہ کوئی خوف ہوگا اور نہ وہ غمگین ہوں گے۔",
    reference: "Surah Al-Baqarah 274",
  },
  {
    backgroundImage: Image.SlideThree,
    smallBackgroundImage: Image.SlideThreeSmall,
    ayat: "يَمْحَقُ ٱللَّهُ ٱلرِّبَوٰا۟ وَيُرْبِى ٱلصَّدَقَـٰتِ ۗ وَٱللَّهُ لَا يُحِبُّ كُلَّ كَفَّارٍ أَثِيمٍ  ",
    EnglishTranslationHeading: "Allah has made",
    EnglishTranslation:
      " interest fruitless and charity fruitful. And Allah does not like any ungrateful evildoer.    ",
    UrduTranslation:
      "خدا سود کو مٹاتا ہے اور صدقہ کو فروغ دیتا ہے اور خدا ہر گنہگار کو پسند نہیں کرتا",
    reference: "Surah Al-Baqarah 276",
  },
  {
    backgroundImage: Image.SlideFour,
    smallBackgroundImage: Image.SlideFourSmall,
    ayat: "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ وَذَرُوا۟ مَا بَقِىَ مِنَ ٱلرِّبَوٰٓا۟ إِن كُنتُم مُّؤْمِنِينَ ",
    EnglishTranslationHeading: "O believers! Fear Allah, ",
    EnglishTranslation:
      "and give up outstanding interest if you are ˹true˺ believers.",
    UrduTranslation:
      "اے ایمان والو اللہ سے ڈرو اور جو سود باقی رہ گیا ہے اگر تم مومن ہو ",
    reference: "Surah Al-Baqarah 278",
  },
  {
    backgroundImage: Image.SlideFive,
    smallBackgroundImage: Image.SlideFiveSmall,
    ayat: "وَٱلَّذِينَ جَـٰهَدُوا۟ فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا ۚ وَإِنَّ ٱللَّهَ لَمَعَ ٱلْمُحْسِنِينَ",
    EnglishTranslationHeading: "As for those who ",
    EnglishTranslation:
      " struggle in Our cause, We will surely guide them along Our Way. And Allah is certainly with the good-doers.",
    UrduTranslation:
      "جو لوگ ہماری راہ میں جدوجہد کرتے ہیں، ہم انہیں ضرور اپنے راستے پر چلائیں گے۔ اور اللہ یقینا نیکو کاروں کے ساتھ ہے۔",
    reference: "Al-'Ankabut 69",
  },
  {
    backgroundImage: Image.SlideSix,
    smallBackgroundImage: Image.SlideSixSmall,
    ayat: "وَجَعَلَنِى مُبَارَكًا أَيْنَ مَا كُنتُ وَأَوْصَـٰنِى بِٱلصَّلَوٰةِ وَٱلزَّكَوٰةِ مَا دُمْتُ حَيًّۭا",
    EnglishTranslationHeading: "And He has made me blessed",
    EnglishTranslation:
      "wherever I am and has enjoined upon me prayer and zakah as long as I remain alive.",
    UrduTranslation:
      "اور اس نے مجھے بابرکت کیا ہے جہاں بھی میں ہوں، اور اس نے مجھے نماز اور زکوٰة کا حکم دیا ہے جب تک بھی میں زنده رہوں",
    reference: "Surah Maryam 31",
  },
];

export default function App() {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        el: ".swiper-pagination",
        type: "custom",
        clickable: true,
        renderCustom: function (swiper, current, total) {
          const bullets = [];
          for (let i = 1; i <= total; i++) {
            const isActive = i === current ? "active" : "";
            bullets.push(
              `<li class="bullet ${isActive}" data-index="${i}"></li>`
            );
          }

          return `<ul class="custom-pagination">${bullets.join("")}</ul>`;
        },
      }}
      navigation
      scrollbar={{ draggable: true }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            className='w-full max-desktop:hidden max-tablet:hidden h-[80vh] flex bg-cover overflow-hidden bg-center bg-no-repeat'
            style={{ backgroundImage: `url("${item.backgroundImage}")` }}
          >
            <div className='w flex max-w-[800px] flex-col items-center gap-[52px] py-[155px] pl-8 '>
              <p
                className={`text-[1.5rem] font-medium text-center font-amiri text-[${colors.tertiary.dark}]`}
              >
                {item.ayat}
              </p>
              <div
                className={`max-w-[700px] text-center leading-[50px] text-[${colors.tertiary.dark}]`}
              >
                <p className='max-desktop:text-[0.9rem] max-tablet:text-[0.9rem] leading-[14px] font-playfair font-normal'>
                  {item.reported}
                </p>
                <h1
                  style={{ fontFamily: "playfair" }}
                  className={`text-[3rem] font-black text-[${colors.tertiary.dark}]`}
                >
                  {item.EnglishTranslationHeading}
                </h1>
                <p
                  style={{ fontFamily: "playfair" }}
                  className='text-[1.5rem] leading-[24px] font-normal'
                >
                  {item.EnglishTranslation}
                </p>
                <p className='text-[0.975rem] italic'>{item.reference}</p>
              </div>
              <div className='text-center'>
                <p className='text-[2rem] font-medium font-lateef'>
                  {item.UrduTranslation}
                </p>
              </div>
            </div>
          </div>
          <div
            className='w-full desktop:hidden flex justify-center h-[80vh] items-end bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url("${item.smallBackgroundImage}")` }}
          >
            <div className='flex max-desktop:max-w-[700px] max-tablet:max-w-[320px] text-center flex-col items-center gap-[35px] max-tablet:gap-[12px] max-desktop:my-16 max-tablet:my-12'>
              <p
                className={`text-wrap break-words text-center whitespace-nowrap max-desktop:text-[1.5rem] max-tablet:text-[1rem] font-medium font-amiri text-[${colors.tertiary.dark}]`}
              >
                {item.ayat}
              </p>
              <div className={`text-center text-[${colors.tertiary.dark}]`}>
                <p className='max-desktop:text-[0.9rem] max-tablet:text-[0.8rem] leading-[14px] font-playfair font-normal'>
                  {item.reported}
                </p>
                <h1
                  style={{ fontFamily: "playfair" }}
                  className={`max-desktop:text-[2.2rem] max-tablet:text-[1.65rem] leading-[30px] font-black text-[${colors.tertiary.dark}]`}
                >
                  {item.EnglishTranslationHeading}
                </h1>
                <p
                  style={{ fontFamily: "playfair" }}
                  className='max-desktop:text-[1.1rem] max-tablet:text-[0.9rem] leading-[20px] font-normal'
                >
                  {item.EnglishTranslation}
                </p>
                <p className='max-desktop:text-[0.775rem] max-tablet:text-[0.7rem] italic'>
                  {item.reference}
                </p>
              </div>
              <div className='text-center'>
                <p className='max-desktop:text-[1.125rem] max-tablet:text-[1rem] font-medium font-lateef'>
                  {item.UrduTranslation}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className='swiper-pagination'></div>
    </Swiper>
  );
}
