import React from "react";
import { Button, ButtonGroup } from "@nextui-org/button";
// import SliderComponent from "./SliderComponent";
const MiddleSection = () => {
  return (
    <>
      {/* <SliderComponent /> */}

      <section className="roamies-section-wrapper items-center bg-[#121417] clip-path-blacksection flex flex-row justify-center min-h-[50rem] p-[0 1rem] w-full ">
        <div className="first-div flex lg:flex-row justify-between items-center lg:w-[80%] sm:flex-col-reverse sm:w-full ">
          <div className="text flex flex-col lg:w-[50%] sm:w-[80%]">
            <div className="text-image flex lg:justify-between items-center sm:justify-center">
              <img src="https://a.hwstatic.com/image/upload/h_40,w_169,q_50/v1651737477/pwa/roamies/roamies.logo.white.png"></img>
            </div>
            <div className="flex flex-col justify-start gap-7 items-center mt-4 text-white ">
              <h2 className="lg:text-6xl font-extrabold sm:leading-12 tracking-tight sm:text-4xl sm:leading-10 sm:text-balance sm:text-centersm-p-2">
                <span className="text-[#cc0074]">Small group tours </span> in
                epic places.
              </h2>
              <p className="lg:text-lg lg:leading-8 sm:leading-6 tracking-tight sm:text-md">
                {" "}
                Explore somewhere new, with a ready-made crew! Adventurous
                tours, with local guides, and sociable hostels.
              </p>
            </div>
            <div className="text-white bg-[#cc0074] rounded-2xl w-[8rem] p-2 mt-2 sm:ml-[6rem] lg:ml-[0] ">
              <Button className="flex lg:justify-start items-center sm:justify-center font-bold ml-4">
                Show Me
              </Button>
            </div>
          </div>
          <div className="mosaic items-center flex mb-[2rem] mt-[4rem] max-h-[38.75rem] max-w-[48.75rem] lg:w-[50%] sm:w-[70%] gap-8">
            <div className="flex flex-col mr-[-1rem] gap-3">
              <img
                className="max-w-full lg:w-[355px] sm:[172px]"
                src="https://a.hwstatic.com/image/upload/f_auto,h_260,w_355,q_50/v1651737425/pwa/roamies/roamies.d.2.png"
              ></img>
              <img
                className=" max-w-full lg:w-[170px] ml-[7rem] sm:w-[120px] sm:ml-[0]"
                src="https://a.hwstatic.com/image/upload/f_auto,h_170,w_170,q_50/v1651737423/pwa/roamies/roamies.d.3.png"
              ></img>
            </div>
            <div className="flex flex-col gap-3">
              <img
                className="rounded-xl max-w-full lg:w-[393px] sm:w-[135px]"
                src="https://a.hwstatic.com/image/upload/f_auto,h_302,w_287,q_50/v1651737425/pwa/roamies/roamies.d.1.png"
              ></img>
              <img
                className=" max-w-full lg:w-[393px] sm:[180px] "
                src="https://a.hwstatic.com/image/upload/f_auto,h_292,w_393,q_50/v1651737423/pwa/roamies/roamies.d.4.png"
              ></img>
            </div>
          </div>
        </div>
      </section>

      {/* animated section */}
      <section className="hc-section-wrapper lg:h-[80rem] sm:h-[60rem] pb-[2rem] overflow-hidden relative w-full mb-8">
        {/* mobile section */}
        <div className="cards-mobile-container lg:hidden sm:block">
          <div className="row first-row animate-[rowanimation_10s_linear_infinite] flex flex-row flex-nowrap w-fit ml-[1.75rem] gap-[1.75rem] mb-16 ">
            {/* //1 */}

            <div
              className="card-wrapper transform rotate-[-15deg] bg-[#fff]
    rounded-3xl
    shadow-[0_4px_32px_#0000001a]
    pointer 
    flex
    flex-col
    h-fit
    p-[.375rem] w-[14.5rem]"
            >
              <img
                className="h-[12rem] rounded-3xl mb-[0.75rem] object-cover pointer w-[276px] max-w-full"
                src="https://a.hwstatic.com/image/upload/f_auto,q_50,h_245/v1645099928/pwa/hostelcards/CasaAngelHostel.jpg"
              ></img>
              <div className="flex flex-col justify-center item-center ml-2 mt-2">
                <span className="font-bold text-lg">Casa Angel Hostel</span>
                <span className="text-xs text-[#636c7d]">Oaxaca, Mexico</span>
              </div>
            </div>

            {/* 2 */}
            <div
              className="card-wrapper transform rotate-[-15deg] z-[110]  bg-[#fff]
    rounded-3xl
    shadow-[0_4px_32px_#0000001a]
    pointer 
    flex
    flex-col
    h-fit
    p-[.375rem] w-[14.5rem] "
            >
              <video
                className="h-[12rem] rounded-3xl mb-[0.75rem] object-cover pointer"
                autoPlay
                muted
                loop
                id="myVideo"
              >
                <source
                  src="https://a.hwstatic.com/video/upload/q_50,h_245/v1645099930/pwa/hostelcards/ViajeroTayronaHostel.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="flex flex-col justify-center item-center ml-2 mt-2">
                <span className="font-bold text-lg">Viajero Tayrona</span>
                <span className="text-xs text-[#636c7d]">
                  Buritaca, Colombia
                </span>
              </div>
            </div>

            {/* 3    */}

            <div
              className="card-wrapper transform rotate-[-15deg]  bg-[#fff]
    rounded-3xl
    shadow-[0_4px_32px_#0000001a]
    pointer
    flex
    flex-col
    h-fit
    p-[.375rem] w-[14.5rem]"
            >
              <img
                className="h-[12rem] rounded-3xl mb-[0.75rem] object-cover pointer w-[276px] max-w-full"
                src="https://a.hwstatic.com/image/upload/f_auto,q_50,h_245/v1645099930/pwa/hostelcards/SaltyJackal.jpg"
              ></img>
              <div className="flex flex-col justify-center item-center ml-2 mt-2">
                <span className="font-bold text-lg">Salty Jackal</span>
                <span className="text-xs text-[#636c7d]">
                  Swakopmund, Namibia
                </span>
              </div>
            </div>

            {/* 4 */}

            <div
              className="card-wrapper transform rotate-[-15deg] bg-[#fff]
    rounded-3xl
    shadow-[0_4px_32px_#0000001a]
    pointer 
    flex
    flex-col
    h-fit
    p-[.375rem] w-[14.5rem]"
            >
              <video
                className="h-[12rem] rounded-3xl mb-[0.75rem] object-cover pointer"
                autoPlay
                muted
                loop
                id="myVideo"
              >
                <source
                  src="https://a.hwstatic.com/video/upload/q_50,h_245/v1645099928/pwa/hostelcards/CasaGraciaBarcelona.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="flex flex-col justify-center item-center ml-2 mt-2">
                <span className="font-bold text-lg">Casa Gracia</span>
                <span className="text-xs text-[#636c7d]">Barcelona, Spain</span>
              </div>
            </div>
          </div>
{/* mobilesection2 */}


          <div className="row second-row sm:animate-[secondrowanimation_8s_linear_infinite] sm:mt-2 sm:flex sm:gap-[1.75rem] sm:flex-nowrap sm:w-fit">
            {/* 1 */}

            <div
              className="card-wrapper  transform rotate-[-15deg] bg-[#fff]
    rounded-3xl
    shadow-[0_4px_32px_#0000001a]
    pointer
    flex
    flex-col
    h-fit
    p-[.375rem] w-[14.5rem] "
            >
              <img
                className="h-[12rem] rounded-3xl mb-[0.75rem] object-cover pointer w-[276px] max-w-full"
                src="https://a.hwstatic.com/image/upload/f_auto,q_50,h_245/v1645099928/pwa/hostelcards/BaseSydney.jpg"
              ></img>
              <div className="flex flex-col justify-center item-center ml-2 mt-2">
                <span className="font-bold text-lg">Base Sydney</span>
                <span className="text-xs text-[#636c7d]">
                  Sydney, Australia
                </span>
              </div>
            </div>

            {/* 2 */}

            <div
              className="card-wrapper transform rotate-[-15deg] bg-[#fff]
    rounded-3xl
    shadow-[0_4px_32px_#0000001a]
    pointer
    flex
    flex-col
    h-fit
    p-[.375rem] w-[14.5rem]"
            >
              <img
                className="h-[12rem] rounded-3xl mb-[0.75rem] object-cover pointer w-[276px] max-w-full"
                src="https://a.hwstatic.com/image/upload/q_50,h_245/v1645099928/pwa/hostelcards/Generator.jpg"
              ></img>
              <div className="flex flex-col justify-center item-center ml-2 mt-2">
                <span className="font-bold text-lg">Generator</span>
                <span className="text-xs text-[#636c7d]">Barcelona, Spain</span>
              </div>
            </div>

            {/* 3 */}

            <div
              className="card-wrapper transform rotate-[-15deg] z-[110]  bg-[#fff]
    rounded-3xl
    shadow-[0_4px_32px_#0000001a]
    pointer
    flex
    flex-col
    h-fit
    p-[.375rem] w-[14.5rem] "
            >
              <video
                className="h-[12rem] rounded-3xl mb-[0.75rem] object-cover pointer"
                autoPlay
                muted
                loop
                id="myVideo"
              >
                <source
                  src="https://a.hwstatic.com/video/upload/q_50,h_245/v1645099928/pwa/hostelcards/LubDKohSamui.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="flex flex-col justify-center item-center ml-2 mt-2">
                <span className="font-bold text-lg">Lub D Koh Samui</span>
                <span className="text-xs text-[#636c7d]">
                  Koh Samui, Thailand
                </span>
              </div>
            </div>

            {/* 4 */}
            <div
              className="card-wrapper transform rotate-[-15deg] bg-[#fff]
    rounded-3xl
    shadow-[0_4px_32px_#0000001a]
    pointer 
    flex
    flex-col
    h-fit
    p-[.375rem] w-[14.5rem] "
            >
              <img
                className="h-[12rem] rounded-3xl mb-[0.75rem] object-cover pointer w-[276px] max-w-full"
                src="https://a.hwstatic.com/image/upload/f_auto,q_50,h_245/v1645099929/pwa/hostelcards/CanaleHostel.jpg"
              ></img>
              <div className="flex flex-col justify-center item-center ml-2 mt-2">
                <span className="font-bold text-lg">Canale Hostel</span>
                <span className="text-xs text-[#636c7d]">
                  Bangkok, Thailand
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* /desktop/ */}
        <div
          className="card-wrapper-desktop lg:left-[350px] lg:top-[140px] lg:transform lg:translate-x-[-40px] lg:translate-y-[100px] lg:-rotate-15 lg:bg-[#fff]
    lg:rounded-3xl
    lg:shadow-[0_4px_32px_#0000001a]
    lg:pointer lg:absolute
    flex
    lg:flex-col
    lg:h-fit
    lg:p-[.375rem] lg:w-[14.5rem] lg:animate-[wiggle_1.6s_ease-out_.4s_forwards] sm:hidden lg:block "
        >
          <video
            className="h-[12rem] rounded-3xl mb-[0.75rem] object-cover pointer "
            autoPlay
            muted
            loop
            id="myVideo"
          >
            <source
              src="https://a.hwstatic.com/video/upload/q_50,h_245/v1645099928/pwa/hostelcards/CasaGraciaBarcelona.mp4"
              type="video/mp4"
            />
          </video>
          <div className="flex flex-col justify-center item-center ml-2 mt-2">
            <span className="font-bold text-lg">Casa Gracia</span>
            <span className="text-xs text-[#636c7d]">Barcelona, Spain</span>
          </div>
        </div>

        <div
          className="card-wrapper lg:block sm:hidden left-[760px] top-[160px] transform translate-x-[-150px] translate-y-[300px] rotate-[-15deg]  bg-[#fff]
    rounded-3xl
    shadow-[0_4px_32px_#0000001a]
    pointer absolute
    flex
    flex-col
    h-fit
    p-[.375rem] w-[14.5rem] animate-[wiggle2_1.6s_ease-out_.4s_forwards]"
        >
          <img
            className="h-[12rem] rounded-3xl mb-[0.75rem] object-cover pointer w-[276px] max-w-full"
            src="https://a.hwstatic.com/image/upload/f_auto,q_50,h_245/v1645099930/pwa/hostelcards/SaltyJackal.jpg"
          ></img>
          <div className="flex flex-col justify-center item-center ml-2 mt-2">
            <span className="font-bold text-lg">Salty Jackal</span>
            <span className="text-xs text-[#636c7d]">Swakopmund, Namibia</span>
          </div>
        </div>

        <div
          className="card-wrapper lg:block sm:hidden left-[1200px] top-[180px] transform translate-y-[100px] rotate-[-15deg] bg-[#fff]
    rounded-3xl
    shadow-[0_4px_32px_#0000001a]
    pointer absolute
    flex
    flex-col
    h-fit
    p-[.375rem] w-[14.5rem] animate-[wiggle3_1.6s_ease-out_.4s_forwards]"
        >
          <img
            className="h-[12rem] rounded-3xl mb-[0.75rem] object-cover pointer w-[276px] max-w-full"
            src="https://a.hwstatic.com/image/upload/f_auto,q_50,h_245/v1645099928/pwa/hostelcards/CasaAngelHostel.jpg"
          ></img>
          <div className="flex flex-col justify-center item-center ml-2 mt-2">
            <span className="font-bold text-lg">Casa Angel Hostel</span>
            <span className="text-xs text-[#636c7d]">Oaxaca, Mexico</span>
          </div>
        </div>

        <div
          className="card-wrapper lg:block sm:hidden left-[960px] top-[480px] transform translate-x-[300px] translate-y-[500px] rotate-[-15deg] z-[110]    bg-[#fff]
    rounded-3xl
    shadow-[0_4px_32px_#0000001a]
    pointer absolute
    flex
    flex-col
    h-fit
    p-[.375rem] w-[14.5rem] animate-[wiggle4_1.6s_ease-out_.4s_forwards]"
        >
          <video
            className="h-[12rem] rounded-3xl mb-[0.75rem] object-cover pointer"
            autoPlay
            muted
            loop
            id="myVideo"
          >
            <source
              src="https://a.hwstatic.com/video/upload/q_50,h_245/v1645099930/pwa/hostelcards/ViajeroTayronaHostel.mp4"
              type="video/mp4"
            />
          </video>
          <div className="flex flex-col justify-center item-center ml-2 mt-2">
            <span className="font-bold text-lg">Viajero Tayrona</span>
            <span className="text-xs text-[#636c7d]">Buritaca, Colombia</span>
          </div>
        </div>
        <div
          className="card-wrapper lg:block sm:hidden left-[1300px] top-[500px] transform translate-y-[150px] rotate-[-15deg]  bg-[#fff]
    rounded-3xl
    shadow-[0_4px_32px_#0000001a]
    pointer absolute
    flex
    flex-col
    h-fit
    p-[.375rem] w-[14.5rem] animate-[wiggle5_1.6s_ease-out_.4s_forwards]"
        >
          <img
            className="h-[12rem] rounded-3xl mb-[0.75rem] object-cover pointer w-[276px] max-w-full"
            src="https://a.hwstatic.com/image/upload/q_50,h_245/v1645099928/pwa/hostelcards/Generator.jpg"
          ></img>
          <div className="flex flex-col justify-center item-center ml-2 mt-2">
            <span className="font-bold text-lg">Generator</span>
            <span className="text-xs text-[#636c7d]">Barcelona, Spain</span>
          </div>
        </div>
        <div
          className="card-wrapper  lg:block sm:hidden left-[340px] top-[910px] transform translate-x-[200px] translate-y-[70px] rotate-[-15deg]   bg-[#fff]
    rounded-3xl
    shadow-[0_4px_32px_#0000001a]
    pointer absolute
    flex
    flex-col
    h-fit
    p-[.375rem] w-[14.5rem] animate-[wiggle7_1.6s_ease-out_.4s_forwards]"
        >
          <img
            className="h-[12rem] rounded-3xl mb-[0.75rem] object-cover pointer w-[276px] max-w-full"
            src="https://a.hwstatic.com/image/upload/f_auto,q_50,h_245/v1645099928/pwa/hostelcards/BaseSydney.jpg"
          ></img>
          <div className="flex flex-col justify-center item-center ml-2 mt-2">
            <span className="font-bold text-lg">Base Sydney</span>
            <span className="text-xs text-[#636c7d]">Sydney, Australia</span>
          </div>
        </div>



        <div
          className="card-wrapper lg:block sm:hidden left-[600px] top-[830px] transform translate-x-[100px] rotate-[-15deg] z-[110]    bg-[#fff]
    rounded-3xl
    shadow-[0_4px_32px_#0000001a]
    pointer absolute
    flex
    flex-col
    h-fit
    p-[.375rem] w-[14.5rem] animate-[wiggle8_1.6s_ease-out_.4s_forwards]"
        >
          <video
            className="h-[12rem] rounded-3xl mb-[0.75rem] object-cover pointer"
            autoPlay
            muted
            loop
            id="myVideo"
          >
            <source
              src="https://a.hwstatic.com/video/upload/q_50,h_245/v1645099930/pwa/hostelcards/QueenHostelMilan.mp4"
              type="video/mp4"
            />
          </video>
          <div className="flex flex-col justify-center item-center ml-2 mt-2">
            <span className="font-bold text-lg">Queen Hostel Milan</span>
            <span className="text-xs text-[#636c7d]">Milan, Italy</span>
          </div>
        </div>

        <div
          className="card-wrapper sm:hidden lg:block left-[920px] top-[890px] transform translate-x-[-100px] rotate-[-15deg] bg-[#fff]
    rounded-3xl
    shadow-[0_4px_32px_#0000001a]
    pointer absolute
    flex
    flex-col
    h-fit
    p-[.375rem] w-[14.5rem] animate-[wiggle9_1.6s_ease-out_.4s_forwards]"
        >
          <img
            className="h-[12rem] rounded-3xl mb-[0.75rem] object-cover pointer w-[276px] max-w-full"
            src="https://a.hwstatic.com/image/upload/f_auto,q_50,h_245/v1645099929/pwa/hostelcards/CanaleHostel.jpg"
          ></img>
          <div className="flex flex-col justify-center item-center ml-2 mt-2">
            <span className="font-bold text-lg">Canale Hostel</span>
            <span className="text-xs text-[#636c7d]">Bangkok, Thailand</span>
          </div>
        </div>

        {/* video */}



        <div
          className="card-wrapper sm:hidden  lg:block left-[40px] top-[830px] transform translate-x-[80px] rotate-[-15deg] z-[110]  bg-[#fff]
    rounded-3xl
    shadow-[0_4px_32px_#0000001a]
    pointer absolute
    flex
    flex-col
    h-fit
    p-[.375rem] w-[14.5rem] animate-[wiggle6_1.6s_ease-out_.4s_forwards]"
        >
          <video
            className="h-[12rem] rounded-3xl mb-[0.75rem] object-cover pointer"
            autoPlay
            muted
            loop
            id="myVideo"
          >
            <source
              src="https://a.hwstatic.com/video/upload/q_50,h_245/v1645099930/pwa/hostelcards/SelinaCancun.mp4"
              type="video/mp4"
            />
          </video>
          <div className="flex flex-col justify-center item-center ml-2 mt-2">
            <span className="font-bold text-lg">Selina Cancun</span>
            <span className="text-xs text-[#636c7d]">Cancun, Mexico</span>
          </div>
        </div>




        <div
          className="card-wrapper sm:hidden  lg:block left-[1240px] top-[950px] transform translate-x-[-300px] rotate-[-15deg] z-[110]  bg-[#fff]
    rounded-3xl
    shadow-[0_4px_32px_#0000001a]
    pointer absolute
    flex
    flex-col
    h-fit
    p-[.375rem] w-[14.5rem] animate-[wiggle11_1.6s_ease-out_.4s_forwards]"
        >
          <video
            className="h-[12rem] rounded-3xl mb-[0.75rem] object-cover pointer"
            autoPlay
            muted
            loop
            id="myVideo"
          >
            <source
              src="https://a.hwstatic.com/video/upload/q_50,h_245/v1645099928/pwa/hostelcards/LubDKohSamui.mp4"
              type="video/mp4"
            />
          </video>
          <div className="flex flex-col justify-center item-center ml-2 mt-2">
            <span className="font-bold text-lg">Lub D Koh Samui</span>
            <span className="text-xs text-[#636c7d]">Koh Samui, Thailand</span>
          </div>
        </div>

        {/* // */}
        <div className="text-animate lg:animate-[animate_1.6s_ease-out_.4s_forwards]  absolute lg:left-[8rem] lg:top-[35rem] sm:top-[45rem] sm:left-[6rem] lg:max-w-[42rem] lg:mt-[4rem]">
          <h2 className="font-extrabold lg:text-4xl mb-[1rem] leading-10 tracking-tight sm:text-5xl sm:text-balance">
            The world’s best hostels, with over{" "}
            <span className="text-[#30cf72]">13 million reviews</span>.
          </h2>
          <p className="text-lg">
            With over 16,500 hostels in 180 countries, there’s always room for a
            new adventure!
          </p>
        </div>
      </section>
    </>
  );
};

export default MiddleSection;
