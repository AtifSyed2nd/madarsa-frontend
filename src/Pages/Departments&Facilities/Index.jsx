/** @format */

import React from "react";
import NavbarCustom from "../../Components/Layout/Navbar/NavbarCustom";
import Footer from "../../Components/Layout/Footer/Index";
import DepartmentFacilitiesCards from "../../Components/Layout/Departments&FacilitiesCards/Index";
import Image from "../../Constants/Image";
function Index() {
  return (
    <div className=''>
      <NavbarCustom />
      <div className='w-full pt-[3.5rem]'>
        <img
          src={Image.DepartmentImg}
          className='w-full  object-cover bg-bottom  bg-no-repeat max-tablet:h-[200px] max-desktop:h-[300px] h-[600px]'
          alt=''
        />
      </div>
      <DepartmentFacilitiesCards />
      <Footer />
    </div>
  );
}

export default Index;
