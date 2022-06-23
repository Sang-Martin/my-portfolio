import React from 'react'
import Image from 'next/image'

import NoteApp from '../../public/images/note-app.jpg'
import PasswordGenerator from '../../public/images/password-generator.jpg'
import WeatherForecast from '../../public/images/weather-forecast.jpg'

const Portfolio = () => {
  return (
    <section className="flex min-h-fit" id="portfolio">
      <div className="container px-2 py-24">
        <h2 className="mb-32 text-center text-4xl font-bold">
          <span className=" text-indigo-500">| </span> Portfolio
        </h2>

        <div className="grid gap-6 text-center md:grid-cols-3">
          <a href="https://sm-password-generator.netlify.app/" target="_blank">
            <div className="min-w-md flex flex-1 flex-col justify-between gap-4 rounded-2xl border-2 p-4 duration-150 hover:scale-105 hover:border-indigo-500 hover:ease-in-out">
              <Image
                src={PasswordGenerator}
                height={300}
                className=" object-contain"
              />
              <h3 className="font-mono text-lg font-semibold">
                Password generator
              </h3>
            </div>
          </a>
          <a href="https://sm-note-app.netlify.app/" target="_blank">
            <div className="min-w-md flex flex-1 flex-col justify-between gap-4 rounded-2xl border-2 p-4 duration-150 hover:scale-105 hover:border-indigo-500 hover:ease-in-out">
              <Image src={NoteApp} height={300} className=" object-contain" />
              <h3 className="font-mono text-lg font-semibold">Note app</h3>
            </div>
          </a>
          <a href="https://sm-weather-app.netlify.app/" target="_blank">
            <div className="min-w-md flex flex-1 flex-col justify-between gap-4 rounded-2xl border-2 p-4 duration-150 hover:scale-105 hover:border-indigo-500 hover:ease-in-out">
              <Image
                src={WeatherForecast}
                height={300}
                className=" object-contain"
              />
              <h3 className="font-mono text-lg font-semibold">
                Weather forecast
              </h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
