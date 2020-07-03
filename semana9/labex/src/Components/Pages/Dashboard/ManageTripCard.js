import React from 'react';
import SimpleRestAPI from '../../SimpleRestAPI'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Saturn from '../../../Images/Saturn.jpg'

export default function TripCard(props) {
  const api = new SimpleRestAPI();
  console.log(props);

  return (
    <Card id={props.Trip.id} style={{maxWidth: 345, backgroundColor: "black", color: "white"}}>
      <CardActionArea>
        <CardMedia
          style={{height: 140}}
          image={Saturn}
          title={props.Trip.name}
        />
        <CardContent>
          <Typography style={{ color: "white"}} gutterBottom variant="h5" component="h2">
            {props.Trip.name}
          </Typography>
          <Typography style={{ color: "white"}} variant="body2" color="textSecondary" component="p">
            {props.Trip.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="outlined" size="large" color="secondary" onClick={() => props.Delete(props.Trip.id)}>
          Delete Trip
        </Button>
        <Button variant="outlined" size="large" color="secondary" onClick={() => props.ChangePage(props.Trip.id)}>
          Select Passangers
        </Button>
      </CardActions>
    </Card>
  );
}
