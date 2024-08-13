import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  let [count, setcount] = useState("black");
  

  return (
    <>
    <div style={{backgroundColor: count}}>
      <button onClick={function() {
       setcount("grey")
      }}
      className="bg-gray-400 text-black p-4 rounded" style={{backgroundColor:"white"}} >Welcome
      </button>

      <Card username="Asus" btnText="Click Here"/>

      <Card username ="Macbook" btnText="Visit Here"/>

    </div>
      
    </>
  )
}

export default App
