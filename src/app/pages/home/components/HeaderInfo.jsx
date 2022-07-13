import { Grid } from "@mui/material";
import React from "react";
import CardMembershipOutlinedIcon from "@mui/icons-material/CardMembershipOutlined";

const render = (item) => {
  return (
    <Grid
      item
      md={4}
      style={{ justifyContent: "space-around", display: "flex" }}
    >
      <div style={{ alignSelf: "center" }}>{item?.icon}</div>
      <div>
        <h3 style={{ marginBottom: 0, color: "#C4523A", textAlign: "center" }}>
          {item?.title}
        </h3>
        <p style={{ marginTop: 0, color: "#9C9998", textAlign: "center" }}>
          {item?.message}
        </p>
      </div>
    </Grid>
  );
};

const HeaderInfo = () => {
  return (
    <Grid
      container
      style={{
        border: "1px solid #E5E5E5",
        backgroundColor: "#FFFFFF",
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: "10px",
        padding: "0px 76px",
      }}
    >
      {[
        {
          icon: (
            <CardMembershipOutlinedIcon
              style={{ marginTop: 0, color: "#9C9998" }}
            />
          ),
          title: "Envio a todo el pais",
          message: " Recibí tu libro donde quieras",
        },
        {
          icon: (
            <CardMembershipOutlinedIcon
              style={{ marginTop: 0, color: "#9C9998" }}
            />
          ),
          title: "Envio a todo el pais",
          message: " Recibí tu libro donde quieras",
        },
        {
          icon: (
            <CardMembershipOutlinedIcon
              style={{ marginTop: 0, color: "#9C9998" }}
            />
          ),
          title: "Envio a todo el pais",
          message: " Recibí tu libro donde quieras",
        },
      ].map((item, index) => {
        return <React.Fragment key={index}>{render(item)}</React.Fragment>;
      })}
    </Grid>
  );
};

export default HeaderInfo;
