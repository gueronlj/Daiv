import React, { useState, useEffect } from 'react';

const UsageStats = (props) => {
  return (
    <div className="usage-stats">
      <h4>Usage</h4>
      <ul>
        <li>Prompt tokens: {props.usageStats.prompt_tokens}</li>
        <li>Response tokens: {props.usageStats.completion_tokens}</li>
        <li>Total tokens: {props.usageStats.total_tokens}</li>
      </ul>
    </div>
  )
}

export default UsageStats;
