import React from "react";
import {
  Button,
  TextField,
  Grid,
  Container,
} from "@material-ui/core";

import { useStyles } from '../styles.js';


const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.formDiv} >
      <Container maxWidth="xs" className={classes.container}>
        <img src='/images/bluelogo-01.png' alt='' className={classes.pic}/>
        <form noValidate className={classes.form} >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Button
              type="submit"
              variant="contained"
              className={classes.button}
              href="/dashboard"
            >
              Login
            </Button>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default Home;
