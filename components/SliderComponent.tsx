import React, { useRef, useState } from 'react';
import { WiTime4 } from "react-icons/wi";
import { CiLocationOn } from "react-icons/ci";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaArrowRight } from "react-icons/fa";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const SliderComponent = () => {
  
  return (
    <>

    {/* w-[calc(50% + 800px)] */}
 <section className="social-section-wrapper lg:h-[41.25rem] md:h-[43.35rem]  mb-0 ml-[calc(50% - 800px)] p-[4rem 0] w-full flex lg:flex-row lg:mt-5 sm:flex-col-reverse md:flex-col-reverse md:justify-between sm:gap-10  relative sm:h-[55rem]">
        <div className="lg:ml-[8rem] sm:ml-[2rem] pt-[2rem] lg:w-[29rem] md:w-[40rem] md:max-w-[50rem] md:mx-[12rem] sm:w-[20rem] flex flex-col sm:max-w-[30rem] mb-4 ">
          <h1 className="header font-extrabold leading-10 lg:text-6xl sm:text-3xl tracking-tight sm:text-start md:text-5xl ">
            Go from <span className="text-[#00e0ce]">solo to social </span>, in just a few taps!
          </h1>
          <p className="text-body mt-4 sm:font-extrabold md:font-normal lg:font-normal">
            Join Linkups to explore and hang out with travellers.
          </p>
        </div>

        {/* Carousel Part */}
        {/* w-[calc(100% - 1000px)] */}
        <div className="card carousel lg:h-[37.5rem]  lg:w-[39rem]  lg:left-[40.25rem] md:h-[28.5rem] md:left-[10.25rem] md:absolute lg:absolute sm:top-[60px] sm:left-[6rem] flex justify-center mb-[2rem] sm:overflow-x-hidden sm:h-[30rem] sm:w-[24rem] sm:mx-10 md:mx-10 sm:max-w-[50rem] md:max-w-[50rem] md:w-[30rem] lg:max-w-[50rem]">
          <Swiper 
          slidesPerView={3}
            spaceBetween={160}                                                            
            centeredSlides={false}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay,Pagination]}
            className="mySwiper h-full w-full "
          >
            {/* 1 */}
            <SwiperSlide>
              <div className="card-wrapper opacity transition-all .4s linear lg:h-[40rem] sm:h-[20rem] sm:w-[11.5rem]  lg:w-[14.1875rem] relative rounded-xl mr-[4rem] ">
                <video className="pointer rounded-3xl" autoPlay muted loop>
                  <source src="https://a.hwstatic.com/video/upload/q_50/v1644569502/pwa/linkup/linkups-surf.mp4" type="video/mp4" />
                </video>
                <div className="absolute lg:top-6 sm:top-2 left-0 w-[3rem] p-2">
                  <img  className='rounded-full  border-4 border-yellow-500/100' src="https://a.hwstatic.com/image/upload/f_auto,q_75,h_166/v1644506092/pwa/whosgoing/user-anna.jpg" alt="Beach Yoga Icon" />
                </div>
                <h1 className="text-white absolute lg:top-[16rem] sm:top-[13rem] left-2 font-extrabold">Surf Class</h1>
                <div className="absolute lg:top-[18rem] sm:top-[15rem] left-1">
                  <div className="flex flex-row gap-2">
                    <div className="flex flex-row font-thin text-xs text-white">
                      <WiTime4 />Today 
                    </div>
                    <div className="flex flex-row font-thin text-xs text-white">
                      <CiLocationOn />Hostel Hall
                    </div>
                  </div>
                </div>
            
                <button className="bg-violet-800 absolute lg:top-[20rem] sm:top-[16rem] right-4 text-white w-[3.5rem] p-1 rounded-lg font-extrabold flex flex-row justify-center items-center gap-1">Join<FaArrowRight className='w-2' /></button>
              </div>
             
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-wrapper opacity transition-all .4s linear lg:h-[40rem] sm:h-[20rem] sm:w-[11.5rem] lg:w-[14.1875rem] relative rounded-xl">
                <video className="pointer rounded-3xl" autoPlay muted loop>
                  <source src="https://a.hwstatic.com/video/upload/q_50/v1644569502/pwa/linkup/linkups-dunes.mp4" type="video/mp4" />
                </video>
                <div className="absolute lg:top-6 sm:top-2 left-0 w-[3rem] p-2">
                  <img className='rounded-full  border-4 border-yellow-500/100' src="https://a.hwstatic.com/image/upload/f_auto,q_75,h_166/v1644506092/pwa/whosgoing/user-f-luiza.jpg" alt="Beach Yoga Icon" />
                </div>
                <h1 className="text-white absolute lg:top-[16rem] sm:top-[13rem] left-2 font-extrabold">Dune Surfing</h1>
                <div className="absolute lg:top-[18rem] sm:top-[15rem] left-1">
                  <div className="flex flex-row gap-2">
                    <div className="flex flex-row font-thin text-xs text-white">
                      <WiTime4 />Saturday
                    </div>
                    <div className="flex flex-row font-thin text-xs text-white">
                      <CiLocationOn />White Sands
                    </div>
                  </div>
                </div>
                <button className="bg-violet-800 absolute lg:top-[20rem] sm:top-[16rem] right-4 text-white w-[3.5rem] p-1 rounded-lg font-extrabold flex flex-row justify-center items-center gap-1">Join<FaArrowRight className='w-2' /></button>
              </div>
            </SwiperSlide>
           
            <SwiperSlide>
              <div className="card-wrapper opacity transition-all .4s linear lg:h-[40rem] sm:h-[20rem] sm:w-[11.5rem] lg:w-[14.1875rem] relative rounded-xl">
                <video className="pointer rounded-3xl" autoPlay muted loop>
                  <source src="https://a.hwstatic.com/video/upload/q_50/v1644569502/pwa/linkup/linkups-bike.mp4" type="video/mp4" />
                </video>
                <div className="absolute lg:top-6 sm:top-2 left-0 w-[3rem] p-2">
                  <img  className='rounded-full  border-4 border-yellow-500/100' src="https://a.hwstatic.com/image/upload/f_auto,q_75,h_166/v1644506092/pwa/whosgoing/user-jenny.jpg" alt="Beach Yoga Icon" />
                </div>
                <h1 className="text-white absolute lg:top-[16rem] sm:top-[13rem] left-2 font-extrabold">Bike Tour</h1>
                <div className="absolute lg:top-[18rem] sm:top-[15rem] left-1">
                  <div className="flex flex-row gap-2">
                    <div className="flex flex-row font-thin text-xs text-white">
                      <WiTime4 />Tommorow
                    </div>
                    <div className="flex flex-row font-thin text-xs text-white">
                      <CiLocationOn />Plaza
                    </div>
                  </div>
                </div>
                <button className="bg-violet-800 absolute lg:top-[20rem] sm:top-[16rem] right-4 text-white w-[3.5rem] p-1 rounded-lg font-extrabold flex flex-row justify-center items-center gap-1">Join<FaArrowRight className='w-2'/></button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-wrapper-middle-item opacity transition-all .4s linear lg:h-[40rem] sm:h-[20rem] sm:w-[11.5rem] lg:w-[14.1875rem] relative rounded-xl">
                <img className='rounded-3xl' src="https://a.hwstatic.com/image/upload/f_auto,h_415,c_scale,q_50/v1644507377/pwa/linkup/beach-yoga.jpg" alt="Beach Yoga" />
                <div className="absolute lg:top-6 sm:top-2 left-0 w-[3rem] p-2">
                  <img className='rounded-full  border-4 border-yellow-500/100' src="https://a.hwstatic.com/image/upload/f_auto,q_75,h_166/v1644506092/pwa/whosgoing/user-victoria.jpg" alt="Beach Yoga Icon" />
                </div>
                <h1 className="text-white absolute lg:top-[16rem] sm:top-[13rem] left-2 font-extrabold">Morning Beach Yoga</h1>
                <div className="absolute lg:top-[18rem] sm:top-[15rem]  left-1">
                  <div className="flex flex-row gap-2">
                    <div className="flex flex-row font-thin text-xs text-white">
                      <WiTime4 />Sunday
                    </div>
                    <div className="flex flex-row font-thin text-xs text-white">
                      <CiLocationOn />Palm Beach
                    </div>
                  </div>
                </div>
                <button className="bg-violet-800 absolute lg:top-[20rem] sm:top-[16rem] right-4 text-white w-[3.5rem] p-1 rounded-lg font-extrabold flex flex-row justify-center items-center gap-1">Join<FaArrowRight className='w-2'/></button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-wrapper-middle-item opacity transition-all .4s linear lg:h-[40rem] sm:h-[20rem] sm:w-[11.5rem] lg:w-[14.1875rem] relative rounded-xl">
                <img className='rounded-3xl' src="https://a.hwstatic.com/image/upload/f_auto,h_415,c_scale,q_50/v1644507379/pwa/linkup/Che_Tulum_Hostel_Bar_Tulum_Mexico-md.jpg" alt="Beach Yoga" />
                <div className="absolute lg:top-6 sm:top-2 left-0 w-[3rem] p-2">
                  <img className='rounded-full  border-4 border-yellow-500/100' src="https://a.hwstatic.com/image/upload/f_auto,q_75,h_166/v1644506092/pwa/whosgoing/user-luka.jpg" alt="Beach Yoga Icon" />
                </div>
                <h1 className="text-white absolute lg:top-[16rem] sm:top-[13rem] left-2 font-extrabold">Cenote Adventure</h1>
                <div className="absolute lg:top-[18rem] sm:top-[15rem] left-1">
                  <div className="flex flex-row gap-2">
                    <div className="flex flex-row font-thin text-xs text-white">
                      <WiTime4/>Friday
                    </div>
                    <div className="flex flex-row font-thin text-xs text-white">
                      <CiLocationOn/>City Center
                    </div>
                  </div>
                </div>
                <button className="bg-violet-800 absolute lg:top-[20rem] sm:top-[16rem] right-4 text-white w-[3.5rem] p-1 rounded-lg font-extrabold flex flex-row justify-center items-center gap-1">Join<FaArrowRight className='w-2'/></button>
              </div>
            </SwiperSlide>
     
            
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default SliderComponent;
