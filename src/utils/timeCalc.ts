export function calculateTimeLeft(created_at: string, hoursLeft: number, currentDate: Date): string {
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
export     const date = new Date();