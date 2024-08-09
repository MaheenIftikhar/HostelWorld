"use client";
import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import MiddleSection from "./MiddleSection";
const Travel = () => {
  const list = [
    {
      title: "Backpackers Guide To South East Asia",
      img: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_360/f_auto,q_auto,w_360/v1707833880/pwa/blog/backpacking-S-Asia.jpg",
    },
    {
      title: "How To Backpack Around Laos",
      img: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_360/v1707833880/pwa/blog/backpacking-laos-thumb.jpg",
    },
    {
      title: "Backpacker's Guide To Travel Around Vietnam",
      img: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_360/v1707833881/pwa/blog/backpacking-vietnam-thumb.jpg",
    },
    {
      title: "Complete Guide To Backpacking Europe",
      img: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_360/v1707833880/pwa/blog/backpacking-europe-thumb-image.jpg",
    },
    {
      title: "This Year's Best Interrail Destinations",
      img: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_360/v1707833881/pwa/blog/interrail-thumb.jpg",
    },
    {
      title: "Solo Travel In Spain",
      img: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_360/v1707833881/pwa/blog/solo-travel-in-spain-thumb.jpg",
    },
    {
      title: "Solo Traveller's Guide To Backpacking The USA",
      img: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_360/v1707833879/pwa/blog/backpacking-usa-thumb.jpg",
    },
    {
      title: "What To Know When Backpacking Australia",
      img: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_360/v1707833880/pwa/blog/backpacking-Australia-thumb.jpg",
    },
  ];
  return (
    <>
     <MiddleSection/>
      <section className="w-full download-section flex flex-col items-center bg-[#2767e7] pb-[6rem] pt-[5rem] clip-path-downloadsection">
        <div className="flex flex-col gap-4 item-center justify-center">
          <div className="flex item-center justify-center">
            <img
              className="block w-[96px] h-auto"
              src="https://a.hwstatic.com/image/upload/v1644942643/pwa/sp/hw-icon.svg"
            ></img>
          </div>
          <h2 className="text-white font-extrabold tracking-tight leading-10 lg:text-6xl sm:text-4xl sm:text-center">
            Download the app now.
          </h2>
        </div>
        <div className="flex flex-row gap-2 mt-6">
          <Link href="/">
            <img src="//ucd.hwstatic.com/appdownload_buttons/app_store/appstore_en_l.png"></img>
          </Link>
          <Link href="/">
            <img src="//ucd.hwstatic.com/appdownload_buttons/play_store/playstore_en_l.png"></img>
          </Link>
        </div>
      </section>

      <section className=" climate-neutral-wrapper w-full mt-10">
        <div className="mb-[3rem] gap-10 flex lg:flex-row max-w-[85.5rem] p-[0 1rem] ml-auto mr-auto sm:flex-col-reverse ">
          <div className="block ml-auto mr-auto sm:hidden lg:block">
            <img
              className="object-contain w-[42rem] max-h-[30.5rem] m-[0 auto] "
              src="https://a.hwstatic.com/image/upload/f_auto,h_488,q_50/v1659430249/pwa/cnc/palmar.beach.lodge.jpg"
            ></img>
            <div className="caption text-sm leading-3 mt-4">
              <p className="font-extrabold">Palmar Beach Lodge, Panama</p>
              <p className="font-normal mt-2">Hoscars 2022 Winner</p>
            </div>
          </div>
          <div className="text-content lg:w-[50%] sm:w-full flex sm:justify-center sm:items-center sm:flex-col lg:justify-start lg:items-start">
            <img src="https://a.hwstatic.com/raw/upload/f_auto,q_auto/wds/illustrations/lg/eco.svg"></img>
            <h2 className="leading-tight lg:text-6xl font-extrabold text-black sm:text-balance sm:text-4xl sm:text-center lg:text-start">
              We are committed to a{" "}
              <span className="text-[#30cf72]">better world</span>.
            </h2>
            <p className="text-black mt-2 sm:text-base sm:tracking-normal sm:leading-6 sm:text-center lg:text-start">
              Join us in making the planet a priority. We are proud to be a
              Climate Neutral verified company, committed to reducing our
              environmental footprint.
            </p>
            <Link
              className="pointer m-0  rounded-md hover:bg-gray-100 outline-none p-2 mt-3"
              href="/"
            >
              <span className="font-bold">Learn More</span>
            </Link>
            <img
              className="mt-12"
              src="https://a.hwstatic.com/raw/upload/f_auto,q_auto/wds/logos/cnc.svg"
            ></img>
          </div>
        </div>
        <div className="popular-places-container mt-20 ml-20 h-auto">
          <h2 className="font-extrabold text-black text-3xl">Get inspired!</h2>
          <p className="text-black">
            Discover popular places for unforgettable adventures.
          </p>
          <div className="mosaic mt-4 flex flex-row gap-[160px] items-center">
            <div className="mosaic-inner flex flex-col gap-10 relative ">
              <Link href="/">
                <img
                  className="rounded-3xl"
                  src="https://a.hwstatic.com/image/upload/f_auto,q_auto,w_220/pwa/london.jpg"
                ></img>
                <span className="bg-black absolute  top-0 left-0 text-white mt-[1.5rem] p-[0.25rem 0.5rem] font-extrabold text-lg">
                  London
                </span>
                <div className="flex flex-row gap-1 text-[#636c7d] items-center justify-end">
                  <FaInstagram />
                  <span>giannicersosimo</span>
                </div>
              </Link>
              <Link href="/">
                <img
                  className="rounded-3xl"
                  src="https://a.hwstatic.com/image/upload/f_auto,q_auto,w_220/pwa/berlin.jpg"
                ></img>
                <span className="bg-black absolute top-[370px] left-0 text-white mt-[1.5rem] p-[0.25rem 0.5rem] font-extrabold text-lg">
                  Berlin
                </span>
                <div className="flex flex-row gap-1 text-[#636c7d] items-center justify-end">
                  <FaInstagram />
                  <span>camiladasilvala</span>
                </div>
              </Link>
            </div>
            <div className="mosaic-inner flex flex-col gap-10 mt-[120px] relative ">
              <Link href="/">
                <img
                  className="rounded-3xl"
                  src="https://a.hwstatic.com/image/upload/f_auto,q_auto,w_220/pwa/amsterdam.jpg"
                ></img>
                <span className="bg-black absolute  top-0 left-0 text-white mt-[1.5rem] p-[0.25rem 0.5rem] font-extrabold text-lg">
                  Amsterdam
                </span>
                <div className="flex flex-row gap-1 text-[#636c7d] items-center justify-end">
                  <FaInstagram />
                  <span>_federicalillo</span>
                </div>
              </Link>
              <Link href="/">
                <img
                  className="rounded-3xl"
                  src="https://a.hwstatic.com/image/upload/f_auto,q_auto,w_220/pwa/rome.jpg"
                ></img>
                <span className="bg-black absolute top-[370px] left-0 text-white mt-[1.5rem] p-[0.25rem 0.5rem] font-extrabold text-lg">
                  Rome
                </span>
                <div className="flex flex-row gap-1 text-[#636c7d] items-center justify-end">
                  <FaInstagram />
                  <span>theyellowrome</span>
                </div>
              </Link>
            </div>
            <div className="mosaic-inner  flex flex-col gap-10 relative ">
              <Link href="/">
                <img
                  className="rounded-3xl"
                  src="https://a.hwstatic.com/image/upload/f_auto,q_auto,w_220/pwa/barcelona.jpg"
                ></img>
                <span className="bg-black absolute top-[370px] left-0 text-white mt-[1.5rem] p-[0.25rem 0.5rem] font-extrabold text-lg">
                  Barcelona
                </span>
                <div className="flex flex-row gap-1  text-[#636c7d] items-center justify-end">
                  <FaInstagram />
                  <span>noe.gf</span>
                </div>
              </Link>
              <Link href="/">
                <img
                  className="rounded-3xl"
                  src="https://a.hwstatic.com/image/upload/f_auto,q_auto,w_220/pwa/new_zealand.jpg"
                ></img>
                <span className="bg-black absolute  top-0 left-0 text-white mt-[1.5rem] p-[0.25rem 0.5rem] font-extrabold text-lg">
                  New Zealand
                </span>
                <div className="flex flex-row gap-1 text-[#636c7d] items-center justify-end">
                  <FaInstagram />
                  <span>imlucyirving</span>
                </div>
              </Link>
            </div>
            <div className="mosaic-inner  flex flex-col gap-10 mt-[120px] relative ">
              <Link href="/">
                <img
                  className="rounded-3xl"
                  src="https://a.hwstatic.com/image/upload/f_auto,q_auto,w_220/pwa/paris.jpg"
                ></img>
                <span className="bg-black absolute  top-0 left-0 text-white mt-[1.5rem] p-[0.25rem 0.5rem] font-extrabold text-lg">
                  Paris
                </span>
                <div className="flex flex-row gap-1 text-[#636c7d] items-center justify-end">
                  <FaInstagram />
                  <span>asyaballery</span>
                </div>
              </Link>
              <Link href="/">
                <img
                  className="rounded-3xl"
                  src="https://a.hwstatic.com/image/upload/f_auto,q_auto,w_220/pwa/dublin.jpg"
                ></img>
                <span className="bg-black absolute top-[370px] left-0 text-white mt-[1.5rem] p-[0.25rem 0.5rem] font-extrabold text-lg">
                  Dublin
                </span>
                <div className="flex flex-row gap-1 text-[#636c7d] items-center justify-end">
                  <FaInstagram />
                  <span>4on5away</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="popular-places-container mt-4 max-w-[100rem] ml-10 ">
        <div className="">
          <h2 className="font-extrabold text-3xl leading-8">
            Travel tips & adventure advice
          </h2>
          <h3 className="">
            Don't miss our backpacker blog, penned by travel experts to assist
            your adventures!
          </h3>
        </div>
        <div className="flex flex-row overflow-auto  gap-4 mt-8">
          {list.map((item, index) => (
            <Card
              className="border-2  rounded-3xl min-w-[15rem] flex flex-col shadow-[(inset_0_0_0_.0625rem_#dddfe4)] pb-2 mb-4 "
              shadow="sm"
              key={index}
              isPressable
              onPress={() => console.log("item pressed")}
            >
              <CardBody className=" p-2">
                <Image
                  shadow="sm"
                  width="14rem"
                  alt={item.title}
                  className="w-full object-cover h-[140px] rounded-3xl"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-sm font-bold text-center flex items-center justify-center">
                <b>{item.title}</b>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className=" flex items-end justify-end w-full">
          <Link
            className="pointer m-auto  rounded-md hover:bg-gray-100 outline-none p-2 mt-3 underline"
            href="/"
          >
            <span className="font-bold">Read our Blog</span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Travel;
