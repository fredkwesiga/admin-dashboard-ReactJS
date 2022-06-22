import React from 'react';
import {Grid, Container} from '@material-ui/core';
import { useStyles } from '../styles.js';
import Sidebar from './Sidebar';
import Navbar from './Navbar.js';
const Applayout = ({ children }) => {
    const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Navbar />
          <Container fluid>{children}</Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default Applayout;
