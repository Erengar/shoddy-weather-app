/**
 * This function sets the background based on the time of day and weather
 * @param {*} time 
 * @param {*} iconCode 
 */
function setBackground(time, iconCode) {
    document.body.removeAttribute('class');
    if (time > '18:00:00' | time < '06:00:00') {
        if (iconCode === '01n' | iconCode === '02n') {
            document.body.className = "night";
        } else if (iconCode=== '09n' | iconCode=== '10n' | iconCode=== '11n') {
            document.body.className = "night-rain";
        } else if (iconCode=== '03n' | iconCode=== '04n') {
            document.body.className = "night-clouds";
        } else if (iconCode === '13n') {
            document.body.className = "night-snow";
        } else if (iconCode=== '50n') {
            document.body.className = "night-mist";
        }
    } else if (iconCode=== '09d' | iconCode=== '10d' | iconCode=== '11d') {
        document.body.className = "rain";
    } else if (iconCode=== '13d') {
        document.body.className = "snow";
    } else if (iconCode=== '50d') {
        document.body.className = "mist";
    } else if (iconCode=== '03d' | iconCode=== '04d') {
        document.body.className = "clouds";
    }
}

export default setBackground;