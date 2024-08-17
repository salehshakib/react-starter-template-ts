import { useState } from 'react';

import './App.css';

const id = 123;

const hello = { 1: 'hello', 2: 'world' };

function App(): JSX.Element {
  const [counter, setCounter] = useState(0);

  return <div className="App">hello world</div>;
}

export default App;
