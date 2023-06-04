import { useEffect, useState } from 'react';
import classes from './Home.module.scss'

function Home({countriesData}) {
  
  const [capital, setCapital] = useState("");
  const [rightCountry, setRightCountry] = useState("");
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    function getRandomAnswers() {
        const countries = Object.keys(countriesData);
        let list = [];
        let correctAnswer; // Define correctAnswer
    
        // get 4 random countries
        while (list.length < 4) {
          const randomIndex = Math.floor(Math.random() * countries.length);
          if (!list.includes(countries[randomIndex])) {
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

    if (countriesData && answers.length === 0) {
      getRandomAnswers();
    }

  }, [countriesData]); // Removed answers.length as a dependency
   
  

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
              <li key={index}>
                <span className={classes.highlight}>{options[index]}</span>{country}
              </li>
            );
          })}
        </ul>

        <div className={classes.btn}>
          <input type="submit" value="Next"/>
        </div>
      
      </div>  
    </div>
  )
}


export default Home;