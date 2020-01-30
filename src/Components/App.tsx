import React, { useEffect, useRef, useState } from 'react'
import './App.scss'
import Navbar from './Navbar/Navbar'
import { HashRouter } from 'react-router-dom'
import Billboard from './Billboard/Billboard'

const usePrevious = (value: number): number => {
  const ref = useRef<number>(0)
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

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
      <div style={{ height: '300vh', backgroundColor: 'green' }}>
        <button onClick={() => setMoveScrollFlag(!moveScrollFlag)}>
          Fuck this shit
        </button>
        <div style={{ marginTop: '200px' }}></div>
      </div>
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
