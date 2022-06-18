import React from 'react'
import Image from 'next/image'

import NextJS from '../../public/images/nextJS.svg'
import TailwindCSS from '../../public/images/tailwindCSS.svg'
import Csharp from '../../public/images/Csharp.svg'
import Firebase from '../../public/images/firebase.svg'
import PHP from '../../public/images/php.svg'
import Wordpress from '../../public/images/wordpress.svg'
import MySQL from '../../public/images/mySQL.svg'
import Java from '../../public/images/java.svg'

// const Skills = [
//     {
//         id: 1,
//         name: 'NextJS',
//         image: '../../public/images/nextJS.svg'
//     },
//     // {
//     //     id: 2,
//     //     name: 'TailwindCSS',
//     //     image: '2'
//     // },
//     // {
//     //     id: 3,
//     //     name: 'Firebase',
//     //     image: '3'
//     // },
//     // {
//     //     id: 4,
//     //     name: 'PHP',
//     //     image: '4'
//     // },
//     // {
//     //     id: 5,
//     //     name: 'MySQL',
//     //     image: '5'
//     // },
//     // {
//     //     id: 6,
//     //     name: "C#",
//     //     image: '6'
//     // },
//     // {
//     //     id: 7,
//     //     name: "Java",
//     //     image: '7'
//     // },
//     // {
//     //     id: 8,
//     //     name: 'Wordpress',
//     //     image: '8'
//     // }
// ]


const ListSkills = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-y-12">
        <div className='flex flex-col justify-center items-center gap-2'>
            <Image src={NextJS} alt="NextJS" width="100" height="100" />
            <h3 className='text-xl text-slate-500 font-mono'>NextJS</h3>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
            <Image src={TailwindCSS} alt="TailwindCSS" width="100" height="100" />
            <h3 className='text-xl text-slate-500 font-mono'>TailwindCSS</h3>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
            <Image src={PHP} alt="PHP" width="100" height="100" />
            <h3 className='text-xl text-slate-500 font-mono'>PHP</h3>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
            <Image src={MySQL} alt="MySQL" width="100" height="100" />
            <h3 className='text-xl text-slate-500 font-mono'>MySQL</h3>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
            <Image src={Csharp} alt="C sharp" width="100" height="100" />
            <h3 className='text-xl text-slate-500 font-mono'>C#</h3>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
            <Image src={Java} alt="Java" width="100" height="100" />
            <h3 className='text-xl text-slate-500 font-mono'>Java</h3>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
            <Image src={Wordpress} alt="Wordpress" width="100" height="100" />
            <h3 className='text-xl text-slate-500 font-mono'>Wordpress</h3>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
            <Image src={Firebase} alt="Firebase" width="100" height="100" />
            <h3 className='text-xl text-slate-500 font-mono'>Firebase</h3>
        </div>
    </div>
  )
}

export default ListSkills