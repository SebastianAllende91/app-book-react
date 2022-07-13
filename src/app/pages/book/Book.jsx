import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
// import { Autores } from "../../home/components/utils";
import { getAllAuthors, setLoading } from "../../../redux/authors/action";
import { authorSelector } from "../../../redux/authors/selectors";
import { loadingSelector } from "../../../redux/books/selectors";
import BookService from "../../../service/book";
import { addBookSuccess } from "../../../redux/books/action";
import moment from "moment";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Loading from "../../components/loading/Loading";

const schema = yup
  .object({
    titulo: yup.string().required("Email is required"),
  })
  .required();

const Book = ({ onSuccess, onClose }) => {
  const authors = useSelector(authorSelector);
  const loading = useSelector(loadingSelector);
  const dispatch = useDispatch();
  const [isAutor, setIsAutor] = useState(false);
  const [value, setValueDate] = useState(new Date("2022-07-11T21:11:54"));

  const handleChange = (newValue) => {
    setValueDate(newValue);
    setValue(
      "autor.fecNacimiento",
      moment(newValue).format("YYYY-MM-DD").replaceAll("/", "-")
    );
  };

  const {
    control,
    // getFieldState,
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
        id: "",
      },
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(
    async (data) => {
      //alert(JSON.stringify(data));
      let response;
      try {
        if (isAutor) {
          const key = "autor";
          const { [key]: autor, ...libro } = data;
          const dataReponse = { libro, autor };
          delete autor.id;
          // alert(JSON.stringify(dataReponse));
          response = await BookService.addBookAuthor(dataReponse);
        } else {
          response = await BookService.addBook(data);
        }

        if (response.status === 200) {
          onClose();
          onSuccess();
          dispatch(addBookSuccess(response.data));
        }
      } catch (error) {
        console.log("Error: ", error);
      }
    },
    [dispatch, onClose, onSuccess, isAutor]
  );

  const handleChangeAutor = useCallback(
    ({ target }) => {
      setIsAutor(() => (target.value === -1 ? true : false));
      setValue("autor.id", target.value);
    },
    [setValue]
  );

  console.log(authors);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getAllAuthors());
  }, [dispatch]);

  if (loading) return <Loading />;

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
            style={{ color: "#C4523A", height: 0 }}
          >
            NUEVO LIBRO
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
            <InputLabel id="level-label">Tipo</InputLabel>
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
            <Controller
              name="editorial"
              control={control}
              render={({ field: { ref, ...field }, fieldState: { error } }) => (
                <>
                  <TextField
                    {...field}
                    inputRef={ref}
                    id="standard-basic"
                    label="Editorial"
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
            <Controller
              name="anio"
              control={control}
              render={({ field: { ref, ...field }, fieldState: { error } }) => (
                <>
                  <TextField
                    {...field}
                    inputRef={ref}
                    id="standard-basic"
                    label="Año"
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
            <InputLabel id="level-label">Autor</InputLabel>
            <Controller
              name="autor.id"
              control={control}
              defaultValue={authors[0]?.id}
              fullWidth
              render={({ field: { ref, ...field }, fieldState: { error } }) => (
                <>
                  <Select
                    labelId="level-label"
                    {...field}
                    fullWidth
                    onChange={handleChangeAutor}
                  >
                    {authors.map((autor) => {
                      return (
                        <MenuItem value={autor.id}>{autor.nombre}</MenuItem>
                      );
                    })}
                    <MenuItem value={-1}>Nuevo autor</MenuItem>
                  </Select>
                  <p style={{ color: "red" }}>{error?.message}</p>
                </>
              )}
            />
          </Grid>
          {isAutor && (
            <>
              <Grid item md={12} mt={1}>
                <Controller
                  name="autor.nombre"
                  control={control}
                  render={({
                    field: { ref, ...field },
                    fieldState: { error },
                  }) => (
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
              <Grid item md={12} mt={2}>
                <Controller
                  name="autor.nacionalidad"
                  control={control}
                  render={({
                    field: { ref, ...field },
                    fieldState: { error },
                  }) => (
                    <>
                      <TextField
                        {...field}
                        inputRef={ref}
                        id="standard-basic"
                        label="Nacionalidad"
                        variant="standard"
                        fullWidth
                        error={error?.message}
                      />
                      <p style={{ color: "red" }}>{error?.message}</p>
                    </>
                  )}
                />
              </Grid>
              <Grid item md={12} mt={3}>
                <Controller
                  name="autor.fecNacimiento"
                  control={control}
                  render={({
                    field: { ref, ...field },
                    fieldState: { error },
                  }) => (
                    <>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                          label="Fecha de Nacimiento"
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
            </>
          )}
          <Grid item md={12} mt={5}>
            <Button variant="outlined" color="inherit" type="submit" fullWidth>
              Nuevo Libro
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default Book;
