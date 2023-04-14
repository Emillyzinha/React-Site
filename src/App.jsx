import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Principal from './pages/principal'
import Produtos from './pages/produtos'
import ProdutoEscolhido from './pages/produtoEscolhido'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Principal />} />
      <Route path='/produtos' element={<Produtos />} />
      <Route path='/produtoescolhido' element={<ProdutoEscolhido />} />
    </Routes>
  )
}

export default App
