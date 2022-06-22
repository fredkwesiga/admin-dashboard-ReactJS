import React, {useState, useEffect} from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { useStyles } from '../styles';
import Applayout from '../Components/Applayout';
import axios from "axios";
import { base_url } from "../Constants/index.js";
import { Formik } from "formik";

const Eventsform = () => {
  const classes = useStyles();
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if(images.length < 1) return;
    const newImageURLs = [];
    images.forEach(image => newImageURLs.push(URL.createObjectURL(image)));
    setImageURLs(newImageURLs);
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);
  }

  return (
    <Applayout>
       <Formik
        initialValues={{
          title: "",
          description: "",
          location: "",
          date: "",
          image: "",
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            const EventsObject = {
              title: values.title,
              description: values.description,
              location: values.location,
              date: values.date,
              image: values.image,
            };

            axios.post(`${base_url}/events`, EventsObject, {
              headers: { 'Access-Control-Allow-Origin': '*' },
            });
            window.location.href = "/events";
            if (closeDialog) {
              closeDialog();
            }
          });
        }}
      >
        {(formik) => (
      <form noValidate className={classes.specialityForm}  onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <lable>Event Title</lable>
            <TextField
              variant="outlined"
              required
              fullWidth
              value={formik.values.title}
              onChange={formik.handleChange}
              name="title"
              id="outlined-basic"
              className={classes.specialityField}
            />
          </Grid>
          <Grid item xs={12}>
            <lable>Event Date</lable>
            <TextField
              variant="outlined"
              required
              value={formik.values.date}
                  onChange={formik.handleChange}
                  name="date"
                  type= "date"
              fullWidth
              id="outlined-basic"
              className={classes.specialityField}
            />
          </Grid>
          <Grid item xs={12}>
            <lable>Event Description</lable>
            <TextField
              variant="outlined"
              required
              value={formik.values.description}
                  onChange={formik.handleChange}
                  name="description"
              fullWidth
              id="outlined-basic"
              className={classes.specialityField}
            />
          </Grid>
          <Grid item xs={12}>
            <lable>Event Location</lable>
            <TextField
              variant="outlined"
              required
              fullWidth
              value={formik.values.location}
                  onChange={formik.handleChange}
                  name="location"
              id="outlined-basic"
              className={classes.specialityField}
            />
          </Grid>
          <Grid item xs={12}>
            <lable>Event Image</lable>
            <TextField
            type="file"
            accept="image/*"
              variant="outlined"
              required
              value={formik.values.image}
                  // onChange={formik.handleChange}
                  onChange={onImageChange}
                  name="image"
              fullWidth
              id="outlined-basic"
              className={classes.specialityField}
              
            />
            { imageURLs.map(imageSrc => <img src={imageSrc} />) }
          </Grid>
          <Button type="submit" variant="contained" className={classes.buttn}>
            SAVE
          </Button>
        </Grid>
      </form>
        )}
        </Formik>
    </Applayout>
  );
};

export default Eventsform;
