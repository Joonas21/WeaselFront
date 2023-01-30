import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Weathercode from "./Weathercode"
import moment from "moment"

const Turku = ({Turku}) => {

    const [data, setData] = useState()
    const [date, setDate] = useState ("")
    const Weatherfor3Days = []

    const newDate = new Date()
    const startDate = moment(newDate).format("YYYY-MM-DD")
    const endDate = moment(newDate).add(2, "days").format("YYYY-MM-DD")
    console.log(startDate)
    console.log(endDate)


    useEffect(() => {
        if (date === "1"){
            fetch("https://api.open-meteo.com/v1/forecast?latitude=60.45&longitude=22.27&current_weather=true")
            .then(response => response.json())
            .then(json => setData(json))
        }
        if (date ==="3"){
            fetch(`https://api.open-meteo.com/v1/forecast?latitude=60.45&longitude=22.27&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto&start_date=${startDate}&end_date=${endDate}`)
            .then(response => response.json())
            .then(json => setData(json))
        }
    },[date])
    
    console.log(data)

    for (let i = 0; i<3; i++){
        Weatherfor3Days.push({
            day:moment(newDate).add(i, "days").format("DD.MM"),
            tempMax:data?.daily?.temperature_2m_max?.[i],
            tempMin:data?.daily?.temperature_2m_min?.[i],
            weathercode:data?.daily?.weathercode?.[i]
        })
    }
    
    return (
        <div>
            <Link to="/">Home</Link>
            <h1>Helsinki</h1>
            <button onClick={() => setDate("1")}>1 Day</button>
            <button onClick={() => setDate("3")}>3 Day</button>
            {date === "1" && 
                <>
                <h1>Weather today</h1>
                <h2>{data?.current_weather?.temperature}°C</h2>
                <Weathercode weathercode={data?.current_weather?.weathercode}/>
                </>
            }
            {date === "3" &&
                <>
                <h1>Weather for next three days</h1>
                <div className="WeatherContainer">
                {Weatherfor3Days.map((weather) => <div className="Weatherfor3Days">
                    <h2>{weather.day}</h2>
                    <h2>Max temperature {weather.tempMax}°C</h2>
                    <h2>Min temperature {weather.tempMin}°C</h2>
                    <Weathercode weathercode={weather.weathercode}/>
                </div>
                )}
                </div>
                </>
            }
        </div>
    )
}

export default Turku