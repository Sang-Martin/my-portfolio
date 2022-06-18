import React from 'react'

const Contact = () => {
  return (
    <section className="flex min-h-fit" id='contact'>
        <div className="container px-2 py-24">
        <h2 className="mb-32 text-center text-4xl font-bold">
          <span className="text-gradient">| </span> Contact
        </h2>
        <form action="" className="flex mx-auto w-full items-center justify-center flex-col gap-8">
            <input type="text" placeholder="Your name ..." className="input input-bordered input-primary w-full max-w-md "/>
            <input type="text" placeholder="Your email ..." className="input input-bordered input-primary w-full max-w-md "/>
            <textarea className="textarea textarea-primary w-full max-w-md" placeholder="Your message ..." rows="5"/>
            <button className="btn btn-primary w-full max-w-md">Send message</button>
        </form>
        </div>
    </section>
  )
}

export default Contact