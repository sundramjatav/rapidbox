import React from 'react'
import Main1 from './Main1'
import Trending from './Trending'
import Main2 from './Main2'
import New from './New'

import rapidfans from "../assets/rapidfans.jpeg"
import main3 from "../assets/main3.jpg"
import Main4 from './Main4'


import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'
import Page6 from './Page6'
import Page7 from './Page7'
import Main6 from './Main6'
const Wrapper = () => {
  return (
    <>
    <div className='items-center flex flex-col mt-4'>
    <Main1 />
    <Trending />
    <Main2 />
    <New />
    <Page1/>
    <Page2/>
    <Page3/>
    <Page4/>
    <Page5/>
    <Page6/>
    <Page7/>
    <Main6/>
    </div>
    </>
  )
}

export default Wrapper