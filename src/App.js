import "./App.css";
import Countries from "./components/Countries/Countries";
import Country from "./components/Country/Country";

function App() {
  return (
    <div className="App">
      <Countries></Countries>
      <Country></Country>
    </div>
  );
}

/* function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1>Traveling around the world!!</h1>
      <h1>Countries Available {countries.length}</h1>
      {countries.map((country) => (
        <Country name={country.name} capital={country.capital}></Country>
      ))}
    </div>
  );
}

function Country(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h4>Capital: {props.capital}</h4>
    </div>
  );
} */

export default App;
