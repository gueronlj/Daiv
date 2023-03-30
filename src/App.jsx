import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Configuration, OpenAIApi } from "openai";
import InputBox from './components/input-box.jsx'

function App() {
  const [engineList, setEngineList] = useState([])
  const apiKey = import.meta.env.VITE_API_KEY
  const orgId = import.meta.env.VITE_ORG_ID

  const getResponse = async() => {
    const config = new Configuration({
      organization: orgId,
      apiKey: apiKey
    })
    const openai = new OpenAIApi(config)
    const response = await openai.listEngines()
    setEngineList(response.data.data);
    console.log(response.data.data);
  }

  useEffect(() => {
    getResponse()
  },[]);

  return (
    <div className="App">
      <h1>This is DAIV</h1>
      <h2>Tell Daiv what to do</h2>
      <InputBox/>
      {engineList.map((engine) => (
        <li key={engine.id}>{engine.id}</li>
      ))}
    </div>
  )
}

export default App
