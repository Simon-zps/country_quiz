import { useEffect, useState } from 'react'
import './App.scss'
import './index.css'
import Home from './components/Home';
import Result from './components/Result';
import stuImg from '/assets/images/undraw_adventure_4hum 1.svg'

function App() {
  const [result, setResult] = useState(false);
  const [countriesData, setCountriesData] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  
  useEffect(() => {
    async function getAllCountries() {
      const url = `https://restcountries.com/v3.1/region/europe?fields=name,capital,currencies`;
      const requestParams = {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      };
  
      try {
        const response = await fetch(url, requestParams);
        const data = await response.json();

        const countryCapitalPairs = data.reduce((accum, current) => {
          if (current.name && current.capital) {
            accum[current.name.common] = current.capital[0];
          }
          return accum;
        }, {});
  
        console.log(countryCapitalPairs);
        setCountriesData(countryCapitalPairs);
        console.log("Fetched Data successfuly");
      } catch (error) {
        console.log(error);
      }
    }
  
    getAllCountries();
  
  }, []);

  const handleResult = (correctOnes) => {
    if(result){
      setResult(false);
    }else{
      setResult(true);
      setCorrectAnswers(correctOnes);
    }
  
  }
  
  return (
    <>
      <div className="app">
        <div className="container">
          
          <div className="app-header">
            <h2>COUNTRY QUIZ</h2>
            <img src={stuImg} className="app-logo" alt="logo" />
          </div>

          <div className="content">
            {result ? 
                <Result handleResult={handleResult} correctAnswers={correctAnswers}/> : 
                countriesData && <Home countriesData={countriesData} handleResult={handleResult}/>
            }
          </div>

        </div>
      </div>
    </>
  )
}

export default App;
