import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-gray-400 text-black p-4 rounded" >Welcome</h1>
      <Card username="Asus"/>
      <Card username ="Macbook"/>
    </>
  )
}

export default App
