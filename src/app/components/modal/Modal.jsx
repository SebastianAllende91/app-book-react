import * as React from "react";
import { Dialog } from "@mui/material";

const BasicModal = ({ children, open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {children}
    </Dialog>
  );
};

export default BasicModal;
