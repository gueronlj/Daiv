import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Configuration, OpenAIApi } from 'openai';

const InputBox  = (props) => {
  const apiKey = import.meta.env.VITE_API_KEY
  const orgId = import.meta.env.VITE_ORG_ID
  const URL = import.meta.env.VITE_API_ENDPOINT
  const [userPrompt, setUserPrompt] = useState(``)

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
    try{
      props.setLoading(true);
      props.setFinishReason(null);

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

      const openai = new OpenAIApi(config);
      const response = await openai.createChatCompletion(promptObj);

      props.setDaivResponse(response.data.choices[0].message.content);
      props.setFinishReason(response.data.choices[0].finish_reason);
      props.setUsageStats(response.data.usage);
      writeToLog(response.data.usage, promptObj);
      props.setLoading(false);
    }catch(error){
      console.log(error);
    }
  }

  const handleInput = (e) => {
    setUserPrompt(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    makeRequest();
  }

  useEffect(() => {
    props.setFinishReason(null)
  },[])

  return(
    <form onSubmit={handleSubmit}>
      <textarea onChange={handleInput}/>
      <button type='submit'>Submit</button>
    </form>
  )
}
export default InputBox;
