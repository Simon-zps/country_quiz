import { useEffect, useState } from 'react'
import './App.scss'
import './index.css'
import Home from './components/Home';
import Result from './components/Result';

function App() {
  const [result, setResult] = useState(false);
  const [countriesData, setCountriesData] = useState(null);


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
  
  return (
    <>
      <div className="app">
        <div className="container">
          
          <div className="app-header">
            <h2>COUNTRY QUIZ</h2>
            <img src="../assets/images/undraw_adventure_4hum 1.svg" className="app-logo" alt="logo" />
          </div>

          <div className="content">
            {result ? 
                <Result setResult={setResult} /> : 
                countriesData && <Home countriesData={countriesData} />
            }
          </div>

        </div>
      </div>
    </>
  )
}

export default App;
