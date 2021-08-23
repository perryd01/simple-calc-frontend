export interface ICalcHttp {
    statusCode: number
    log?: string | null
    value?: number | null
}

export interface ICalcHttpPost {
    command: string
    value?: number | null
}