import { useState } from 'react'
import './App.scss'
import './index.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <div className="container">
          <img src="../assets/images/undraw_adventure_4hum 1.svg" className="app-logo" alt="logo" />
          <div className="app-header">
            <h2>COUNTRY QUIZ</h2>
          </div>

          <div className="content">
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App;