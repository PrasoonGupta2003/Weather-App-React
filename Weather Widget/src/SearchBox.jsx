import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from "react";
export default function SearchBox({updateInfo}){
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY= "915d711db1e20c5635deed8287a18115";

    let [city,setCity]=useState("");
    let [error,setError] = useState(false);

    let getWeatherInfo=async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse=await response.json();
            let result={
                city:city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            }
            return result;
        }catch(err){
           throw err;
        }
        
    }

    let handleChange=(evt) => {
        setCity(evt.target.value);
    }
    let handleSubmit=async (evt)=>{
        try{
            evt.preventDefault();
            setCity(""); 
            let newInfo=await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
            setError(true);
        }    
    }
    return (
        <div className="SearchBox">
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} /> 
        <br /><br />
        <Button variant="contained" type="submit">SEARCH</Button>
        {error && <p style={{color:"Red"}}>No such place data could be fetched!</p>}
        </form>
        </div>
    )
}