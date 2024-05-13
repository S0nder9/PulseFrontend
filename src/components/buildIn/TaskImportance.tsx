import React from 'react'
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
type Props = {
    value:number,
    toAcc : number,
    created:string
}

function TaskImportance(props: Props) {
    function calculateTimeLeft(created_at: string, hoursLeft: number, currentDate: Date): string {
        console.log(created_at, hoursLeft, currentDate)
        const createdDate = new Date(created_at);
        console.log(createdDate.getUTCHours())
        const totalMilliseconds = hoursLeft * 60 * 60 * 1000;
        const expirationDate = new Date(createdDate.getTime() + totalMilliseconds);

        const timeDiff = expirationDate.getTime() - currentDate.getTime();
        const hoursLefts = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutesLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

        return `${hoursLefts}:${minutesLeft.toString().padStart(2, '0')}`;
    }
    const date = new Date();
    return (
        <Card className="w-full max-w-md">
            <CardContent className="grid gap-6">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Уровень важности</span>
                    <span className="text-2xl font-bold">{props.value}</span>
                </div>
                <div className="relative h-4 w-full rounded-full bg-gray-200 dark:bg-gray-800">
                    <div
                        aria-valuemax={10}
                        aria-valuemin={1}
                        aria-valuenow={props.value}
                        className="absolute left-0 top-0 h-full  rounded-full bg-black"
                        style={
                            {
                                width: `${props.value * 10}%`
                            }
                        }
                        role="progressbar"

                    />
                </div>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                </div>
                {
                    props.created && props.toAcc ? 
                    <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Оставшееся время</span>
                    <div className="flex items-center gap-2">
                        <ClockIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        <span className="text-2xl font-bold">{calculateTimeLeft(props.created, props.toAcc, date)}</span>
                    </div>
                </div>
                :
                null
                }
            
            </CardContent>
        </Card>
    )
}

export default TaskImportance
function ClockIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  }