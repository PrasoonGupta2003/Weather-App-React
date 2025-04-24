import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Mumbai",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:82,
        weather:"Moderate Heat and Humid",
    })

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h1 style={{fontSize:"40px",textDecoration:"double underline" ,color:"#2c3e50"}}>Weather Application</h1>

            <SearchBox updateInfo={updateInfo}/>
            <hr />
            <InfoBox info={weatherInfo}/>
        </div>
    )
}