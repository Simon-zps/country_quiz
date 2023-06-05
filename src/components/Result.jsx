import classes from './Result.module.scss'

function Result({correctAnswers}) {

  return (
    <div className={classes.wrapper}>
        <div className={classes.logo}>
            <img src="../assets/images/winner.svg" className="app-logo" alt="logo" />
        </div>
    
        <div className={classes.content}>
            <h1>Results</h1>
            <p>You got <span className={classes.highlight}>{correctAnswers}</span> correct answers</p>
        </div>

        <div className={classes.btn}>
            <input type="submit" value="Try again" />
        </div>
    </div>
  )
}

export default Result;