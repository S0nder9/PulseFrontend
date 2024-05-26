import { host } from "./types";

async function emploeeHours(id: number): Promise<number| null> {
    function getMonthNumber(date: Date): number {
        return date.getMonth() + 1;
    }
let mounth = getMonthNumber(new Date());
    try {
    const response = await fetch(`${host}UserWithTask_worktime_managing/${id}/${mounth}`);
    if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
    }
    const responseData = await response.json();
    console.log(responseData)
    return responseData.workHours;
    } catch (error) {
    throw new Error("")
    }
    }
    export{emploeeHours}