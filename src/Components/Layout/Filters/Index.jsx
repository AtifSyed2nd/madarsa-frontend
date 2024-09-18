/** @format */

import React, { useState, useRef, useEffect } from "react";
import { IoMdAdd } from "react-icons/io";
import { BsAlarmFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { PiPlantFill } from "react-icons/pi";
import { IoCloseCircleOutline, IoHeartHalfSharp } from "react-icons/io5";
import { PiHandCoinsDuotone } from "react-icons/pi";
import { BsHandIndex } from "react-icons/bs";
import { HiGift } from "react-icons/hi2";
import { FaRupeeSign } from "react-icons/fa";
import { Dialog, DialogTitle, IconButton, DialogContent } from "@mui/material";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const iconMapping = {
  BsAlarmFill: BsAlarmFill,
  PiPlantFill: PiPlantFill,
  IoHeartHalfSharp: IoHeartHalfSharp,
  PiHandCoinsDuotone: PiHandCoinsDuotone,
  BsHandIndex: BsHandIndex,
  HiGift: HiGift,
  FaRupeeSign: FaRupeeSign,
};

const buttonData = [
  { icon: "PiPlantFill", title: "Newly Added" },
  { icon: "IoHeartHalfSharp", title: "Needs Support" },
  { icon: "BsAlarmFill", title: "Expiring Soon" },
  { icon: "PiHandCoinsDuotone", title: "Zakat" },
  { icon: "BsHandIndex", title: "Fitra" },
  { icon: "HiGift", title: "Hadiya" },
  { icon: "FaRupeeSign", title: "Interest Offloading" },
];

function Index({ onChangeFilter }) {
  const [activeIndices, setActiveIndices] = useState([]);
  const [activeTitles, setActiveTitles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [showRemoveText, setShowRemoveText] = useState(false);
  const containerRef = useRef(null);

  const handleButtonClick = (index) => {
    const selectedTitle = buttonData[index].title;
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
      setActiveTitles(activeTitles.filter((title) => title !== selectedTitle));
    } else {
      if (activeIndices.length < 3) {
        setActiveIndices([...activeIndices, index]);
        setActiveTitles([...activeTitles, selectedTitle]);
      } else {
        setShowModal(true);
      }
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRemoveFilters = () => {
    setActiveIndices([]);
    setActiveTitles([]);
    setShowRemoveText(true);
    setTimeout(() => {
      setShowRemoveText(false);
    }, 2000);
  };

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  const checkOverflow = () => {
    if (containerRef.current) {
      setIsOverflowing(
        containerRef.current.scrollWidth > containerRef.current.clientWidth
      );
    }
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  const sortedButtonData = buttonData
    .map((item, index) => ({ ...item, index }))
    .sort((a, b) => {
      const aIsActive = activeIndices.includes(a.index);
      const bIsActive = activeIndices.includes(b.index);
      return bIsActive - aIsActive;
    });

  useEffect(() => {
    const taggedTitles = activeTitles.map((title) => `${title}`);
    console.log(taggedTitles, "Active Filters with Tags");
    onChangeFilter(taggedTitles);
  }, [activeTitles]);

  return (
    <div className='w-full flex flex-col items-start gap-[1rem]'>
      <div className='w-full flex items-center justify-between'>
        <p className='text-[1.75rem] max-desktop:text-[1.5rem] max-tablet:text-[1.25rem] text-[#4D4D4D] font-roboto font-normal'>
          Add Filters
        </p>
        {activeIndices.length > 0 && (
          <button
            onClick={handleRemoveFilters}
            className='px-2 h-[40px] flex justify-center gap-2 rounded-md  items-center hover:bg-[#e7d3d34d]   hover:border hover:shadow-md'
            style={{ order: 9999 }}
          >
            <ImCross className='size-5 rounded-full p-1 bg-[#D40000] text-[#FFCCCC]' />
            <p className='text-[1rem] max-tablet:text-[0.875rem] font-roboto font-normal text-[#D40000]'>
              Remove Filters
            </p>
          </button>
        )}
      </div>

      <div className='w-full relative flex items-center'>
        {isOverflowing && (
          <button onClick={scrollLeft} className='p-2'>
            <MdChevronLeft size={30} />
          </button>
        )}
        <div
          className='flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide'
          ref={containerRef}
        >
          {sortedButtonData.map((item, index) => {
            const IconComponent = iconMapping[item.icon];
            const isActive = activeIndices.includes(item.index);
            return (
              <button
                key={item.index}
                onClick={() => handleButtonClick(item.index)}
                className={`px-2 h-[40px] flex justify-center gap-2 rounded-full border-[2px] items-center ${
                  isActive
                    ? "bg-[#075985] border-[#075985] shadow-xl"
                    : "border-[#075985]"
                }`}
                style={{ order: isActive ? -1 : index }}
              >
                <IconComponent
                  className={`size-5 rounded-full ${
                    isActive ? "text-[#FFFFFF]" : "text-[#075985]"
                  }`}
                />

                <p
                  className={`text-[1rem] max-tablet:text-[0.875rem] font-roboto font-normal ${
                    isActive ? "text-[#FFFFFF]" : "text-[#333333]"
                  }`}
                >
                  {item.title}
                </p>

                {!isActive && (
                  <IoMdAdd className='size-5 rounded-full bg-[#075985] text-[#FFFFFF]' />
                )}

                {isActive && (
                  <ImCross className='size-5 rounded-full p-1 bg-[#FFFFFF] text-[#075985]' />
                )}
              </button>
            );
          })}
        </div>

        {isOverflowing && (
          <button onClick={scrollRight} className='p-2'>
            <MdChevronRight size={30} />
          </button>
        )}
        {showModal && (
          <Dialog open={showModal} onClose={handleCloseModal}>
            <DialogTitle
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span className='font-roboto font-bold uppercase text-red-600'>
                Warning
              </span>
              <IconButton onClick={handleCloseModal}>
                <IoCloseCircleOutline className='size-8 font-black' />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <p className='text-lg font-medium font-roboto text-[#333333]'>
                Please select only up to 3 filters!
              </p>
            </DialogContent>
          </Dialog>
        )}
      </div>
      <p
        className={`text-red-600 text-[1.2rem] max-desktop:text-[1rem] max-tablet:text-[0.85rem] font-medium font-roboto w-full text-center transition-opacity duration-500 ${
          showRemoveText ? "opacity-100" : "opacity-0"
        }`}
      >
        Filters Removed!
      </p>

      {/* <Card /> */}
    </div>
  );
}

export default Index;
