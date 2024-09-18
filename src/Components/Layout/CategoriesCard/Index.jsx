import React, { useState } from "react";
import { chipColors, colors, theme } from "../../../Constants/theme";
import { useGetAll } from "../../../Hooks/useGetAll";
import { LoaderCircle } from "../../Layout/Card/CardLoader"; // Adjust the import based on your file structure
import { Link } from "react-router-dom";
function Index() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { data: categoryData } = useGetAll({
    key: `campaign/categories/nt/`,
    enabled: true,
    select: (data) => {
      return data?.data?.row;
    },
    onSuccess: (data) => {
      setLoading(false);
    },
    onError: () => {
      setError(true);
      setLoading(false);
    },
  });

  return (
    <div className="leading-8 text-center mt-24 max-desktop:mt-20 max-tablet:mt-14">
      <p className="font-roboto font-normal text-[2rem] max-desktop:text-[1.7rem] max-tablet:text-[1.5rem]">
        ~Donate to~
      </p>
      <h1
        className="text-[2.25rem] uppercase max-tablet:text-[1.5rem] max-desktop:text-[1.875rem] font-extrabold font-roboto"
        style={{ color: colors.text.light }}
      >
        Causes By Categories
      </h1>
      <div className="w-full flex flex-wrap pt-14 justify-between max-desktop:pt-9 max-tablet:pt-9 gap-y-8 max-tablet:gap-y-9">
        {loading ? (
          <div className="w-full flex justify-center">
            <LoaderCircle />
          </div>
        ) : error ? (
          <div className="text-red-500 w-full flex justify-center">
            Error loading campaigns. Please try again later.
          </div>
        ) : (
          categoryData?.map((item, index) => {
            const isLastIndex = index === categoryData.length - 1;
            const lastIndex = categoryData.length - 1;
            const isLastIndexEven = lastIndex % 2 === 0;
            let image = `${process.env.REACT_APP_FE_URL}${item?.image}`;
            return (
              <Link
                to={`/Campaign-By-Category/${item?.category_title}`}
                key={index}
                className={`${
                  isLastIndex
                    ? isLastIndexEven
                      ? "w-[100%]"
                      : "w-[48.8%]"
                    : "w-[48.8%]"
                } max-desktop:w-full max-tablet:w-full shadow-xl rounded-lg`}
                style={{
                  boxShadow:
                    "0px 2px 1px -1px #00000033, 0px 1px 1px 0px #00000024, 0px 1px 3px 0px #0000001F",
                }}
              >
                <img
                  src={image}
                  alt=""
                  className="h-[200px] w-full object-cover bg-bottom bg-no-repeat rounded-t-md"
                />
                <p
                  className="text-[1.75rem] text-start p-5 max-desktop:text-[1.5rem] rounded-b-md font-roboto font-semibold max-tablet:text-[1.25rem]"
                  style={{
                    background: theme.palette.green.main,
                    color: colors.text.main,
                  }}
                >
                  {item.category_title}
                </p>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Index;
