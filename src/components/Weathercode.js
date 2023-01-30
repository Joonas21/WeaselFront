import {useState} from "react"

function Weathercode({weathercode}) {

    let weather = ""
    console.log(weathercode)
    //Huge if statement to check what the weathercode means

    if (weathercode === null) {
        weather = "Couldn't fetch weather"
        console.log(weather)
    }

    if (weathercode === 0) {
        weather = "Clear sky"
        console.log(weather)
    }
    if (weathercode === 1) {
        weather = "Mainly clear"
        console.log(weather)
    }
    if (weathercode === 2) {
        weather = "Partly cloudy"
        console.log(weather)
    }
    if (weathercode === 3) {
        weather = "Overcast"
        console.log(weather)
    }
    if (weathercode === 45) {
        weather = "Fog"
        console.log(weather)
    }
    if (weathercode === 48) {
        weather = "Depositing rime fog"
        console.log(weather)
    }
    if (weathercode === 51) {
        weather = "Drizzle, light"
        console.log(weather)
    }
    if (weathercode === 53) {
        weather = "Drizzle, moderate"
        console.log(weather)
    }
    if (weathercode === 55) {
        weather = "Drizzle, dense intensity"
        console.log(weather)
    }
    if (weathercode === 56) {
        weather = "Freezing drizzle, light"
        console.log(weather)
    }
    if (weathercode === 57) {
        weather = "Freezing drizzle, dense intensity"
        console.log(weather)
    }
    if (weathercode === 61) {
        weather = "Rain, slight"
        console.log(weather)
    }
    if (weathercode === 63) {
        weather = "Rain, moderate"
        console.log(weather)
    }
    if (weathercode === 65) {
        weather = "Rain, heavy intensity"
        console.log(weather)
    }
    if (weathercode === 66) {
        weather = "Freezing rain, light"
        console.log(weather)
    }
    if (weathercode === 67) {
        weather = "Freezing rain, heavy intensity"
        console.log(weather)
    }
    if (weathercode === 71) {
        weather = "Snow fall, slight"
        console.log(weather)
    }
    if (weathercode === 73) {
        weather = "Snow fall, moderate"
        console.log(weather)
    }
    if (weathercode === 75) {
        weather = "Snow fall, heavy intensity"
        console.log(weather)
    }
    if (weathercode === 77) {
        weather = "Snow grains"
        console.log(weather)
    }
    if (weathercode === 80) {
        weather = "Rain showers, slight"
        console.log(weather)
    }
    if (weathercode === 81) {
        weather = "Rain showers, moderate"
        console.log(weather)
    }
    if (weathercode === 82) {
        weather = "Rain showers, violent"
        console.log(weather)
    }
    if (weathercode === 85) {
        weather = "Snow showers, slight"
        console.log(weather)
    }
    if (weathercode === 86) {
        weather = "Snow showers, heavy"
        console.log(weather)
    }
    if (weathercode === 95) {
        weather = "Thunderstorm"
        console.log(weather)
    }
    if (weathercode === 96) {
        weather = "Thunderstorm with slight hail"
        console.log(weather)
    }
    if (weathercode === 99) {
        weather = "Thunderstorm with heavy hail"
        console.log(weather)
    }

    return (
       <div>
           <h2>{weather}</h2> 
       </div> 
    )
}

export default Weathercode