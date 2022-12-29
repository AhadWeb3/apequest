import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navbar from './components/Navbar'
import Herotext from './components/Herotext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-black'>
      <Navbar />
      <Herotext />
    </div>
  </React.StrictMode>,
)
