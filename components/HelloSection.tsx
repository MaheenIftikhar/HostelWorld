import React from 'react'

const HelloSection = () => {
  return (
   
       <section className='say-hello-section w-full'>
          <div className='say-hello-wrapper flex lg:flex-col items-center justify-center mr-0 relative lg:mt-40'>
            <div className='say-hello-container block mb-[4rem] max-w-[62.5rem]'>
              <div className='say-hello-heading lg:m-[0_0_2rem_20rem] lg:pl-[1.5rem] sm:m-[22rem_2rem_2rem_2rem] md:m-[22rem_0_0_0] lg:w-full lg:absolute lg:left-[16rem] sm:w-[300px] md:w-[300px] md:left-[0rem] '>
                <h2 className='text-black font-extrabold lg:text-6xl sm:text-5xl tracking-tight leading-[4rem]'>Say <span className='text-[#7f32cd]'> hello </span></h2>
                <h2 className='text-black font-extrabold lg:text-6xl sm:text-5xl tracking-tight leading-[4rem]'>(before you go!)</h2>
                <p className='max-w-[31.25 rem] font-normal text-lg tracking-tight leading-6 mt-10'>Plan a meal with new friends, or gather a crew for a game of beach volleyball!</p>
              </div>
              {/* allchat images */}
              <div className='chat-windows lg:h-[41rem] ml-[19.5rem] mt-[2rem] w-[23.4375rem]'> 
                  <img className='block absolute lg:top-60 z-20  sm:left-[13.2rem] lg:left-[34rem] sm:top-[13rem] sm:w-[220px] md:left-[24rem] md:w-[300px]' src='https://a.hwstatic.com/image/upload/f_auto,h_656,w_375,q_50/v1645433308/pwa/chat/chat-hostel.png'></img>
                  <img className='hidden'src='https://a.hwstatic.com/image/upload/f_auto,h_656,w_375,q_50/v1645433308/pwa/chat/chat-city.png'></img>
                  <img className='hidden' src='https://a.hwstatic.com/image/upload/f_auto,h_656,w_375,q_50/v1645433308/pwa/chat/chat-direct.png'></img>
              </div>

              <div className='sh-chat lg:h-[14rem] ml-[19.5rem] mt-[ 2rem] w-[23.4375rem]'>
             <img className='top-[5.875rem]  absolute rounded-3xl left-[2rem] sm:block lg:hidden sm:w-[300px] md:block md:w-[400px]' src='https://a.hwstatic.com/image/upload/f_auto,h_226,w_370,q_50/v1644506518/pwa/chat/chat-image-1-sm.jpg'></img>
                <img className='top-[5.875rem] absolute rounded-3xl left-[16rem] z-10 transform translate-y-[55px] transition duration-300 lg:block sm:hidden' src='https://a.hwstatic.com/image/upload/f_auto,h_480,w_320,q_50/v1644506520/pwa/chat/chat-image-1.jpg'></img>
                
                <img className='bottom-[-4rem] left-[57rem] absolute top-[30rem] rounded-3xl transform translate-y-[-55px] transition duration-300 sm:hidden lg:block' src='https://a.hwstatic.com/image/upload/f_auto,h_480,w_320,q_50/v1644506518/pwa/chat/chat-image-2.jpg'></img>
              </div>
              



              <div className='sh-steps-wrapper bottom-[3rem] flex flex-col h-[10.9375rem] justify-between left-[15rem] absolute w-[62.1875rem] sm:hidden lg:block'>
                <div className='flex flex-row gap-2'>
                <img className='top-0 h-[2.0625rem]
        left-[-3.5625rem]
         absolute;
        transition duration-[0.3s]
        w-[2.0625rem]
        z-20 ' src='https://a.hwstatic.com/image/upload/v1645433308/pwa/chat/dashed-circle.svg'></img>
                <div className='step step-active text-[#7f32cd] text-lg font-extrabold pointer tracking-tight leading-8 max-h-[1.75rem] max-w-[17.6875rem] relative 
                transition duration-[0.3s] before:rounded-lg before:shadow-[0 0 0 3px #fff] before:h-[1.3125rem] before:left-[-2.625rem] before:top-[1.875rem] before:absolute before:border-l-[3px dashed #dddfe4] before:w-[1.3125rem]
        before:z-1'>Hostel Chat</div>
               </div>
               <div className='flex flex-row gap-2'>
               <img className='top-0 h-[2.0625rem]
        left-[-3.5625rem]
         absolute;
        transition duration-[0.3s]
        w-[2.0625rem]
        z-20 ' src='https://a.hwstatic.com/image/upload/v1645433308/pwa/chat/dashed-circle.svg'></img>
                <div className='step step-active text-[#7f32cd] text-lg font-extrabold pointer tracking-tight leading-8 max-h-[1.75rem] max-w-[17.6875rem] relative 
                transition duration-[0.3s] before:rounded-lg before:shadow-[0 0 0 3px #fff] before:h-[1.3125rem] before:left-[-2.625rem] before:top-[1.875rem] before:absolute before:border-l-[3px dashed #dddfe4] before:w-[1.3125rem]
        before:z-1'>City Chat</div>
          </div>



          <div className='flex flex-row gap-2'>
          <img className='top-0 h-[2.0625rem]
        left-[-3.5625rem]
         absolute;
        transition duration-[0.3s]
        w-[2.0625rem]
        z-20 ' src='https://a.hwstatic.com/image/upload/v1645433308/pwa/chat/dashed-circle.svg'></img>
                <div className='step step-active text-[#7f32cd] text-lg font-extrabold pointer tracking-tight leading-8 max-h-[1.75rem] max-w-[17.6875rem] relative 
                transition duration-[0.3s] before:rounded-lg before:shadow-[0 0 0 3px #fff] before:h-[1.3125rem] before:left-[-2.625rem] before:top-[1.875rem] before:absolute before:border-l-[3px dashed #dddfe4] before:w-[1.3125rem]
        before:z-1'>Direct Messages</div>
</div>
 </div>

</div>
          </div>
        </section>
   
  )
}

export default HelloSection
