import { useState } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body"
import './App.css'

export default function App() {
  const [contentIndex, setContentIndex] = useState(0);

  return (
    <div className="App">
      <Navbar changeContent={(index) => setContentIndex(index)} />
      <Body content={contentIndex} />
    </div>
  );
}