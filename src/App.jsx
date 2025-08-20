import React from 'react'
import "./index.css"
import gsap from "gsap"
import {ScrollTrigger, SplitText} from "gsap/all" 
import NavBar from './components/NavBar'
import Hero from './components/Hero'

//This will register the plugins for gsap - use only what is needed to keep the bundle size down.
gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <div className='h-dvh'></div>
    </main>
  )
}

export default App