'use client'
import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='h-screen grid place-items-center'>
      <div className="">
        <div className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
            <div className="flex items-center justify-center">
                <Image 
                src={'/person.png'}
                alt='Person Image'
                width={300}
                height={300} priority={true}
                className='h-auto w-[150px]'
                />
                <span className='absolute text-3xl font-semibold text-white'>Hi</span>
            </div>
            <h1 className='text-center text-3xl font-bold tracking-wider text-gray-500'>My Name is Gary Meledath &</h1>
            <p className='text-lg tracking-wider text-gray-700'>I like animations 😎</p>
        </div>
        <div className="">
            <a href="#">Icon</a>
        </div>
        <a href="#" className='w-max block rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider mx-auto text-white hover:bg-red-500 transition-colors'>Talk To Me</a>
      </div>
    </div>
  )
}

export default Hero
