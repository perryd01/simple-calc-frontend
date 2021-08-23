import React from "react"
import { CalculatorPanel } from "./components/CalculatorPanel"
import { ContainerPanel } from "./components/Container"

function App() {
  return (
    <div className="bg-gray-400 h-full w-full min-h-screen bg-basic-bg blur-2xl	">
      <ContainerPanel>
        <CalculatorPanel />
      </ContainerPanel>
    </div>
  )
}

export default App
