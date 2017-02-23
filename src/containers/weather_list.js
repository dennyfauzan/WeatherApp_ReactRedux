import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '.././components/chart';
import GoogleMap from '.././components/google_map';


class WeatherList extends Component {

		renderWeather (cityData){
			console.log(cityData);
			const name = cityData.city.name;
			const temps = cityData.list.map(weather => weather.main.temp);

			const pressure = cityData.list.map(weather => weather.main.pressure);
			const humidity = cityData.list.map(weather => weather.main.humidity);

			//this Es6 syntax means: find the coord path on object and assign const lon and lat to the coord example: cityData.city.coord.lon / cityData.city.coord.lat
			const { lon, lat } = cityData.city.coord;

			//console.log(temps);
			return (
				<tr key={cityData.city.id}>
					<td><GoogleMap lon={lon} lat={lat} /></td>
					<td><Chart data={temps} color="blue" units="C"/></td>
					<td><Chart data={pressure} color="red" units="hPa"/></td>
					<td><Chart data={humidity} color="green" units="%"/></td>
				</tr>
			)
		}

    render () {
        return (
            <table className="table table-hover">
							<thead>
									<tr>
										<th>City</th>
										<th>Temperature (C)</th>
										<th>Pressure (hPa)</th>
										<th>Humidity (%)</th>
									</tr>
							</thead>
							<tbody>
								{this.props.weather.map(this.renderWeather)}
							</tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
	return {weather: weather};
}

export default connect (mapStateToProps)(WeatherList);
