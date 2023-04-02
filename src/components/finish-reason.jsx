import React, { useState, useEffect } from 'react';
const FinishReasonBox = (props) => {
  return (
    <div className='finish-reason'>
      {props.finishReason &&
        (props.finishReason === 'length'?
          <p style={{color: 'yellow'}}>My response is incomplete! Try breaking down your problem into smaller parts.</p>:<p style={{color: 'green'}}>Completed</p>)
      }
    </div>
  );
}

export default FinishReasonBox;
