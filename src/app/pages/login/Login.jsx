/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Grid } from "@mui/material";
import LoginForm from "./components/LoginForm";
import imgHome from "../../../img/daria-nepriakhina-xY55bL5mZAM-unsplash.jpg";
import styles from './styles.module.css'

const Login = () => {
  return (
    <Grid container>
      <Grid item md={7} xs={12}>
        <img src={imgHome} className={styles.imgHome} />
      </Grid>
      <Grid item md={5} xs={12} justifyContent="center" style={{display:'flex'}}>
        <LoginForm />
      </Grid>
      <a href="/home">Estoy aca</a>
    </Grid>
  );
};

export default Login;
