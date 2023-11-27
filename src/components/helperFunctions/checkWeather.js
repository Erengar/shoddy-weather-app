/**
 * This function checks the weather ID and time of day to determine which icon to display
 * @param {*} props 
 * @param {*} time 
 * @returns string of icon code
 */
function checkWeather(props, time) {
    let weatherID = props.weather[0].id;
    /*let sunrise = new Date(props.weather.sys.sunrise * 1000).toLocaleTimeString('default', {hour: '2-digit', minute: '2-digit'})
    let sunset = new Date(props.weather.sys.sunset * 1000).toLocaleTimeString('default', {hour: '2-digit', minute: '2-digit'})*/
    let iconCode = ''
    /*sunrise = moment(sunrise, 'HH:mm:ss').format('HH:mm:ss');
    sunset = moment(sunset, 'HH:mm:ss').add(12, 'h').format('HH:mm:ss');*/
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
    if (time < "08:00:00" || time > "18:00:00") {
        iconCode = iconCode.replace('d', 'n');
    }
    return iconCode;
}

export default checkWeather;