import React from 'react'
import Image from 'next/image'

import BusinessCard from '../../public/images/stone-card.svg'

const Contact = () => {
  const onhandleSubmit = (e) => {
    // e.preventDefault();
    alert("Done")
  }

  return (
    <section className="flex min-h-fit" id="contact">
      <div className="container px-2 py-24">
        <h2 className="mb-32 text-center text-4xl font-bold ">
          <span className="text-indigo-500">| </span> Contact
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Image
            src={BusinessCard}
            alt="business card"
            className="max-w-sm"
            layout="responsive"
          />
          <form
            method="POST"
            name="contact"
            // netlify-honeypot="bot-field"
            data-netlify="true"
            onSubmit={onhandleSubmit}
            className="mx-auto flex w-full flex-col items-center justify-center gap-8 "
          >
            {/* <label hidden>
              Don't fill this out if you're human: <input name="bot-field" />
            </label> */}
            <input
              name="name"
              id="name"
              type="text"
              placeholder="Your name ..."
              className="input input-bordered input-primary w-full max-w-md "
            />
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Your email ..."
              className="input input-bordered input-primary w-full max-w-md "
            />
            <textarea
              name="message"
              id='message'
              className="textarea textarea-primary w-full max-w-md"
              placeholder="Your message ..."
              rows="5"
            />
            {/* <div data-netlify-recaptcha="true"></div> */}
            {/* <button
              className="btn btn-primary w-full max-w-md"
              type="submit"
              name="submit"
              // onClick={onhandleSubmit}
            >
              Send message
            </button> */}
            <input type="submit" value="Send message" className="btn btn-primary w-full max-w-md"/>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
