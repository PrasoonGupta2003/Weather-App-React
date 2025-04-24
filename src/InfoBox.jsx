import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}){
    //const INIT_URL="https://images.unsplash.com/photo-1672226405717-697c84f48f9e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HOT_URL="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1664887981255-55ef7a62e19d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                sx={{ height: 140 }}
                image={info.humidity>85 ? RAIN_URL : info.temp>20?HOT_URL:COLD_URL}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city}{
                        info.humidity>85 ? <ThunderstormIcon/> : info.temp>20?<SunnyIcon/>:<AcUnitIcon/>
                    }
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <div>Temperature = {info.temp}&deg;C</div>
                    <div>Humidity = {info.humidity}</div>
                    <div>Min Temp = {info.tempMin}&deg;C</div>
                    <div>Max Temp = {info.tempMax}&deg;C</div>
                    <div>It feels like = {info.feelslike}&deg;C</div>
                    <div>The weather can be described as <i>{info.weather}</i></div>
                </Typography>
                </CardContent>
            </Card>
            </div>  
        </div>
    )
}