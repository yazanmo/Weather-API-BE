import { useState, useEffect } from "react";
import Clear from "./image/clear.jpg";
import Cloudy from "./image/cloudy.jpg";
import Overcast from "./image/overcast.jpg";
import Rainy from "./image/rainy.jpg";
import Snow from "./image/snow.jpg";
import SearchIcon from "@mui/icons-material/Search";
import Ad from "./ad.png"
import "./Weather.css";

function App() {
  const [place, setPlace] = useState("london");
  const [placeInfo, setPlaceInfo] = useState({});

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = () => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=436fc116c9af45f7b40123021222702&q=${place}&days=1&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) =>
        setPlaceInfo({
          name: data.location.name,
          country: data.location.country,
          location: data.location.localtime,
          celcuis: {
            current: data.current.temp_c,
          },
          condition: data.current.condition.text,
        })
      );

    setPlace("");
  };

  return (
    <div
      className="app"
      style={
        placeInfo.condition?.toLowerCase() === "clear" ||
        placeInfo.condition?.toLowerCase() === "sunny"
          ? { backgroundImage: `url(${Clear})` }
          : placeInfo.condition?.includes("cloudy")
          ? { backgroundImage: `url(${Cloudy})` }
          : placeInfo.condition?.toLowerCase().includes("rainy")
          ? { backgroundImage: `url(${Rainy})` }
          : placeInfo.condition?.toLowerCase().includes("snow")
          ? { backgroundImage: `url(${Snow})` }
          : { backgroundImage: `url(${Overcast})` }
      }
    >
      <div className="inpt">
        <input
          type="text"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
        <SearchIcon
          onClick={handleFetch}
          fontSize="large"
          className="search-button"
        />
      </div>
      <div className="box">
        <h2>
          city : {placeInfo.name}, {placeInfo.country}
        </h2>

        <h1>Tempreture now : {placeInfo.celcuis?.current}°C </h1>
        <div className="condition-high-low">
          <h1> Condition : {placeInfo.condition}</h1>
          <p> Current time : {placeInfo.location}</p>
        </div>
      </div>
      <img className="ad" src={Ad} />
    </div>
  );
}

export default App;
