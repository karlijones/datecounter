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

  return <div>TEST</div>;
}

