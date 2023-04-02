import { useState } from 'react'
import Edit from './components/Edit'
import Input from './components/Input'
import List from './components/List'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Input />
      <List />
    </div>
  )
}

export default App
