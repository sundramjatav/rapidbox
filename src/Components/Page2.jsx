import React from 'react';

const Page2 = () => {
  return (
    <div className='w-full h-[30vh] flex md:h-fit md:flex-row overflow-hidden gap-5 '>
      <div className='w-full md:w-[38%] h-full md:h-full'>
        <div className='w-full h-full bg-red-500'>
            <img className='w-full h-full'  src="https://app.rapidbox.in/Production/merchandising/198061_1709970703789.JPG" alt="" />
        </div>
      </div>
      <div className='w-full md:w-[60%] flex flex-col gap-2'>
        <div className='w-full h-[20vh] md:h-1/2 bg-teal-400'>
            <img className='w-full h-full' src="https://app.rapidbox.in/Production/merchandising/093749_1709970717983.JPG" alt="" />
        </div>
        <div className='w-full h-[20vh] md:h-1/2 bg-blue-400'>
            <img className='w-full h-full ' src="https://app.rapidbox.in/Production/merchandising/595147_1709970741794.JPG" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Page2;
