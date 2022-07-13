import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

const Footer = () => {
  return (
    <Grid
      container
      pt={3}
      pb={3}
      mt={5}
      backgroundColor="black"
      color="white"
      display="flex"
      justifyContent="center"
    >
      <Grid item style={{ width: "30%", textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Proyecto
        </Typography>
        <Typography variant="body1">
          Software que simula una biblioteca online, con funcionalidades de
          altas,bajas,modificaciones para usuarios, libros,autores.
        </Typography>
      </Grid>
      <Grid item style={{ width: "30%", textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Tecnologias utilizadas
        </Typography>
        <ul style={{ listStyle: "none" }}>
          <li>Redux</li>
          <li>Material</li>
          <li>Axios</li>
          <li>Java</li>
          <li>Spring</li>
        </ul>
      </Grid>
      <Grid pl={4} item style={{ width: "30%" }}>
        <Typography variant="h5" gutterBottom textAlign="center">
          Contacto
        </Typography>
        <List>
          <ListItem>
            <PhoneAndroidIcon color="primary" /> 15-6176-5432
          </ListItem>
          <ListItem>
            <ListItemButton
              component="a"
              style={{ color: "white", textDecoration: "none" }}
              href="https://www.linkedin.com/in/sebastian-allende/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon color={"primary"} />{" "}
              <ListItemText>Linkedin</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              style={{ color: "white", textDecoration: "none" }}
              component="a"
              href="https://github.com/sebastianallende91"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon color="primary" /> <ListItemText>Github</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default Footer;
