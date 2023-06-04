import classes from './Home.module.scss'

function Home() {

  return (
    <div className={classes.wrapper}>
      <div className={classes.head}>
        <h2>Kuala lumpur is the capitol of</h2>
      </div>

      <div className={classes.answers}>
        <ul>
            <li><span className={classes.highlight}>A</span>Vietnam</li>
            <li><span className={classes.highlight}>B</span>Malaysia</li>
            <li><span className={classes.highlight}>C</span>Sweden</li>
            <li><span className={classes.highlight}>D</span>Poland</li>
        </ul>

        <div className={classes.btn}>
          <input type="submit" value="Next" />
        </div>

      </div>  
    </div>
  )
}

export default Home;