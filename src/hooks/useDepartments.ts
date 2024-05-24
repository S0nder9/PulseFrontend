import { fetchAllTitles } from "@/components/server/FetchJobTitle"
import { everyDepartment } from "@/components/server/getAllDepartment"
import { get } from "http"
import { useState } from "react"

 const useDeparments = () => {
    const [departments, setDepartments] = useState<department[] | null>([])
    async function getDepartments() {
        const response = await everyDepartment()
        setDepartments(response)
    }
    getDepartments()
    return {departments}
}
const useJobTitles = () =>{
    const [jobTitles, setJobTitles] = useState<jobTitle[] | null>([])
    async function getJobTitles() {
        const response = await fetchAllTitles()
        setJobTitles(response)
    }
    getJobTitles()
    return{ jobTitles}
}
export {useJobTitles,useDeparments}