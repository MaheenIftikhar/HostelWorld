import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";

import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { IoEarthOutline } from "react-icons/io5";
import letter from '@/letter.svg'

import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";
import { LuSendHorizonal } from "react-icons/lu";
import {Input } from "@nextui-org/Input";
import {Button, ButtonGroup} from "@nextui-org/button";
import Link from 'next/link'

const Footer = () => {
  return (
    <>
    
<section className='w-full relative'><div className='newsletter bg-[#00e0ce] lg:h-[300px] absolute top-[0] sm:h-[350px]
    clip-path-mynewsletter w-full
    m-b[3rem]'>
      <div className='flex lg:flex-row justify-between items-center sm:flex-col lg:gap-16 sm:gap-6 p-10 lg:ml-8 sm:ml-2'>
        <Image className='sm:hidden lg:block' src={letter} alt='letter'width={60}
      height={18}></Image>

        <div className='paragraph flex flex-col gap-4'>
          <h1 className='font-extrabold  leading-6 text-2xl'>Join our adventurous community!
</h1>
<p className='font-normal text-[#121417]'>Sign up to our newsletter for deals, inspo and other travel treats!
</p>
        </div>
       
      <Input
        
        startContent={
          <LuSendHorizonal  className="text-black z-20 absolute left-2 top-5"  />
        }
        endContent={
          <Button className='bg-[#f25621] shadow-[0_8px_24px_#f2552159] text-white p-[1rem] cursor flex justify-center items-center border-none absolute top-[4px] left-[27.5rem] z-10 rounded-2xl'>
        <FaArrowRight />
        </Button>
        }
        classNames={{
          input: [
            "bg-white",
            "text-black/90 dark:text-white/90",
            "p-4",
            "w-[500px]","border-r","rounded-xl",
            "z-10","relative",
            "pl-10"
          ],
          
          inputWrapper: [
           
            "!cursor-text",
           ''
            
          ],
        }}
        placeholder="&nbsp;&nbsp;&nbsp; Your email address..."
        
       
       
      />
    
  <p className='text-[#007a70] sm:text-sm sm:leading-6'>Just so you know, we’ll be able to see if you receive and open our emails to help us monitor the success of our marketing campaigns. You’ll find further details in our <span><Link className='underline' href='/'>data protection notice.</Link></span></p>
</div>
    </div>
    



    <section className=' clip-path-mypolygon w-full bg-[#121417] text-[#fff] font-normal font-md tracking-tight absolute top-[250px] leading-6 min-h-[680px] h-full'>
        <div className='w-[80%] mt-10 ml-10 absolute top-[30px] '>
        <div className='flex flex-row gap-40 justify-between items-center ml-4'>
            <div className='flex flex-col gap-2'>
                <h2 className='text-white font-bold tracking-tight leading-7'>Follow us on</h2>
                <div className='flex flex-row gap-2'>
                <div className='rounded-full p-2 bg-white border text-black '><FaFacebookF/></div>
                <div className='rounded-full p-2 bg-white border text-black '>
                <RiTwitterXLine />
                </div>
                <div className='rounded-full p-2 bg-white border text-black'><FaInstagram /></div>
                <div className='rounded-full p-2 bg-white border text-black '><FaYoutube /></div>
                <div className='rounded-full p-2 bg-white border text-black '><FaPinterestP /></div>
                <div className='rounded-full p-2 bg-white border text-black'><IoLogoTiktok /></div>
                </div>
                <div className='Link flex flex-row gap-16 underline mt-16 font-bold'>
                    <Link className='flex justify-between items-center gap-2' href='/'><IoEarthOutline /> English</Link> 
                    <Link className='flex justify-between items-center gap-2' href='/'><LiaMoneyBillWaveSolid />EUR</Link> 
                </div>
                <div className='flex justify-between gap-4 items-center mt-20'> 
                <img src='https://a.hwstatic.com/raw/upload/f_auto,q_auto/wds/logos/docusign.svg'></img>
                <img className ='w-[90px] bg-white'src='https://a.hwstatic.com/raw/upload/f_auto,q_auto/wds/logos/cnc.svg'></img>
            </div>
            <p className='text-white mt-5'>© 1999-2024 Hostelworld.com Limited</p>
      
            </div>
            
            <div className='flex flex-col text-white font-normal '>
              <div className='flex flex-row gap-[8rem] ml-12 '>
                <div className='flex flex-col gap-6 mt-10 '>
              <h1 className='font-extrabold'>Accommodation</h1>
              <Link href='/'>Hostels</Link>
              <Link href='/'>Hotels</Link>
              <Link href='/'>Bed & BreakFast</Link>
              <div className='flex flex-col gap-6'>
              <h1 className='font-extrabold'>Customer Support</h1> 
              <Link href='/'>Talk to us</Link>
              <Link href='/'>Help </Link>
              </div>
              </div>
              <div className='flex flex-col gap-6 mt-10'>
              <h1 className='font-extrabold'>Quick Links</h1>
              <Link href='/'>Blog </Link>
              <Link href='/'>Booking Guarantee</Link>
              <Link href='/'>Hostel Awards</Link>
              <Link href='/'>Tours and Experiences</Link>
              <Link href='/'>Solo Travel</Link>
              <Link href='/'>Student Discount</Link>
              <Link href='/'>Roamies</Link>
              </div>
              <div className='flex flex-col gap-6 mt-10'>
              <h1 className='font-extrabold'>About Us</h1>
              <Link href='/'>HostelWorld Group PLC</Link>
              <Link href='/'>Press </Link>
              <Link href='/'>Careers</Link>
              <Link href='/'></Link>
              <div className='flex flex-col gap-6 text-nowrap '>
              <h1 className='font-extrabold'>Work With Us</h1>
              <Link href='/'>Hostel Sign Up</Link>
              <Link href='/'>Affiliate Program</Link>
              <Link href='/'>HostelWorld Inbox</Link>
              </div>
              </div>
            
            </div>
            </div>
            
        </div>
        <div className='text-white flex flex-row gap-4 mt-5 '>
            <Link href='/' className=''>Data Protection Notice
            </Link>
            <Link href='/' className=''>Terms & Legal</Link>
            <Link href='/' className=''>Coupons</Link>
            <Link href='/' className=''>Vouchers</Link>
            <Link href='/' className=''>Website Testing</Link>
            <Link href='/' className=''>Site Map</Link>
            <Link href='/' className=''>Cookie Preferences</Link>
            </div>
        </div>
    </section>
    </section>
   
    </>
  )
}

export default Footer
