import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Info_box from "./Info_box";

import SendIcon from "@mui/icons-material/Send";

import "./App.css";

export default function Searchbox({ updateinfo }) {
  const [city, setCity] = useState("");
  const [err, seterr] = useState(false);
  const apikey = "ce1b3a1d1bc4e541018d5407364ab8c1";
  const URL = `https://api.openweathermap.org/data/2.5/weather`;

  let jsonResponse;

  const getWeatherData = async (city) => {
    try {
      const response = await fetch(
        `${URL}?q=${city}&appid=${apikey}&units=metric`
      );
      const jsonResponse = await response.json();

      const jsondisplaydata = {
        City: city,
        Temp: jsonResponse.main.temp,
        Feels_Like: jsonResponse.main.feels_like,
        Description: jsonResponse.weather[0].description,
        Type: jsonResponse.weather[0].main,
        Humidity: jsonResponse.main.humidity,
        wind: jsonResponse.wind.speed,
        Max_temp: jsonResponse.main.temp_max,
        Min_temp: jsonResponse.main.temp_min,
      };
      //  console.log(jsonResponse)
      updateinfo(jsondisplaydata);
      seterr(false);
    } catch (error) {
      console.error("Fetch failed", error);
      seterr(true);
    }
  };

  const handleinput = (event) => {
    setCity(event.target.value);
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    console.log(city);
    await getWeatherData(city);
    setCity("");
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          size="small"
          required
          value={city}
          onChange={handleinput}
          sx={{ marginRight: "10px" }}
        />

        <Button
          variant="contained"
          endIcon={<SendIcon />}
          size="medium"
          type="submit"
          sx={{ marginLeft: "10px" }}
        >
          Search
        </Button>
      </form>
      <h2>Weather Information :--</h2>
      {err && (
        <p style={{ color: "red", marginTop: "10px" }}>
          ❌ No city found. Please try again.
        </p>
      )}
    </div>
  );
}
