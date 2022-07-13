import React, { useEffect } from "react";
import {useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Login from "../app/pages/login/Login";
import AppContainerPage from "../app/pages/container/AppContainerPage";
import { sessionStateSelector } from "../redux/login/selectors";
import ProtectedRoute from "./ProtectedRoute";

const MainRoute = () => {
  const sessionState = useSelector(sessionStateSelector);
  const history = useHistory();

  useEffect(() => {
    if (sessionState) {
      history.push("/App/Common/Home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionState]);

  return (
    <Switch>
      <Route exact={true} path={["/", "/Login"]} component={Login} />
      <ProtectedRoute
        path="/App/Common/"
        component={AppContainerPage}
        isAuth={sessionState}
      />
      {/* <ProtectedRoute
        path="/App/Transaccion/"
        component={TransaccionesContainerPage}
        isAuth={isAuth}
      /> */}
    </Switch>
  );
};

export default MainRoute;
