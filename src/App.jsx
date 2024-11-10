import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import Highlights from './components/Highlights'

const App = () => {
  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  )
}

export default App