import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { useStyles } from "../styles";
import Applayout from "../Components/Applayout";
import axios from "axios";
import { base_url } from "../Constants/index.js";
import { Formik } from "formik";

const Specialtyform = ({ closeDialog }) => {
  const classes = useStyles();
  // const Update = ()=>{
  //   axios.put(`${base_url}/specialties`)
  // .then(response => {
  //   console.log("Status: ", response.status);
  //   console.log("Data: ", response.data);
  // }).catch(error => {
  //   console.error('Something went wrong!', error);
  // });
  // }
  return (
    <Applayout>
      <Formik
        initialValues={{
          title: "",
          description: "",
          specialtiesDetails: "",
          image: "",
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            const specialtiesObject = {
              title: values.title,
              description: values.description,
              specialtiesDetails: values.specialtiesDetails,
              image: values.image,
            };

            axios.post(`${base_url}/specialties`, specialtiesObject, {
              headers: { "Access-Control-Allow-Origin": "*" },
            });
            window.location.href = "/specialty";
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
                <lable>Title</lable>
                <TextField
                  variant="outlined"
                  required
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  name="title"
                  fullWidth
                  id="outlined-basic"
                  className={classes.specialityField}
                />
              </Grid>
              <Grid item xs={12}>
                <lable>Specialties Description</lable>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  name="description"
                  id="outlined-basic"
                  className={classes.specialityField}
                />
              </Grid>
              <Grid item xs={12}>
                <lable>Specialties View Details</lable>
                <TextField
                  variant="outlined"
                  required
                  value={formik.values.specialtiesDetails}
                  onChange={formik.handleChange}
                  name="specialtiesDetails"
                  fullWidth
                  id="outlined-basic"
                  className={classes.specialityField}
                />
              </Grid>
              <Grid item xs={12}>
                <lable>Image</lable>
                <TextField
                  type="text"
                  variant="outlined"
                  required
                  value={formik.values.image}
                  onChange={formik.handleChange}
                  name="image"
                  fullWidth
                  id="outlined-basic"
                  className={classes.specialityField}
                />
              </Grid>
              <Button
                type="submit"
                variant="contained"
                className={classes.buttn}
                // onClick ={Update}
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

export default Specialtyform;
