
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { checkCookie } from '../server/CheckCookie';
import authUser from '../server/Auth';
import Image from 'next/image';
import Link from 'next/link';
type Props = {}

const Aside = (props: Props) => {
    const router   = useRouter()
    const [error,setError] = useState({
      status:false,
      text:"",
    })
    const [userData, setUserData] = useState<any>(null);
    useEffect(() => {
        const fetchData = async () => {
            const isToken = await checkCookie()
            if (!isToken) {
                router.push('/login')
                return
            }
            try {
              const responseUser= await authUser();
              setUserData(responseUser.userData);
            }
            catch (error) {
              
                setError({status:true, text:"Ошибка аутентификации пользователя"})
            }
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return (
    <aside className=" w-1/12 flex flex-col items-center bottom-0  bg-basic-default">
      {
        error.status ? null : 
    <div className='  bg-basic-default'> 
    <Link href={`/profile`}>
        <Image
       width="0"
       height="0"
       sizes="100vw"
       className="w-auto h-auto bg-basic-default"
        src={userData ? userData.avatar : ""}   
        loading="lazy"
        onError={(e)=>{
       e.preventDefault()
        }}
        alt="avatar"
        
        />
        </Link>
</div>
}
    </aside>
  )
}

export default Aside