import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("")

  const handleClick = (value) => {
    if (value === "C") return setInput("")

    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Ошибка");
      }
    } else if (value === "^") {
      setInput(input + "**");
    } else if (value === "%") {
      setInput((eval(input) / 100).toString())
    } else if (value === "√") {
      try {
        setInput(Math.sqrt(eval(input)).toString())
      } catch {
        setInput("Ошибка")
      }
    }else {
      setInput (input + value)
    }
  }

  const buttons = [
    "7", "8", "9", "+",
    "4", "5", "6", "-",
    "1", "2", "3", "*",
    "0", ".", "^", "/",
    "%", "√", "C", "=" 
  ];

  return (
    <div style={{ maxWidth: 300, margin: "0 auto", textAlign: "center" }}>
      <h1>calculator</h1>
      <input value={input} readOnly style={{ width: "100%", fontSize: 24 }} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 5 }}>
        {buttons.map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
      </div>
    </div>
  );
}





export default App
