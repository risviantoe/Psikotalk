import React from "react"
import Counter, { xxx } from "./components/Counter"

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <Counter defaultValue={ 20 }/>
    </div>
  )
}

export default App