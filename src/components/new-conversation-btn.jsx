const NewConvoButton = (props) => {

  const handleClick = () => {
    localStorage.clear();
    props.setDaivResponse('');
  }

  return (
    <button className="new-convo-btn" onClick={handleClick}>New Conversation</button>
  );
}

export default NewConvoButton;
