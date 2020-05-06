import React, {Fragment} from 'react';
import {Button} from "@material-ui/core";

const Pagination = ({increment, decrement, page}) =>{
 return (
   <Fragment>
      <Button variant="contained" color="primary"  arial-label onClick={decrement}> Anterior </Button>
      <Button variant="contained" calor="primary">
        {page}
      </Button>
      <Button variant="contained" color="primary" arial-label onClick={increment}> Seguinte </Button> 
      
   </Fragment>
 );
}


export default Pagination;