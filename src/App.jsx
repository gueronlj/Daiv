import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Configuration, OpenAIApi } from "openai";
import InputBox from './components/input-box.jsx'

function App() {
  return (
    <div className="App">
      <h1>Hello, I am Daiv.</h1>
      <h2>How can I help you?</h2>
      <InputBox/>
    </div>
  )
}

export default App
