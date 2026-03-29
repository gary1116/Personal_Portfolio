'use client'
import { useState, useRef, useEffect } from 'react'
import Heading from './sub/Heading'
import Project from './sub/Project'
import { projectsData } from '@/assets'
import { animate, motion } from 'framer-motion'

const Projects = () => {
  const [tech, setTech] = useState('All')
  const [index, setIndex] = useState(0)

  return (
    <div id="projects" className="min-h-screen py-20">
      <Heading text={'Projects'} />
      <div className="flex flex-wrap items-center justify-center gap-5">
        {projectsData
          .filter((project) => {
            return project.tech.some((item) => (tech === 'All' ? true : item === tech))
          })
          .map((data, i) => (
            <motion.div key={`id-${i}`} layout>
              <Project data={data} index={i} />
            </motion.div>
          ))}
      </div>
    </div>
  )
}

export default Projects
