import React from "react";
import {
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import moment from "moment";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../../redux/users/selectors";
import { getAllUsers } from "../../../redux/users/action";
import { getAllCopys } from "../../../redux/copy/action";
import { addRentalSuccess } from "../../../redux/rental/action";
import RentalService from "../../../service/rental";

const Rental = ({ id, titulo, onSuccess, onClose }) => {
  // const copys = useSelector(copySelector);
  // const loading = useSelector(bookSelector);

  const users = useSelector(userSelector);
  const dispacth = useDispatch();
  const [value, setValueDate] = useState(
    moment(new Date().toISOString()).format("L")
  );
  const [valueFin, setValueDateFin] = useState(
    moment(new Date().toISOString()).format("L")
  );

  const handleChange = (newValue) => {
    setValueDate(moment(newValue).format("L"));
    setValue(
      "fechaInicio",
      moment(newValue).format("YYYY-MM-DD").replaceAll("/", "-")
    );
  };

  const handleChangeFin = (newValue) => {
    setValueDateFin(moment(newValue).format("L"));
    setValue(
      "fechaFin",
      moment(newValue).format("YYYY-MM-DD").replaceAll("/", "-")
    );
  };

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fechaInicio: value,
      fechaFin: valueFin,
      copia: {
        idCopia: id,
      },
      lector: {
        num_socio: "",
      },
    },
    // resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(
    async (data) => {
      console.log(data);
      try {
        const response = await RentalService.addRental(data);

        if (response.status === 200) {
          onClose();
          onSuccess();
          dispacth(addRentalSuccess(id));
        }
      } catch (error) {
        console.log("Error: ", error);
      }

      // alert(JSON.stringify(data));
    },
    [dispacth, onClose, onSuccess, id]
  );

  useEffect(() => {
    dispacth(getAllCopys());
    dispacth(getAllUsers());
  }, [dispacth]);

  return (
    <Grid justifyContent="center" style={{ display: "flex", padding: "30px" }}>
      <Grid
        container
        mt={2}
        style={{
          width: "450px",
          padding: "10px",
          borderRadius: "12px",
          border: "1px solid black",
          alignSelf: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Grid item md={12} mt={1}>
          <Typography
            variant="h4"
            component="div"
            align="center"
            sx={{ flexGrow: 1 }}
            style={{ color: "#C4523A", height: "auto" }}
          >
            {titulo}
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid item md={12} mt={7}>
            <Grid item md={12} mt={3}>
              <Controller
                name="fechaInicio"
                control={control}
                render={({
                  field: { ref, ...field },
                  fieldState: { error },
                }) => (
                  <>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        label="Fecha de Prestamo"
                        inputFormat="yyyy-MM-dd"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </>
                )}
              />
            </Grid>
            <Grid item md={12} mt={3}>
              <Controller
                name="fechaFin"
                control={control}
                render={({
                  field: { ref, ...field },
                  fieldState: { error },
                }) => (
                  <>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        label="Fin de Prestamo"
                        inputFormat="yyyy-MM-dd"
                        value={valueFin}
                        onChange={handleChangeFin}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </>
                )}
              />
            </Grid>
            <Grid item md={12} mt={1}></Grid>
            <Grid item md={12} mt={1}>
              <InputLabel id="level-label">Socio</InputLabel>
              <Controller
                name="lector.num_socio"
                control={control}
                defaultValue={users[0]?.num_socio}
                fullWidth
                render={({
                  field: { ref, ...field },
                  fieldState: { error },
                }) => (
                  <>
                    <Select
                      labelId="level-label"
                      {...field}
                      fullWidth
                      // onChange={handleChangeBook}
                    >
                      {users.map((user) => {
                        return (
                          <MenuItem value={user.num_socio}>
                            {user.nombre}
                          </MenuItem>
                        );
                      })}
                    </Select>
                    <p style={{ color: "red" }}>{error?.message}</p>
                  </>
                )}
              />
            </Grid>
            <Button variant="outlined" color="inherit" type="submit" fullWidth>
              Prestar
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
export default Rental;
