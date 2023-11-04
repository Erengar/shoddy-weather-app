import MultipleDaysCell from './MultipleDaysCell';


function MultipleDaysWeather(props) {

    return (
        <section className='multiple-days-weather'>
            {props.multipleDaysWeather.list.map((day, index) => 
            <MultipleDaysCell day={day} index={index} />
            )}
        </section>
    )
}

export default MultipleDaysWeather;