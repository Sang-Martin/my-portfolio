import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import NavBar from '../components/navbar/NavBar'
import Banner from '../components/banner/Banner'
import About from '../components/about/About'
import Services from '../components/services/Services'
import Skills from '../components/skills/Skills'
import Contact from '../components/contact/Contact'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Stone</title>
        <link rel="icon" href="/images/stone-icon.svg" />

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
        {/* Service */}
        <Services />
        {/* Portfolio */}

        {/* Contact */}
        <Contact/>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        {/* social media */}
      </footer>
    </div>
  )
}

export default Home
