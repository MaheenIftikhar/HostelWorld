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
// import Hello from './Hello';
const SliderComponent = () => {
  
  return (
    <>
    {/* <Hello/> */}
    {/* w-[calc(50% + 800px)] */}
 <section className="social-section-wrapper h-[41.25rem] mb-0 ml-[calc(50% - 800px)] p-[4rem 0] w-full flex flex-row mt-5">
        <div className="ml-[8rem] pt-[2rem] w-[29rem] flex flex-col max-w-[50rem] relative">
          <h1 className="header font-extrabold leading-12 text-7xl tracking-tight">
            Go from <span className="text-[#00e0ce]">solo to social </span>, in just a few taps!
          </h1>
          <p className="text-body mt-4">
            Join Linkups to explore and hang out with travellers.
          </p>
        </div>

        {/* Carousel Part */}
        {/* w-[calc(100% - 1000px)] */}
        <div className="h-[37.5rem] w-[39rem] left-[47.25rem] absolute flex justify-center mb-[2rem]">
          <Swiper 
          slidesPerView={3}
            spaceBetween={160}
            centeredSlides={false}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay,Pagination]}
            className="mySwiper h-full  w-full "
          >
            <SwiperSlide>
              <div className="card-wrapper opacity transition-all .4s linear h-[40rem] w-[14.1875rem] relative rounded-xl mr-[4rem]">
                <video className="pointer rounded-3xl" autoPlay muted loop>
                  <source src="https://a.hwstatic.com/video/upload/q_50/v1644569502/pwa/linkup/linkups-surf.mp4" type="video/mp4" />
                </video>
                <div className="absolute top-6 left-0 w-[3rem] p-2">
                  <img  className='rounded-full  border-4 border-yellow-500/100' src="https://a.hwstatic.com/image/upload/f_auto,q_75,h_166/v1644506092/pwa/whosgoing/user-anna.jpg" alt="Beach Yoga Icon" />
                </div>
                <h1 className="text-white absolute top-[16rem] left-2 font-extrabold">Surf Class</h1>
                <div className="absolute top-[18rem] left-1">
                  <div className="flex flex-row gap-2">
                    <div className="flex flex-row font-thin text-xs text-white">
                      <WiTime4 />Today 
                    </div>
                    <div className="flex flex-row font-thin text-xs text-white">
                      <CiLocationOn />Hostel Hall
                    </div>
                  </div>
                </div>
            
                <button className="bg-violet-800 absolute top-[20rem] right-4 text-white w-[3.5rem] p-1 rounded-lg font-extrabold flex flex-row justify-center items-center gap-1">Join<FaArrowRight className='w-2' /></button>
              </div>
             
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-wrapper opacity transition-all .4s linear h-[40rem] w-[14.1875rem] relative rounded-xl">
                <video className="pointer rounded-3xl" autoPlay muted loop>
                  <source src="https://a.hwstatic.com/video/upload/q_50/v1644569502/pwa/linkup/linkups-dunes.mp4" type="video/mp4" />
                </video>
                <div className="absolute top-6 left-0 w-[3rem] p-2">
                  <img className='rounded-full  border-4 border-yellow-500/100' src="https://a.hwstatic.com/image/upload/f_auto,q_75,h_166/v1644506092/pwa/whosgoing/user-f-luiza.jpg" alt="Beach Yoga Icon" />
                </div>
                <h1 className="text-white absolute top-[16rem] left-2 font-extrabold">Dune Surfing</h1>
                <div className="absolute top-[18rem] left-1">
                  <div className="flex flex-row gap-2">
                    <div className="flex flex-row font-thin text-xs text-white">
                      <WiTime4 />Saturday
                    </div>
                    <div className="flex flex-row font-thin text-xs text-white">
                      <CiLocationOn />White Sands
                    </div>
                  </div>
                </div>
                <button className="bg-violet-800 absolute top-[20rem] right-4 text-white w-[3.5rem] p-1 rounded-lg font-extrabold flex flex-row justify-center items-center gap-1">Join<FaArrowRight className='w-2' /></button>
              </div>
            </SwiperSlide>
           
            <SwiperSlide>
              <div className="card-wrapper opacity transition-all .4s linear h-[40rem] w-[14.1875rem] relative rounded-xl">
                <video className="pointer rounded-3xl" autoPlay muted loop>
                  <source src="https://a.hwstatic.com/video/upload/q_50/v1644569502/pwa/linkup/linkups-bike.mp4" type="video/mp4" />
                </video>
                <div className="absolute top-6 left-0 w-[3rem] p-2">
                  <img  className='rounded-full  border-4 border-yellow-500/100' src="https://a.hwstatic.com/image/upload/f_auto,q_75,h_166/v1644506092/pwa/whosgoing/user-jenny.jpg" alt="Beach Yoga Icon" />
                </div>
                <h1 className="text-white absolute top-[16rem] left-2 font-extrabold">Bike Tour</h1>
                <div className="absolute top-[18rem] left-1">
                  <div className="flex flex-row gap-2">
                    <div className="flex flex-row font-thin text-xs text-white">
                      <WiTime4 />Tommorow
                    </div>
                    <div className="flex flex-row font-thin text-xs text-white">
                      <CiLocationOn />Plaza
                    </div>
                  </div>
                </div>
                <button className="bg-violet-800 absolute top-[20rem] right-4 text-white w-[3.5rem] p-1 rounded-lg font-extrabold flex flex-row justify-center items-center gap-1">Join<FaArrowRight className='w-2'/></button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-wrapper-middle-item opacity transition-all .4s linear h-[40rem] w-[14.1875rem] relative rounded-xl">
                <img className='rounded-3xl' src="https://a.hwstatic.com/image/upload/f_auto,h_415,c_scale,q_50/v1644507377/pwa/linkup/beach-yoga.jpg" alt="Beach Yoga" />
                <div className="absolute top-6 left-0 w-[3rem] p-2">
                  <img className='rounded-full  border-4 border-yellow-500/100' src="https://a.hwstatic.com/image/upload/f_auto,q_75,h_166/v1644506092/pwa/whosgoing/user-victoria.jpg" alt="Beach Yoga Icon" />
                </div>
                <h1 className="text-white absolute top-[16rem] left-2 font-extrabold">Morning Beach Yoga</h1>
                <div className="absolute top-[18rem] left-1">
                  <div className="flex flex-row gap-2">
                    <div className="flex flex-row font-thin text-xs text-white">
                      <WiTime4 />Sunday
                    </div>
                    <div className="flex flex-row font-thin text-xs text-white">
                      <CiLocationOn />Palm Beach
                    </div>
                  </div>
                </div>
                <button className="bg-violet-800 absolute top-[20rem] right-4 text-white w-[3.5rem] p-1 rounded-lg font-extrabold flex flex-row justify-center items-center gap-1">Join<FaArrowRight className='w-2'/></button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-wrapper-middle-item opacity transition-all .4s linear h-[40rem] w-[14.1875rem] relative rounded-xl">
                <img className='rounded-3xl' src="https://a.hwstatic.com/image/upload/f_auto,h_415,c_scale,q_50/v1644507379/pwa/linkup/Che_Tulum_Hostel_Bar_Tulum_Mexico-md.jpg" alt="Beach Yoga" />
                <div className="absolute top-6 left-0 w-[3rem] p-2">
                  <img className='rounded-full  border-4 border-yellow-500/100' src="https://a.hwstatic.com/image/upload/f_auto,q_75,h_166/v1644506092/pwa/whosgoing/user-luka.jpg" alt="Beach Yoga Icon" />
                </div>
                <h1 className="text-white absolute top-[16rem] left-2 font-extrabold">Cenote Adventure</h1>
                <div className="absolute top-[18rem] left-1">
                  <div className="flex flex-row gap-2">
                    <div className="flex flex-row font-thin text-xs text-white">
                      <WiTime4/>Friday
                    </div>
                    <div className="flex flex-row font-thin text-xs text-white">
                      <CiLocationOn/>City Center
                    </div>
                  </div>
                </div>
                <button className="bg-violet-800 absolute top-[20rem] right-4 text-white w-[3.5rem] p-1 rounded-lg font-extrabold flex flex-row justify-center items-center gap-1">Join<FaArrowRight className='w-2'/></button>
              </div>
            </SwiperSlide>
     
            
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default SliderComponent;
