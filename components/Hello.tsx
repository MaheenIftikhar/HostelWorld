import React from 'react'

const Hello = () => {
  return (
    <div>
       <section className='say-hello-section w-full  '>
          <div className='say-hello-wrapper flex flex-col items-center justify-center mr-0 relative  mt-40'>
            <div className='say-hello-container block mb-[4rem] max-w-[62.5rem]'>
              <div className='say-hello-heading'>
                <h2 className='text-black font-extrabold text-6xl tracking-tight leading-10 '>Say <span className='text-[#7f32cd]'> hello </span>(before you go!)</h2>
                <p className='max-w-[31.25 rem] font-normal text-lg tracking-tight leading-6 mt-10'>Plan a meal with new friends, or gather a crew for a game of beach volleyball!</p>
              </div>
              <div className='sh-chat h-[41rem] ml-[19.5rem] mt-[ 2rem] w-[23.4375rem]'>
                <img className='block' src='https://a.hwstatic.com/image/upload/f_auto,h_656,w_375,q_50/v1645433308/pwa/chat/chat-hostel.png'></img>

                <img className='top-[5.875rem] rounded-md initial ' src='https://a.hwstatic.com/image/upload/f_auto,h_480,w_320,q_50/v1644506520/pwa/chat/chat-image-1.jpg'></img>
                <img src='https://a.hwstatic.com/image/upload/f_auto,h_480,w_320,q_50/v1644506518/pwa/chat/chat-image-2.jpg'></img>
              </div>
              <div className='sh-steps-wrapper bottom-[3rem] flex-col h-[10.9375rem] justify-between left-[1rem] absolute w-[62.1875rem]'>
                <img className='top-0 h-[2.0625rem]
        left-[-3.5625rem]
         absolute;
        transition duration-[0.3s]
        w-[2.0625rem]
        z-20
    } ' src='https://a.hwstatic.com/image/upload/v1645433308/pwa/chat/dashed-circle.svg'></img>
                <div className='step step-active text-[#7f32cd] text-lg font-extrabold pointer tracking-tight leading-8 max-h-[1.75rem] max-w-[17.6875rem] relative 
                transition duration-[0.3s] before:rounded-lg before:shadow-[0 0 0 3px #fff] before:h-[1.3125rem] before:left-[-2.625rem] before:top-[1.875rem] before:absolute before:border-l-[3px dashed #dddfe4] before:w-[1.3125rem]
        before:z-1'>Hostel Chat</div>
                <div className=''></div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Hello
