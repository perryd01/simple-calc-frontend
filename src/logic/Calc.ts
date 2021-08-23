import { ICalcHttp, ICalcHttpPost } from "./HttpTypes"

const base = process.env.REACT_APP_API_BASE

export const loadMemory = async (): Promise<number> => {
    try {
        const resp: ICalcHttp = await (await fetch(`${base}get`, {})).json()
        console.log(resp)
        if (typeof resp.value === "number") {
            return resp.value
        } else {
            return 0
        }
    } catch (e) {
        console.log(e)
        return 0
    }
}

export const writeMemory = async (n: number): Promise<ICalcHttp> => {
    const resp = await (await fetch(`${base}set`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            command: "write",
            value: n
        } as ICalcHttpPost)
    })).json()
    console.log(resp)
    return resp
}

export const resetMemory = async (): Promise<ICalcHttp> => {
    const resp = await (await fetch(`${base}reset`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            command: "reset",
        } as ICalcHttpPost)
    })).json()
    console.log(resp)
    return resp
}


interface CalculationValidity {
    input: string
    value: number,
    valid: boolean
}

// https://stackoverflow.com/a/6479298
// https://kep.cdn.indexvas.hu/1/0/3030/30301/303013/30301331_d05ef3ef7734200eb5e9783d35e35f76_wm.jpg
export const doTheMath = (s: string): CalculationValidity => {
    if (s.length < 3) {
        return { valid: false, value: 0, input: s }
    }

    const operators = ['+', '-', '*', '/', '.']

    let prevChar = s[0]
    for (let i = 1; i < s.length; i++) {
        if (operators.includes(prevChar) && operators.includes(s[i])) {
            return { valid: false, value: 0, input: s }
        }
        prevChar = s[i]
    }


    try {
        const value = evil(s)
        if (typeof value === "number") {
            return { value: value, valid: true, input: s }
        } else {
            return { value: 0, valid: false, input: s }
        }
    } catch (e) {
        return { value: 0, valid: false, input: s }
    }
}

// kukázott cucc innen
// https://stackoverflow.com/a/18082175
function evil(fn: string) {
    // eslint-disable-next-line no-new-func
    return new Function('return ' + fn)()
}