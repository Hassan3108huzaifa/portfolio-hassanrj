'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '@/components/Header'

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 75 },
  { name: 'NextJS', level: 80 },
  { name: 'Node.js', level: 30 },
  { name: 'Python', level: 40 },
]

const experiences = [
  { year: 'Learning', title: 'Full Stack Developer', company: 'Governor House Karachi' },
  { year: '2024', title: 'Front-End Developer', company: 'Governor House Karachi' },
  { year: '2024', title: 'UI/UX Design Intern', company: 'Governor House Karachi' },
  { year: '2023', title: 'Computer Science Student', company: 'Graceful Grammar Higher Secondary School' },
]

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-12">
            <span className="text-sky-700">About</span> Me
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/whoami.png"
              alt="About Me"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold mb-4 text-sky-700">Who am I?</h2>
            <p className="text-lg mb-6">
              I&apos;m Hassan, a budding developer from Karachi, Pakistan, currently in 11th grade with a focus on Computer Science. My journey in tech began with frontend development, mastering HTML, CSS, JavaScript, TypeScript, React, and Tailwind CSS. Currently, I &apos;m diving deeper into Next.js, honing my skills at Governor House, Karachi. My passion for coding drives me to create user-friendly web experiences, and I&apos;m constantly learning to push my boundaries.
            </p>
            <p className="text-lg">
              Beyond frontend, I&apos;m actively exploring the world of backend development, aiming to become a full-stack developer soon, inshallah. I believe in continuous growth, and my dream is to not just build websites but meaningful digital solutions that have a positive impact. With a curious mind and strong dedication, I&apos;m excited to see where this tech journey takes me!
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-sky-700">My Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-sky-600 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-sky-700">Experience Timeline</h2>
          <div className="relative border-l-2 border-sky-200">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-8 flex items-center">
                <div className="absolute w-3 h-3 bg-sky-600 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <p className="text-sm text-sky-600 font-semibold mb-2 sm:mb-0 sm:w-32">{exp.year}</p>
                  <div className="bg-white p-4 rounded-lg shadow-md ml-2">
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
