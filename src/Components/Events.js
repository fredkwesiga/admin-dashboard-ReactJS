import React from 'react';
import { Checkbox, Grid, Button } from '@material-ui/core';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { base_url } from '../Constants/index.js';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import { useStyles } from '../styles';

import Applayout from "./Applayout";

const Events = () => {
  const [events, setEvents] = useState([]);
  
  const classes = useStyles();
  useEffect(() => {
    axios
      .get(`${base_url}/events`)
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => {
        console.log({ message: err });
      });
  }, []);
  return (
    <Applayout>
      <Button
        variant="contained"
        className={classes.AddSpecialitybutton}
        href="/eventsForm"
      >
        Add New
      </Button>
      <Button variant="contained" className={classes.Disablebutton}>
        Disable
      </Button>
     
        <div style={{ width: "90%", marginTop: "3%" }}>
        {events.map((events_entity) => (
          <Card sx={{ display: "flex" }} className={classes.eventsCard}>
            <Grid container >
            <Grid item xs={1} style={{padding: '2%'}}>
            <Checkbox color="primary" /> <br />
              <EditIcon 
               style={{ color: "#0A1F3E", marginTop: '90%'}} 
              />
            </Grid>
            <Grid item xs={9}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  {events_entity.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {events_entity.description}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <strong>LOCATION:</strong> {events_entity.location} <br />
                  <strong>DATE:</strong> {events_entity.date}
                </Typography>
                
              </CardContent>
            </Box> 
            </Grid>
            <Grid item xs={2}>
            <CardMedia
              component="img"
              sx={{ width: 160, height: 160 }}
              image={events_entity.image}
              alt="Live from space album cover"
            />
            </Grid>
            </Grid>
          </Card>
           ))}
        </div>
    
    </Applayout>
  );
};

export default Events;
