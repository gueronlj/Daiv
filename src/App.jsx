import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Configuration, OpenAIApi } from "openai";
import InputBox from './components/input-box.jsx'
import ResponseBox from './components/response-box.jsx'
import UsageStats from './components/usage-stats.jsx'

function App() {
  const [daivResponse, setDaivResponse] = useState(``)
  const [usageStats, setUsageStats] = useState(null)
  const [loading, setLoading] = useState(false)
  return (
    <div className="App">
      <h1>Hello, I am Daiv.</h1>
      <h3>I'm an AI assistant powered by OpenAi.</h3>
      <h3>How can I assist you?</h3>
      <InputBox
        setDaivResponse={setDaivResponse}
        usageStats={usageStats}
        setUsageStats={setUsageStats}
        setLoading={setLoading}/>
      <ResponseBox
        loading={loading}
        daivResponse={daivResponse}/>
      {usageStats&&
        <UsageStats
          usageStats={usageStats}/>}
    </div>
  )
}

export default App
