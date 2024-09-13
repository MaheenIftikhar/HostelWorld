import React, { useState } from "react";

const HelloSection = () => {
  const [isActive, setIsActive] = useState(true);
  const [isSecondActive, setIsSecondActive] = useState(false);
  const [isThirdActive, setIsThirdActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
    setIsSecondActive(false);
    setIsThirdActive(false);

  };
  const handleSecondClick = () => {
    setIsSecondActive(!isSecondActive);
    setIsActive(false);
    setIsThirdActive(false);
  };
  const handleThirdClick = () => {
    setIsThirdActive(!isThirdActive);
    setIsActive(false);
    setIsSecondActive(false);
  };

  return (
    <section className="say-hello-section w-full">
      <div className="say-hello-wrapper flex lg:flex-col items-center justify-center mr-0 relative lg:mt-40 lg:mb-40">
        <div className="say-hello-container block mb-[4rem] sm:w-full max-w-[62.5rem]">
          <div className="say-hello-heading lg:m-[0_0_2rem_20rem] sm:text-balance lg:pl-[1.5rem] sm:flex sm:justify-center  sm:flex-col sm:m-[40rem_5rem_2rem_2rem] md:m-[22rem_0_0_0] lg:w-full lg:absolute lg:left-[16rem]  sm:w-[350px] md:w-[300px] md:left-[0rem] ">
            <h2 className="text-black font-extrabold lg:text-6xl sm:text-5xl tracking-tight leading-[4rem] ">
              Say <span className="text-[#7f32cd]"> hello </span>
            </h2>
            <h2 className="text-black font-extrabold lg:text-6xl sm:text-5xl tracking-tight leading-[4rem] ">
              (before you go!)
            </h2>
            <p className="max-w-[31.25 rem] font-normal text-lg tracking-tight leading-6 mt-10">
              Plan a meal with new friends, or gather a crew for a game of beach
              volleyball!
            </p>
          </div>

          {/* allchat images */}
          <div className="chat-windows lg:h-[41rem] ml-[19.5rem] mt-[2rem] w-[23.4375rem]">
            <img
              className="block absolute lg:top-60 z-20  sm:left-[13.2rem] lg:left-[34rem] sm:top-[13rem] sm:w-[220px] md:left-[24rem] md:w-[300px] lg:w-[400px]"
              src="https://a.hwstatic.com/image/upload/f_auto,h_656,w_375,q_50/v1645433308/pwa/chat/chat-hostel.png"
            ></img>
            <img
              className={`block absolute lg:top-60 z-20  sm:left-[13.2rem] lg:left-[34rem] sm:top-[13rem] sm:w-[220px] md:left-[24rem] md:w-[300px] lg:w-[400px] ${
                isSecondActive ? "block" : "hidden"
              }`}
              src="https://a.hwstatic.com/image/upload/f_auto,h_656,w_375,q_50/v1645433308/pwa/chat/chat-city.png"
            ></img>
            <img
              className={`block absolute lg:top-60 z-20  sm:left-[13.2rem] lg:left-[34rem] sm:top-[13rem] sm:w-[220px] md:left-[24rem] md:w-[300px] lg:w-[400px] ${
                isThirdActive ? "block" : "hidden"
              }`}
              src="https://a.hwstatic.com/image/upload/f_auto,h_656,w_375,q_50/v1645433308/pwa/chat/chat-direct.png"
            ></img>
          </div>

          {/* //different images  */}
          <div className="sh-chat lg:h-[14rem] ml-[19.5rem] mt-[ 2rem] w-[23.4375rem]">
            <img
              className="top-[5.875rem]  absolute rounded-3xl left-[2rem] sm:block lg:hidden sm:w-[300px] md:block md:w-[400px]"
              src="https://a.hwstatic.com/image/upload/f_auto,h_226,w_370,q_50/v1644506518/pwa/chat/chat-image-1-sm.jpg"
            ></img>
            <img
              className={`top-[5.875rem] absolute rounded-3xl left-[16rem] z-10 transition duration-300 lg:block sm:hidden ${
                isSecondActive ? "translate-y-[55px]" : "translate-y-[90px]"
              }${isThirdActive ? "translate-y-[90px]" : ""}
              `}
              src="https://a.hwstatic.com/image/upload/f_auto,h_480,w_320,q_50/v1644506520/pwa/chat/chat-image-1.jpg"
            ></img>

            <img
              className={`bottom-[-4rem] left-[57rem] absolute top-[30rem] rounded-3xl transform translate-y-[-55px] transition duration-300 sm:hidden lg:block ${
                isSecondActive ? "translate-y-[-55px]" : "translate-y-[90px]"
              } ${isThirdActive ? "translate-y-[90px]" : ""}`}
              src="https://a.hwstatic.com/image/upload/f_auto,h_480,w_320,q_50/v1644506518/pwa/chat/chat-image-2.jpg"
            ></img>
          </div>

          {/* steps-wrapper */}
          <div className="sh-steps-wrapper bottom-[3rem] flex flex-col  h-[10.9375rem] justify-between left-[15rem] absolute w-[62.1875rem] sm:hidden lg:block before:content-[''] before:left-[0.90rem] before:top-[7.875rem] before:h-[3.125rem] before:border-l-[3px] before:border-dashed before:border-[#dddfe4] before:absolute after:content-[''] after:left-[0.90rem] after:top-[2.3125rem] after:border-l-[3px] after:border-dashed after:border-[#dddfe4] after:absolute after:h-[3.125rem]">
            <div className="flex flex-row gap-2 " onClick={handleClick}>
              <img
                className="top-0 h-[2.0625rem] mb-14
        left-[-3.5625rem]
         absolute;
        transition duration-[0.3s]
        w-[2.0625rem]
        z-20 "
                src="https://a.hwstatic.com/image/upload/v1645433308/pwa/chat/dashed-circle.svg"
              ></img>
              <div
                className={`step ${
                  isActive ? "text-[#7f32cd]" : "text-[#2a2525]"
                } text-lg font-extrabold pointer tracking-tight leading-8 max-h-[1.75rem] max-w-[17.6875rem] relative transition duration-[0.3s] before:rounded-full before:shadow-[0_0_0_3px_#fff] before:left-[-2.1875rem] before:top-[0.375rem] before:absolute before:border-l-[3px_dashed_#dddfe4] before:w-[1.3125rem] before:h-[1.3125rem]  before:z-[10] ${
                  isActive ? "before:bg-[#7f32cd]" : "before:bg-[#dddfe4]"
                }`}
              >
                Hostel Chat
              </div>
            </div>

            <div className="flex flex-row gap-2" onClick={handleSecondClick}>
              <img
                className="top-0 h-[2.0625rem]
                mb-14
        left-[-3.5625rem]
         absolute;
        transition duration-[0.3s]
        w-[2.0625rem]
        z-20 "
                src="https://a.hwstatic.com/image/upload/v1645433308/pwa/chat/dashed-circle.svg"
              ></img>
              <div
                className={`step ${
                  isSecondActive ? "text-[#7f32cd]" : "text-[#000]"
                } text-lg font-extrabold pointer tracking-tight leading-8 max-h-[1.75rem] max-w-[17.6875rem] relative 
          transition duration-[0.3s] before:rounded-full before:shadow-[0_0_0_3px_#fff] before:h-[1.3125rem] before:left-[-2.1875rem] before:top-[0.350rem] before:absolute before:z-[10] before:border-l-[3px_dashed_#dddfe4] before:w-[1.3125rem]  before:z-1 ${
            isSecondActive ? "before:bg-[#7f32cd]" : "before:bg-[#dddfe4] "
          }`}
              >
                City Chat
              </div>
            </div>

            <div className="flex flex-row gap-2" onClick={handleThirdClick}>
              <img
                className="top-0 h-[2.0625rem]
        left-[-3.5625rem]
         absolute;
        transition duration-[0.3s]
        w-[2.0625rem]
        z-20 "
                src="https://a.hwstatic.com/image/upload/v1645433308/pwa/chat/dashed-circle.svg"
              ></img>
              <div
                className={`step ${
                  isThirdActive ? "text-[#7f32cd]" : "text-[#000]"
                } text-lg font-extrabold pointer tracking-tight leading-8 max-h-[1.75rem] max-w-[17.6875rem] relative 
          transition-all duration-[0.3s] before:rounded-full before:shadow-[0_0_0_3px_#fff] before:h-[1.3125rem] before:left-[-2.1875rem] before:top-[0.350rem] before:absolute before:border-l-[3px_dashed_#dddfe4] before:w-[1.3125rem] ${
            isThirdActive ? "before:bg-[#7f32cd]" : "before:bg-[#dddfe4]"
          }`}
              >
                Direct Messages
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelloSection;
