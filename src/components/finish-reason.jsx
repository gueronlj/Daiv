import React, { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';

const FinishReasonBox = (props) => {
  return (
    <div className='finish-reason'>
      {props.finishReason &&
        (props.finishReason === 'length'?
          <Alert variant="borderless" severity="warning">
            Your prompt was too long. Make it shorter or more simple.<strong>Try breaking down your task into smaller parts.</strong>
          </Alert>
          :
          <Alert variant="borderless" severity="success" sx={{"color":"green"}}>
            <strong>Completed!</strong>
          </Alert>)
      }
    </div>
  );
}

export default FinishReasonBox;
