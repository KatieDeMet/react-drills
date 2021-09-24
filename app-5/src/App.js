import React, { useState } from 'react';
import './App.css';
import buddy from './buddy.jpg'

function Image(props) {
  return <img src={props.src} alt="dog" width="300" heigh="200" />
}

function App() {
  const [src, setSrc] = useState(buddy)

  return (
    <div>
      <Image src={src} />
    </div>
  );
}

export default App;
