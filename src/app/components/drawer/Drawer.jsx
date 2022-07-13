import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const option = [
  { id: 1, value: "Home" },
  { id: 2, value: "Copias" },
  { id: 3, value: "Prestamos" },
  { id: 4, value: "Usuarios" },
  // { id: 5, value: "Quienes somos" },
];

const TemporaryDrawer = ({ open, handleClose }) => {
  const history = useHistory();
  const toggleDrawer = useCallback(() => {
    handleClose();
  }, [handleClose]);

  const handleRedirect = useCallback(
    (value) => {
      history.push(`./${value}`);
    },
    [history]
  );

  const render = useCallback(() => {
    return (
      <Box role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
        <List>
          {option.map(({ id, value }) => (
            <ListItem key={id}>
              <ListItemButton
                onClick={() => handleRedirect(value.toLowerCase())}
              >
                <ListItemText primary={value} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  }, [toggleDrawer, handleRedirect]);

  return (
    <div>
      <React.Fragment key="left">
        <Drawer anchor="left" open={open} onClose={toggleDrawer}>
          {render()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};
export default TemporaryDrawer;
