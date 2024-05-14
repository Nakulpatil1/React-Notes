import { useState } from "react"
import "./App.css"

function App() {
  
  const [counter, setcounter] = useState(0)     //useState Is Used to Store and Update in a component on UI as well.
  //  let counter = 10;
 const addValue =  () => {
  // counter = counter + 1
  if (counter < 20) {
    setcounter(counter + 1)
  }
 };

const removeValue = function () {
  if (counter > 0) {
    setcounter(counter - 1)
  }
};

   return (
    <><h1>Hello Nakul</h1>
    <h2>Counter:{counter}</h2>
    <button onClick={addValue} >Add Value</button><br /><br />
    <button onClick={removeValue}> Remove Value</button>
    </>
    
  )
}
export default App
