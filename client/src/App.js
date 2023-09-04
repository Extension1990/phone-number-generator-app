import './App.css';
import { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import GetAppIcon from '@material-ui/icons/GetApp';
import axios from "axios";
import {v4 as uuidv4} from "uuid";

const App = () => {
  const [countryState, setCountryState] = useState({
    loading: false,
    countries: [],
    errorMessage: ""
  });
  
      const minPossiblePhoneNumber = 1;
      const maxPossiblePhoneNumber = 10000;
  const [generatedPhoneNumbersState, setGeneratedPhoneNumbersState] = useState({
    generatedRandomPhoneNumbers: []
  });
  const [num, setNum] = useState(0);

  const randomNumberInRange = () => {
      const minPossiblePhoneNumber = 1;
      const maxPossiblePhoneNumber = 10000;
      const generatedRandomPhoneNumbers = Array(10) // array size is 10
      .fill()
      .map(() => Math.floor(minPossiblePhoneNumber + Math.random() * maxPossiblePhoneNumber)); // numbers from 0-50 (exclusive)

      console.log(generatedRandomPhoneNumbers);
      // for(let i=0; i < number; i++  ) {
      //   GeneratedRandomPhoneNumbers.push(`0${Math.floor(minPossiblePhoneNumber + Math.random() * maxPossiblePhoneNumber)}`);
        
      // console.log(GeneratedRandomPhoneNumbers)
      // }
      return  generatedRandomPhoneNumbers;
    };
  
    const handleClick = () => {
        setGeneratedPhoneNumbersState(randomNumberInRange());
    };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setCountryState({
          ...countryState,
          loading: true
        });

        const dataUrl = "https://restcountries.com/v3.1/all";
        const response = await axios.get(dataUrl);

        setCountryState({
          ...countryState,
          countries: response.data,
          loading: false
        });
      } catch(error) {
        setCountryState({
          ...countryState,
          loading: false,
          errorMessage: "Sorry somthing went wrong"
        });
      }
    };

    fetchData();
  }, []);

  const { loading, errorMessage, countries } = countryState;
  const generatedPhoneNumbers = generatedPhoneNumbersState;
  const [selectedCountry, setSelectedCountry] = useState();
  console.log("Selected Country: ", selectedCountry);
  const generatedRandomPhoneNumbers = Array(10) // array size is 10
      .fill()
      .map(() => Math.floor(minPossiblePhoneNumber + Math.random() * maxPossiblePhoneNumber)); // numbers from 0-50 (exclusive)

  // Find selected country data, search country
  const searchSelectedCountry = countries.find((obj) => {
    if(obj.name.common === selectedCountry) {
      return true;
    }
    return false;
  });
  
  return (
    <div className="App">
      <h1 className="text-3xl text-blue font-bold underline mt-5">Random Phone Number Generator</h1>
      <FormControl className="form" variant="outlined">
        <select className='p-3 mt-4 border-2 border-rose-500 rounded-md' value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
          <option value="">--Select Country--</option>
          {countries.map((item) => {
            return (
              <option key={uuidv4()} value={item.name.common}>
                {item.name.common}
              </option>
            )
          })}
        </select>
      </FormControl> &nbsp;&nbsp;&nbsp;&nbsp;
      <button aria-label="Delete" color="primary" className='mt-4 p-3 border-2 border-rose-500 text-rose-500 rounded-md' variant="outlined" onClick={handleClick}>
        Generate Phone Numbers
        <GetAppIcon/>
      </button>
      <div className="wrapper p-5">
          <img src={searchSelectedCountry && searchSelectedCountry.flags.png} alt="" className="h-20 mx-auto mb-3" />
          <h2 className="font-bold">Number is: {searchSelectedCountry && searchSelectedCountry.idd.root}{searchSelectedCountry && searchSelectedCountry.idd.suffixes}{num}</h2>
          <ul>
            {generatedRandomPhoneNumbers.map((phoneNumber) => {
              return (
                <li>{searchSelectedCountry && searchSelectedCountry.idd.root}{searchSelectedCountry && searchSelectedCountry.idd.suffixes}{num}{phoneNumber}</li>
              )
            })}
          </ul>
          <button aria-label="Delete" color="primary" className='mt-4 p-3 border-2 border-teal-500 text-teal-500 rounded-md' variant="outlined" onClick={handleClick}>
            Save Phone Numbers
            <GetAppIcon/>
          </button>
        </div>
      <div>
      </div>
    </div>
  );
}

export default App;
