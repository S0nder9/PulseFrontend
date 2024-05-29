import { host } from "./types";

async function emploeeHours(id: number): Promise<any> {
    function getMonthNumber(date: Date): number {
        return date.getMonth() + 1;
    }
let mounth = getMonthNumber(new Date());
    try {
    const response = await fetch(`${host}user_worktime/${id}`);
    if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
    }
    const responseData = await response.json();
    console.log(responseData)
    return responseData
    } catch (error) {
    throw new Error("")
    }
    }
    export{emploeeHours}