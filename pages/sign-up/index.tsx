import s from "../../styles/SignUp.module.css"
import { NextPage } from "next"
import { useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { User } from "../../typings";
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import Account from "../../components/common/Account/Account";
const SignUp: NextPage = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const supabase = useSupabaseClient();
    const session = useSession();
  
  return (
    <div className={s.container}>
         {!session ? (
        <div className="row">
          <div className="col-6">
            <h1 className="header">Supabase Auth + Storage</h1>
            <p className="">
              Experience our Auth and Storage through a simple profile management example. Create a
              user profile and upload an avatar image. Fast, simple, secure.
            </p>
          </div>
          <div className="col-6 auth-widget">
            <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
          </div>
        </div>
      ) : (
        <>
          <h3>Account</h3>
          <Account session={session} />
        </>
      )}
    </div>
  )
}

export default SignUp