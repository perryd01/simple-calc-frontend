import classNames from "classnames"

export function CalculatorButton({
  value,
  styleName = ""
}: {
  value: string | number
  styleName?: string | undefined
}) {
  return (
    <div
      className={classNames(
        "bg-red-300 border-2 text-center font-bold p-4 hover:bg-red-400 cursor-pointer",
        styleName
      )}
    >
      <p>{value}</p>
    </div>
  )
}
