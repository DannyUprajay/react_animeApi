import { useState } from 'react'
import {Routes,Route} from "react-router-dom";
import './App.css'
import Home from "./components/Home.jsx";
import Nav from "./components/Nav.jsx";
import MangaDetail from "./components/MangaDetail.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Nav/>
    <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={'/:id'} element={<MangaDetail/>} />
    </Routes>
    </>
  )
}

export default App
