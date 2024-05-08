import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const News = () => {
  return (
    <>
    <Navbar/>
    <div className='w-full h-fit bg-neutral-900 text-white'>
        <div className='h-fit py-2 px-4 w-full flex flex-col gap-5  '>
            <card className='bg-zinc-700 rounded-2xl gap-3 p-6 flex'>
                <img className='h-[30vw] w-[30vw] object-cover rotate-190 rounded-3xl' src="https://i.pinimg.com/564x/45/60/32/4560326eb380f0ff6802c9cc4ffec5d6.jpg" alt="" />
                <h1 className='text-2xl '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio reprehenderit sint tempore impedit ea et aut, placeat dolor eos, sunt asperiores cum molestias a, maiores ipsum atque incidunt eaque error!</h1>
            </card>



        </div>
    </div>
    <Footer/>
    </>
  )
}

export default News