import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'

const MainView = () => {
  const titles = [
    'Processing',
    'Authenticating...',
    'Launch URL',
    'LoggIn Failed'
  ]
  const [title, setTitle] = useState(0)
  const [time, setTime] = useState()

  function displayHello() {
    setTitle((_prev) => {
      return _prev + 1
    })
  }
  useEffect(() => {
    const time1 = setInterval(displayHello, 1000)
    setTime(time1)
  }, [])
  useEffect(() => {
    if (title === 3) {
      clearInterval(time)
    }
  }, [title])
  return (
    <div>
      <Navbar />
      <div className="main_title">{titles[title]}</div>
    </div>
  )
}

export default MainView
