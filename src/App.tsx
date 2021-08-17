import React from "react"
import { CalculatorPanel } from "./components/CalculatorPanel"
import { ContainerPanel } from "./components/Container"

function App() {
  return (
    <div className="bg-white h-full w-full min-h-screen">
      <ContainerPanel>
        <CalculatorPanel />
      </ContainerPanel>
    </div>
  )
}

export default App
