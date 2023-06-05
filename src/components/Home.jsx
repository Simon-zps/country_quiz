import { useEffect, useState } from 'react';
import classes from './Home.module.scss'

function Home({countriesData}) {
  
  const [capital, setCapital] = useState("");
  const [rightCountry, setRightCountry] = useState("");
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
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

    if (countriesData) {
      getRandomAnswers();
    }

  }, [countriesData, count]); // Removed answers.length as a dependency
   
  
  const handleOptionSelect = (index) => {
    setSelectedOption(index);
  };

  const handleNext = () => {

    if (selectedOption != null) {
      if (answers[selectedOption] === rightCountry) {
        console.log("RIGHT");
      } else {
        console.log("WRONG");
      }
      setSelectedOption(null);
      setCount(prevCount => prevCount + 1);
      console.log(count);
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
          <input type="submit" value="Next" disabled={selectedOption === null || selectedOption === undefined}/>
        </div>
      
      </div>  
    </div>
  )
}


export default Home;