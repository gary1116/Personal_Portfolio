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
      onClick={() => setShow((prev) => !prev)}
      className="relative w-full max-w-[400px] min-h-[220px] sm:min-h-[260px] overflow-hidden rounded-lg border border-yellow-400 cursor-pointer"
    >
      <Image
        src={data.url}
        alt="Project Image"
        width={500}
        height={500}
        className="h-full w-full object-cover rounded-lg opacity-70"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: show ? 1 : 0 }}
        className={`absolute inset-0 z-10 flex flex-col justify-between rounded-lg bg-white/95 p-4 sm:p-6 dark:bg-zinc-700/95 transition-colors ${
          show ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <h2 className="text-base sm:text-lg font-bold tracking-wide text-gray-600 dark:text-white break-words text-center">
          {data.name}
        </h2>

        <p className="my-3 flex-1 overflow-y-auto text-sm sm:text-base text-left break-words text-gray-600 dark:text-gray-100">
          {data.desc}
        </p>

        <a
          href={data.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded bg-black px-4 py-2 text-sm sm:text-base text-white transition hover:bg-yellow-500 hover:text-black"
        >
          <GithubLineIcon />
          View Code
        </a>
      </motion.div>
    </motion.div>
  )
}

export default Project