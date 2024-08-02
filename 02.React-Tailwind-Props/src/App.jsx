import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-gray-400 text-black p-4 rounded" >Welcome</h1>
      <Card username="Asus" btnText="Click Here"/>
      <Card username ="Macbook" btnText="Visit Here"/>
      
    </>
  )
}

export default App
