import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Search/>
      <button onClick={()=>setCount((prev)=>prev+1)}>increment</button>
      <div>learn react</div>
      <div>naveen</div>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
