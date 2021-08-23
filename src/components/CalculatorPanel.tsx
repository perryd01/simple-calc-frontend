import { CalculatorDisplay } from "./CalculatorDisplay"
import { CalculatorKeyPad } from "./CalculatorKeypad"
import { useCalcDisplayedStore, useCalcWritableStore } from "../store"

export function CalculatorPanel() {
  const displayedStore = useCalcDisplayedStore((state) => state)
  const writableDisplay = useCalcWritableStore((state) => state)

  return (
    <div className="w-full h-full  flex flex-col justify-center">
      <CalculatorDisplay upper={displayedStore.value} lower={writableDisplay.value} />
      <CalculatorKeyPad />
    </div>
  )
}
