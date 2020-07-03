import React from 'react';
import { useHistory } from "react-router";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Saturn from '../../../Images/Saturn.jpg'

export default function MediaCard(props) {
  const history = useHistory();

  const ChangePage = (page) => {
    history.push(page);
  };

  return (
    <Card id={props.id} onClick={() => ChangePage(`/Application/${props.id}`)} style={{maxWidth: 345, backgroundColor: "black", color: "white"}}>
      <CardActionArea>
        <CardMedia
          style={{height: 140}}
          image={Saturn}
          title={props.name}
        />
        <CardContent>
          <Typography style={{ color: "white"}} gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography style={{ color: "white"}} variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="large" color="primary" onClick={() => ChangePage(`/Application/${props.id}`)}>
          Apply for Trip
        </Button>
      </CardActions>
    </Card>
  );
}
