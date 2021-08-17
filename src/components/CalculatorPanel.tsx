import { CalculatorDisplay } from "./CalculatorDisplay"
import { CalculatorKeyPad } from "./CalculatorKeypad"

export function CalculatorPanel() {
  return (
    <div className="w-full h-full bg-gray-400 flex flex-col justify-center">
      <CalculatorDisplay value={0} />
      <CalculatorKeyPad />
    </div>
  )
}
