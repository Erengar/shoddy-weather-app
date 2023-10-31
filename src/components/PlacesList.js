function PlacesList(props) {
    const listOfCities = props.listOfCities;

    async function getWeather(event) {
        event.preventDefault();
        let key = null;
        key = event.target.getAttribute('index');
        if (key === null){
            key = event.target.parentElement.getAttribute('index');
        }
        const lat = listOfCities[key].lat;
        const lon = listOfCities[key].lon;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${props.apiKey}&units=metric`);
        const data = await response.json();
        props.setWeather(data);
        props.setListOfCities([]);
    }

    return (
        <ul className='places-list'>
            {listOfCities.map((city, index) => 
            <li key={index} index={index} className='place' onClick={getWeather} >
                <h2 className='place-name' >{city.name}</h2>
                <p className='place-lat'>{city.country}</p>
                <p className='place-lon'>{city.state}</p>
            </li>
            )}
        </ul>
    )
}

export default PlacesList;