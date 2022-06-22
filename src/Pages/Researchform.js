import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { useStyles } from '../styles';
import Applayout from '../Components/Applayout';
import axios from 'axios';
import { base_url } from '../Constants/index.js';
import {Formik } from 'formik';

const Researchform = () => {
  const classes = useStyles();
  return (
    <Applayout>
      <Formik
        initialValues={{
          title: '',
          date: '',
          summary: '',
          content: '',
          author: '',
          image: '',
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            const researchObject = {
              title: values.title,
              date: values.date,
              summary: values.summary,
              content: values.content,
              author: values.author,
              image: values.image,
            };

            axios.post(`${base_url}/research`, researchObject, {
              headers: { 'Access-Control-Allow-Origin': '*' },
            });
            window.location.href = '/research';
            if (closeDialog) {
              closeDialog();
            }
          });
        }}
      >
        {(formik) => (
          <form
            noValidate
            className={classes.specialityForm}
            onSubmit={formik.handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <lable>Add Title</lable>
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
                <lable>Date</lable>
                <TextField
                  type="date"
                  value={formik.values.date}
                  onChange={formik.handleChange}
                  name="date"
                  variant="outlined"
                  required
                  fullWidth
                  id="outlined-basic"
                  className={classes.specialityField}
                />
              </Grid>
              <Grid item xs={12}>
                <lable>Summary</lable>
                <TextField
                  variant="outlined"
                  value={formik.values.summary}
                  onChange={formik.handleChange}
                  name="summary"
                  required
                  fullWidth
                  id="outlined-basic"
                  className={classes.specialityField}
                />
              </Grid>
              <Grid item xs={12}>
                <lable>Content</lable>
                <TextField
                  variant="outlined"
                  value={formik.values.content}
                  onChange={formik.handleChange}
                  name="content"
                  required
                  fullWidth
                  id="outlined-basic"
                  className={classes.specialityField}
                />
              </Grid>
              <Grid item xs={12}>
                <lable>Author</lable>
                <TextField
                  value={formik.values.author}
                  onChange={formik.handleChange}
                  name="author"
                  variant="outlined"
                  required
                  fullWidth
                  id="outlined-basic"
                  className={classes.specialityField}
                />
              </Grid>
              <Grid item xs={12}>
                <lable>Images</lable>
                <TextField
                  // type="file"
                  variant="outlined"
                  value={formik.values.image}
                  onChange={formik.handleChange}
                  name="image"
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

export default Researchform;
