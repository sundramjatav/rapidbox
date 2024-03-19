import React from 'react'
import trendingcard1 from '../assets/trendingcard1.jpeg'
import trendingcard2 from '../assets/trendingcard2.jpeg'
import trendingcard3 from '../assets/trendingcard3.jpeg'
import trendingcard4 from '../assets/trendingcard4.jpeg'
import trendingcard5 from '../assets/trendingcard5.jpeg'
import trendingcard6 from '../assets/trendingcard6.jpeg'
import { RiArrowRightCircleFill } from '@remixicon/react'

const Trending = () => {
  return (
    <div className='trending-main text-3xl font-bold flex flex-col w-11/12 mt-10 '>
        <div className='trending text-center mb-8'>
        <h1>Trending Categories</h1>
        </div>
        <div className='trending-cards flex flex-wrap justify-center gap-4 items-center mb-8'>
            <div className='card'>
            <img src={trendingcard4} alt="" />
            <div className='card-child'>
                <h1>Men's Sneaker</h1>
                <RiArrowRightCircleFill />
                </div>
            </div>
            <div className='card'>
            <img src={trendingcard5} alt="" />
            <div className='card-child'>
                <h1>Men's Sneaker</h1>
                <RiArrowRightCircleFill />
                </div>
            </div>
            <div className='card'>
            <img src={trendingcard2} alt="" />
            <div className='card-child'>
                <h1>Men's Sneaker</h1>
                <RiArrowRightCircleFill />
                </div>
            </div>
            <div className='card'>
            <img src={trendingcard6} alt="" />
            <div className='card-child'>
                <h1>Men's Sneaker</h1>
                <RiArrowRightCircleFill />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trending