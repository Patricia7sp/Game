import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import { Link } from "react-router-dom";

function PokeCard ({name, classes, image, to= '' }){
  return (
    <Card className={classes.item}>
      <CardMedia className={classes.media} image={image} />
      <CardContent>
        <Link to={to}><Typography component="p" variant="h5">{name}</Typography></Link>
      </CardContent>
    
    </Card>

  );

}



export default  withStyles ({

  item: {
    minWidth: "450px",
    textAlign: "center",
		margin: "2em", 
    padding: '2em'
    
  },
  
  media:{
    minHeight: "450px"
  }


  
}) (PokeCard);  