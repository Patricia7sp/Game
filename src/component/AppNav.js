import React from 'react';
import {AppBar, Typography, Toolbar } from '@material-ui/core';
import {withStyles } from '@material-ui/core/styles';
import {Link } from 'react-router-dom';

function AppNav(props){

  const { classes } = props

  return (

    <AppBar className = {classes.NavColor} position= "static">
      <Toolbar variant="dense">
        <Typography variant= "h6" component="p"> <Link to=''>HOME</Link> </Typography>
      </Toolbar>
      
    </AppBar>
  )
}

export default withStyles({
  NavColor: {
    backgroundColor: 'rgb(77, 124, 145)'
  }

}) (AppNav)