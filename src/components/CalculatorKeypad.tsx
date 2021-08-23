import { CalculatorButton } from "./CalculatorButton"
import { WritableCalcDisplayState } from "./CalculatorPanel"

export function CalculatorKeyPad(props: { func: WritableCalcDisplayState }) {
  return (
    <div className="grid grid-cols-4 gap-4 w-11/12 mx-auto pt-8">
      <CalculatorButton value={1} />
      <CalculatorButton value={2} />
      <CalculatorButton value={3} />
      <CalculatorButton value="+" styleName="bg-yellow-200" />
      <CalculatorButton value={4} />
      <CalculatorButton value={5} />
      <CalculatorButton value={6} />
      <CalculatorButton value="-" styleName="bg-yellow-200" />
      <CalculatorButton value={7} />
      <CalculatorButton value={8} />
      <CalculatorButton value={9} />
      <CalculatorButton value="x" styleName="bg-yellow-200" />
      <CalculatorButton value={0} styleName="col-span-3" />
      <CalculatorButton value="/" styleName="bg-yellow-200" />
      <CalculatorButton value="clear" />
      <CalculatorButton value="M LOAD" styleName="italic" />
      <CalculatorButton value="M SAVE" styleName="italic" />
      <CalculatorButton value="M RESET" styleName="italic" />
    </div>
  )
}
