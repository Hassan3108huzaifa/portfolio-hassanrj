'use client'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import './Header.css'
import Button from './ui/LinkedInButton'


const jobTitles = [
  'Front-End Developer',
  'UI/UX Designer',
  'Graphic Designer',
  'AI Student',
  'IT Student'
]

export default function Navbar() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [currentTitle, setCurrentTitle] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error attempting to play video:", error)
      })
    }
  }, [])

  useEffect(() => {
    const typeTitle = () => {
      const title = jobTitles[currentIndex]

      if (isTyping) {
        if (currentTitle.length < title.length) {
          setCurrentTitle(title.slice(0, currentTitle.length + 1))
        } else {
          setTimeout(() => setIsTyping(false), 1000)
        }
      }
      else {
        if (currentTitle.length > 0) {
          setCurrentTitle(currentTitle.slice(0, -1))
        } else {
          // Once fully deleted, move to the next title
          const nextIndex = (currentIndex + 1) % jobTitles.length
          setCurrentIndex(nextIndex)
          setIsTyping(true)
        }
      }
    }

    const typingInterval = setInterval(typeTitle, 100)
    return () => clearInterval(typingInterval)
  }, [currentTitle, currentIndex, isTyping])


  return (
    <div className='relative min-h-screen overflow-hidden'>
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/header-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='relative z-10 drop-shadow-md shadow-sky-400'>
        <nav className='flex flex-col justify-center md:flex-row md:justify-between m-4 items-center max-w-6xl w-full mx-auto bg-opacity-80 backdrop-blur-sm'>
          <div>
            <Link href={'/'}>
              <h1 className='font-bold text-xl font-mono md:text-2xl lg:text-3xl text-white'>HassanRJ</h1>
            </Link>
          </div>
          <div className='flex gap-8 md:gap-14 mt-2 md:mt-0'>
            <Link href={'/'}> <li className='list-none  font-mono text-white menu__link md:text-xl'>Home</li> </Link>
            <Link href={'/portfolio'}> <li className='list-none  font-mono text-white menu__link md:text-xl'>Portfolio</li> </Link>
            <Link href={'/about'}> <li className='list-none  font-mono text-white menu__link md:text-xl'>About</li> </Link>
            <Link href={'/contact'}> <li className='list-none  font-mono text-white menu__link md:text-xl'>Contact</li> </Link>
          </div>
        </nav>

        <div className='flex items-center justify-center min-h-[calc(100vh-80px)] max-w-6xl mx-auto'>
          <div className='flex-col-reverse lg:flex-row bg-opacity-50 p-8 rounded-lg backdrop-blur-sm text-white flex items-center justify-between w-full'>
            <div className='flex flex-col gap-2 mt-5 lg:mt-0'>
              <p className='md:text-sm text-xs text-center lg:text-left font-mono'>HELLO THERE, WELCOME TO MY SITE</p>
              <h2 className='lg:text-5xl text-3xl te font-bold text-center lg:text-left mb-2 font-mono'>I&apos;m HassanRJ</h2>
              <h2 className='lg:text-5xl text-3xl font-bold text-center lg:text-left mb-2 text-sky-700 font-mono'>A Full Stack Developer</h2>
              <h2 className='lg:text-5xl text-3xl font-bold text-center lg:text-left mb-2 font-mono'>
                <span>& {currentTitle}</span>
                <span className="animate-blink">|</span>
              </h2>
              <div className='flex justify-center lg:justify-start'>
                <Button />
              </div>
            </div>
            <Image
              src="/pic.jpg"
              alt="Hassan RJ"
              width={500}
              height={400}
              className='rounded-full'
            />
          </div>
        </div>
      </div>
    </div>
  )
}