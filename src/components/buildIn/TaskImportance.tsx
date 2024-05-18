import React, { useCallback } from 'react'
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { calculateTimeLeft } from '@/utils/timeCounter';
import { ClockIcon } from '@/svgs/Svg';

type Props = {
    value:number,
    toAcc : number,
    created_at:string | null,
}

function TaskImportance(props: Props) {
    const calculateTimeLeftCallback = useCallback(
        () => {
            console.log("")
            return calculateTimeLeft(props.created_at || '', props.toAcc || 0)
        
        },
        [props.created_at, props.toAcc]
    )

    return (
        <Card className="w-full max-w-md mt-5">
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
                    props.created_at && props.toAcc ?
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Оставшееся время</span>
                            <div className="flex items-center gap-2">
                                <ClockIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                <span className="text-2xl font-bold">{calculateTimeLeftCallback()}</span>
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
