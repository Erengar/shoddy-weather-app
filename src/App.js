import WeatherWindows from './components/WeatherWindows';
import PlacesList from './components/PlacesList';
import {  useState } from 'react';

function App() {
	const [listOfCities, setListOfCities] = useState([]);
	const [weather, setWeather] = useState({});
	const [multipleDaysWeather, setMultipleDaysWeather] = useState([]);
	const apiKey = '3571424b04361cc5e20201ea97ba1a23';

	function handleSubmit(event) {
		event.preventDefault();
		const input = event.target.elements.search.value;
		let limit = 5;
		fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=${limit}&appid=${apiKey}`)
		.then(response => response.json())
		.then(data => setListOfCities(data))
		.catch(error => setListOfCities(error));
		event.target.classList.add('search-animation')
		event.target.classList.remove('fade-margin')
	}
	return (
		<main>
		<section>
			<form className='search-window fade-margin' onSubmit={handleSubmit}>
				<label htmlFor='search' id='search-label'>Location: </label>
				<input id='search' />
			</form>
			<PlacesList listOfCities={listOfCities} setListOfCities={setListOfCities} setWeather={setWeather} setMultipleDaysWeather={setMultipleDaysWeather} apiKey={apiKey} />
			<WeatherWindows weather={weather} multipleDaysWeather={multipleDaysWeather} />
		</section>
		</main>
	);
}

export default App;
