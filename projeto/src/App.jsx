import { useState } from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Home from './Pages/Home'
import Profile from './Pages/Profile'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/profile/' element={<Profile></Profile>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
