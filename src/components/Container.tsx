import { ContainerPanelProps } from "../@types/ComponentTypes"

export function ContainerPanel(props: ContainerPanelProps) {
  return <div className="w-3/5 mx-auto h-full">{props.children}</div>
}
