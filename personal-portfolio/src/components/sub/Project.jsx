'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import GithubLineIcon from 'remixicon-react/GithubLineIcon'

const Project = ({ data, index }) => {
  const [show, setShow] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: index % 2 === 0 ? 100 : -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: 'spring', stiffness: 100 }}
      onClick={() => setShow((show) => !show)}
      className="relative w-[450px] sm:w-full h-max border border-yellow-400 rounded-lg cursor-pointer"
    >
      <Image
        src={data.url}
        alt="Project Image"
        width={500}
        height={500}
        className="w-full rounded-lg opacity-70"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: show ? 1 : 0 }}
        className="absolute top-0 w-full h-full flex flex-col items-center justify-center gap-y-3 bg-white/95 p-6 rounded-lg dark:bg-zinc-700/95 transition-colors"
      >
        <h2 className="text-lg font-bold tracking-wide text-gray-500 dark:text-white transition-colors">
          {data.name}
        </h2>

        <p className="text-justify text-gray-500 first-letter:pl-2 dark:text-gray-100 transition-colors">
          {data.desc}
        </p>

        {/* ✅ GitHub Button */}
        <a
          href={data.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()} // VERY IMPORTANT
          className="flex items-center gap-2 mt-2 px-4 py-2 bg-black text-white rounded hover:bg-yellow-500 hover:text-black transition"
        >
          <GithubLineIcon />
          View Code
        </a>
      </motion.div>
    </motion.div>
  )
}

export default Project