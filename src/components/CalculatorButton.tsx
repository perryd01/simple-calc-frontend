import classNames from "classnames"
import { ButtonTypes } from "../@types/ComponentTypes"
import { useCalcWritableStore } from "../store"

export function CalculatorButton(props: {
  value: string | number
  styleName?: string | undefined
  buttonType?: ButtonTypes
  onClick?: () => void
}) {
  const { value, styleName, buttonType = ButtonTypes.Value, ...rest } = props

  const writableDisplay = useCalcWritableStore((state) => state)
  const shouldRawPrint = [ButtonTypes.Value, ButtonTypes.Operator].includes(buttonType)
  return (
    <div
      {...rest}
      onClick={() => {
        if (shouldRawPrint) writableDisplay.addOne(String(value))
      }}
      className={classNames(
        "bg-red-300 rounded-2xl text-center font-bold p-4 hover:bg-red-400 cursor-pointer select-none opacity-90 shadow-2xl			",
        styleName
      )}
    >
      <p>{value}</p>
    </div>
  )
}

export function CalculatorCommandButton(props: {
  value: string | number
  buttonType?: ButtonTypes
  styleName?: string
  onClick: () => void
}) {
  const { value, buttonType, styleName, ...rest } = props
  return (
    <div
      {...rest}
      className={classNames(
        "bg-red-300 rounded-2xl text-center font-medium p-4 hover:bg-red-400 cursor-pointer  select-none opacity-90	shadow-2xl		",
        styleName
      )}
    >
      <p>{value}</p>
    </div>
  )
}
