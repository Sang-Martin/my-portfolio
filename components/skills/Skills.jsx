import React from 'react'
import Image from 'next/image'
import ListSkills from './ListSkills'

const Skills = () => {
  return (
    <section className="flex h-fit" id='skills'>
      <div className="container px-2 py-24">
        <h2 className="mb-32 text-center text-4xl font-bold">
          <span className="text-indigo-500">|</span> Skills
        </h2>
        <ListSkills />
      </div>
    </section>
  )
}

export default Skills
