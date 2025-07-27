import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Info_box({ info }) {
  const weatherImages = {
    Smoke:
      "https://images.unsplash.com/photo-1553634854-5582930498bd?w=600&auto=format&fit=crop&q=60",
    Clear:
      "https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=600&auto=format&fit=crop&q=60",
    Clouds:
      "https://images.unsplash.com/photo-1600554854460-e451fe2692ce?w=600&auto=format&fit=crop&q=60",
    Rain: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D",
    Thunderstorm:
      "https://images.unsplash.com/photo-1500674425229-f692875b0ab7?w=600&auto=format&fit=crop&q=60",
    Snow: "https://images.unsplash.com/photo-1608889175123-560ed89f6447?w=600&auto=format&fit=crop&q=60",
    Mist: "https://images.unsplash.com/photo-1495433324511-bf8e92934d90?w=600&auto=format&fit=crop&q=60",
    Haze: "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2e86?w=600&auto=format&fit=crop&q=60",
    Fog: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&auto=format&fit=crop&q=60",
    Drizzle:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=60",
    Tornado:
      "https://images.unsplash.com/photo-1508599589929-9dd8d6a2c7df?w=600&auto=format&fit=crop&q=60",
  };

  const imageURL =
    weatherImages[info.Type] ||
    "https://images.unsplash.com/photo-1527766833261-b09c3163a791?w=600&auto=format&fit=crop&q=60";

  return (
    <div>
      <Card sx={{ maxWidth: 345, m: "auto", boxShadow: 4, borderRadius: 2 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={imageURL}
          title="Weather Image"
        />

        <CardContent sx={{ padding: "16px" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            <h2> {info.City} </h2>
          </Typography>

          <Typography variant="body2">
            🌡️ <strong>Temp:</strong> {info.Temp}°C
            <br />
            🤗 <strong>Feels:</strong> {info.Feels_Like}°C
            <br />
            💧 <strong>Humidity:</strong> {info.Humidity}%<br />
            📝 <strong>Desc:</strong> {info.Description}
            <br />
            🌤️ <strong>Type:</strong> {info.Type}
            <br />
            🌬️ <strong>Wind:</strong> {info.wind} m/s
            <br />
            🔺 <strong>Max:</strong> {info.Max_temp}°C
            <br />
            🔻 <strong>Min:</strong> {info.Min_temp}°C
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
