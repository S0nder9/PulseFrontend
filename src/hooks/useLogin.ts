import { checkCookie } from "@/components/server/CheckCookie";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useLogin = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState<boolean >();
    const [error, setError] = useState(null);
  const router   = useRouter()
  
    const AuthUser = async () => {
setIsLoading(true)
    try {
         const isAuth =  await checkCookie()
      if(isAuth){
  router.push('/profile')
  return
      }
      } catch (error:any) {
        setError(error)
      }
    };
  
    return { data, isLoading, error, AuthUser };
  };
  
  export default useLogin;