import { ButtonTypes } from "../@types/ComponentTypes"
import { doTheMath, loadMemory, resetMemory, writeMemory } from "../logic/Calc"
import { useCalcDisplayedStore, useCalcWritableStore } from "../store"
import { CalculatorButton, CalculatorCommandButton } from "./CalculatorButton"

export function CalculatorKeyPad(props: { state?: any }) {
  const valueDisplay = useCalcDisplayedStore((state) => state)
  const writableDisplay = useCalcWritableStore((state) => state)
  return (
    <div className="grid grid-cols-4 gap-4 w-11/12 mx-auto pt-8">
      <CalculatorButton value={1} />
      <CalculatorButton value={2} />
      <CalculatorButton value={3} />
      <CalculatorButton value="+" styleName="bg-yellow-200" buttonType={ButtonTypes.Operator} />
      <CalculatorButton value={4} />
      <CalculatorButton value={5} />
      <CalculatorButton value={6} />
      <CalculatorButton value="-" styleName="bg-yellow-200" buttonType={ButtonTypes.Operator} />
      <CalculatorButton value={7} />
      <CalculatorButton value={8} />
      <CalculatorButton value={9} />
      <CalculatorButton value="*" styleName="bg-yellow-200" buttonType={ButtonTypes.Operator} />
      <CalculatorButton value={0} styleName="col-span-3" />
      <CalculatorButton value="/" styleName="bg-yellow-200" buttonType={ButtonTypes.Operator} />
      <CalculatorCommandButton
        value="="
        styleName="bg-yellow-200 col-span-3"
        buttonType={ButtonTypes.CommandEnter}
        onClick={() => {
          const v = doTheMath(writableDisplay.value)
          console.log(v)
          writableDisplay.reset()
          valueDisplay.set(v.value)
        }}
      />
      <CalculatorButton value="." styleName="bg-yellow-200" buttonType={ButtonTypes.Operator} />
      <CalculatorCommandButton
        value="delete one"
        buttonType={ButtonTypes.CommandDelete}
        onClick={() => writableDisplay.removeOne()}
      />
      <CalculatorCommandButton
        value="M READ"
        buttonType={ButtonTypes.MemoryRead}
        onClick={async () => valueDisplay.set(await loadMemory())}
      />
      <CalculatorCommandButton
        value="M SAVE"
        buttonType={ButtonTypes.MemorySet}
        onClick={async () => await writeMemory(valueDisplay.value)}
      />
      <CalculatorCommandButton
        value="M RESET"
        buttonType={ButtonTypes.MemoryReset}
        onClick={async () => await resetMemory()}
      />
      <CalculatorCommandButton
        value="Clear value"
        styleName="col-span-4"
        buttonType={ButtonTypes.MemoryReset}
        onClick={() => valueDisplay.reset()}
      />
    </div>
  )
}
