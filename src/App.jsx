import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Configuration, OpenAIApi } from "openai";
import InputBox from './components/input-box.jsx'
import ResponseBox from './components/response-box.jsx'
import UsageStats from './components/usage-stats.jsx'
import Navbar from './components/navbar.jsx'

function App() {
  const [daivResponse, setDaivResponse] = useState(``)
  const [usageStats, setUsageStats] = useState(null)
  const [loading, setLoading] = useState(false)
  const [finishReason, setFinishReason] = useState(null)
  return (
    <>
      <Navbar/>
      <div className="main">
        <h1>Hello, I'm Daiv.</h1>
        <h3>I'm an A.I. assistant. I'm completely free to use but consider <a href="https://donate.stripe.com/8wMbIWaBb9xq7Ty000">donating</a> to help maintain me.</h3>
        <h3>How can I assist you?</h3>
        <InputBox
          setDaivResponse={setDaivResponse}
          usageStats={usageStats}
          setUsageStats={setUsageStats}
          setLoading={setLoading}
          setFinishReason={setFinishReason}/>
        <ResponseBox
          loading={loading}
          daivResponse={daivResponse}
          finishReason={finishReason}/>
        {usageStats&&
          <UsageStats
            usageStats={usageStats}/>}
      </div>
    </>
  )
}

export default App
