import create from "zustand"

export interface CalcDisplayedType {
  value: number
  increment: () => void
  decrement: () => void
  reset: () => void
  set: (n: number) => void
}

export interface CalcWritableType {
  value: string
  addOne: (c: string) => void
  removeOne: () => void
  reset: () => void
}

export const useCalcDisplayedStore = create<CalcDisplayedType>((set) => ({
  value: 0,
  increment: () => set((state) => ({ value: state.value + 1 })),
  decrement: () => set((state) => ({ value: state.value - 1 })),
  reset: () => set(() => ({ value: 0 })),
  set: (n) => set(() => ({ value: n }))
}))

export const useCalcWritableStore = create<CalcWritableType>((set) => ({
  value: "",
  addOne: (c) => set((state) => ({ value: state.value + c })),
  removeOne: () => set((state) => ({ value: state.value.slice(0, -1) })),
  reset: () => set(() => ({ value: "" }))
}))
