import React from 'react'
import Nav from './Components/Nav'
import Wrapper from './Components/Wrapper'
import Footer from './Components/Footer'


const App = () => {
  return (
    <>
    <div className='flex flex-col min-h-screen w-full overflow-x-hidden'>
    <Nav />
    <Wrapper />
    <Footer />
    </div>
    </>
  )
}

export default App