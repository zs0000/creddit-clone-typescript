import { useSession, useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useEffect } from "react";
import TopNavbar from "../TopNavbar/TopNavbar"
import s from "./Layout.module.css"


export default function Layout({children}: {
    children: React.ReactNode
}) {
  const session = useSession();
  const supabase = useSupabaseClient();
  const user = useUser()

 
  return (
    <div className={s.container}>
      <TopNavbar session={session}/>
      <div className={s.main}>
      {children}
      </div>
      
      </div>
  )
}
