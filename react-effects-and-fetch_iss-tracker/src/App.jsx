import { useEffect, useState } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./App.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(getISSCoords, 5000);
    return () => {
      return clearInterval(intervalId);
    };
  }, []);

  async function getISSCoords() {
    const response = await fetch(URL);
    const data = await response.json();
    setCoords({ longitude: data.longitude, latitude: data.latitude });
  }

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}
