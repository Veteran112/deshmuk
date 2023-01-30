import React, { useEffect } from 'react'
import MainView from './MainView'

import './index.scss'

export function MainContainer() {
  useEffect(() => {
    document.title = 'Main'
  }, [])

  return (
    <div>
      <MainView title="Main" />
    </div>
  )
}
