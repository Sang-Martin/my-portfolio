import React from 'react'
import Image from 'next/image'
import aboutImage from '../../public/images/Programming-rafiki.svg'

const About = () => {
  return (
    <section className="flex min-h-fit " id='about'>
      <div className="container   px-2 py-24">
        {/* title */}
        <h2 className="mb-32 text-center text-4xl font-bold "><span className="text-indigo-500">|</span> About me</h2>
        {/* content */}
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="flex flex-col gap-4 relative ">
            <p>
              Hello, my name is Sang. I am a front-end developer, based in Edmonton, who is pretty keen
              on building apps using JavaScript programming language.
            </p>
            <p>
              Deciding which programming language to follow is tough for me
              because each language offers different strengths for building
              apps. Studying at NAIT has helped me a lot to decide which stream
              I am going to spend time cultivating more. The reason why I chose the
              JavaScript language is due to its convenience.
            </p>
            <p>
              Compared to mobile apps, web apps can run on multiple devices, no
              matter it is a Windows or Mac. In this case, JavaScript is one of
              the great programming languages that helps me to build web apps.
              This language is easy to learn and apply. Not even me, everyone
              can practice learning it directly through a web browser
              that does not require installing anything else. Also, learning
              Javascript could help me become a full-stack developer easier. Instead of
              learning multiple programming languages such as PHP or C# for
              server-side, and JavaScript for client-side separately, now
              JavaScript could handle both sides.
            </p>
            <div className="w-96 h-96 bg-orange-500 absolute blur-3xl opacity-40 -z-10  top-[12rem] rounded-full"></div>
          </div>
          <div className="flex justify-center items-center relative">
            <Image src={aboutImage} alt="about image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
