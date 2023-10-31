function PlacesList(props) {
    const listOfCities = props.listOfCities;

    async function getWeather(event) {
        event.preventDefault();
        const lat = event.target.getAttribute('lat');
        const lon = event.target.getAttribute('lon');
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${props.apiKey}&units=metric`);
        const data = await response.json();
        props.setWeather(data);
        props.setListOfCities([]);
    }

    return (
        <ul className='places-list'>
            {listOfCities.map((city, index) => 
            <li key={index} className='place' lat={city.lat} lon={city.lon} onClick={getWeather} >
                <h2 className='place-name' >{city.name}</h2>
                <p className='place-lat'>{city.country}</p>
                <p className='place-lon'>{city.state}</p>
            </li>
            )}
        </ul>
    )
}

export default PlacesList;