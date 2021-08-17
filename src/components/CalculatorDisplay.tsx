import { useState } from "react"

export function CalculatorDisplay(props: { value: number }) {
  const [upper, setUpper] = useState(0)
  const [lower, setLower] = useState(0)

  return (
    <div className="w-11/12 py-4 bg-gray-50 border-4 mx-auto pr-8 text-right">
      <div id="upper">
        {upper === lower ? <p className="invisible">{upper}</p> : <p>{upper}</p>}
      </div>
      <div id="lower" className="text-2xl font-bold">
        <p>{lower}</p>
      </div>
    </div>
  )
}
