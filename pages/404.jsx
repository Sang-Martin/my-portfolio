import React from 'react'
import Link from 'next/link'

const PageNotFound = () => {
  return (
    <section className='flex min-h-screen justify-center items-center py-12 flex-col'>
        <h1 className=" text-6xl text-red-500 mb-12">Oops...!</h1>
        <h2 className=" text-3xl  mb-12">404 | Page not found</h2>
        <button className='btn btn-neutral'>
        <Link href="/">
            <p>
                <span className="text-xl ">&larr; </span>
                Back to Home page
            </p>
        </Link>         
        </button>
    </section>
  )
}

export default PageNotFound