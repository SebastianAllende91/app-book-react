import React, { useMemo } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { imageLinks } from "./utils";
// import img from "../../../../img"

export default function ImgMediaCard({ titulo, tipo, autor: { nombre } }) {
  const handleSrc = useMemo(() => {
    const url = imageLinks.includes(titulo.replaceAll(" ", "").toLowerCase())
      ? titulo.replaceAll(" ", "").toLowerCase()
      : "imgDefault";

    return require(`../../../../img/${url}.jpg`);
  }, [titulo]);
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "12px",
        cursor: "pointer",
        boxShadow: "0 0 4px rgba(0,0,0,0.4)",
        "&:hover": {
          transform: "scale(1.03)",
          transition: "all 0.3s ease-in-out 0s",
        },
      }}
      style={{ textAlign: "center" }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={handleSrc}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {titulo}
        </Typography>
        <Typography
          variant="h6"
          color="text.primary"
          m={1}
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <AccountCircleIcon /> {nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {tipo}
        </Typography>
      </CardContent>
    </Card>
  );
}
