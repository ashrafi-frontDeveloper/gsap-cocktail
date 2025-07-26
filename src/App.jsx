import React from 'react'
import gsap from 'gsap'
import Navbar from './components/Navbar'
import { ScrollTrigger, SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main className=''>
        <Navbar />
        
    </main>
  )
}

export default App