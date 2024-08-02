## Hooks Code Written Inside [App.jsx](#Basic-Hooks-Code) in #01.ReactHooks Folder.

---
## Basic Hooks Code 

```javascript
import { useState } from "react"               //Tells which Hook is Imported to be utilized. Example useEffect can be imported etc..
import "./App.css"

function App() {
  
 const [counter, setcounter] = useState(0)     //useState Is Used to Store and Update in a component on UI as well.

 const addValue =  function() {
  if (counter < 20) {
    setcounter(counter+1)
  }
 };

const removeValue = function () {
  if (counter > 0) {
    setcounter(counter - 1)
  }
};

   return (
    <>
    <h1>Hello Nakul</h1>
    <h2>Counter:{counter}</h2>
    <button onClick={addValue} >Add Value</button><br /><br />
    <button onClick={removeValue}> Remove Value</button>
    </>
  )
}
export default App
```