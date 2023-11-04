function filterUniqueCities(cities){
	let lat = new Set();
	let lon = new Set();
    let name = new Set();
    let state = new Set();
	return cities.filter(city => {
		if ((!lat.has(city.lat) && !lon.has(city.lon)) && (!name.has(city.name) | !state.has(city.state))) {
			lat.add(city.lat);
			lon.add(city.lon);
            name.add(city.name);
            state.add(city.state);
			console.log(city, lat, lon)
			return true;
		}
		return false;
	});
};

export default filterUniqueCities;