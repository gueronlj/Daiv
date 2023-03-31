import React, { useState, useEffect } from 'react';

const ResponseBox = (props) => {
  return (
    <div className='response'>
      {props.loading?
        <p className='loading-txt'>Let me think...</p>
        :
        <p>{props.daivResponse}</p>}
    </div>
  )
}

export default ResponseBox;
