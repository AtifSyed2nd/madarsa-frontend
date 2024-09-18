/** @format */

import React, { useState } from "react";
import Image from "../../../Constants/Image";
import { colors } from "../../../Constants/theme";

let data = [
  {
    img: Image.Df,
    UrduTitle: "دفترِ اہتمام",
    EnglishTitle: "Vice Chancellor Office",
    EnglishContent:
      "Our Daftar-e-Ihtimam is the administrative heart of the madrasa, akin to the Vice Chancellor's Office in a university. This office is responsible for overseeing the overall functioning and strategic direction of the institution. It manages the implementation of policies, academic programs, and administrative procedures. The Vice Chancellor's Office also coordinates with various departments to ensure smooth operations, maintaindiscipline, and uphold the institution's mission and values.",
    UrduContent:
      "ہمارا دفترِ اہتمام مدرسے کا انتظامی دل ہے، جو یونیورسٹی میں وائس چانسلر کے دفتر کی طرح ہے۔ یہ دفتر ادارے کے مجموعی کام اور اسٹریٹجک سمت کی نگرانی کا ذمہ دار ہے۔ یہ پالیسیوں، تعلیمی پروگراموں اور انتظامی طریقہ کار کے نفاذ کا انتظام کرتا ہے۔ وائس چانسلر کا دفتر مختلف شعبوں کے ساتھ مربوط ہوتا ہے تاکہ ہموار آپریشنز کو یقینی بنایا جا سکے، نظم و ضبط کو برقرار رکھا جا سکے، اور ادارے کے مشن اور اقدار کو برقرار رکھا جا سکے۔",
  },
  {
    img: Image.BG2,
    UrduTitle: "تعلیمات",
    EnglishTitle: "Faculty of Education",
    EnglishContent:
      "Our Daftar-e-Ihtimam is the administrative heart of the madrasa, akin to the Vice Chancellor's Office in a university. This office is responsible for overseeing the overall functioning and strategic direction of the institution. It manages the implementation of policies, academic programs, and administrative procedures. The Vice Chancellor's Office also coordinates with various departments to ensure smooth operations, maintaindiscipline, and uphold the institution's mission and values.",
    UrduContent:
      "ہمارا دفترِ اہتمام مدرسے کا انتظامی دل ہے، جو یونیورسٹی میں وائس چانسلر کے دفتر کی طرح ہے۔ یہ دفتر ادارے کے مجموعی کام اور اسٹریٹجک سمت کی نگرانی کا ذمہ دار ہے۔ یہ پالیسیوں، تعلیمی پروگراموں اور انتظامی طریقہ کار کے نفاذ کا انتظام کرتا ہے۔ وائس چانسلر کا دفتر مختلف شعبوں کے ساتھ مربوط ہوتا ہے تاکہ ہموار آپریشنز کو یقینی بنایا جا سکے، نظم و ضبط کو برقرار رکھا جا سکے، اور ادارے کے مشن اور اقدار کو برقرار رکھا جا سکے۔",
  },
  {
    img: Image.BG3,
    UrduTitle: "محاسبی",
    EnglishTitle: "Account Department",
    EnglishContent:
      "Our Daftar-e-Ihtimam is the administrative heart of the madrasa, akin to the Vice Chancellor's Office in a university. This office is responsible for overseeing the overall functioning and strategic direction of the institution. It manages the implementation of policies, academic programs, and administrative procedures. The Vice Chancellor's Office also coordinates with various departments to ensure smooth operations, maintaindiscipline, and uphold the institution's mission and values.",
    UrduContent:
      "ہمارا دفترِ اہتمام مدرسے کا انتظامی دل ہے، جو یونیورسٹی میں وائس چانسلر کے دفتر کی طرح ہے۔ یہ دفتر ادارے کے مجموعی کام اور اسٹریٹجک سمت کی نگرانی کا ذمہ دار ہے۔ یہ پالیسیوں، تعلیمی پروگراموں اور انتظامی طریقہ کار کے نفاذ کا انتظام کرتا ہے۔ وائس چانسلر کا دفتر مختلف شعبوں کے ساتھ مربوط ہوتا ہے تاکہ ہموار آپریشنز کو یقینی بنایا جا سکے، نظم و ضبط کو برقرار رکھا جا سکے، اور ادارے کے مشن اور اقدار کو برقرار رکھا جا سکے۔",
  },
  {
    img: Image.BG4,
    UrduTitle: "دار الاقامہ",
    EnglishTitle: "Hostel Office",
    EnglishContent:
      "Our Daftar-e-Ihtimam is the administrative heart of the madrasa, akin to the Vice Chancellor's Office in a university. This office is responsible for overseeing the overall functioning and strategic direction of the institution. It manages the implementation of policies, academic programs, and administrative procedures. The Vice Chancellor's Office also coordinates with various departments to ensure smooth operations, maintaindiscipline, and uphold the institution's mission and values.",
    UrduContent:
      "ہمارا دفترِ اہتمام مدرسے کا انتظامی دل ہے، جو یونیورسٹی میں وائس چانسلر کے دفتر کی طرح ہے۔ یہ دفتر ادارے کے مجموعی کام اور اسٹریٹجک سمت کی نگرانی کا ذمہ دار ہے۔ یہ پالیسیوں، تعلیمی پروگراموں اور انتظامی طریقہ کار کے نفاذ کا انتظام کرتا ہے۔ وائس چانسلر کا دفتر مختلف شعبوں کے ساتھ مربوط ہوتا ہے تاکہ ہموار آپریشنز کو یقینی بنایا جا سکے، نظم و ضبط کو برقرار رکھا جا سکے، اور ادارے کے مشن اور اقدار کو برقرار رکھا جا سکے۔",
  },
  {
    img: Image.BG5,
    UrduTitle: "کتب خانہ",
    EnglishTitle: "Library",
    EnglishContent:
      "Our Daftar-e-Ihtimam is the administrative heart of the madrasa, akin to the Vice Chancellor's Office in a university. This office is responsible for overseeing the overall functioning and strategic direction of the institution. It manages the implementation of policies, academic programs, and administrative procedures. The Vice Chancellor's Office also coordinates with various departments to ensure smooth operations, maintaindiscipline, and uphold the institution's mission and values.",
    UrduContent:
      "ہمارا دفترِ اہتمام مدرسے کا انتظامی دل ہے، جو یونیورسٹی میں وائس چانسلر کے دفتر کی طرح ہے۔ یہ دفتر ادارے کے مجموعی کام اور اسٹریٹجک سمت کی نگرانی کا ذمہ دار ہے۔ یہ پالیسیوں، تعلیمی پروگراموں اور انتظامی طریقہ کار کے نفاذ کا انتظام کرتا ہے۔ وائس چانسلر کا دفتر مختلف شعبوں کے ساتھ مربوط ہوتا ہے تاکہ ہموار آپریشنز کو یقینی بنایا جا سکے، نظم و ضبط کو برقرار رکھا جا سکے، اور ادارے کے مشن اور اقدار کو برقرار رکھا جا سکے۔",
  },
  {
    img: Image.Df2,
    UrduTitle: " باورچی خانہ",
    EnglishTitle: "Pantry",
    EnglishContent:
      "The Kitchen in our madrasa is a vital hub where nourishment meets care. Our dedicated team ensures that every meal is prepared with utmost hygiene and love, using fresh, high-quality ingredients to provide nutritious and delicious meals. The kitchen operates efficiently, balancing tradition and modernity, to ensure every dish brings comfort and joy. At Jamiatul Irshad, we believe that a well-fed body fosters a well-fed mind, allowing our students to thrive in their studies and personal growth.",
    UrduContent:
      "ہمارا دفترِ اہتمام مدرسے کا انتظامی دل ہے، جو یونیورسٹی میں وائس چانسلر کے دفتر کی طرح ہے۔ یہ دفتر ادارے کے مجموعی کام اور اسٹریٹجک سمت کی نگرانی کا ذمہ دار ہے۔ یہ پالیسیوں، تعلیمی پروگراموں اور انتظامی طریقہ کار کے نفاذ کا انتظام کرتا ہے۔ وائس چانسلر کا دفتر مختلف شعبوں کے ساتھ مربوط ہوتا ہے تاکہ ہموار آپریشنز کو یقینی بنایا جا سکے، نظم و ضبط کو برقرار رکھا جا سکے، اور ادارے کے مشن اور اقدار کو برقرار رکھا جا سکے۔",
  },
];

