import { useState } from 'react'
import countryData from "./resources/countryData.json" 
import './App.css'

function App() {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showsuggestion, setShowsuggestion] = useState(true)
  // console.log(countryData)

  function handlechange(e){
    setText(e.target.value)

    setSuggestion(countryData.filter((el)=>el.name.toLowerCase().startsWith(text.toLowerCase())))
    setShowsuggestion(true)

  }
  let handleEsc =(e)=>{
    if(e.keyCode==27){
      setShowsuggestion(false)
      console.log('escape')
    } 
  }
  return (
    <div>
      <h1>Search</h1>
     <input type="text" value={text} onChange={handlechange} onKeyDown={handleEsc}  list='suggest' />
     <datalist id='suggest' >
      {showsuggestion && suggestion.map((el,i)=>(
        <option key={i} value={el.name}></option>
      ))}
     </datalist>
     <button>Search</button>
    </div>
  )
}

export default App
