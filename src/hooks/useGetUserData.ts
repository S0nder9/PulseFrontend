import authUser from "@/components/server/Auth";
import { useEffect, useState } from "react";

const useGetUserData = () =>{
const [userData, setUserData] = useState<userData | null>(null);
const [errorState, setError] = useState({
  status: false,
  text: "",
})
const isMounted = useIsMounted()
    const getData = async() =>{
        const response = await authUser();
        setUserData(response.userData);
    }
    return {userData,errorState,isMounted,getData} 
}
export const useIsMounted = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);
    return isMounted;
};