function Index() {
  const [translationStates, setTranslationStates] = useState(
    data.map(() => false)
  );

  const toggleTranslation = (index) => {
    setTranslationStates((prevState) =>
      prevState.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className='w-[79.17%] max-desktop:w-[650px] max-tablet:w-[90%] max-tablet:max-w-[500px]  m-auto items-center  py-[100px] max-desktop:py-[80px] max-tablet:py-[60px] flex flex-col gap-[110px] max-desktop:gap-[80px] max-tablet:gap-[60px]'>
      <h1
        className='text-[2.25rem] max-tablet:text-[1.5rem] max-desktop:text-[1.875rem] font-extrabold font-roboto'
        style={{ color: colors.text.light }}
      >
        Departments & Facilities
      </h1>
      {data.map((item, index) => {
        const isEven = index % 2 === 0;
        const isTranslated = translationStates[index];

        return (
          <div key={index} className='w-full'>
            <div
              className={`w-full flex ${
                isEven ? "flex-row" : "flex-row-reverse"
              } max-desktop:flex-col-reverse gap-[32px] justify-center items-center max-desktop:gap-[20px] max-tablet:gap-[10px]`}
            >
              <div className='flex flex-col max-desktop:items-center justify-center gap-[24px] max-tablet:gap-[20px] '>
                <div
                  className='leading-[35px] max-tablet:leading-7 max-desktop:text-center'
                  style={{ color: colors.text.light }}
                >
                  <h1 className='text-[1.75rem] max-desktop:text-[2rem] font-bold font-scheherazade'>
                    {item.UrduTitle}
                  </h1>
                  <h1 className='text-[1.75rem] max-desktop:text-[1.5rem] max-tablet:text-[1.25rem] font-bold font-roboto'>
                    {item.EnglishTitle}
                  </h1>
                </div>
                <p
                  className={`${
                    isTranslated ? "text-[2rem]" : "text-[1.125rem]"
                  } ${
                    isTranslated
                      ? "max-tablet:text-[1.5rem] max-tablet:leading-[27px]  max-desktop:leading-[32px] leading-[33px]"
                      : "max-tablet:text-[1rem] max-tablet:leading-[20px]  max-desktop:leading-[26px] leading-[28px]"
                  }  font-normal  text-justify`}
                  style={{
                    color: colors.text.dark,
                    fontFamily: isTranslated ? "scheherazade" : "roboto",
                  }}
                >
                  {isTranslated ? item.UrduContent : item.EnglishContent}
                </p>
                <p
                  onClick={() => toggleTranslation(index)}
                  className='  font-bold'
                  style={{ color: colors.text.light }}
                >
                  {isTranslated ? "Translate to English" : "Translate to Urdu"}
                </p>
              </div>
              <img
                src={item.img}
                className='rounded-[20px] w-[505px] h-[383px] max-tablet:h-[300px] bg-center object-cover bg-no-repeat'
                style={{ boxShadow: "0px 4px 4px #0000004D" }}
                alt=''
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Index;
