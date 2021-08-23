import { CalculatorDisplay } from "./CalculatorDisplay"
import { CalculatorKeyPad } from "./CalculatorKeypad"
import create from "zustand"

interface CalcState {
  value: number
  increment: () => void
  reduction: () => void
}

const useStore = create<CalcState>((set) => ({
  value: 0,
  increment: () => {
    set((state) => ({
      value: state.value + 1
    }))
  },
  reduction: () => {
    set((state) => ({
      value: state.value - 1
    }))
  }
}))

export interface WritableCalcDisplayState {
  value: string
  addOne: (char: string) => void
  deleteOne: () => void
}

const useWritableCalcDisplay = create<WritableCalcDisplayState>((set) => ({
  value: "",
  addOne: (char: string) => {
    set((state) => ({
      value: state.value + char
    }))
  },
  deleteOne: () => {
    set((state) => ({
      value: state.value.slice(0, -1)
    }))
  }
}))

export function CalculatorPanel() {
  const num = useStore((state) => state.value)
  const increase = useStore((state) => state.increment)
  const decrease = useStore((state) => state.reduction)

  const writableDisplay = {
    value: useWritableCalcDisplay((state) => state.value),
    addOne: useWritableCalcDisplay((state) => state.addOne),
    deleteOne: useWritableCalcDisplay((state) => state.deleteOne)
  }
  return (
    <div className="w-full h-full bg-gray-400 flex flex-col justify-center">
      <CalculatorDisplay upper={num} lower={writableDisplay.value} />
      <CalculatorKeyPad func={writableDisplay} />
      <button onClick={increase}>one up</button>
      <button onClick={decrease}>one down</button>
      <button onClick={() => writableDisplay.addOne("A")}>add A</button>
      <button onClick={() => writableDisplay.addOne("B")}>add B</button>
      <button onClick={() => writableDisplay.deleteOne()}>delete one</button>
    </div>
  )
}
