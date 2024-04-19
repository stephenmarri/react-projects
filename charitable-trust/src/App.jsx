import './App.css'
import './classes.css'
import Hero from './components/Hero'
import Major from './components/Major'
import Navbar from './components/Navbar'
import SendUsAMessage from './components/SendUsAMessage'
import WhatWeDo from './components/WhatWeDo'

function App() {
  

  return (
    <>
     <Navbar />
     <Hero />
     <Major />
     <WhatWeDo />
     <SendUsAMessage />
    </>
  )
}

export default App
