import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Configuration, OpenAIApi } from 'openai';

const InputBox  = () => {
  const apiKey = import.meta.env.VITE_API_KEY
  const orgId = import.meta.env.VITE_ORG_ID
  const [userPrompt, setUserPrompt] = useState(``)
  const [daivResponse, setDaivResponse] = useState(``)
  const [totalTokens, setTotalTokens] = useState(0)

  const makeRequest = async() => {
    const config = new Configuration({
      apiKey: apiKey
    })
    const openai = new OpenAIApi(config)
    const response = await openai.createChatCompletion({
      model:'gpt-3.5-turbo',
      messages: [
        {role: 'user', content: userPrompt},
      ],
      max_tokens: 200,
      temperature: 0,
    })
    console.log(response.data);
    setDaivResponse(response.data.choices[0].message.content)
    setTotalTokens(response.data.usage.total_tokens)
  }

  const handleInput = (e) => {
    setUserPrompt(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    makeRequest()
  }

  return(<>
      <form onSubmit={handleSubmit}>
        <textarea onChange={handleInput}/>
        <button type='submit'>Submit</button>
      </form>
      <p>{daivResponse}</p>
      <p>Total tokens used: {totalTokens}</p>
  </>)
}
export default InputBox;
