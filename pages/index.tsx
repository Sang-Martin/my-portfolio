import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import NavBar from '../components/navbar/NavBar'
import Banner from '../components/banner/Banner'
import About from '../components/about/About'
import Services from '../components/services/Services'
import Skills from '../components/skills/Skills'
import Contact from '../components/contact/Contact'
import Portfolio from '../components/portfolio/Portfolio'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Stone</title>
        <link rel="icon" href="/images/stone-icon.svg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Hi, I'm Sang Quach who is a React developer with industry experience building websites and web applications" />
        
      </Head>

      <header>
        {/* Navbar */}
        <NavBar/>
        </header>

      <main className="flex flex-col  ">
        
        {/* Banner */}
        <Banner/>
        {/* About me */}
        <About />
        {/* Skills */}
        <Skills />
        {/* Portfolio */}
        <Portfolio />
        {/* Service */}
        <Services />
        {/* Contact */}
        <Contact/>
      </main>

      <footer className="flex h-12 w-full items-center justify-center bg-neutral text-white">
        {/* social media */}
        <h5>Stone - © Copyright 2022</h5>
      </footer>
    </div>
  )
}

export default Home
