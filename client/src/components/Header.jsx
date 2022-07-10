import { Typography } from "@mui/material";
import React from "react";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  return (
    <Typography variant="h4" align="center" className={classes.container}>
      Blog
    </Typography>
  );
};

export default Header;
