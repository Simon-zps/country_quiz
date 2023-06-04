import { useState } from 'react'
import './App.scss'
import './index.css'
import Home from './components/Home';
import Result from './components/Result';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <div className="container">
          
          <div className="app-header">
            <h2>COUNTRY QUIZ</h2>
            <img src="../assets/images/undraw_adventure_4hum 1.svg" className="app-logo" alt="logo" />
          </div>

          <div className="content">
            <Home></Home>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
