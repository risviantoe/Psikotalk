import React from "react"
import Counter, { xxx } from "./components/Counter"
import Sembarang from "./typescript-basic"

console.log(Sembarang);

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <Counter defaultValue={20} title={"counter"}/>
    </div>
  )
}

export default App