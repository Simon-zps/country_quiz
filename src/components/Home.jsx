import { useEffect, useState } from 'react';
import classes from './Home.module.scss'

function Home({countriesData, handleResult}) {
  
  const [capital, setCapital] = useState("");
  const [rightCountry, setRightCountry] = useState("");
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [count, setCount] = useState(1);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {

    if (userAnswers.length === 5) { // If user has answered 5 questions then calculate the result and show it
      const correctAnswersCount = userAnswers.reduce((count, answer) => {
        if (Object.values(answer)[0] === true) {
          return count + 1;
        }
        return count;
      }, 0);
    
      handleResult(correctAnswersCount);
    }

    if (countriesData) {
      getRandomAnswers();
    }

  }, [countriesData, count]); // Removed answers.length as a dependency


  function getRandomAnswers() {
    const countries = Object.keys(countriesData);
    let list = [];
    let correctAnswer; // Define correctAnswer

    // get 4 random countries
    while (list.length < 4) {
      const randomIndex = Math.floor(Math.random() * countries.length);
      if (!list.includes(countries[randomIndex]) && countriesData[countries[randomIndex]].length < 15) {
        list.push(countries[randomIndex]);
        console.log(countries[randomIndex]);
      }
    }

    // get a random country from the list
    correctAnswer = list[Math.floor(Math.random() * list.length)]; 

    // set states
    setAnswers(list);
    setRightCountry(correctAnswer); 
    setCapital(countriesData[correctAnswer]);
}
   
  
  const handleOptionSelect = (index) => {
    setSelectedOption(index);
  };

  const handleNext = () => {

    if (selectedOption != null) {
      if (answers[selectedOption] === rightCountry) {
        console.log("RIGHT");
        setUserAnswers(prevAnswers => [...prevAnswers, { [answers[selectedOption]]: true }]);
      } else {
        console.log("WRONG");
        setUserAnswers(prevAnswers => [...prevAnswers, { [answers[selectedOption]]: false }]);
      }
      
      setSelectedOption(null);
      setCount(prevCount => prevCount + 1);
      console.log("Selected "+answers[selectedOption]);
    }
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.head}>
        <h2>{capital} is the capitol of</h2>
      </div>

      <div className={classes.answers}>
        <ul>
          {answers.map((country, index) => { // Included index as a parameter
            const options = ["A", "B", "C", "D"];
            return (
              <li key={index} onClick={() => handleOptionSelect(index)} className={selectedOption === index ? classes.selected : ''}>
                <span className={classes.highlight}>{options[index]}</span>{country}
              </li>
            );
          })}
        </ul>

        <div className={classes.btn} onClick={handleNext}>
          <input type="submit" value="Next" disabled={selectedOption === null || selectedOption === undefined} className={selectedOption !== null ? classes.inputReady : ''} />
        </div>
      
      </div>  
    </div>
  )
}


export default Home;