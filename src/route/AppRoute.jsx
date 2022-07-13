import React from "react";
import { useSelector } from "react-redux";
// eslint-disable-next-line no-unused-vars
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  useRouteMatch,
  Redirect,
} from "react-router-dom";
import { sessionStateSelector } from "../redux/login/selectors";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "../app/pages/home/Home";
import ViewCopy from "../app/pages/viewCopy/ViewCopy";
import UsersTable from "../app/pages/user/Users";
import ViewRental from "../app/pages/rental/ViewRental";

const AppRoute = () => {
  const sessionState = useSelector(sessionStateSelector);

  return (
    <>
      <Switch>
        <ProtectedRoute
          path="/App/Common/Home"
          component={HomePage}
          isAuth={sessionState}
        />
        <ProtectedRoute
          path="/App/Common/copias"
          component={ViewCopy}
          isAuth={sessionState}
        />
        <ProtectedRoute
          path="/App/Common/usuarios"
          component={UsersTable}
          isAuth={sessionState}
        />
        <ProtectedRoute
          path="/App/Common/prestamos"
          component={ViewRental}
          isAuth={sessionState}
        />
      </Switch>
    </>
  );
};

export default AppRoute;
