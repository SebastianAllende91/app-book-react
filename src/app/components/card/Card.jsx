import React from "react";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  // Chip,
} from "@mui/material";
import imgDefault from "../../../img/imgDefault.jpg";
import DoneIcon from "@mui/icons-material/Done";
import ErrorIcon from "@mui/icons-material/Error";

const BasicCard = ({
  copia: {
    idCopia,
    estado,
    libro: {
      titulo,
      autor: { nombre },
    },
  },
  onClose,
}) => {
  const handleModalCopia = React.useCallback(() => {
    onClose({ id: idCopia, titulo: titulo });
  }, [idCopia, onClose, titulo]);

  return (
    <>
      <Card
        sx={{
          minWidth: 275,
          borderRadius: "12px",
          cursor: "pointer",
          boxShadow: "0 0 4px rgba(0,0,0,0.4)",
          "&:hover": {
            transform: "scale(1.03)",
            transition: "all 0.3s ease-in-out 0s",
          },
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
            textAlign="center"
          >
            {nombre}
          </Typography>
          <Typography
            variant="h5"
            component="div"
            alignItems="center"
            display="flex"
            justifyContent="center"
          >
            {titulo}
          </Typography>
          <Grid mt={1} item md={12} display="flex" justifyContent="center">
            <img
              src={imgDefault}
              height={100}
              alt="imagDefault"
              style={{ borderRadius: "5px", border: "1px solid black" }}
            />
          </Grid>
          <Grid item md={12} display="flex" justifyContent="center">
            <Typography sx={{ mb: 1, fontSize: 12 }} color="text.secondary">
              {estado}
            </Typography>
          </Grid>
        </CardContent>
        <CardActions
          display="flex"
          style={{ alignContent: "center", justifyContent: "center" }}
        >
          <Button
            size="small"
            variant="outlined"
            color={estado === "BIBLIOTECA" ? "success" : "error"}
            disabled={estado !== "BIBLIOTECA"}
            startIcon={estado === "BIBLIOTECA" ? <DoneIcon /> : <ErrorIcon />}
            style={{
              "&:disabled": {
                backgroundColor: "black",
                color: "red",
              },
            }}
            onClick={handleModalCopia}
          >
            {estado === "BIBLIOTECA" ? "Reservar" : "No disponible"}
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default BasicCard;
