import React from "react";
import { useDispatch , useSelector } from "react-redux";
import { logout } from "../../../redux/login/action";
// eslint-disable-next-line no-unused-vars
import {
  BrowserRouter as Router,
  useRouteMatch,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import {sessionStateSelector} from '../../../redux/login/selectors'
import MenuAppBar from "../../components/navbar/Navbar";
import AppRoute from "../../../route/AppRoute";


const AppContainerPage = () => {
  const histories = useHistory();
  const dispatch = useDispatch();
  const sessionState = useSelector(sessionStateSelector);

  const logOut = () => {
    sessionStorage.removeItem("token");
    dispatch(logout());
    histories.push("/Login");
  };

  return (
    <div className="root">
      <MenuAppBar auth={sessionState} />
      <AppRoute />
    </div>
  );
};

export default AppContainerPage;
