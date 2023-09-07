import React from 'react'
import '/src/assets/dp.png'
import Navbar from './Navbar'

export default function Hero() {
  return (
    <div className='mx-20 my-10 p-10'>
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
        <div className="text-start">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-zinc-800">
            Data Analyst
          </h1>
          <p className="text-lg md:text-xl pr-20 mr-20 text-stone-600">
          I am a data analyst with a passion for using data to solve problems. I have 5+ years of experience in the tech industry, and I am proficient in a variety of data analysis tools and technologies.
          </p>
        </div>
        <img src="/src/assets/dp.png" alt="Profile"  className='w-1/3 h-auto rounded-full border-solid border-4 border-zinc-800'/>
      </div>
      </div>
    </div>
  )
}
