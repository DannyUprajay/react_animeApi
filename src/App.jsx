import { useState } from 'react'
import {Routes,Route} from "react-router-dom";
import './App.css'
import Home from "./components/Home.jsx";
import Nav from "./components/Nav.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Nav/>
    <Routes>
        <Route path={'/'} element={<Home/>} />
    </Routes>
    </>
  )
}

export default App
