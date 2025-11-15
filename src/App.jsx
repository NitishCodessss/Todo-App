import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-center '>
      <h1 className='text-center text-3xl font-bold p-4 w-3xl bg-teal-900 text-teal-100 rounded-2xl mt-7'>Create Your Todo and grow fast</h1>
     </div>
     <div className='flex justify-center h-100 mt-8'>
       <form >
        <input type="text"
        placeholder='Enter Todos here . . .'
        className="text-xl border-2 border-teal-900 text-amber-50 rounded-2xl p-3 mr-5"
         />

        <input type="text"
         placeholder='Write description here'
        className="text-xl border-2 border-teal-900 text-amber-50 rounded-2xl p-3"
         />
         <button className='text-xl border-2 border-teal-900 text-teal-100 rounded-2xl p-3 px-5 ml-25 '>Add</button>
      </form>
     </div>
   
    </>
  )
}

export default App
