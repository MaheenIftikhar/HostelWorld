"use client";
import React, { useState } from "react";
import { Autocomplete, AutocompleteItem, Link } from "@nextui-org/react";
import { places } from "./data";
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { LiaCitySolid } from "react-icons/lia";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { Button, DateRangePicker, Input } from "@nextui-org/react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { groupTypes } from "./group";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  RadioGroup,
  Radio,
} from "@nextui-org/react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Divider,
} from "@nextui-org/react";

import { RiCloseFill } from "react-icons/ri";
import { useDateFormatter } from "@react-aria/i18n";

import { LuCalendarCheck, LuUsers2 } from "react-icons/lu";
import { parseDate, getLocalTimeZone } from "@internationalized/date";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { TbCurrentLocation } from "react-icons/tb";
const SecondSection = () => {
  // useStates

  const [count, setCount] = useState(1);
  const [value, setValue] = React.useState(parseDate("2024-04-04"));
  const [modalPlacement, setModalPlacement] = useState("bottom");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [inputvalue, setInputValue] = useState("");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [selected, setSelected] = useState<string>("destinations");
  const [isSmallPopoverOpen, setIsSmallPopoverOpen] = useState(false);
  let formatter = useDateFormatter({ dateStyle: "full" });

  const variants: ("underlined" | "solid" | "light" | "bordered")[] = [
    "underlined",
  ];

  const bottomSearchBar = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };
  type Key = string | number;
  let tabs = [
    {
      id: "destinations",
      label: "Destinations",
      content: (
        <div className="relative h-30 w-full overflow-hidden">
          <IoLocationOutline className="absolute z-20 top-4" />
          <input
            required
            type="text"
            className="absolute native-input top-1 w-full h-10 pl-[3rem] pb-[0.5rem] z-10 pt-[1.5rem] lg:hidden sm:block"
          />
          <div className="mt-2 border-black rounded shadow-lg z-10 h-10">
            <div className="px-1 py-2">
              <div className="flex w-[350px] justify-start items-center gap-2 p-2 rounded-3xl lg:hidden sm:block">
                <TbCurrentLocation/>
                Current Location
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "dates",
      label: "Dates",
      content: (
        <DateRangePicker
          color="default"
          label="Check In & Check Out"
          variant="bordered"
          visibleMonths={2}
          className="max-w-xs h-full w-full"
        />
      ),
    },
    {
      id: "guests",
      label: "Guests",
      content: (
        <div className="flex flex-col items-center justift-between">
          <div className="flex flex-row justify-between items-center h-full w-full ">
            <div className="flex flex-row gap-2 font-normal justify-between items-center">
              <LuUsers2 className="text-black" />
              Guests{""}
            </div>
            <div className="flex gap-4 flex-row mr-4 justify-between ">
              <button
                className=""
                onClick={(e) => {
                  e.stopPropagation();
                  decrement();
                }}
              >
                <CiCircleMinus className="w-10 h-10" />
              </button>{" "}
              <div className="flex justify-center items-center ">{count}</div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  increment();
                }}
                className=""
              >
                <CiCirclePlus className="w-10 h-10" />
              </button>
            </div>
          </div>

          {count > 8 ? (
            <>
              <Select label="Group Type" className="max-w-xs mb-3 mt-3">
                {groupTypes.map((groupTypes) => (
                  <SelectItem key={groupTypes.value}>
                    {groupTypes.label}
                  </SelectItem>
                ))}
              </Select>
              <div className="flex flex-col gap-2">
                <p className="font-normal">Age Ranges</p>
                <div className="flex flex-row flex-wrap gap-1">
                  <Button className="w-[7rem]" radius="full" variant="ghost">
                    0-12
                  </Button>
                  <Button className="w-[7rem]" radius="full" variant="ghost">
                    12-18
                  </Button>
                  <Button className="w-[7rem]" radius="full" variant="ghost">
                    18-21
                  </Button>
                  <Button className="w-[7rem]" radius="full" variant="ghost">
                    21-35
                  </Button>
                  <Button className="w-[7rem]" radius="full" variant="ghost">
                    35-50
                  </Button>
                  <Button className="w-[7rem]" radius="full" variant="ghost">
                    50+
                  </Button>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      ),
    },
  ];

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleSelectionChange = (key: Key) => {
    setSelected(String(key));
  };

  const placements = ["bottom"];

  return (
    <>
      <section className=" hero-container flex flex-col justify-center items-center z-20 relative lg:w-[96%] sm:w-full max-w-[90rem] lg:ml-8 sm:p-[0.5rem] sm:bg-cover lg:p-[0_2.5rem]">
        {/* 1first div image purple */}
        <div className="hero-image flex flex-row justify-between p-[3.5rem_3.5rem_4rem] bg-hero-pattern bg-[#dddfe4] lg:h-[400px] md:h-[200px] sm:h-[200px] bg-center bg-no-repeat bg-cover rounded-3xl sm:w-full md:w-[95%] lg:w-full before:bottom-[1.5rem] before:absolute before:top-[2rem] before:bg-[linear-gradient(90deg,_#56228bb3_10.67%,_#cc0074b3_95.35%)] before:z-[10] before:blur-xl ">
          {/* 2main div inside image */}
          <div className=" flex flex-row lg:gap-[4rem] md:gap-[4rem] justify-between items-center">
            {/* heading div */}
            <div className="hero-headline text-white flex flex-col h-auto lg:left-[10rem]  sm:w-[25rem] lg:max-w-full lg:w-[35rem] md:w-[45rem] lg:gap-[.25rem] sm:gap-1  md:text-center lg:mt-8 sm:mt-0 lg:min-h-[17.3125rem] justify-center lg:items-start items-center  max-w-[calc(100% - 320px)]">
              <div className="sm:flex sm:flex-col sm:gap-1 justify-center items-center sm:w-[20rem] lg:max-w-full lg:w-[35rem] md:w-[50rem]">
                <h1 className="lg:text-6xl font-extrabold sm:text-3xl text-center sm:text-center lg:text-left">
                  Meet your People.
                </h1>
                <p className="lg:text-2xl sm:text-md sm:ml-3 sm:leading-6 text-center lg:text-left">
                  <b>Choose where to stay and we'll show you who with!</b>
                </p>
                <img
                  className="text-white lg:ml-0 ml-[14rem] mt-[0.5rem] lg:w-[170px] md:w-[130px] lg:block sm:hidden"
                  src="https://a.hwstatic.com/image/upload/f_auto,q_auto/pwa/arrow.svg"
                ></img>
              </div>
            </div>
            <div className="hero-social-chat absolute right-[2.5rem]">
              <img
                className="social-chat-avatars lg:block sm:hidden lg:h-full w-[425px]"
                src="https://a.hwstatic.com/image/upload/f_auto,q_auto,h_277/pwa/hero.chats.png"
              ></img>
            </div>
          </div>
        </div>
        {/* hero search bar  */}
        {/* first div */}

        {/*start*/}
        <div className="hero-search-container top-[-2.625rem] z-[280] flex justify-center items-center relative flex-row w-full">
          {/* the second div*/}
          <div className="hero-search-bar lg:max-w-[64rem] sm:max-w-[48rem] lg:w-[calc(100%-80px)] sm:w-[90%] bg-white border-2 rounded-2xl inline-block p-[0.25rem] m-[1rem] ">
            <div className="inline-wrapper hp-search-form-desktop block relative w-full ">
              <div className="inline-form lg:min-w-[36.875rem] md:min-w-[30rem] flex-row items-center rounded-xl gap-[0.25rem] p-[0.25rem] w-full flex containerType ">
                <div className="destination-container min-w-[12rem] rounded-xl w-full">
                  <div className="input input-strip flex flex-col relative">
                    {/* search  */}
                    <div className="input-prefix inline-flex left-0 p-[1rem] absolute top-[4px] z-10">
                      <div className="icon-container inline-flex">
                        {" "}
                        <IoLocationOutline />
                      </div>
                    </div>
                    {/* new div */}
                  </div>
                  <div className="input-wrapper relative flex items-center">
                    {/* for input in large screen */}
                    <input
                      type="text"
                      className="native-input pl-[3rem] pb-[0.5rem] pt-[1.5rem] lg:w-[22.5rem] md:w-[20rem]  lg:block sm:hidden"
                      onClick={bottomSearchBar}
                      onBlur={() => setIsPopoverOpen(false)}
                    />
                    {isPopoverOpen && (
                      <div className="absolute left-0 mt-4 top-[3.5rem] bg-white border rounded-2xl shadow-lg z-10">
                        <div className="px-1 py-2">
                          <div className="flex w-[350px] h-12 justify-between items-center gap-2 bg-white p-2 rounded-3xl lg:block sm:hidden">
                            <div className="absolute left-3 top-6">
                              {" "}
                              <TbCurrentLocation />
                            </div>
                            <span className=" absolute left-12 top-5">
                              Current Location
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* //small screen */}
                    <input
                      type="text"
                      className="native-input  flex sm:pl-[3rem]   md:pl-[2rem] pb-[0.5rem] top-[1rem] pt-[1rem] w-[23.5rem]  lg:hidden sm:block max-w-fit placeholder-center"
                      onClick={onOpen}
                      onBlur={() => setIsPopoverOpen(false)}
                      placeholder="Where do you want go?"
                    />
                    {/* start */}

                    <Modal
                      className="h-[97%] w-full overflow-hidden"
                      classNames={{
                        base: "modal-round",
                      }}
                      isOpen={isOpen}
                      onOpenChange={onOpenChange}
                      size="full"
                      radius="lg"
                    >
                      <ModalContent className=" overflow-hidden">
                        {(onClose) => (
                          <>
                            {/* Modal Header */}
                            <ModalHeader className="flex flex-col w-full gap-1 overflow-hidden">
                              <div className="absolute left-0 z-10 w-[100%] text-[#a9afbb] top-8">
                                <div className="px-6 py-4">
                                  <div className="flex flex-wrap gap-4">
                                    <div className="flex w-full flex-col">
                                      <Tabs
                                        fullWidth
                                        aria-label="Dynamic tabs"
                                        items={tabs}
                                        size="lg"
                                        className="w-full"
                                      >
                                        {(item) => (
                                          <Tab key={item.id} title={item.label}>
                                            <Card>
                                              <CardBody>
                                                {item.content}
                                              </CardBody>
                                            </Card>
                                          </Tab>
                                        )}
                                      </Tabs>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ModalHeader>
                            {/* Modal Body */}
                            <ModalBody></ModalBody>
                            <ModalFooter></ModalFooter>
                          </>
                        )}
                      </ModalContent>
                    </Modal>

                    <span
                      className={`input-label absolute left-[3rem] top-[1rem]  sm:hidden lg:block leading-6 z-10  text-gray-500 transition-all duration-200 ease-in-out ${
                        isPopoverOpen
                          ? "top-[0.50rem] text-sm text-gray-500"
                          : ""
                      }  `}
                    >
                      Where do you want to go?
                    </span>

                    <button className="bg-[#f25621] shadow-[0_8px_24px_#f2552159] text-white flex md:hidden justify-center flex-end items-center cursor font-extrabold absolute sm:block lg:hidden border-none rounded-xl w-[3rem] h-[2.5rem] top-[0.4rem] right-0">
                      <FaArrowRight className="ml-4 md:hidden sm:block" />
                    </button>
                    {/* <Divider
                        className="absolute lg:left-[24rem] md:left-[17rem] top-0 lg:block sm:hidden md:block"
                        orientation="vertical"
                      /> */}
                  </div>
                </div>
                {/* concatenate div here */}
                {/* </div> */}

                {/* for large screen  */}

                {/* <div className="lg:flex flex-row gap-2 absolute left-[25rem] top-[0.8rem] md:hidden sm:hidden  z-[300] items-center w-[16rem] flex-1"> */}
                <Divider
                  className="absolute lg:right-[36rem] md:right-[28.5rem]  top-0 lg:block sm:hidden md:block"
                  orientation="vertical"
                />
                <DateRangePicker
                  color="default"
                  label="Check In & Check Out"
                  variant="bordered"
                  visibleMonths={2}
                  className="max-w-xs h-10 md:hidden sm:hidden z-[300] items-center w-[16rem] lg:flex mr-[4rem]"
                />

                <Divider
                  className="lg:right-[17rem] md:right-[12rem]  absolute top-0 md:block sm:hidden lg:block "
                  orientation="vertical"
                />
                {/* </div> */}
                {/* for medium screen  */}
                {/* <div className="md:flex absolute left-[18rem] lg:hidden sm:hidden"> */}
                <DateRangePicker
                  variant="bordered"
                  label="Dates"
                  className="max-w-xs md:flex w-[16rem] mr-4 lg:hidden sm:hidden"
                  visibleMonths={2}
                  size="sm"
                />
                {/* <Divider
                    className="absolute lg:left-[17.5rem] md:left-[16.5rem] top-0"
                    orientation="vertical"
                  /> */}
                {/* </div> */}

                {/* dropdown 3 */}
                {/* <div className="lg:left-[44rem] md:left-[30rem] sm:left-[15rem] lg:top-[0.1rem] md:top-[1rem] sm:top-[1.5rem]"> */}
                {/* <div className="guests-submit-wrapper  lg:left-[50rem] sm:left-[36rem] lg:top-[0.1rem] md:right-0 flex  flex-row justify-center items-center mt-3 text-[#a9afbb] sm:hidden md:block lg:block "> */}
                <div className="guestscontainer flex items-center w-[20rem] space-x-2 lg:left-[44rem] md:left-[49rem] sm:hidden md:flex lg:flex flex-row justify-center ">
                  <Dropdown>
                    <DropdownTrigger>
                      <Button
                        className="flex flex-row justify-between items-center"
                        variant="bordered"
                      >
                        <LuUsers2 className="text-black" /> Guests
                        <p>{count}</p>
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                      <DropdownItem key="new">
                        <div className="flex flex-row justify-between items-center h-8">
                          <LuUsers2 className="text-black" />
                          Guests{""}
                          <button
                            className=""
                            onClick={(e) => {
                              e.stopPropagation();
                              decrement();
                            }}
                          >
                            {" "}
                            <CiCircleMinus className="w-8 h-8" />
                          </button>{" "}
                          {count}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              increment();
                            }}
                            className=""
                          >
                            <CiCirclePlus className="w-8 h-8" />
                          </button>
                        </div>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>

                  <Button className="bg-[#f25621] shadow-[0_8px_24px_#f2552159] text-white p-[8px]  cursor font-extrabold lg:flex sm:hidden items-center box-border border-none z-10 rounded-xl w-fit max-w-[20rem]">
                    <Link className="text-white" href="/">
                      {" "}
                      Let's go!{" "}
                    </Link>
                    <FaArrowRight />
                  </Button>

                  <button className="bg-[#f25621] shadow-[0_8px_24px_#f2552159] text-white p-[1rem] cursor font-extrabold md:block sm:hidden lg:hidden justify-center items-center border-none z-10 rounded-2xl">
                    <CiSearch />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* end */}
        <div className="flex flex-row justify-center items-center gap-2  lg:w-full">
          <LuCalendarCheck />
          <h3>
            <b>
              Free Cancellation <span className="font-normal">&</span> Flexible
              Booking <span className="font-normal">available</span>
            </b>
          </h3>
        </div>
      </section>
    </>
  );
};

export default SecondSection;
