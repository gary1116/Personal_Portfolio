'use client'
import Heading from './sub/Heading'
import Project from './sub/Project'
import { projectsData } from '@/assets'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen py-20">
      <Heading text={'Projects'} />
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-start justify-center gap-5 px-4 sm:px-6">
        {projectsData.map((data, i) => (
          <motion.div
            key={`id-${i}`}
            layout
            className="flex w-full justify-center sm:w-auto"
          >
            <Project data={data} index={i} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects