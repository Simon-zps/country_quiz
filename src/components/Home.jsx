import './Home.scss'

function Home() {

  return (
    <div className="wrapper">
      <div className="head">
        <h2>Kuala lumpur is the capitol of</h2>
      </div>

      <div className="answers">
        <ul>
            <li><span className="highlight">A</span>Vietnam</li>
            <li><span className="highlight">B</span>Malaysia</li>
            <li><span className="highlight">C</span>Sweden</li>
            <li><span className="highlight">D</span>Poland</li>
        </ul>

        <div className="next-btn">
          <input type="submit" value="Next" />
        </div>

      </div>  
    </div>
  )
}

export default Home;