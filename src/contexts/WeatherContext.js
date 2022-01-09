import axios from "axios";
import { createContext, useEffect, useState } from "react";
import cities from "./cities";


const WeatherContext = createContext()



export const WeatherProvider = ({ children }) => {
    const [city, setCity] = useState(cities[0])
    const [weatherResponse, setWeatherResponse] = useState({})
    const fetchWeather = async (city) => {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&exclude=hourly&appid=${process.env.REACT_APP_API_KEY}`)
        return data
    }



    useEffect(() => {
        const getResponse = async () => {
            const response = await fetchWeather(city)
            setWeatherResponse(response)
        }
        getResponse()
    }, [city])

    const values = {
        city,
        setCity,
        weatherResponse
    }

    return <WeatherContext.Provider value={values} children={children} />
}

export default WeatherContext