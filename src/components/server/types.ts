const host ="http://127.0.0.1:8000/api/v1/"
interface statusType {
    code:string | number,
text:string
}

export { host }
export type { statusType }
