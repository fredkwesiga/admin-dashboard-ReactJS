import React from 'react';
import { base_url } from '../Constants/index.js';
import axios from 'axios';
import { Formik } from 'formik';
import Applayout from '../Components/Applayout';
import { Grid, TextField, Button } from '@material-ui/core';
import { useStyles } from '../styles';

const Tipsform = () => {
  const classes = useStyles();

  return (
    <Applayout>
      <Formik
        initialValues={{
          title: '',
          description: '',
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            const specialtiesObject = {
              title: values.title,
              description: values.description,
            };

            axios.post(`${base_url}/tips`, specialtiesObject, {
              headers: { 'Access-Control-Allow-Origin': '*' },
            });
            window.location.href = '/tips';
            if (closeDialog) {
              closeDialog();
            }
          });
        }}
      >
        {(formik) => (
          <form noValidate className={classes.specialityForm} onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <lable>Tips Title</lable>
                <TextField
                  variant="outlined"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  name="title"
                  required
                  fullWidth
                  id="outlined-basic"
                  className={classes.specialityField}
                />
              </Grid>
              <Grid item xs={12}>
                <lable>Tips Content</lable>
                <TextField
                  variant="outlined"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  name="description"
                  required
                  fullWidth
                  id="outlined-basic"
                  className={classes.specialityField}
                />
              </Grid>
              <Button
                type="submit"
                variant="contained"
                className={classes.buttn}
              >
                SAVE
              </Button>
            </Grid>
          </form>
        )}
      </Formik>
    </Applayout>
  );
};

export default Tipsform;
