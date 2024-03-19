import React from 'react'
// import second1 from "../assets/second1.jpeg"
// import second2 from "../assets/second2.jpeg"
// import second3 from "../assets/second3.jpeg"
// import second4 from "../assets/second4.jpeg"
import trendingcard2 from "../assets/second1.jpeg"
import trendingcard4 from "../assets/second2.jpeg"
import trendingcard5 from "../assets/second3.jpeg"
import trendingcard6 from "../assets/second4.jpeg"
const New = () => {
  return (
    <div className='new-main mt-10 text-3xl font-bold flex flex-col w-11/12 min-h-fit'>
        <div className='new-heading text-center mb-8'>
            <h1>Here's What's New</h1>
        </div>
        <div className='trending-cards1 flex flex-wrap justify-center gap-4 items-center mb-8'>
            <div className='card1'>
            <img src={trendingcard4} alt="" />
            <div className=''>
                <h1 className='leading-6 text-center text-xl font-medium mt-2 mb-2'>Men's Clothing</h1>
                <h1 className='leading-6 text-center font-semibold text-3xl italic'>New Arrivals</h1>
                </div>
            </div>
            <div className='card1'>
            <img src={trendingcard5} alt="" />
            <div className=''>
                 <h1 className='leading-6 text-center text-xl font-medium mt-2 mb-2'>Casual Shoes</h1>
                 <h1 className='leading-6 text-center font-semibold text-3xl italic'>Under ₹ 599</h1>
                </div>
            </div>
            <div className='card1'>
            <img src={trendingcard2} alt="" />
            <div className=''>
            <h1 className='leading-6 text-center text-xl font-medium mt-2 mb-2'>Fab Footwear</h1>
                 <h1 className='leading-6 text-center font-semibold text-3xl italic'>BestSellers</h1>
                </div>
            </div>
            <div className='card1'>
            <img src={trendingcard6} alt="" />
            <div className=''>
            <h1 className='leading-6 text-center text-xl font-medium mt-2 mb-2'>Women's Sneakers</h1>
                 <h1 className='leading-6 text-center font-semibold text-3xl italic'>Limited Collection</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default New