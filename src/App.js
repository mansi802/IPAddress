import React, { useEffect, useState } from "react";
import "./App.css";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import Main from "./components/Main";
import Map from "./components/Map";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ IP, ipData }, dispatch] = useStateValue();

  useEffect(() => {
    const url = `https://geo.ipify.org/api/v1?apiKey=at_11g7pbIRmpJHUA8XaCznxDZHVVUSr&ipAddress=${IP}`;
    // console.log(url);

    axios
      .get(url)
      .then((data) => {
        dispatch({ type: "SET_IPDATA", payload: data.data });
        localStorage.setItem("data", JSON.stringify(data.data));
      })
      .catch((err) => console.log(err));
  }, [IP]);

  // console.log(ipData);

  return (
    <div className="app">
      <Main data={ipData} />
      <Map data={ipData.location} />
    </div>
  );
}

export default App;
