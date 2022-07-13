import { Button, Grid } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { isMobileOnly } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCopys,
  setLoading,
  filterStatus,
} from "../../../redux/copy/action";
import { copySelector, loadingSelector } from "../../../redux/copy/selectors";
import BasicCard from "../../components/card/Card";
import BasicModal from "../../components/modal/Modal";
import BasicSnackbar from "../../components/snackbar/Snackbar";
import Rental from "../rental/Rental";

const ViewCopy = () => {
  const copys = useSelector(copySelector);
  const loading = useSelector(loadingSelector);
  const [success, setSuccess] = useState(false);
  const [openModal, setModal] = useState(false);
  const [idCopiaState, setIdCopiaState] = useState({});

  const dispatch = useDispatch();

  const handleSuccess = useCallback(() => {
    setSuccess((value) => !value);
  }, []);

  const handleModal = useCallback((id) => {
    setIdCopiaState(id);
    setModal(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setIdCopiaState();
    setModal(false);
  }, []);

  const handleStatus = useCallback(
    (value) => {
      dispatch(filterStatus(value));
    },
    [dispatch]
  );
  useEffect(() => {
    dispatch(setLoading());
    dispatch(getAllCopys());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Grid
        item
        width={"35vw"}
        spacing={2}
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
          onClick={() => handleStatus("BIBLIOTECA")}
        >
          Disponibles
        </Button>
        <Button
          variant="outlined"
          style={{
            borderColor: "#C4523A",
            color: "#9C9998",
            marginLeft: "30px",
          }}
          onClick={() => handleStatus("PRESTADO")}
        >
          No Disponible
        </Button>
      </Grid>
      <Grid
        container
        mt={3}
        mb={2}
        columnSpacing={3}
        rowSpacing={2}
        justifyContent={isMobileOnly ? "center" : "normal"}
      >
        {copys &&
          copys.map((book) => {
            return (
              <React.Fragment key={book.id}>
                <Grid item md={3} sm={12}>
                  <BasicCard copia={book} onClose={handleModal} />
                </Grid>
              </React.Fragment>
            );
          })}
      </Grid>
      <BasicSnackbar open={success} handleClose={handleSuccess} />
      <BasicModal
        handleClose={handleModalClose}
        open={openModal}
        children={
          <Rental
            onClose={handleModalClose}
            onSuccess={handleSuccess}
            id={idCopiaState?.id}
            titulo={idCopiaState?.titulo}
          />
        }
      />
    </>
  );
};

export default ViewCopy;
