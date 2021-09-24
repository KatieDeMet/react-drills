import React, { useState } from 'react';
import './App.css';

function App() {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const handleClick = () => {
    alert(`Username: ${userName} Password: ${password}`)
  }

  return (
    <div>
      <label for="userName">Username: </label>
      <input id="userName" onChange={(e) => setUserName(e.target.value)}></input>
      <label for="password"></label>
      <input id="password" onChange={(e) => setPassword(e.target.value)}></input>
      <button onClick={handleClick}>Login</button>
    </div>
  );
}

export default App;
