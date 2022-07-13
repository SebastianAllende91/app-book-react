import React, { useState } from "react";
import { Grid, Container, Button } from "@mui/material";
import { isMobileOnly } from "react-device-detect";
import { useHistory } from "react-router-dom";
import Slider from "../../components/slider/Slider";
import image1 from "../../../img/aguines_Banner.jpg";
import image2 from "../../../img/banner_eva.jpg";
import image3 from "../../../img/cosby_Banner.png";
import image4 from "../../../img/fitnes_Banner.jpg";
import image5 from "../../../img/fontana_Banner.jpg";
import image6 from "../../../img/lacasa_Banner.jpg";
import image1_mobile from "../../../img/mobile_Aguinis.jpg";
import image2_mobile from "../../../img/mobile_DICKER.jpg";
import image3_mobile from "../../../img/mobile_fitnes.jpg";
import image4_mobile from "../../../img/Mobile_King.jpg";
import image5_mobile from "../../../img/mobile_maldito.png";
import HeaderInfo from "./components/HeaderInfo";
import BodyInfo from "./components/BodyInfo";
import BasicModal from "../../components/modal/Modal";
import { useCallback } from "react";
import Book from "../book/Book";
import BasicSnackbar from "../../components/snackbar/Snackbar";
import Footer from "./components/Footer";
// import Rental from "../rental/Rental";
// import ViewCopy from "../viewCopy/ViewCopy";

const Home = () => {
  const [modalForm, setModalForm] = useState(false);
  const [modalPrestamo, setModalPrestamo] = useState(false);
  const [success, setSuccess] = useState(false);
  let history = useHistory();

  const handleModal = useCallback(() => {
    setModalForm((value) => !value);
  }, []);

  const handleModalDos = useCallback(() => {
    setModalPrestamo((value) => !value);
  }, []);

  const handleSuccess = useCallback(() => {
    setSuccess((value) => !value);
  }, []);

  const handleClick = () => {
    history.push("./copias");
  };

  const imagesBanner = [
    { url: isMobileOnly ? image1_mobile : image1 },
    { url: isMobileOnly ? image2_mobile : image2 },
    { url: isMobileOnly ? image3_mobile : image3 },
    { url: isMobileOnly ? image4_mobile : image4 },
    { url: isMobileOnly ? image5_mobile : image5 },
    { url: isMobileOnly ? image3_mobile : image6 },
  ];

  return (
    <>
      <Slider images={imagesBanner} />
      <Container>
        {!isMobileOnly && (
          <Grid
            item
            md={12}
            mt={4}
            justifyContent="center"
            style={{ display: "flex" }}
          >
            <HeaderInfo />
          </Grid>
        )}
        <Grid
          container
          spacing={2}
          item
          md={4}
          p={2}
          sm={12}
          mt={3}
          justifyContent={isMobileOnly ? "space-evenly" : "space-around"}
        >
          <Button
            style={{
              backgroundColor: "#C4523A",
              borderColor: "#C4523A",
              color: "white",
            }}
            onClick={handleModal}
          >
            Agregar Libro
          </Button>
        </Grid>
        <Grid item md={12} mt={2}>
          <BodyInfo />
        </Grid>
      </Container>
      <BasicModal
        handleClose={handleModal}
        open={modalForm}
        children={<Book onClose={handleModal} onSuccess={handleSuccess} />}
      />
      <BasicSnackbar open={success} handleClose={handleSuccess} />
      <Footer />
    </>
  );
};

export default Home;
