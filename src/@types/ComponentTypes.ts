export type ContainerPanelProps = {
    children: JSX.Element[] | JSX.Element
}

export enum ButtonTypes {
    Value,
    Operator,
    CommandEnter,
    CommandDelete,
    MemoryReset,
    MemorySet,
    MemoryRead
}