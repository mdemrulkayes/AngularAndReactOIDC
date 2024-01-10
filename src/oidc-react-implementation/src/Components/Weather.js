import { useState, useEffect } from "react";

function Weather() {

    const [weatherData, setWeatherData] = useState([])

    useEffect(() => {
      return () => {
        fetch("")
        .then((res) => {
           return res.json()
        })
        .then(data => {
            console.log('Weather Data', data);
            setWeatherData(data);
        })
      };
    }, [])

    return (
        <>
            <h5>This is weather component</h5>
            <table>
                <thead>
                    <th>Date</th>
                    <th>Summary</th>
                    <th>Temperature (C)</th>
                    <th>Temperature (C)</th>
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