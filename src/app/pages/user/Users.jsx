import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { loadingSelector, userSelector } from "../../../redux/users/selectors";
import { getAllUsers, setLoading } from "../../../redux/users/action";
import Loading from "../../components/loading/Loading";
import { Grid } from "@mui/material";

const UsersTable = () => {
  const users = useSelector(userSelector);
  const loading = useSelector(loadingSelector);
  const disptach = useDispatch();

  useEffect(() => {
    disptach(setLoading());
    disptach(getAllUsers());
  }, [disptach]);

  console.log(users);

  if (loading) return <Loading />;

  return (
    <Grid container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Num. Socio</TableCell>
              <TableCell>Usuario</TableCell>
              <TableCell align="right">Direccion</TableCell>
              <TableCell align="right">Telefono</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => (
                <TableRow
                  key={user.num_socio}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{user.num_socio}</TableCell>
                  <TableCell component="th" scope="row">
                    {user.nombre}
                  </TableCell>
                  <TableCell align="right">{user.direccion}</TableCell>
                  <TableCell align="right">{user.telefono}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default UsersTable;
