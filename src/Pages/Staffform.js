import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { useStyles } from '../styles';
import Applayout from '../Components/Applayout';
import { useState } from 'react';
import axios from 'axios';
import { base_url } from '../Constants/index.js';
import { Formik } from 'formik';
import VisibilityIcon from '@material-ui/icons/Visibility';




const Staffform = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <Applayout>
      <Formik
        initialValues={{
          name: '',
          doctorsDetails: '',
          image: '',
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            const staffObject = {
              name: values.name,
              doctorsDetails: values.doctorsDetails,
              image: values.image,
            };
            axios.post(`${base_url}/staff`, staffObject, {
              headers: { 'Access-Control-Allow-Origin': '*' },
            });

            function updatePost() {
              const [post, setPost] = useState([]);
              axios.patch(`${baseURL}/staff`, staffObject).then((response) => {
                setPost(response.data);
              });
            }
            window.location.href = '/staff';
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
                <lable>Doctors Names</lable>
                <TextField
                  variant="outlined"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  name="name"
                  required
                  fullWidth
                  id="outlined-basic"
                  className={classes.specialityField}
                />
              </Grid>
              <Grid item xs={12}>
                <lable>Brief Description</lable>
                <TextField
                  variant="outlined"
                  value={formik.values.doctorsDetails}
                  onChange={formik.handleChange}
                  name="doctorsDetails"
                  required
                  fullWidth
                  id="outlined-basic"
                  className={classes.specialityField}
                />
              </Grid>
              <Grid item xs={12}>
                <lable>Doctors' image</lable>
                <TextField
                  // type="file"
                  value={formik.values.image}
                  onChange={formik.handleChange}
                  name="image"
                  variant="outlined"
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
              <VisibilityIcon
                style={{ color: '#FA2222' }}
                variant="outlined"
                onClick={handleClickOpen}
              ></VisibilityIcon>
            </Grid>
          </form>
        )}
      </Formik>
    </Applayout>
  );
};

export default Staffform;
