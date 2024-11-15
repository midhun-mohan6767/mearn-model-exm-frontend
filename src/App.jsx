import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import PagenotFound from './pages/PagenotFound'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path="/home" element = {<Home/>} />
      <Route path="/register" element = {<Register/>} />
      <Route path = "/" element = {<Login/>} />
      <Route path="*" element = {<PagenotFound/>} />
    </Routes>


    </>
  )
}

export default App
