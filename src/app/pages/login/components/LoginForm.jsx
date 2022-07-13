import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Grid, TextField, Button, Typography } from "@mui/material";
import { loginRequest } from "../../../../redux/login/action";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const regExp = "/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup.string(),
    // .required("Password is required")
    // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/)
  })
  .required();

const LoginForm = () => {
  const dispatch = useDispatch();



  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(
    (data) => {
      dispatch(loginRequest(data));
      // alert(JSON.stringify(data));
    },
    [dispatch]
  );

  return (
    <Grid
      container
      mt={2}
      style={{
        width: "350px",
        padding: "10px",
        borderRadius: "12px",
        border: "1px solid black",
        alignSelf: "center",
        justifyContent: "center",
        height: "400px",
      }}
    >
      <Grid item md={12} mt={1}>
        <Typography
          variant="h3"
          component="div"
          align="center"
          sx={{ flexGrow: 1 }}
          style={{ color: "#C4523A", height: 0 }}
        >
          LiBooksApp
        </Typography>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid item md={12}>
          <Controller
            name="email"
            control={control}
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <>
                <TextField
                  {...field}
                  inputRef={ref}
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  fullWidth
                  error={errors?.email}
                />
                <p style={{ color: "red" }}>{error?.message}</p>
              </>
            )}
          />
        </Grid>
      
        <Grid item md={12} mt={1}>
          <Controller
            name="password"
            control={control}
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <>
                <TextField
                  {...field}
                  inputRef={ref}
                  id="standard-basic"
                  label="Password"
                  type="password"
                  variant="standard"
                  fullWidth
                  error={error?.message}
                />
                <p style={{ color: "red" }}>{error?.message}</p>
              </>
            )}
          />
        </Grid>
        <Grid item md={12} mt={5}>
          <Button variant="outlined" color="inherit" type="submit" fullWidth>
            Ingresar
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default LoginForm;
