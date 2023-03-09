import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const [initialValue, setInitialValue] = useState(0)
  const [value, setValue] = useState(0)

  const handleInitialValue = (e) => {
    setInitialValue(parseInt(e.target.value))
    setCount(parseInt(e.target.value))
  }

  const handleValue = (e) => {
    setValue(parseInt(e.target.value))
  }

  const handleIncrement = () => {
    setCount(count + value)
  }

  const handleDecrement = () => {
    setCount(count - value)
  }

  return (
    <div >
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Counter</h1>
        <div >
          <label for="setter">Set initial value: </label>
          <input id="setter" type="number" name="setter" onChange={handleInitialValue} value={initialValue} />
        </div>
        <div className='container2'>
          <label for="value">Set value to increment or decrement: </label>
          <input id="value" type="number" name="value" onChange={handleValue} value={value} />
        </div>
      <div className="mt-6 border-2 border-black">
        <div>
          Initial Value: {initialValue}
        </div>
        <button className='text-green bg-black hover:bg-gray-light hover:text-black border-2 rounded border-green p-1 m-2' onClick={handleIncrement}>
          Increment: +{value}
        </button>
        <button className='text-orange bg-black hover:bg-gray-light hover:text-black border-2 rounded border-orange p-1 m-2' onClick={handleDecrement}>
          Decrement: -{value}
        </button>
        <div>
          Count is: {count}
        </div>
      </div>
    </div>
  )
}

export default App
