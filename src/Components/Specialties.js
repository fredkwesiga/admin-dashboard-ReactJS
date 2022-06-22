import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import { useStyles } from '../styles';
import {
  Checkbox,
  Button,CardActionArea
} from '@material-ui/core';
import Applayout from './Applayout'
import { base_url } from '../Constants/index.js';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Staffform from '../Pages/Staffform';

const Specialties = () => {
  const classes = useStyles();
  const [specialties, setSpecialties] = useState([]);
  const [editing, setEditing] = useState(false);
  useEffect(() => {
    axios
      .get(`${base_url}/specialties`)
      .then((res) => {
        setSpecialties(res.data);
        console.log(res.data);
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
        href="/specialtyForm"
      >
        Add New
      </Button>
      <Button variant="contained" className={classes.Disablebutton}>
        Disable
      </Button>
      {specialties.map((specialties) => (
        <div>
            <Card sx={{ display: 'flex' }} className={classes.specialtyCard}>
              <Checkbox color="primary" />
              <CardMedia
              // component="img"
              // sx={{ width: 151 }}
              // image= {Specialties.image}
              // alt="Live from space album cover"
              >
                <img
                  src={specialties.image}
                  alt=""
                  style={{ width: '200px', height: '100%' }}
                />
              </CardMedia>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    {specialties.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    <strong>Description :</strong> {specialties.description}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    <strong>Details :</strong> {specialties.specialtiesDetails}
                  </Typography>
                </CardContent>
                <CardActionArea>
                  <EditIcon style={{ color: '#FA2222' }} href="/specialtyForm"/>
                </CardActionArea>
              </Box>
            </Card>
        </div>
      ))}
    </Applayout>
  );
};

export default Specialties;
