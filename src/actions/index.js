import axios from 'axios';

const API_KEY = '00c8e78fabfa940e66746823cd5680a8' ;
export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
    const url =`${ROOT_URL}&q=${city},1643084&units=metric`;
    const request = axios.get(url);

    return{
        type: FETCH_WEATHER ,
        payload: request
    };
}

// on Url fetchWeather 1643084 is ID from app weather for country