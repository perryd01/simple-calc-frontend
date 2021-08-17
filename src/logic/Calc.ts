export class Calculator {
    currentValue: number | null = null
    memoryValue: number | null = null
    displayedValue: number = 0



    public setMemoryValue(v: number) {
        if (v === this.memoryValue) return
        this.memoryValue = v
    }



}