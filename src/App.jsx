import React from 'react'
import gsap from 'gsap'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktails from './components/cocktails'
import About from './components/About'
import { ScrollTrigger, SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main className=''>
        <Navbar />
        <Hero />
        <Cocktails />
        <About />
    </main>
  )
}

export default App

