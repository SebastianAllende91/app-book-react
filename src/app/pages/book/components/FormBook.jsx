import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Autores } from "../../home/components/utils";

const schema = yup
  .object({
    titulo: yup.string().required("Email is required"),
    // tipo: yup.string().required(),
    // .required("Password is required")
    // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/)
  })
  .required();

const FormBook = () => {
  const dispatch = useDispatch();
  const [isAutor, setIsAutor] = useState(false);
  const {
    control,
    getFieldState,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      titulo: "",
      tipo: "",
      editorial: "",
      anio: null,
      autor: {
        id: null,
      },
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback((data) => {
    alert(JSON.stringify(data));
  }, []);

  const handleChangeAutor = useCallback(
    ({ target }) => {
      setIsAutor(() => (target.value === -1 ? true : false));
      setValue("autor.id", target.value);
    },
    [setValue]
  );

  return (
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
          style={{ color: "#C4523A", height: 0 }}
        >
          CREATE BOOK
        </Typography>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid item md={12} mt={7}>
          <Controller
            name="titulo"
            control={control}
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <>
                <TextField
                  {...field}
                  inputRef={ref}
                  id="standard-basic"
                  label="Titulo"
                  variant="standard"
                  fullWidth
                  error={errors?.titulo}
                />
                <p style={{ color: "red" }}>{error?.message}</p>
              </>
            )}
          />
        </Grid>
        <Grid item md={12} mt={1}>
          <InputLabel id="level-label">Level</InputLabel>
          <Controller
            name="tipo"
            control={control}
            defaultValue="NOVELA"
            fullWidth
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <>
                <Select labelId="level-label" {...field} fullWidth>
                  <MenuItem value="NOVELA">Novela</MenuItem>
                  <MenuItem value="TEATRO">Teatro</MenuItem>
                  <MenuItem value="POESIA">Poesia</MenuItem>
                  <MenuItem value="ENSAYO">Ensayo</MenuItem>
                </Select>
                <p style={{ color: "red" }}>{error?.message}</p>
              </>
            )}
          />
        </Grid>
        <Grid item md={12} mt={1}>
          <InputLabel id="level-label">Level</InputLabel>
          <Controller
            name="autor.id"
            control={control}
            defaultValue={Autores[0].id}
            fullWidth
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <>
                <Select
                  labelId="level-label"
                  {...field}
                  fullWidth
                  onChange={handleChangeAutor}
                >
                  {Autores.map((autor) => {
                    return <MenuItem value={autor.id}>{autor.nombre}</MenuItem>;
                  })}
                  <MenuItem value={-1}>Nuevo autor</MenuItem>
                </Select>
                <p style={{ color: "red" }}>{error?.message}</p>
              </>
            )}
          />
        </Grid>
        {isAutor && (
          <Grid item md={12} mt={1}>
            <Controller
              name="nombre"
              control={control}
              render={({ field: { ref, ...field }, fieldState: { error } }) => (
                <>
                  <TextField
                    {...field}
                    inputRef={ref}
                    id="standard-basic"
                    label="Nombre"
                    variant="standard"
                    fullWidth
                    error={error?.message}
                  />
                  <p style={{ color: "red" }}>{error?.message}</p>
                </>
              )}
            />
          </Grid>
        )}
        <Grid item md={12} mt={5}>
          <Button variant="outlined" color="inherit" type="submit" fullWidth>
            Create Book
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default FormBook;
