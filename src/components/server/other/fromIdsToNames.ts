import { getUserName } from "../getUserProjects";

async function toNames(id: number[]): Promise<userData[]> {
    const names = await iterateNames(id);
    return names;
}

async function iterateNames(id: number[]): Promise<userData[]> {
    const newNames: userData[] = [];
    if (Array.isArray(id)) {
        await Promise.all(id.map(async (userId) => {
            const name = await getUserName(userId);
            newNames.push(name);
        }));
    }
    return newNames;
}

function beautifyArray(arr: string[]): string {
    return arr.join(', ');
}

  export {toNames,beautifyArray}