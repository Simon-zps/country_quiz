import classes from './Result.module.scss'

function Result({correctAnswers, handleResult}) {

  return (
    <div className={classes.wrapper}>
        <div className={classes.logo}>
            <img src="../assets/images/winner.svg" className="app-logo" alt="logo" />
        </div>
    
        <div className={classes.content}>
            <h1>Results</h1>
            <p>You got <span className={ correctAnswers > 0 ? classes.highlight : classes.highlightRed}>{correctAnswers}</span>{" "}
            {correctAnswers === 1 ? "correct answer" : "correct answers"}</p>
        </div>

        <div className={classes.btn} onClick={handleResult}>
            <input type="submit" value="Try again" />
        </div>
    </div>
  )
}

export default Result;