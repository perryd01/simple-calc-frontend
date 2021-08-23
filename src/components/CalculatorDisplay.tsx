import { useState } from "react"

export function CalculatorDisplay(props: { upper: number; lower: string }) {
  return (
    <div className="w-11/12 py-4 bg-gray-50 border-4 mx-auto pr-8 text-right">
      <div id="upper" className="text-xl">
        <p>{props.upper}</p>
      </div>
      <div id="lower" className="text-2xl text-gray-500">
        <p>{props.lower}</p>
      </div>
    </div>
  )
}
