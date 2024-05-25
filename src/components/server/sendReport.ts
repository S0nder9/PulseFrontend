import { host } from "./types";

async function sendReportP(data:sendReport): Promise<any> {
    if(!data){
        return
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
console.log(response.text , "Статус создания проблемы") 
    const responseData = await response.json();

    return responseData

}
export {sendReportP}