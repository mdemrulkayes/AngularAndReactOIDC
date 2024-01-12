import axios from "axios";
import { useAuth } from "oidc-react";
import { useState, useEffect } from "react";

function Weather({loadWeather}) {

    const [weatherData, setWeatherData] = useState([])
    const auth = useAuth()

    useEffect(() => {
      return () => {
        if (loadWeather) {
            axios.get("https://localhost:44389/weatherforecast",
        {
            headers: {
                Authorization: `Bearer ${auth.userData.access_token}`
            }
        })
        .then(data => {
            console.log(data.data, 'Weather data')
            setWeatherData(data.data)
        })
        .catch(exception => {
            console.log(exception, 'Weather exception')
        })
        }else{
            setWeatherData([])
        }
      };
    }, [loadWeather])

    return (
        <>
            <h3>This is weather component</h3>
            <table>
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Summary</th>
                    <th>Temperature (C)</th>
                    <th>Temperature (C)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        weatherData.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{data.date}</td>
                                    <td>{data.summary}</td>
                                    <td>{data.temperatureC}</td>
                                    <td>{data.temperatureF}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Weather;