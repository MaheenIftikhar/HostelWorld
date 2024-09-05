"use client";
import React, { useState } from "react";
import { Autocomplete, AutocompleteItem, Link } from "@nextui-org/react";
import { places } from "./data";
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { LiaCitySolid } from "react-icons/lia";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { Button, DateRangePicker, Input } from "@nextui-org/react";
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";

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
  const [selected, setSelected] = useState<string>('destinations');
  const [isSmallPopoverOpen, setIsSmallPopoverOpen] = useState(false);
  let formatter = useDateFormatter({ dateStyle: "full" });
 
  const variants: ("underlined" | "solid" | "light" | "bordered")[] = [
    "underlined", 
  ];
   const bottomSearchBar = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  let tabs = [
    {
      id: "destinations",
      label: "Destinations",
      content: 
             
      <div className="relative h-30 w-full overflow-hidden">
             <IoLocationOutline className='absolute z-20 top-4'/>
                <input
                    type="text"
                    className=" absolute native-input top-1 w-full h-10 pl-[3rem] pb-[0.5rem] z-10 pt-[1.5rem]  lg:hidden sm:block "
                 
                />
         
                    <div className=" mt-2 border-black rounded shadow-lg z-10 h-10">
                        <div className="px-1 py-2">
                            <div className="flex w-[350px] justify-start items-center gap-2 p-2 rounded-3xl lg:block sm:hidden">
                                <TbCurrentLocation />
                                Current Location
                            </div>
                        </div>
                    </div>
              
            </div>
    },
    {
      id: "dates",
      label: "Dates",
      content:    
            <DateRangePicker
                    color="default"
                    label="Check In & Check Out"
                    variant="bordered"
                    visibleMonths={2}
                    className="max-w-xs h-10"
                  />
                ,
    },
    {
      id: "guests",
      label: "Guests",
      content:   <Dropdown>
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
                          <div className="flex flex-row justify-between items-center">
                            <LuUsers2 className="text-black" />
                            Guests{""}
                            <button
                              className="w-4 h-4"
                              onClick={(e) => {
                                e.stopPropagation();
                                decrement();
                              }}
                            >
                              {" "}
                              <CiCircleMinus />
                            </button>{" "}
                            {count}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                increment();
                              }}
                              className="w-4 h-4 "
                            >
                              <CiCirclePlus />
                            </button>
                          </div>
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>,
    }
  ];

  type Key = string | number;
  const increment = () => {
    setCount(count + 1);
  };
  const DestinationDropdown = () => {
    <Autocomplete
      defaultItems={places}
      placeholder="Where do you want to go?"
      className="sm:max-w-[21rem] md:w-[30rem] lg:max-w-sm text-black !border-none bg-inherit"
      style={{ border: "none" }}
    >
      {(places) => (
        <AutocompleteItem
          startContent={<LiaCitySolid className="w-6 h-6" />}
          key={places.value}
        >
          {places.label}
        </AutocompleteItem>
      )}
    </Autocomplete>;
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
        <div className="hero-image flex flex-row justify-between p-[3.5rem_3.5rem_4rem] bg-hero-pattern bg-[#dddfe4] lg:h-[400px] md:h-[200px] sm:h-[200px] bg-center bg-no-repeat bg-cover rounded-3xl w-full before:bottom-[1.5rem] before:absolute before:top-[2rem] before:bg-[linear-gradient(90deg,_#56228bb3_10.67%,_#cc0074b3_95.35%)] before:z-[10] before:blur-xl ">
          {/* 2main div inside image */}
          <div className=" flex flex-row lg:gap-[4rem] md:gap-[4rem] justify-between items-center">
            {/* heading div */}
            <div className=" hero-headline text-white  flex flex-col h-auto absolute lg:left-[10rem] sm:w-[20rem] lg:max-w-full lg:w-[35rem] md:w-[50rem] lg:top-15 sm:left-[4rem] lg:gap-[.25rem] sm:gap-1 lg:mt-8 sm:mt-0 lg:min-h-[17.3125rem] justify-center lg:items-start md:items-center sm:items-center max-w-[calc(100% - 320px)]">
              <div className="sm:flex sm:flex-col sm:gap-1 sm:justify-center sm:items-center sm:w-[20rem] lg:max-w-full lg:w-[35rem] md:w-[50rem]">
                <h1 className="lg:text-6xl font-extrabold sm:text-3xl">
                  Meet your People.
                </h1>
                <p className="text-wrap lg:text-2xl sm:text-md  sm:ml-3 sm:leading-6">
                  <b>Choose where to stay and we'll show you who with!</b>
                </p>
                {/* </div> */}
                <img
                  className=" text-white ml-[14rem] mt-[0.5rem] lg:w-[170px] md:w-[130px] lg:block sm:hidden "
                  src="https://a.hwstatic.com/image/upload/f_auto,q_auto/pwa/arrow.svg"
                ></img>
              </div>
            </div>

            <div className="hero-social-chat absolute right-[2.5rem]">
              <img
                className="social-chat-avatars lg:block sm:hidden lg:h-full w-[425px] "
                src="https://a.hwstatic.com/image/upload/f_auto,q_auto,h_277/pwa/hero.chats.png"
              ></img>
            </div>
          </div>
        </div>
        {/* hero search bar  */}
        {/* first div */}

        {/* start */}
        <div className="hero-search-container top-[-2.625rem] z-[280] flex justify-center items-center relative flex-row w-full">
          {/* the second div  */}
          <div className="hero-search-bar max-w-[64rem] lg:w-[calc(100%-80px)] sm:w-[90%] bg-white border-2 rounded-2xl inline-block p-[0.25rem] m-[1rem] ">
            <div className="inline-wrapper hp-search-form-desktop block relative w-full ">
              <div className="inline-form large min-w-[36.875rem] flex-row items-center rounded-xl gap-[0.25rem] p-[0.25rem] w-full flex containerType ">
                <div className="destination-container min-w-[12rem] rounded-xl w-full">
                  <div className="input input-strip flex flex-col relative">
                    <div className="input-prefix inline-flex left-0 p-[1rem] absolute top-[4px] z-10">
                      <div className="icon-container inline-flex">
                        {" "}
                        <IoLocationOutline />
                      </div>
                    </div>





                    <div className="input-wrapper relative">
                      {/* for input in large screen */}

                      <input
                        type="text"
                        className="native-input pl-[3rem] pb-[0.5rem] pt-[1.5rem] w-[22.5rem] lg:block sm:hidden"
                        onClick={bottomSearchBar}
                        onBlur={() => setIsPopoverOpen(false)}
                      />
                      {isPopoverOpen && (
                        <div className="absolute left-0 mt-2 bg-white border rounded shadow-lg z-10">
                          <div className="px-1 py-2">
                            <div className="flex w-[350px] justify-start items-center gap-2 bg-white p-2 rounded-3xl lg:block sm:hidden">
                              <TbCurrentLocation />
                              Current Location
                            </div>
                          </div>
                        </div>
                      )}

                      
                      {/* //small screen */}
                      <input
                        type="text"
                        className="native-input pl-[3rem] pb-[0.5rem] pt-[1.5rem] w-[22.5rem] lg:hidden sm:block max-w-fit"
                        onClick={onOpen}
                        onBlur={() => setIsPopoverOpen(false)}
                      />
                      {/* start */}
                      <Modal
                        className="h-[80%] w-full"
                        isOpen={isOpen}
                        onOpenChange={onOpenChange}
                      >
                        <ModalContent>
                          {(onClose) => (
                            <>
                            {/* start */}
                              <ModalHeader className="flex flex-col w-full gap-1">
                                {" "}
                                <div className="absolute left-0 z-10 w-[90%] text-[#a9afbb] top-0">
                                  <div className="px-6   py-4">
                                  <div className="flex flex-wrap gap-4">
                                  <div className="flex w-full flex-col">
                                    
                                  
                                  <Tabs aria-label="Dynamic tabs" items={tabs}>
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
                              {/* onClose */}

                              <ModalBody>
                                
                              </ModalBody>
                              <ModalFooter></ModalFooter>
                            </>
                          )}
                        </ModalContent>
                      </Modal>

                      {/* <div className="flex w-[350px] justify-start items-center gap-2 bg-white p-2 rounded-3xl lg:block sm:hidden">
                      <TbCurrentLocation />
                      Current Location
                    </div>  */}

                      <span className="input-label absolute left-[3rem] top-[1rem] fornt-normal leading-6 overflow-x-hidden  z-10 w-full text-gray-500 transition-all duration-[0.2s]">
                        Where do you want to go?
                      </span>
                      <button
                        className="bg-[#f25621] shadow-[0_8px_24px_#f2552159] text-white flex md:hidden justify-center items-center cursor font-extrabold absolute sm:block lg:hidden border-none rounded-xl w-[3rem] h-[2.5rem] top-[0.6rem] left-[19rem]"
                        // onClick={handleButtonClick}
                      >
                        <FaArrowRight className="ml-4 md:hidden sm:block" />
                      </button>
                      <Divider
                        className="absolute left-[24rem] top-0 lg:block sm:hidden md:hidden"
                        orientation="vertical"
                      />
                    </div>
                  </div>
















































































































                  {/* <Autocomplete
                    variant="bordered"
                    startContent={
                      <IoLocationOutline className="text-black z-20 absolute left-0 top-3 mr-2" />
                    }
                    endContent={
                      <button
                        className="bg-[#f25621] shadow-[0_8px_24px_#f2552159] text-white flex md:hidden justify-center items-center cursor font-extrabold  sm:block lg:hidden  border-none  rounded-xl w-[3rem] h-[2.5rem]"
                        // onClick={handleButtonClick}
                      >
                        <FaArrowRight className="ml-4 md:hidden sm:block" />
                      </button>
                    }
                    defaultItems={places}
                    placeholder="Where do you want to go?"
                    className="sm:max-w-[21rem] md:w-[30rem] lg:max-w-sm text-black !border-none bg-inherit"
                    style={{ border: "none" }}
                  >
                    {(places) => (
                      <AutocompleteItem
                        startContent={<LiaCitySolid className="w-6 h-6" />}
                        key={places.value}
                      >
                        {places.label}
                      </AutocompleteItem>
                    )}
                  </Autocomplete> */}
                </div>

                {/* <div className="flex w-[400px] justify-start items-center gap-2 bg-white p-2 rounded-3xl">
                      <TbCurrentLocation />
                      Current Location
                    </div> */}

                {/* sm:left-[20rem]  2*/}
                <Divider orientation="vertical" />
                <div className="lg:flex flex-row gap-2 absolute left-[25rem] top-[0.8rem] sm:hidden z-[300] items-center w-[20rem] flex-1">
                  <DateRangePicker
                    color="default"
                    label="Check In & Check Out"
                    variant="bordered"
                    visibleMonths={2}
                    className="max-w-xs h-10"
                  />
                  <Divider
                    className="absolute left-[20.5rem] top-0"
                    orientation="vertical"
                  />
                </div>

                {/* dropdown 3 */}
                <div className="guests-submit-wrapper absolute lg:left-[46rem] sm:left-[36rem] lg:top-[0.1rem] flex  flex-row justify-center items-center mt-3 text-[#a9afbb] sm:hidden lg:block ">
                  <div className="flex items-center w-50 space-x-2">
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
                          <div className="flex flex-row justify-between items-center">
                            <LuUsers2 className="text-black" />
                            Guests{""}
                            <button
                              className="w-4 h-4"
                              onClick={(e) => {
                                e.stopPropagation();
                                decrement();
                              }}
                            >
                              {" "}
                              <CiCircleMinus />
                            </button>{" "}
                            {count}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                increment();
                              }}
                              className="w-4 h-4 "
                            >
                              <CiCirclePlus />
                            </button>
                          </div>
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>

                    {/* <Button className="bg-[#f25621] shadow-[0_8px_24px_#f2552159] text-white p-[1rem] cursor font-extrabold lg:flex sm:hidden items-center box-border border-none absolute top-[0.8rem] left-[54rem] z-10 rounded-2xl w-fit"> */}
                    <Button className="bg-[#f25621] shadow-[0_8px_24px_#f2552159] text-white p-[1rem] cursor font-extrabold lg:flex sm:hidden items-center box-border border-none z-10 rounded-2xl w-fit">
                      <Link className="text-white" href="/">
                        {" "}
                        Let's go!{" "}
                      </Link>
                      <FaArrowRight />
                    </Button>
                    {/* <button className="bg-[#f25621] shadow-[0_8px_24px_#f2552159] text-white p-[1rem] cursor font-extrabold md:flex sm:hidden lg:hidden justify-center items-center border-none absolute top-[6px] left-[40rem] z-10 rounded-2xl"> */}
                    <button className="bg-[#f25621] shadow-[0_8px_24px_#f2552159] text-white p-[1rem] cursor font-extrabold md:block sm:hidden lg:hidden justify-center items-center border-none z-10 rounded-2xl">
                      <CiSearch />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
