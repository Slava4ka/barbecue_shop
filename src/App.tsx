import React, { useEffect, useRef, useState } from 'react'
import './App.scss'
import Billboard from './Components/Billboard/Billboard'
import SlideMenu from './Components/SlideMenu/SlideMenu'
import { HashRouter } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import MapComponent from './Components/MapComponent/MapComponent'
import Footer from './Components/Footer/Footer'

const App: React.FC = () => {
  const [moveScrollFlag, setMoveScrollFlag] = useState<boolean>(false)

  const listener = (event: any) => {
    const scrollDistanceFromTop = event?.target?.documentElement?.scrollTop
    if (scrollDistanceFromTop > 50) {
      setMoveScrollFlag(true)
    } else {
      setMoveScrollFlag(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', e => listener(e))
    return () => {
      window.removeEventListener('scroll', e => listener)
    }
  })

  return (
    <div className="App">
      <Navbar move={moveScrollFlag} />
      <Billboard />
      <SlideMenu />
      <MapComponent />
      <Footer />
    </div>
  )
}

const AppDone: React.FC = () => {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  )
}
export default AppDone
