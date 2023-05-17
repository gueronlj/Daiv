import { useState, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Configuration, OpenAIApi } from "openai";
import InputBox from './components/input-box.jsx'
import ResponseBox from './components/response-box.jsx'
import UsageStats from './components/usage-stats.jsx'
import Navbar from './components/navbar.jsx'
import DrawerAppBar from './components/app-bar.jsx'
import NewConvoButton from './components/new-conversation-btn.jsx'
import CopyBtn from './components/copy-btn.jsx'
import FinishReasonBox from './components/finish-reason.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [daivResponse, setDaivResponse] = useState(``)
  const [usageStats, setUsageStats] = useState(null)
  const [loading, setLoading] = useState(false)
  const [finishReason, setFinishReason] = useState(null)
  const [hasResponded, setHasResponded] = useState(false)

  const settings = useRef({
    temperature: .01
  })

  // const showToast = (reason) => {
  //   if (reason === 'length'){
  //     toast.error('Your prompt was too long. Shorten or simplify your prompt', {
  //       position: toast.POSITION.TOP_CENTER
  //     });
  //   } else {
  //     toast.success('Success Notification !', {
  //       position: toast.POSITION.BOTTOM_CENTER
  //     });
  //   }
  // };

  const showErrorToast = (error) => {
    toast.error('Your prompt was too long. Try breaking it into smaller parts.',{
      position: toast.POSITION.BOTTOM_CENTER
    });
  }

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
          setFinishReason={setFinishReason}
          setHasResponded={setHasResponded}
          showErrorToast={showErrorToast}
          settings={settings.current}/>
        <ResponseBox
          loading={loading}
          daivResponse={daivResponse}
          finishReason={finishReason}/>
        {hasResponded && <>
          <div className="response-toolbar">
            <CopyBtn
              textToCopy={daivResponse}/>
            <NewConvoButton
              setDaivResponse={setDaivResponse}
              setHasResponded={setHasResponded}/>
          </div>
          <FinishReasonBox
            finishReason={finishReason}/>
        </>}
        {usageStats &&
          <UsageStats
            usageStats={usageStats}/>}
        <ToastContainer/>
      </div>
    </>
  )
}

export default App
