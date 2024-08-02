# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Hooks Code Written Inside [App.jsx](#App)

---
## App

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
