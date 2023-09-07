import './App.css';
import { useState, useEffect } from 'react';
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
  
  const res = (CountryCode, Quantity) => {
    console.log(CountryCode, Quantity)
    axios.get(`https://randommer.io/api/Phone/Generate?CountryCode=${CountryCode}&Quantity=${Quantity}`, {
        headers: {
          'x-api-key': `2dcf5cc7939946bfb948c51aaa2d377b`,
          'Content-Type' : 'application/json',
          'Accept' : 'application/json',
        }
    }).then((res) => {
      console.log(res.data)
    })}
  
  const minPossiblePhoneNumber = 1;
  const maxPossiblePhoneNumber = 10000;
  const [generatedPhoneNumbersState, setGeneratedPhoneNumbersState] = useState({
    generatedRandomPhoneNumbers: []
  });
  const [num, setNum] = useState(0);

  const [Quantity, setQuantity] = useState(0);

  const handleChange = ((event) => {
    setQuantity(event.target.value);
    console.log(Quantity)
  });

  const randomNumberInRange = ((quan) => {
    const minPossiblePhoneNumber = 1;
    const maxPossiblePhoneNumber = 10000;
    const generatedRandomPhoneNumbers = Array(quan) // array size
    .fill()
    .map(() => Math.floor(minPossiblePhoneNumber + Math.random() * maxPossiblePhoneNumber)); // numbers from 0-50 (exclusive)
    return  generatedRandomPhoneNumbers;
  });

  const handleSubmit = ((event) => {
    setQuantity(event.target.value)
    setGeneratedPhoneNumbersState(randomNumberInRange(parseInt(Quantity)));
  });

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

  const { countries } = countryState;
  const generatedRandomPhoneNumbers = randomNumberInRange(parseInt(Quantity));
  console.log(generatedRandomPhoneNumbers)
  const [selectedCountry, setSelectedCountry] = useState();

  // Find selected country data, search country
  const searchSelectedCountry = countries.find((obj) => {
    if(obj.cca2 === selectedCountry) {
      return true;
    }
    return false;
  });
  console.log(selectedCountry)
  
  return (
    <div className="App bg-light-grey-900">
      <h1 className="text-3xl text-blue font-bold underline mt-5">Random Phone Number Generator</h1>
      <FormControl className="form" variant="outlined">
        <select className='p-3 mt-4 border-2 border-rose-500 rounded-md' value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
          <option value="">--Select Country--</option>
          {countries.map((item) => {
            return (
              <option key={uuidv4()} name="CountryCode" value={item.cca2}>
                {item.name.common}
              </option>
            )
          })}
        </select>
        <input type="number" name="Quantity" value={Quantity} className="border-2 border-rose-500 w-50 mt-3 h-10 rounded-md p-3" onChange= {handleChange} />
        <button aria-label="Delete" color="primary" className='mt-4 p-3 border-2 border-teal-500 text-teal-500 rounded-md' variant="outlined" onClick={res}>
          Generate Phone Numbers
          <GetAppIcon/>
        </button>
      </FormControl> &nbsp;&nbsp;&nbsp;&nbsp;
      <div className="wrapper p-5">
          <img src={searchSelectedCountry && searchSelectedCountry.flags.png} alt="" className="h-20 mx-auto mb-3" />
          <h2 className="font-bold">Number is: {searchSelectedCountry && searchSelectedCountry.idd.root}{searchSelectedCountry && searchSelectedCountry.idd.suffixes}{num}</h2>
          <form>
            <ul>
              {generatedRandomPhoneNumbers.map((phoneNumber) => {
                return (
                  <li key={uuidv4}>{searchSelectedCountry && searchSelectedCountry.idd.root}{searchSelectedCountry && searchSelectedCountry.idd.suffixes}{num}{phoneNumber}</li>
                )
              })}
            </ul>
            {generatedRandomPhoneNumbers.map((phoneNumber) => {
                return (
                  <input key={uuidv4} type='text' value={generatedRandomPhoneNumbers} hidden/>
                )
              })}
            <button aria-label="Delete" color="primary" className='mt-4 p-3 border-2 border-teal-500 text-teal-500 rounded-md' variant="outlined">
              Save Phone Numbers
              <GetAppIcon/>
            </button>
          </form>
        </div>
      <div>
      </div>
    </div>
  );
}

export default App;
