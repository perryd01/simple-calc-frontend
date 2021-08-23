import { CalculatorDisplay } from "./CalculatorDisplay"
import { CalculatorKeyPad } from "./CalculatorKeypad"
import { useCalcDisplayedStore, useCalcWritableStore } from "../store"
import { useHotkeys } from "react-hotkeys-hook"

const allowedKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "/", "*", "-", "+", "."]

export function CalculatorPanel() {
  const displayedStore = useCalcDisplayedStore((state) => state)
  const writableDisplay = useCalcWritableStore((state) => state)

  useHotkeys("*", (event: KeyboardEvent) => {
    if (allowedKeys.includes(event.key)) writableDisplay.addOne(String(event.key))
    if (event.key === "Backspace") {
      writableDisplay.removeOne()
    }
  })

  return (
    <div className="w-full h-full  flex flex-col justify-center">
      <CalculatorDisplay upper={displayedStore.value} lower={writableDisplay.value} />
      <CalculatorKeyPad />
    </div>
  )
}
