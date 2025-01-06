import React from 'react'
import hero from 'hero.png';
import Aboutme from './Aboutme';


const Hero = () => {
  return (
    <>
   <main className=' flex flex-col items-center justify-center'>
  <div className='mt-6'>
    <div className='flex justify-center'>
    {/* <img className="rounded-full  shadow-custom w-1/2 " src="hero.png" alt="" /> */}
    </div>
    <div className='mt-6 text-center'> 
      {/* <h1 className='text-center text-xl text-white font-semibold'>Hey</h1> */}
      <h1 className='text-4xl text-white font-bold'>I’m Mehtab</h1>
      <h1 className='text-4xl text-white'>Full Stack <span className='text-[#D32D20]'>Developer and UI/UX designer.</span></h1>
      <div className=' mt-6 text-center px-4 max-w-2xl'>
  {/* <p className='text-white sm:text-md text-sm sm:leading-relaxed leading-6'>
    A highly motivated student studying Artificial Intelligence and Machine Learning. Actively seeking opportunities to apply my skills and knowledge to real-world projects and contribute to the advancement of the industry.
  </p> */}
</div>
{/* <div className='mt-8'>
  <button className="bg-
            [#24272C] hover:bg-gray-700 text-white py-2 px-4 rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.8)] shadow-slate-600 "></button>
</div> */}

    </div>
  </div>
</main>
<Aboutme/>

    </>
  )
}

export default Hero
