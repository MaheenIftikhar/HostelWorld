"use client";
import React, { useState } from "react";
// import logo from '../logo.svg';
import Link from "next/link";
import {  FaRegBuilding } from "react-icons/fa";
import { RiUserLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { LuSendHorizonal } from "react-icons/lu";
import SecondSection from './SecondSection';
import { FaArrowDown } from "react-icons/fa6";

import { CiLocationOn } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { BiWorld } from "react-icons/bi";
import { PiMoneyWavy } from "react-icons/pi";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Divider,
} from "@nextui-org/react";

import SliderComponent from "./SliderComponent";
import { TbCurrentLocation } from "react-icons/tb";
import Travel from "./Travel";
import Footer from "./Footer";
import router from "next/router";
import HelloSection from "./HelloSection";
const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const[isSecondOptionOpen,setIsSecondOptionOpen]=useState(false);
  const[isThirdOptionOpen,setIsThirdOptionOpen]=useState(false);

  const handleInputClick = () => {
    console.log("Input clicked");
  };

  const handleButtonClick = () => {
    console.log("Button clicked");
    router.push("/");
  };


  return (
    <>
      <div className=" header flex justify-between items-center lg:w-[88%] lg:ml-[6.1rem] lg:my-2 sm:p-[1rem] sm:w-full sm:ml ">
        <div className="flex">
          <Link className="" href="https://www.hostelworld.com/">
            <img
              className="sm:w-[160px]"
              src="https://a.hwstatic.com/raw/upload/f_auto,q_auto/wds/logos/brand/hw-orange.svg"
              width="203px"
              height="35px"
            />
          </Link>
        </div>
        <div className="flex justify-between items-center gap-2">
          <FaRegBuilding className="sm:hidden lg:block" />
          <h1 className="sm:hidden lg:block">
            <b>List your Property</b>
          </h1>
          <div className="ml-4">
            <button className="border rounded-full  p-2 border-black-300">
              <RiUserLine />
            </button>
            <Dropdown>
              <DropdownTrigger>
                <button className=" ml-2 border rounded-full p-2 border-black-300">
                  {" "}
                  <RxHamburgerMenu />
                </button>
              </DropdownTrigger>
              <div className="w-[30rem] bg-white rounded-3xl ">
                <DropdownMenu
                  className="z-[300] flex w-[300px]  items-center gap-2 bg-white p-6 rounded-3xl "
                  aria-label="Action event example"
                >
                  <DropdownItem key="button">
                    <div className="flex flex-row justify-between items-center gap-8 w-full">
                      <button className="flex flex-row gap-2 justify-center items-center">
                        {" "}
                        <BiWorld /> ENGLISH{" "}
                      </button>
                      <button className="flex flex-row gap-2 justify-center items-center">
                        <PiMoneyWavy />
                        EUR{" "}
                      </button>
                    </div>
                    <Divider className="my-4"/>
                  </DropdownItem>
                  <DropdownItem key="new">
                    <Link
                      className="flex flex-row justify-between items-center relative w-full font-extrabold p-2"
                      href="/"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Accomodation
                      <IoIosArrowDown />
                    </Link>
                    {isOpen && (
          <div className={`absolute left-0 mt-2 w-full bg-white shadow-lg rounded-md z-10 
            ${isOpen ? 'py-4' : 'py-1'} transition-all duration-300 ease-in-out`}
            style={{ maxHeight: isOpen ? '200px' : '100px' }}>
            <ul className="py-1">
              <li>
                <Link
                  href="/hostels"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Hostels
                </Link>
              </li>
              <li>
                <Link
                  href="/hotels"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Hotels
                </Link>
              </li>
              <li>
                <Link
                  href="/bed-and-breakfast"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Bed and Breakfast
                </Link>
              </li>
            </ul>
          </div>
        )}
                  </DropdownItem>
                  <DropdownItem key="copy">
                    <Link
                      className="flex flex-row gap-2 relative justify-between items-center font-extrabold w-full p-2"
                      href="/"
                      onClick={() => setIsSecondOptionOpen(!isSecondOptionOpen)}
                    >
                      Explore HostelWorld
                      <IoIosArrowDown />
                    </Link>
                    {isSecondOptionOpen && (
          <div className={`absolute left-0 mt-6 w-full bg-white shadow-lg rounded-md z-10 
            ${isSecondOptionOpen ? 'py-4' : 'py-1'} transition-all duration-300 ease-in-out`}
            style={{ maxHeight: isSecondOptionOpen ? '200px' : '100px' }}>
            <ul className="py-1">
              <li>
                <Link
                  href="/hostels"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                 Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/hotels"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                 Booking 
                </Link>
              </li>
              <li>
                <Link
                  href="/bed-and-breakfast"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Guarantee
                </Link>
              </li>
            </ul>
          </div>
        )}
                  </DropdownItem>
                  <DropdownItem key="edit">
                    <Link
                      className="flex flex-row gap-2 relative justify-between items-center font-extrabold w-full p-2"
                      href="/"
                      onClick={() => setIsThirdOptionOpen(!isThirdOptionOpen)}
                    >
                      Work with Us
                      <IoIosArrowDown />
                    </Link>
                    {isThirdOptionOpen && (
          <div className={`absolute left-0 mt-6 w-full bg-white shadow-lg rounded-md z-10 
            ${isSecondOptionOpen ? 'py-4' : 'py-1'} transition-all duration-300 ease-in-out`}
            style={{ maxHeight: isSecondOptionOpen ? '200px' : '100px' }}>
            <ul className="py-1">
              <li>
                <Link
                  href="/hostels"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Hostel SignUp
                </Link>
              </li>
              <li>
                <Link
                  href="/hotels"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
              Affiliate Program
                </Link>
              </li>
              <li>
                <Link
                  href="/bed-and-breakfast"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                 Hostel World Inbox
                </Link>
              </li>
            </ul>
          </div>
        )}
                  </DropdownItem>
                  <DropdownItem key="edit">
                    <Link
                      className="flex flex-row gap-2 justify-start items-center font-extrabold w-full p-2"
                      href="/"
                    >
                      <IoIosHelpCircleOutline />
                      Help
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </div>
            </Dropdown>
          </div>
        </div>
      </div>

      {/* bg-custom-gradient */}
      <SecondSection/>
      {/* <section className='flex justify-center items-center bg-black w-[80%] h-[100px]'>
      <div className='text-white text-center'>sjdhfjfjsdnfsdnfn</div>
     </section> */}
      

      <section className="features-carousel-section homepage-section flex justify-center items-center mt-10 w-full sm:scroll-smooth overflow-x-auto max-w-[90rem] lg:ml-10 sm:ml-0">
        <div className="flex flex-row lg:gap-6 sm:gap-3 justify-center items-center">
          <div className="h-[498px] bg-[#f6a90e] rounded-2xl flex flex-col justify-between pt-[1.5rem] lg:min-w-[440px] relative sm:min-w-[13rem] sm:overflow-hidden sm:snap-center sm:w-full sm:min-h-[20.625rem]">
            <div className="clip-path-yellowpolygon flex bg-white absolute left-0 flex-start flex-col p-2">
              <h1 className="text-xl">
                <b>View Traveller Profiles</b>
              </h1>
              <p className="text-sm">See who's going!</p>
            </div>

            <div className="flex justify-center items-center">
              <img
                className="max-w-full h-auto absolute bottom-0"
                src="https://a.hwstatic.com/image/upload/f_auto,q_auto,w_241,h_382/v1676366319/pwa/ups1"
              ></img>
            </div>
          </div>
          <div className="h-[498px] bg-[#00e0ce] rounded-2xl flex flex-col justify-between pt-[1.5rem] lg:min-w-[440px] relative sm:min-w-[13rem] sm:overflow-hidden sm:snap-center sm:w-full sm:min-h-[20.625rem]">
            <div className="clip-path-skybluepolygon flex bg-white absolute left-0 flex-start flex-col p-2">
              <h1 className="text-xl">
                <b>Join your hostel's Chat</b>
              </h1>
              <p className="text-sm">
                Chat with travellers 14 days before check-in
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                className="max-w-full h-auto absolute bottom-0"
                src="https://a.hwstatic.com/image/upload/f_auto,q_auto,w_241,h_382/v1676366319/pwa/usp2"
              ></img>
            </div>
          </div>
          <div className="h-[498px] bg-[#2767e7] rounded-2xl flex flex-col justify-between pt-[1.5rem] lg:min-w-[440px] relative sm:min-w-[13rem] sm:overflow-hidden sm:snap-center sm:w-full sm:min-h-[20.625rem]">
            <div className="flex justify-center items-center">
              <img
                className="max-w-full h-auto absolute top-0"
                src="https://a.hwstatic.com/image/upload/f_auto,q_auto,w_241,h_382/v1676366319/pwa/usp3"
              ></img>
            </div>
            <div className="clip-path-darkbluepolygon flex bg-white absolute left-0 bottom-4 flex-start flex-col p-2">
              <h1 className="text-xl">
                <b>RSVP to Linkups</b>
              </h1>
              <p className="text-sm">Explore and hang out with travellers.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-12 w-full">
        <div className="flex lg:flex-row justify-between gap-12 items-center lg:ml-16 lg:mr-16  sm:flex-col-reverse">
          <div className="flex flex-col justify-center lg:w-[50%] sm:w-full gap-5 lg:ml-10">
            <h2 className="lg:text-3xl font-bold tracking-tight sm:text-md sm:inline sm:text-center lg:text-start">
              This is the <span className="text-[#cc0074]"> NEW </span>
              {""}
              Hostelworld.
            </h2>
            <h1 className="lg:text-7xl font-bold lg:leading-[5rem] tracking-tight sm:text-center sm:leading-10 sm:text-4xl lg:text-start">
              Helping you{" "}
              <span className="text-[#cc0074]"> connect with travellers </span>.
              Even <span className="text-[#cc0074]"> before </span> you get to
              your hostel.
            </h1>
            <div className="flex lg:justify-start items-center sm:justify-center">
              <button className="bg-[#f8bf0a] text-lg font-bold rounded-2xl p-2 flex-row gap-2 flex items-center justify-center">
                Check What's new <FaArrowDown />{" "}
              </button>
            </div>
          </div>
          <div className="w-[40%] flex justify-center items-center">
            <img src="https://a.hwstatic.com/image/upload/f_auto,w_504,h_568,q_50/v1644922394/pwa/new/The_Spindrift_Hostel-img.jpg"></img>
          </div>
        </div>
      </section>

      {/* small images section */}
      <section className=" animation-container h-[51.3125rem] clip-path-purplepolygon bg-[#7f32cd] [clip-path:polygon(0 calc(100% - 3rem),0_3rem,_100%_0,_100%_100%)] pb-[5rem] relative w-full mt-20 justify-between ">
        <div className="flex justify-center items-center h-[40.625rem] overflow-x-hidden w-full relative">
          <img
            className="h-auto max-w-[289px] rounded-3xl border shadow-[(0_4px_32px_#0000004d)] left-[calc(50% - 139px)] absolute top-[11.375rem] z-200 transform rotate-[-3deg]"
            src="https://a.hwstatic.com/image/upload/f_auto/v1645010222/pwa/whosgoing/los-patios-card_2x_png.jpg"
          ></img>
          <div className="">
            <div className="avatar-usa transform translate-x-[125px] translate-y-[-90px] z-102 absolute h-fit w-fit">
              <img
                className=" border-2 border-[fff] rounded-full w-[72px] object-cover relative"
                src="https://a.hwstatic.com/image/upload/f_auto,q_75,h_166/v1644506092/pwa/whosgoing/miser-mike.jpg"
              ></img>
              <img
                className="rounded-full absolute z-200 h-auto max-w-full bottom-[2px] right-[2px]"
                src="https://a.hwstatic.com/image/upload/q_auto,f_auto,h_24/v1644506092/pwa/whosgoing/usa_png.png"
              ></img>
            </div>
            <div className="avatar-poland transform translate-x-[60px] translate-y-[-220px] z-103 absolute h-fit w-fit">
              <img
                className=" border-2 border-[fff] rounded-full w-[64px] object-cover relative"
                src="https://a.hwstatic.com/image/upload/f_auto,q_75,h_166/v1644506092/pwa/whosgoing/user-anna.jpg"
              ></img>
              <img
                className="rounded-full absolute z-200 h-auto max-w-full bottom-[4px] right-[4px]"
                src="https://a.hwstatic.com/image/upload/q_auto,f_auto,h_24/v1644506092/pwa/whosgoing/poland_png.png"
              ></img>
            </div>
            <div className="avatar-ireland transform translate-x-[170px] translate-y-[30px] z-106 absolute h-fit w-fit">
              <img
                className=" border-2 border-[fff] rounded-full w-[108px] object-cover relative"
                src="https://a.hwstatic.com/image/upload/f_auto,q_75,h_166/v1644506092/pwa/whosgoing/user-eve.jpg"
              ></img>
              <img
                className="rounded-full absolute z-200 h-auto max-w-full bottom-[4px] right-[4px]"
                src="https://a.hwstatic.com/image/upload/q_auto,f_auto,h_24/v1644506092/pwa/whosgoing/ireland_png.png"
              ></img>
            </div>
            <div className="avatar-brazil transform translate-x-[-220px] translate-y-[-155px] z-106 absolute h-fit w-fit">
              <img
                className=" border-2 border-[fff] rounded-full w-[162px] object-cover relative"
                src="https://a.hwstatic.com/image/upload/f_auto,q_75,h_166/v1644506092/pwa/whosgoing/user-f-luiza.jpg"
              ></img>
              <img
                className="rounded-full absolute z-200 h-auto max-w-full bottom-[14px] right-[14px]"
                src="https://a.hwstatic.com/image/upload/q_auto,f_auto,h_24/v1644506092/pwa/whosgoing/brazil_png.png"
              ></img>
            </div>
            <div className="avatar-germany transform translate-x-[-330px] translate-y-[-135px] z-104 absolute h-fit w-fit">
              <img
                className=" border-2 border-[fff] rounded-full w-[120px] object-cover relative"
                src="https://a.hwstatic.com/image/upload/f_auto,q_75,h_166/v1644506092/pwa/whosgoing/user-jenny.jpg"
              ></img>
              <img
                className="rounded-full absolute z-200 h-auto max-w-full bottom-[8px] right-[8px]"
                src="https://a.hwstatic.com/image/upload/q_auto,f_auto,h_24/v1644506092/pwa/whosgoing/germany_png.png"
              ></img>
            </div>
            {/* new */}
            <div className="avatar-portugal transform translate-x-[-330px] translate-y-[-135px] z-102 absolute h-fit w-fit">
              <img
                className=" border-2 border-[fff] rounded-full w-[72px] object-cover relative"
                src="https://a.hwstatic.com/image/upload/f_auto,q_75,h_166/v1644506092/pwa/whosgoing/user-laura.jpg"
              ></img>
              <img
                className="rounded-full absolute z-200 h-auto max-w-full bottom-[0px] right-[0px]"
                src="https://a.hwstatic.com/image/upload/q_auto,f_auto,h_24/v1644506092/pwa/whosgoing/portugal_png.png"
              ></img>
            </div>
            <div className="avatar-italy transform translate-x-[240px] translate-y-[-200px] z-103 absolute h-fit w-fit">
              <img
                className=" border-2 border-[fff] rounded-full w-[80px] object-cover relative"
                src="https://a.hwstatic.com/image/upload/f_auto,q_75,h_166/v1644506092/pwa/whosgoing/user-luka.jpg"
              ></img>
              <img
                className="rounded-full absolute z-200 h-auto max-w-full bottom-[0px] right-[0px]"
                src="https://a.hwstatic.com/image/upload/q_auto,f_auto,h_24/v1644506092/pwa/whosgoing/italy_png.png"
              ></img>
            </div>
            {/* animate-[animationChina_2s_forwards_cubic-bezier(.6,-.28,.69,1.58)] */}
            <div className="avatar-china  transform translate-x-[-210px] translate-y-[70px] z-105 absolute h-fit w-fit ">
              <img
                className=" border-2 border-[fff] rounded-full w-[156px] object-cover relative"
                src="https://a.hwstatic.com/image/upload/f_auto,q_75,h_166/v1644506092/pwa/whosgoing/user-pan.jpg"
              ></img>
              <img
                className="rounded-full absolute z-200 h-auto max-w-full bottom-[18px] right-[18px]"
                src="https://a.hwstatic.com/image/upload/q_auto,f_auto,h_24/v1644506092/pwa/whosgoing/china_png.png"
              ></img>
            </div>
            <div className="avatar-france transform translate-x-[-300px] translate-y-[50px] z-101 absolute h-fit w-fit">
              <img
                className=" border-2 border-[fff] rounded-full w-[80px] object-cover relative"
                src="https://a.hwstatic.com/image/upload/f_auto,q_75,h_166/v1644506092/pwa/whosgoing/user-pierre.jpg"
              ></img>
              <img
                className="rounded-full absolute z-200 h-auto max-w-full bottom-[0px] right-[0px]"
                src="https://a.hwstatic.com/image/upload/q_auto,f_auto,h_24/v1644506092/pwa/whosgoing/france_png.png"
              ></img>
            </div>
            <div className="avatar-korea transform translate-x-[370px] translate-y-[-150px] z-105 absolute h-fit w-fit">
              <img
                className=" border-2 border-[fff] rounded-full w-[128px] object-cover relative"
                src="https://a.hwstatic.com/image/upload/f_auto,q_75,h_166/v1644506092/pwa/whosgoing/user-tom.jpg"
              ></img>
              <img
                className="rounded-full absolute z-200 h-auto max-w-full bottom-[8px] right-[8px]"
                src="https://a.hwstatic.com/image/upload/q_auto,f_auto,h_24/v1644506092/pwa/whosgoing/south-korea_png.png"
              ></img>
            </div>

            <div className="avatar-spain transform translate-x-[120px] translate-y-[160px] z-104 absolute h-fit w-fit">
              <img
                className=" border-2 border-[fff] rounded-full w-[96px] object-cover relative"
                src="https://a.hwstatic.com/image/upload/f_auto,q_75,h_166/v1644506092/pwa/whosgoing/user-victoria.jpg"
              ></img>
              <img
                className="rounded-full absolute z-200 h-auto max-w-full bottom-[0px] right-[0px]"
                src="https://a.hwstatic.com/image/upload/q_auto,f_auto,h_24/v1644506092/pwa/whosgoing/spain_png.png"
              ></img>
            </div>

            {/* dots */}
            <div className="w-[12px] h-[12px] bg-inherit border-2 border-[#ef8094] rounded-full absolute translate-x-[20px] translate-y-[-200px] "></div>
            <div className="w-[12px] h-[12px] bg-inherit border-2 border-[#ba90e4] rounded-full absolute translate-x-[-90px] translate-y-[-240px] "></div>
            <div className="w-[10px] h-[10px] bg-[#30cf72] border-2 border-[#30cf72] rounded-full absolute translate-x-[-90px] translate-y-[-210px] "></div>
            <div className="w-[10px] h-[10px] bg-[#ef8094] border-2 border-[#ef8094] rounded-full absolute translate-x-[-165px] translate-y-[20px] "></div>
            <div className="w-[20px] h-[20px] bg-[#f6a90e] border-2 border-[#f6a90e] rounded-full absolute translate-x-[-160px] translate-y-[-185px] "></div>
            <div className="w-[20px] h-[20px] bg-[#f7bbc6] border-2 border-[#f7bbc6] rounded-full absolute translate-x-[-190px] translate-y-[-15px] "></div>
            <div className="w-[16px] h-[16px] bg-inherit border-2 border-[#a8fff8] rounded-full absolute translate-x-[310px] translate-y-[80px] "></div>
            <div className="w-[16px] h-[16px] bg-[#a8fff8] border-2 border-[#a8fff8] rounded-full absolute translate-x-[-260px] translate-y-[-45px] "></div>
            <div className="w-[16px] h-[16px] bg-inherit border-2 border-[#ba90e4] rounded-full absolute translate-x-[60px] translate-y-[220px] "></div>
            <div className="w-[16px] h-[16px] bg-[#f5ebb7] border-2 border-[#f5ebb7] rounded-full absolute translate-x-[100px] translate-y-[-200px] "></div>
            <div className="w-[18px] h-[18px]  bg-[#f5ebb7] border-2 border-[#f5ebb7] rounded-full absolute translate-x-[350px] translate-y-[-230px] "></div>
          </div>
        </div>
        <div className="text flex items-center justify-center flex-col mt-[-3.125rem] pr-[1rem] pl-[rem]">
          <h2 className="text-header text-white text-5xl font-extrabold tracking-tight leading-10 sm:text-center  ">
            See <span className="text-[#f6a90e]">who's</span> going.
          </h2>
          <p className="text-body text-white tracking-tight leading-6 mb-[2rem] mt-[1.5rem] font-extrabold text-lg sm:text-balance sm:text-center">
            Connect with other travellers staying in the same hostel or city as
            you.
          </p>
        </div>
      </section>
    
      <HelloSection/>
      <SliderComponent />
      <Travel />
      <Footer />
    </>
  );
};

export default HomePage;
