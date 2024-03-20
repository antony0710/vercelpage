import React, { useEffect, useState } from 'react';

const Weather = () => {
    const [temperature, setTemperature] = useState(null);

    useEffect(() => {
        fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en')
            .then(response => response.json())
            .then(data => {
                setTemperature(data.temperature.data[0].value);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    if (temperature === null) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Hong Kong</h2>
            <p>Temperature: {temperature}°C</p>
        </div>
    );
};

export default Weather;