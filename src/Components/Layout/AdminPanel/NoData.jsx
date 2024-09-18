/** @format */

import React from "react";
import Image from "../../../Constants/Image";
// import NoDataLogo from "../../../images/NoData.svg";
const NoData = () => {
  return (
    <div className='w-100 h-100 flex justify-center'>
      <div className='flex flex-col items-center'>
        <img
          src={Image.NoData}
          alt='no data'
          height={"550px"}
          width={"550px"}
        />
        <div className='font-roboto text-xl'>Nothing To Display!</div>
      </div>
    </div>
  );
};

export default NoData;
