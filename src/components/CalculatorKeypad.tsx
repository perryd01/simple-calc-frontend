import { CalculatorButton } from "./CalculatorButton"

export function CalculatorKeyPad() {
  return (
    <div className="grid grid-cols-3 gap-4 w-11/12 mx-auto pt-8">
      <CalculatorButton value={1} />
      <CalculatorButton value={2} />
      <CalculatorButton value={3} />
      <CalculatorButton value={4} />
      <CalculatorButton value={5} />
      <CalculatorButton value={6} />
      <CalculatorButton value={7} />
      <CalculatorButton value={8} />
      <CalculatorButton value={9} />
      <CalculatorButton value={0} styleName="col-span-2" />
      <CalculatorButton value="clear" />
      <CalculatorButton value="M LOAD" />
      <CalculatorButton value="M SAVE" />
      <CalculatorButton value="🤘🏼" />
    </div>
  )
}
