import { useState } from "react";
import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, seCount] = useState(0);

  const date = new Date("october 14 2024");
  date.setDate(date.getDate + count);

  return (
    <div>
      <div>
        <button onClick={() => setCount(c=>c-1)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount(c=>c+1)}>+</button>
      </div>
      <p>
        <span>
          {count === 0 
          ? "Today is" 
          : count > 0 
          ? `${count} days from today is`
          : `${Math.abs(count)} days ago was`}
        </span>
      <span>{date.toDateString()}</span>
    </p>
    </div>
  );
}

