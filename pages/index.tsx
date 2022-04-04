import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {NavBar} from '../components/navbar/NavBar'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Sang's portfolio</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <header>
        {/* Navbar */}
        <NavBar/>
        </header>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold"></h1>
        {/* Banner */}

        {/* About me */}
        

        {/* Service */}

        {/* Portfolio */}

        {/* Contact */}
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        {/* social media */}
      </footer>
    </div>
  )
}

export default Home
