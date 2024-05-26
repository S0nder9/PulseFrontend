import { host } from "./types";

async function sendReportP(data:sendReport): Promise<boolean> {
    if(!data){
        return false
    }
    const response = await fetch(`${host}user_with_task/0`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id:data.user_id,
            work_type:"T",
            work_id:data.work_id,
            work_time:data.work_time
        })
    });
if(!response.status){
    throw new Error('Failed to send data')
}


    return true

}
export {sendReportP}