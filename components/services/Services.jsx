import React from 'react'
import Image from 'next/image'

import NextJS from '../../public/images/nextJS.svg'
import Website from '../../public/images/website.svg'
import Webapp from '../../public/images/apple-android.svg'
import Production from '../../public/images/production.svg'

const Services = () => {
  return (
    <section className="flex min-h-fit" id="services">
      <div className="container px-2 py-24">
        {/* title */}
        <h2 className="mb-32 text-center text-4xl font-bold">
          <span className="text-gradient">| </span> Services
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="card  p-4 ">
            <Image src={Website} alt="Website"  height={200}/>
            <div className="flex flex-col py-2 gap-2 my-2">
              <h3 className="card-title text-gradient ">Websites</h3>
              <p className="">
                You are having a restaurant, a start-up, a small business. Do
                you need a website?
              </p>
            </div>
          </div>

          <div className="card  p-4 ">
            <Image src={Webapp} alt="wep applications" height={200}/>
            <div className="flex flex-col py-2 gap-2 my-2">
              <h3 className="card-title text-gradient">Web applications</h3>
              <p className="">
                Do you need a web application that will be able to run on multiple devices?
              </p>
            </div>
          </div>

          <div className="card  p-4 ">
            <Image src={Production} alt="production" height={200}/>
            <div className="flex flex-col py-2 gap-2 my-6">
              <h3 className="card-title text-gradient">Productions</h3>
              <p className="">
                Do you have an amazing idea, but do not know how to make it real?
              </p>
            </div>
          </div>
        </div>
          <h4 className='text-center mt-8 text-3xl font-semibold text-gradient'>Please feel free to contact me, I am super happy to help you out!</h4>
      </div>
    </section>
  )
}

export default Services
