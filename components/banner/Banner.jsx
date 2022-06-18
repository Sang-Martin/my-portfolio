import React from 'react'
import Image from 'next/image'
import heroImage from '../../public/images/hero-image.png'

const Banner = () => {
  return (
    <section className="  flex min-h-screen" id="/">
      <div className="container grid grid-cols-1 md:grid-cols-2  gap-4 p-2 ">
        <div className=" h-full  flex flex-col item-start justify-center  gap-2 flex-1">
          <h1 className="font-bold text-5xl">Hi, I'm <span className=" text-gradient">Sang Quach</span></h1>
          <p className="text-2xl text-gray-500">A React developer with industry experience building websites and web applications</p>
        </div>
        <div className="flex justify-center border-4 border-blue-500 min-h-96 my-auto relative rounded-xl">
          <Image src={heroImage} alt="hero image" />
          <div className=" bg-red-500 w-48 h-48 absolute blur-[64px] rounded-full bottom-64 left-6 -z-50 opacity-60"></div>
          <div className=" bg-purple-500 w-32 h-32 absolute blur-[64px] rounded-full right-6 bottom-6 -z-50"></div>
          <div className=" bg-yellow-500 w-32 h-32 absolute blur-[72px] rounded-full right-[48rem] top-64 -z-50"></div>
        </div>    
      </div>
    </section>
  )
}

export default Banner
