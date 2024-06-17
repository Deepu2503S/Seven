import React from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="main">
      <div className="navbar"></div>
      <Outlet />
    </div>
  )
}

export default App