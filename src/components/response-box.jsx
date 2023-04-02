import React, { useState, useEffect } from 'react';
import FinishReasonBox from './finish-reason.jsx';

const ResponseBox = (props) => {
  return (<>
    <div className='response'>
      {props.loading?
        <p className='loading-txt'>Let me think...</p>
        :
        <p>{props.daivResponse}</p>}
    </div>
    <FinishReasonBox
      finishReason={props.finishReason}/>
  </>)
}

export default ResponseBox;
