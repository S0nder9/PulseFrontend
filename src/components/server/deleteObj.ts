import { host } from "./types";

async function deleteTask(taskId: number) {
try {
const response = await fetch(`${host}/api/task/${taskId}`, {
method: 'DELETE',
});
if (!response.ok) {
throw new Error(`HTTP error ${response.status}`);
}
} catch (error) {
console.error('Error deleting object:', error);
}
}
export {deleteTask}