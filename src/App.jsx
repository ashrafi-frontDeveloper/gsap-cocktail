import React from 'react'
import gsap from 'gsap'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktails from './components/cocktails'
import About from './components/About'
import Art from './components/Art'
import { ScrollTrigger, SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main className=''>
        <Navbar />
        <Hero />
        <Cocktails />
        <About />
        <Art />
    </main>
  )
}

export default App

