import React, { useState } from 'react'
import Searchbox from './Searchbox'
import './App.css'
import Info_box from './Info_box'

export default function Weather_app() {
    const[weather, setweather]=useState({
        City: "",
        Description: "",
        Feels_Like: "",
        Humidity: "",
        Max_temp: "",
        Min_temp: "",
        Temp: "",
        Type: "",
        wind: "",
      })
      let updateinfo=(newinfo)=>{
        setweather(newinfo);
      }
  return (
    <div>
        <Searchbox updateinfo={updateinfo}/>
        <Info_box info={weather}/>

    </div>
  )
}
