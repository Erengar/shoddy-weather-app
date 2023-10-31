function checkWeather(props, time) {
    let weatherID = props.weather.weather[0].id;
    let iconCode = ''
    if (weatherID >= 200 && weatherID <= 232) {
        iconCode = '11d';
    } else if ((weatherID >= 300 && weatherID <= 321) || (weatherID >= 520 && weatherID <= 531)) {
        iconCode = '09d';
    } else if (weatherID >= 500 && weatherID <= 504) {
        iconCode = '10d';
    } else if ((weatherID === 511) || (weatherID >= 600 && weatherID <= 622)) {
        iconCode = '13d';
    } else if (weatherID >= 701 && weatherID <= 781) {
        iconCode = '50d';
    } else if (weatherID === 800) {
        iconCode = '01d';
    } else if (weatherID === 801) {
        iconCode = '02d';
    } else if (weatherID === 802) {
        iconCode = '03d';
    } else if (weatherID === 803 || weatherID === 804) {
        iconCode = '04d';
    }

    if (time >= props.weather.sys.sunrise && time <= props.weather.sys.sunset) {
        iconCode = iconCode.replace('d', 'n');
    }

    return iconCode;
}


function WeatherWindows(props) {
    const time = new Date().toLocaleTimeString('en-US',props.weather.timezone)
    if(JSON.stringify(props.weather) !== '{}'){

        const iconCode = checkWeather(props, time);

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
            <section className='weather-window'>
                {time}
                <i>{}</i>
                <h1 className ='desc'>{props.weather.weather[0].description}</h1>
                <h2 className ='temperature'>{props.weather.main.temp} °C</h2>
                <p><strong>Pressure:</strong> {props.weather.main.pressure} hPa</p>
                <p><strong>Humidity:</strong> {props.weather.main.humidity} %</p>
                <p><strong>Wind-speed:</strong> {props.weather.wind.speed} meter/sec</p>
            </section>
        )
    }
}

export default WeatherWindows;