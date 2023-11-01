import capitalizeFirstLetter from "./helperFunctions/capitalizeFirstLetter";
import checkWeather from "./helperFunctions/checkWeather";
import thermometerIcon from './icons/thermometer.png';
import windIcon from './icons/wind.png';
import humidityIcon from './icons/humidity.png';
import pressureIcon from './icons/pressure.png';

function MultipleDaysCell(props) {

    let iconCode = checkWeather(props.day,props.day.dt_txt.split(' ')[1]);

    async function getIcon(iconCode) {
        const response = await fetch(`https://openweathermap.org/img/wn/${iconCode}.png`);
        const blob = await response.blob();
        const img = document.createElement('img');
        img.src = URL.createObjectURL(blob);
        const iconElement = document.querySelector(`li[data-index="${props.index}"] i`);
        if (iconElement.firstChild) {
            iconElement.replaceChild(img, iconElement.firstChild);
        } else {
            iconElement.appendChild(img);
        }
    }

    getIcon(iconCode);

    return (
        <li key={props.index} data-index={props.index} className="multiple-days-cell">
            <p>{props.day.dt_txt.split(' ')[1]}</p>
            <p><i></i></p>
            <p>{capitalizeFirstLetter(props.day.weather[0].description)}</p>
            <p><img className='icon-class' src={thermometerIcon} alt='temp'/>{props.day.main.temp} °C</p>
            <p><img className='icon-class' src={pressureIcon} alt='pressure'/>{props.day.main.pressure} hPa</p>
            <p><img className='icon-class' src={humidityIcon} alt='humidity'/>{props.day.main.humidity} %</p>
            <p><img className='icon-class' src={windIcon} alt='wind'/>{props.day.wind.speed} meter/sec</p>
        </li>
    )
}

export default MultipleDaysCell;