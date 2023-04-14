import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import PageError from './pages/PaginaError'
import Home from './pages/Home'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import NavBar from './components/navBar'
import { useNavigate } from "react-router-dom";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     errorElement: <PageError />
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/home",
//     element: <Home />,
//   },
// ]);

function App() {
  const [count, setCount] = useState(0)
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const [emailUser, emailUserSenha] = useState({})

  const navigate = useNavigate()
  const logar = () => {

    localStorage.setItem("dados", JSON.stringify({ login: email, senha:senha })) // esse string transforma o login em um json
    setTimeout(() => {
      obterUser()  
    }, 2000);
    
    navigate('/inicio')
  }


  const obterUser = () => {
    const dadosLS = JSON.parse(localStorage.getItem("dados"))
    if (dadosLS){
      emailUserSenha(dadosLS)
      console.log(dadosLS)
    }
  }

  return (
    <>
      <NavBar em={emailUser} />
      <Routes>
        <Route path='/' element={<Login logar={logar} setE={setEmail} setS={setSenha} />} />
        <Route path='/inicio' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
