'use client'
import Heading from './sub/Heading'
import Image from 'next/image'
import { galleryData, arrowIcons } from '@/assets'
import { useState, useRef, useEffect } from 'react'
import { animate, motion } from 'framer-motion'

const Gallery = () => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(false)
  const prevIndex = useRef(0)
  const slides = useRef([])

  const rightClickHandler = () => {
    animate(slides.current[index], { x: 0 }, { delay: 0.3 })
    animate(slides.current[prevIndex.current], {
      scale: index === 0 ? 1 : 0.4,
      rotate: index === 0 ? 0 : index % 2 === 0 ? 10 : -10,
    })
  }

  const leftClickHandler = () => {
    animate(slides.current[index], { scale: 1, rotate: 0, x: 0 }, { delay: 0.2 })
    animate(slides.current[prevIndex.current], { x: '100%' })
  }

  useEffect(() => {
    if (!slides.current[index] || !slides.current[prevIndex.current]) return

    if (index !== prevIndex.current) {
      direction ? leftClickHandler() : rightClickHandler()
    }

    prevIndex.current = index
  }, [index, direction])

  return (
    <div id="gallery" className="my-20">
      <Heading text={'Photo Gallery'} />

      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative w-[800px] lg:w-[600px] md:w-[95%] sm:w-[280px] h-[500px] lg:h-[450px] md:h-[400px] sm:h-[350px] flex items-center justify-center overflow-hidden"
        >
          {galleryData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ x: i === 0 ? 0 : '100%' }}
              className="absolute inset-0 flex items-center justify-center border border-yellow-500 bg-zinc-50 p-4 rounded-xl dark:bg-zinc-700 transition-colors"
              ref={(el) => {
                slides.current[i] = el
              }}
            >
              <div className="w-full h-full flex items-center justify-center bg-black/10 dark:bg-black/20 rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={`Gallery Image ${i + 1}`}
                  width={800}
                  height={500}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex gap-x-4 text-4xl text-yellow-500 mt-5">
          <button
            className={`${
              index === 0 ? 'opacity-30 pointer-events-none' : 'opacity-100 pointer-events-auto'
            } hover:scale-150 transition-all`}
            onClick={() => {
              setDirection(true)
              setIndex((prev) => prev - 1)
            }}
          >
            {arrowIcons[0]}
          </button>

          <button
            className={`${
              index === galleryData.length - 1
                ? 'opacity-30 pointer-events-none'
                : 'opacity-100 pointer-events-auto'
            } hover:scale-150 transition-all`}
            onClick={() => {
              setDirection(false)
              setIndex((prev) => prev + 1)
            }}
          >
            {arrowIcons[1]}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Gallery