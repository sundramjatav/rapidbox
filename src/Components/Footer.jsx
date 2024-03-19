import React from 'react'
import { RiFacebookBoxFill, RiGooglePlayFill, RiInstagramFill, RiMailLine, RiYoutubeFill } from '@remixicon/react'
import payment from "../assets/payment1.svg"

const Footer = () => {
  return (
    <div className='md:h-[40vh] h-[15vh] w-full flex  justify-center mt-10 mb-5'>
            <div className="sectionwrapper flex flex-wrap md:justify-center gap-4 w-full md:items-center px-10 ">
            
            <div className="section md:w-[240px] w-full h-fit flex flex-col gap-4">
                <h1 className='font-bold'>Rapidbox</h1>
                <div className='flex'>
                    <RiInstagramFill />
                    <RiYoutubeFill />
                    <RiFacebookBoxFill />
                </div>
                <div>
                    <img src={payment} alt="" />
                </div>
                <div className='p-2 flex bg-gray-200 rounded-md'>
                    <RiGooglePlayFill />
                    <h1>Get it On Google Play</h1>
                </div>
            </div>
            
            <div className="section w-[240px] h-fit flex flex-col gap-4">
                <div>
                <h1 className='font-black'>About Rapidbox</h1>
                </div>
                <div className='flex flex-col justify-around gap-2'>
                    <h1>About us</h1>
                    <h1>Why Rapidbox</h1>
                    <h1>Our Journey</h1>
                    <h1>Making of Our Shoes</h1>
                    <h1>Sneaker Store</h1>
                </div>
            </div>
        
            <div className="section w-[240px] h-fit  flex flex-col gap-4">
                <div>
                <h1 className='font-black'>Need Help?</h1>
                </div>
                <div className='flex flex-col justify-around'>
                    <h1>Help Center</h1>
                    <h1>Payment Safety</h1>
                    <h1>Order Cancellation Policy</h1>
                    <h1>Returns & Exchange</h1>
                    <h1>Orders Tracking</h1>
                </div>
            </div>
        
            <div className="section md:w-[240px] w-full h-[170px] ">
                <div>
                    <h1 className='font-black'>For Queries</h1>
                    <h1 className='font-black'>support@rapidbox.in</h1>
                </div>
                <div className='mt-3'>Newsletter</div>
                <div className='bg-gray-200 flex w-full items-center p-2 rounded-lg mt-3'>
                    <RiMailLine />
                    <input className='bg-transparent w-full px-2 outline-none' type="text" placeholder='text....'/>
                    <button className='p-1 bg-yellow-300 text-white font-bold rounded'>Submit</button>
                </div>
            </div> 
        </div>
        
    </div>
  )
}

export default Footer