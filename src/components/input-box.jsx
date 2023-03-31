import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Configuration, OpenAIApi } from 'openai';

const InputBox  = () => {
  const apiKey = import.meta.env.VITE_API_KEY
  const orgId = import.meta.env.VITE_ORG_ID
  const [userPrompt, setUserPrompt] = useState(``)
  const [daivResponse, setDaivResponse] = useState(``)
  const [totalTokens, setTotalTokens] = useState(0)
  const [loading, setLoading] = useState(false)
  const URL = `http://localhost:3000`

  const writeToLog = async (costObj, promptObj) => {
    const payload = {
      content:promptObj.messages[0].content,
      cost:{
        response:costObj.completion_tokens,
        prompt:costObj.prompt_tokens,
        total:costObj.total_tokens
      }
    }
    try{
      const response = await axios.post(`${URL}/log`, payload)
      console.log(response);
    }catch(error){
      console.log(error);
    }
  }

  const makeRequest = async() => {
    setLoading(true)
    const config = new Configuration({
      apiKey: apiKey
    })
    const promptObj = {
      model:'gpt-3.5-turbo',
      messages: [
        {role: 'user', content: userPrompt},
      ],
      max_tokens: 2000,
      temperature: 1,
    }

    const openai = new OpenAIApi(config)
    const response = await openai.createChatCompletion(promptObj)
    setDaivResponse(response.data.choices[0].message.content)
    setTotalTokens(response.data.usage.total_tokens)
    console.log(response);
    writeToLog(response.data.usage, promptObj)
    setLoading(false)
  }

  const handleInput = (e) => {
    setUserPrompt(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    makeRequest()
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <textarea onChange={handleInput}/>
        <button type='submit'>Submit</button>
      </form>
      {loading?
        <p>Let me think...</p>:<p>{daivResponse}</p>
      }
      <p>Tokens used: {totalTokens}</p>
    </>
  )
}
export default InputBox;
