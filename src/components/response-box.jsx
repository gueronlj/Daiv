import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const ResponseBox = (props) => {
  return (<>
    <div className='response'>
      {props.loading?
        <><p className='loading-txt'>Let me think...</p>
          <CircularProgress /></>
        :
        <p>{props.daivResponse}</p>}
    </div>
  </>)
}

export default ResponseBox;
