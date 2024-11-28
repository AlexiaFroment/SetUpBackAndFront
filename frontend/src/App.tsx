import { useState, useEffect } from "react"
import axios from "axios"
import { Hello } from "./components/Hello"
import "./App.css"

function App() {
  const [message, setMessage] = useState("")
  useEffect(() => {
    axios
      .get("http://localhost:8990/api/message")
      .then((resp) => setMessage(resp.data.message))
      .catch((err) => console.error(err))
  }, [])
  return (
    <>
      <Hello />
      {message}
    </>
  )
}

export default App
