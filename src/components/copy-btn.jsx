import {useState} from 'react';

const CopyBtn = ({textToCopy}) => {

  const [isCopied, setIsCopied] = useState(false)

  const copyText = async (text) => {
    //check if this has browser support
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      //if not supported, use this.
      return document.execCommand('copy', true, text);
    }
  }

  const handleClick = async () => {
    try{
      copyText(textToCopy)
      setIsCopied(true)
      setTimeout(() => {
         setIsCopied(false);
       }, 3000);
    } catch (error){
      console.log(error);
    }
  }

  return(
    <button onClick={handleClick}>
      <span>{isCopied ? 'Copied' : 'Copy'}</span>
    </button>
  )
}

export default CopyBtn;
