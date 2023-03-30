import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Configuration, OpenAIApi } from "openai";

function App() {
  const [engineList, setEngineList] = useState([])
  const apiKey = import.meta.env.VITE_API_KEY

  const getResponse = async() => {
    const config = new Configuration({
      organization: "org-va28fstFhQB2azoU9GGIvxTa",
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
      {engineList.map((engine) => (
        <li key={engine.id}>{engine.id}</li>
      ))}
    </div>
  )
}

export default App
