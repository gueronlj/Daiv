import React, { useState, useEffect } from 'react';

const UsageStats = (props) => {
  return (
    <>
      <h4>Usage</h4>
      <ul>
        <li>Prompt tokens: {props.usageStats.prompt_tokens}</li>
        <li>Response tokens: {props.usageStats.completion_tokens}</li>
        <li>Total tokens: {props.usageStats.total_tokens}</li>
      </ul>
    </>
  )
}

export default UsageStats;
