import React from "react"
import {BrowserRouter,Routes, Route} from 'react-router-dom'
// const Login = lazy(()=> import('./pages/Login'))
// const Home = lazy(()=> import('./pages/Home'))
import Home from "./pages/Home"

function App() {


  return (
    <>
     <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} /> 
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
