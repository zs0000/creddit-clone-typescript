import Head from "next/head"
import Layout from "../components/common/Layout/Layout"
import PopularNavbar from "../components/common/PopularNavbar/PopularNavbar"
import Posts from "../components/common/Posts/Posts"
import Trending from "../components/common/Trending/Trending"
import s from "../styles/Home.module.css"

import type { NextPage } from 'next'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
const Home: NextPage = () => {
  
  return (
    <Layout>
        <Head>
            <title>
                oReddit clone
            </title>
        </Head>
        <Trending/>
        <PopularNavbar/>
        <Posts/>
    </Layout>
  )
}

export default Home