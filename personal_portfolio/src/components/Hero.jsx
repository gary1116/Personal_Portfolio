'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import {heroIcons} from '@/assets'
import { useMotionValue, useTransform,motion,useSpring } from 'framer-motion'

const Hero = () => {

    // this usestate is used for tracking window size cos we might want to map the mouse position on a window
    // to a rotation or a transformation effect
    //knowing the size of the window will allow us to correctly compute these mappings

    //dynamic updates=>By using a state variable, the component can dynamically respond to changes in the window size

    const [windowOffSet,setWindowOffSet]=useState({
        innerWidth:0,
        innerHeight:0
    })

    // this will help us when to start mouse animations or not depending on the region
    const[mouseMove,setMouseMove]=useState(false)
    const [buttonHover,setButtonHover]=useState(false);

    const x=useMotionValue(0)
    const y=useMotionValue(0)

    const handleMouseMove=(e)=>{
        const {clientX, clientY}=e;
        x.set(clientX)
        y.set(clientY)

        console.log(clientX, clientY, x,y)
    }
    const {innerHeight,innerWidth}=windowOffSet
    const xSpring=useSpring(x,{stiffness:100,damping:10})
    const ySpring=useSpring(y,{stiffness:100,damping:10})
    const rotateY=useTransform(xSpring,[0, innerWidth],[-30,30])
    const rotateX=useTransform(ySpring,[0, innerHeight],[10,-50])

    const handleMouseEnter=()=>{
        setWindowOffSet({ innerWidth:window.innerWidth,innerHeight:window.innerHeight })
        setMouseMove(true)
    }

  return (
    <div
     id='home' className='h-screen grid place-items-center' 
    onMouseMove={handleMouseMove} 
    onMouseEnter={handleMouseEnter}>
      <div className="">
        <div className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
            <motion.div className="flex items-center justify-center" 
            style={{rotateX:mouseMove?rotateX:0,
                    rotateY:mouseMove?rotateY:0,
                    transition:"0.1s"}}
            >
                <Image 
                src={'/person.png'}
                alt='Person Image'
                width={300}
                height={300} priority={true}
                className='h-auto w-[150px]'
                />
                <motion.span className='absolute text-3xl font-semibold text-white'
                initial={{scale : 0}}
                animate={{opacity : buttonHover ? 0 : 1,
                scale : buttonHover ? 2 : 0,
                y : buttonHover ? -40 : 0
            }}
                transition={{opacity:{delay:0.4}}}>Hi</motion.span>
            </motion.div>
            <h1 className='text-center text-3xl font-bold tracking-wider text-gray-500'>My Name is Gary Meledath &</h1>
            <p className='text-lg tracking-wider text-gray-700 sm:text-2xl'>I like animations 😎</p>
        </div>
        <div className="mt-8 flex justify-center gap-x-10 text-3xl text-yellow-600 sm:text-2xl">
            {heroIcons.map((icon,i)=>(
                <a href="#" key={i}
                 className='rounded-lg hover:bg-red-400 hover:text-white transition-colors'>{icon}</a>
            ))}
        </div>
        <a href="#" className='w-max mt-7 block rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider mx-auto text-white hover:bg-red-500 transition-colors'
         onMouseEnter={()=>setButtonHover(true)} 
         onMouseLeave={()=>setButtonHover(false)}>Talk To Me</a>
      </div>
    </div>
  )
}

export default Hero
