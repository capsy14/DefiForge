"use client"

import Cookies from "js-cookie"
import { redirect } from "next/navigation"
import { useEffect } from "react"

const AuthComp = (Component) => {
  return (
    function AuthRoute(props){
        const registered = Cookies.get("registered")
        useEffect(()=>{
            if(!registered){
                redirect("/")
            }
        },[])
        if(!registered)return null;

        return <Component {...props} />
    }
  )
}

export default AuthComp
