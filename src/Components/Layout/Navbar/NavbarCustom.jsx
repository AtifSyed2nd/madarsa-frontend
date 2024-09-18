/** @format */

import React, { Fragment, useContext, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { IoCaretDownSharp } from "react-icons/io5";
import { MenuIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import PrimaryButton from "../../Inputs/PrimaryButton/";
import Image from "../../../Constants/Image";
import { Search } from "../../Inputs/Search/index";
import { colors } from "../../../Constants/theme";
import AuthContext from "../../../context/authContext/AuthContext";

import {
  AdminPanelSettingsOutlined,
  LogoutOutlined,
} from "@mui/icons-material";
import AvatarDropDown from "../AvatarDropDown/Index";
const Accounts = [
  {
    name: "Stats & Expenses",
    href: "/account/Stats-And-Expense",
  },
  {
    name: "Ongoing Campaigns",
    href: "/account/Ongoing-Campaigns",
  },
];
const AboutUs = [
  {
    name: "Overview",
    href: "/about/Overview",
  },
  {
    name: "Board of Management",
    href: "/about/Board-of-Management",
  },
  {
    name: "Departments & Facilities",
    href: "/about/Departments&Facilities",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavbarCustom() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const authContext = useContext(AuthContext);
  const { Logout } = authContext;
  const { isLogin } = authContext;

  return (
    <>
      <div
        className='px-8 z-50 w-full fixed top-0 max-w-[1920px] '
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          boxShadow: "0px 7px 7px 0px #00000040",
          backdropFilter: "blur(55px)",
        }}
      >
        <nav className='flex justify-between items-center'>
          <div className='w-[130px] flex justify-start'>
            <Link to={"/"}>
              <img
                src={Image.NavLogo}
                alt='Logo'
                className='w-[9rem] h-[3.8rem] rounded-full'
              />
            </Link>
          </div>
          <div className='flex desktop:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <MenuIcon className='h-7 w-7 text-black' aria-hidden='true' />
            </button>
          </div>
          <div className='flex w-[601px] justify-end items-center relative max-desktop:hidden'>
            <div className='flex gap-8 items-center'>
              <button
                className={`text-[0.925rem] font-medium font-[roboto] hover:text-black text-[${colors.text.dark}]`}
              >
                <Link to='/'>Home</Link>
              </button>
              <Popover className='relative'>
                <Popover.Button
                  className={`flex outline-none items-center gap-x-1 text-[0.925rem] font-medium font-[roboto] hover:text-black text-[${colors.text.dark}]`}
                >
                  Accounts <IoCaretDownSharp />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-500'
                  enterFrom='opacity-0 translate-y-1'
                  enterTo='opacity-100 translate-y-0'
                  leave='transition ease-in duration-150'
                  leaveFrom='opacity-100 translate-y-0'
                  leaveTo='opacity-0 translate-y-1'
                >
                  <Popover.Panel className='absolute left-0 top-full z-10 mt-3 w-[170px] max-w-md overflow-hidden rounded bg-white shadow-lg ring-1 ring-gray-900/5'>
                    <div className='pb-4'>
                      {Accounts.map((item) => (
                        <div
                          key={item.name}
                          className={`group relative flex items-center gap-x-6 pl-4 !pt-4 text-[0.8rem] font-[roboto] text-[#333333] hover:bg-gray-50 hover:text-[${colors.primary.dark}]`}
                          style={{ fontWeight: 400 }}
                        >
                          <div className='flex-auto'>
                            <Link
                              to={item.href}
                              className='block font-semibold text-gray-900'
                            >
                              {item.name}
                              <span className='absolute inset-0' />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
              <Popover className='relative'>
                <Popover.Button
                  className={`flex outline-none nav_button items-center gap-x-1 text-[0.925rem] font-medium font-[roboto] hover:text-black text-[${colors.text.dark}]`}
                >
                  About Us <IoCaretDownSharp />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-500'
                  enterFrom='opacity-0 translate-y-1'
                  enterTo='opacity-100 translate-y-0'
                  leave='transition ease-in duration-150'
                  leaveFrom='opacity-100 translate-y-0'
                  leaveTo='opacity-0 translate-y-1'
                >
                  <Popover.Panel className='absolute left-0 top-full z-10 mt-3 w-[200px] max-w-md overflow-hidden rounded bg-white shadow-lg ring-1 ring-gray-900/5'>
                    <div className='pb-4'>
                      {AboutUs.map((item) => (
                        <div
                          key={item.name}
                          className={`group relative flex items-center font-[roboto] gap-x-6 pl-4 !pt-4 text-[0.8rem] text-[#333] hover:bg-gray-50 hover:text-[${colors.primary.dark}]`}
                          style={{ fontWeight: 400 }}
                        >
                          <div className='flex-auto'>
                            <Link
                              to={item.href}
                              className='block font-semibold text-gray-900'
                            >
                              {item.name}
                              <span className='absolute inset-0' />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
              <button
                className={`text-[0.925rem] font-medium font-[roboto] hover:text-black text-[${colors.text.dark}]`}
              >
                <Link to='/Contact-Us'>Contact Us</Link>
              </button>
              <Link to='/account/Ongoing-Campaigns'>
                <PrimaryButton
                  sx={{
                    fontSize: "1rem",
                    width: "100px",
                    fontWeight: 700,
                    color: colors.text.main,
                    borderRadius: "5px",
                  }}
                >
                  Donate
                </PrimaryButton>
              </Link>
              {isLogin ? (
                <AvatarDropDown bgcolor={`${colors.primary.light}`} />
              ) : (
                <button
                  className={`text-[0.925rem] font-medium font-[roboto] hover:text-black text-[${colors.text.dark}]`}
                >
                  <Link to='/Login'>Login</Link>
                </button>
              )}
            </div>
          </div>
        </nav>
      </div>
      <Dialog
        as='div'
        className='desktop:hidden '
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <Link to='/' className='-m-1.5 p-1.5 outline-none'>
              <span className='sr-only'>Your Company</span>
              <img className='h-8 w-auto' src={Image.NavLogo} alt='' />
            </Link>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-10 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <Search sx={{ width: { xs: "100%", md: "300px" } }} />
                <button
                  className={`text-[1.2rem] font-medium font-[roboto] pt-8 hover:text-[${colors.primary.dark}] text-[${colors.text.dark}]`}
                >
                  <Link to='/'>Home</Link>
                </button>
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={`flex w-full items-center justify-between font-[roboto] rounded-lg py-2 pl-3 pr-3.5 max-desktop:text-[1.2rem] font-medium leading-7 text-gray-900 hover:bg-gray-50 hover:text-[${
                          colors.primary.dark
                        }] ${open ? "text-[#CCFBF1]" : ""}`}
                      >
                        Accounts
                        <IoCaretDownSharp
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-6 w-6 flex-none"
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        {[...Accounts].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as='a'
                            href={item.href}
                            className={`block rounded-lg py-2 pl-6 pr-3 font-[roboto] text-lg max-tablet:text-[1rem] max-desktop:text-[1rem] font-normal leading-7 text-gray-900 hover:bg-[#d9d9d9] hover:text-[${colors.primary.dark}]`}
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={`flex w-full items-center justify-between font-[roboto] rounded-lg py-2 pl-3 pr-3.5 max-desktop:text-[1.2rem] font-medium leading-7 text-gray-900 hover:bg-gray-50 hover:text-[${
                          colors.primary.dark
                        }] ${open ? "text-[#CCFBF1]" : ""}`}
                      >
                        About Us
                        <IoCaretDownSharp
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-6 w-6 flex-none"
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        {[...AboutUs].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as='a'
                            href={item.href}
                            className={`block rounded-lg py-2 pl-6 pr-3 font-[roboto] text-lg max-tablet:text-[1rem] max-desktop:text-[1rem] font-normal leading-7 text-gray-900 hover:bg-[#d9d9d9] hover:text-[${colors.primary.dark}]`}
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <button
                  className={`text-[1.2rem] font-medium font-[roboto] hover:text-[${colors.primary.dark}] text-[${colors.text.dark}`}
                >
                  <Link to='/Contact-Us'>Contact Us</Link>
                </button>
              </div>
              {isLogin ? (
                <div className='flex flex-col gap-1 w-full items-start'>
                  <button
                    className={`text-[1.2rem] pb-2 font-medium font-[roboto] hover:text-[${colors.primary.dark}] text-[${colors.text.dark}]`}
                  >
                    <Link to='/Admin-Panel/Dashboard'>
                      <AdminPanelSettingsOutlined className='mr-1' />
                      Admin Panel
                    </Link>
                  </button>

                  <button
                    className={`text-[1.2rem] font-medium font-[roboto] hover:text-[${colors.primary.dark}] text-[${colors.text.dark}]`}
                    onClick={Logout}
                  >
                    <LogoutOutlined className='mr-1' /> Logout
                  </button>
                </div>
              ) : (
                <button
                  className={`text-[1.2rem] font-medium font-[roboto] hover:text-[${colors.primary.dark}] text-[${colors.text.dark}]`}
                >
                  <Link to='/Login'>Login</Link>
                </button>
              )}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}

export default NavbarCustom;
