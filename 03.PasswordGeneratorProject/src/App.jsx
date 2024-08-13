import { useState, useCallback, useEffect, useRef } from 'react'           //Importing 3 types of hooks.

import './App.css'

function App() {
  const [length, setlength] = useState(8);              //We taking default length of password 8, but it can be increased or decreased.
  const [number, setnumber] = useState(false);          //onclicking number it will provide numbers to password ,so by default its false.
  const [character, setcharacter] = useState(false);    //onclicking character it will provide char to password ,so by default its false.
  const [password, setpassword] = useState("");         //We have to generate password so its empty.

  //useRef is a React Hook that lets you reference a value that’s not needed for rendering.
  //Syntax :- useRef(initialValue);
  const passwordRef = useRef(null);
  
  
  //Syntax of Callback hook :- useCallback(function , dependencies)
  //Dependencies - List of all reactive values referenced inside of the fn code.
  const passwordGenerator = useCallback(function () {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) {
      string += "0123456789";
    }
    if(character){
      string += "!@#$%^&*_-+=`~";
    }
    for (let i = 1; i < length; i++){
      let char = Math.floor(Math.random() * string.length + 1)
      pass += string.charAt(char)
    }
    setpassword(pass)
  } , [length, number, character]);

  const copyPasswordtoClipboard = useCallback(function () {
    passwordRef.current?.select();                          // ? means optional.
    window.navigator.clipboard.writeText(password);
  },[password]);



  //Syntax for Effect hook = useEffect(setup, dependencies)
    useEffect(function () {
    passwordGenerator()
  }, [length, number, character, passwordGenerator])
  


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-green-500 bg-gray-800">
        <h2 className='text-white text-center my-3'> PASSWORD GENERATOR</h2>
        
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} placeholder='Password' className="outline-none w-full py-1 px-3 my-2" 
          ref={passwordRef}/>  
          <button onClick={copyPasswordtoClipboard} className='text-white'>Copy</button>
        </div>

        <div className="flex text-sm gap-x-4">    

          <div className="flex items-center gap-x-2">
            <input type="range" value={length} min={8} max={20} className='cursor-pointer' onChange={function(e) {
              setlength(e.target.value)
            }}/>
            <label className='text-white'> length : {length}</label>
          </div>

          <div className='flex text-sm gap-x-1'>
            <input type="checkbox" value={number} onChange={function () {
              setnumber((prev) => !prev);
            }} />
            <label className='text-white'>Number{number}</label>
          </div>

          <div className='flex text-sm gap-x-1'>
            <input type="checkbox" value={character} onChange={function (e) {
              setcharacter((prev) => !prev);
            }} />
            <label className='text-white'>Character {character}</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
