import { useState } from "react";
import axios from "axios";

const Weather = () => {
    const [city, setcity] = useState("");
    const [weather, setweather] = useState("");
    const [temp, settemp] = useState("");
    const [humidity, sethumidity] = useState("");
    const [wind, setwind] = useState("");
    const [desc, setdesc] = useState("");
    const [showReport, setShowReport] = useState(false);

    function handlecity(e) {
        setcity(e.target.value)
    }
    function getweather() {

        var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=63add8492ffe0b8845916c0ea51d07e4`)
        weatherdata.then(function (success) {
            console.log(success.data)
            setweather(success.data.weather[0].main);
            settemp(success.data.main.temp);
            setdesc(success.data.weather[0].description);
            sethumidity(success.data.main.humidity);
            setwind(success.data.wind.speed);
            setShowReport(true);

        })
    }


    return (


        <div className=" flex flex-col items-center justify-center">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            >
                <source src="/weather.mp4" type="video/mp4" />
            </video>
            <div className='flex flex-col m-4 gap-4 text-center'><h1 className='text-4xl font-bold'>Weather report</h1>
                <p className='font-semibold text-xl'>I can give a weather report about your city !</p>
            </div>

            <div className='text-center w-full max-w-md'>
                <input onChange={handlecity} type="text" placeholder='Type city name' className="p-2 bg-white bg-opacity-40 focus:outline-none rounded-2xl backdrop-blur-md w-full" /> <br />
                <button onClick={getweather} className="px-3 py-1 rounded-lg m-2 border bg-white bg-opacity-70 hover:bg-opacity-85">Get Report</button>
            </div>


            {showReport && (

                <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-xl p-8 shadow-lg w-80 text-center">



                    {/* Location */}
                    <h1 className="text-2xl font-bold mb-2">{city}</h1>

                    {/* Weather Icon */}
                    <div className="text-6xl mb-4">☀️</div>
                    {/* Weather Condition */}
                    <p className="text-lg font-bold mb-2">Weather : 🌦️{weather}</p>

                    {/* Temperature */}
                    <p className="text-xl font-semibold mb-2">Temparature : 🔥{temp}</p>
                    {/* Description */}
                    <p className="text-xl font-semibold  mb-2">Description : 🌤️{desc}</p>



                    {/* Description */}
                    <div className="flex justify-between text-sm">
                        <div>
                            <p>Humidity☁️</p>
                            <p>{humidity}</p>
                        </div>
                        <div>
                            <p>Wind🌪️</p>
                            <p>{wind}</p>
                        </div>
                    </div>
                </div>)};
        </div>
    )



}

export default Weather;
