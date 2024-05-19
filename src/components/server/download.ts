import { host } from "./types";

async function download(id:number):Promise<jobTitle[]> {
    const res = await fetch(`${host}get_otchet/${id}`,);
    if(!res.ok) {
        console.log(res.status)
        throw new Error('Failed to fetch data')

    }
    const receiveddata = await res.json();
    return receiveddata
}