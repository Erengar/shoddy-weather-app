import moment from 'moment';
import MultipleDaysWeather from './MultipleDaysWeather';
import capitalizeFirstLetter  from './helperFunctions/capitalizeFirstLetter';
import checkWeather from './helperFunctions/checkWeather';

function WeatherWindows(props) {

    if(JSON.stringify(props.weather) !== '{}'){
        const time = moment().utc().add(props.weather.timezone, 's').format('HH:mm:ss');

        const iconCode = checkWeather(props.weather, time);

        fetch(`https://openweathermap.org/img/wn/${iconCode}.png`)
        .then(response => response.blob())
        .then(images => {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(images);
            const iconElement = document.querySelector('i');
            if (iconElement.firstChild) {
                iconElement.replaceChild(img, iconElement.firstChild);
            } else {
                iconElement.appendChild(img);
            }
        })
        return (
            <>
                <section className='weather-window weather-animation'>
                    {time}
                    <i>{}</i>
                    <h1 className ='desc'>{capitalizeFirstLetter(props.weather.weather[0].description)}</h1>
                    <h2 className ='temperature'>{props.weather.main.temp} °C</h2>
                    <p><strong>Pressure:</strong> {props.weather.main.pressure} hPa</p>
                    <p><strong>Humidity:</strong> {props.weather.main.humidity} %</p>
                    <p><strong>Wind-speed:</strong> {props.weather.wind.speed} meter/sec</p>
                </section>
                <MultipleDaysWeather multipleDaysWeather={props.multipleDaysWeather} weather={props.weather} />
            </>
        )
    }
}

export default WeatherWindows;