import { host } from "./types";

async function emploeeHours(id: number): Promise<number| null> {
    try {
    const response = await fetch(`${host}user_worktime/${id}`);
    if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
    }
    const responseData = await response.json();
    return responseData;
    } catch (error) {
    throw new Error("")
    }
    }
    export{emploeeHours}