
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { ApiTopNews } from "../services/ApiNews";

export const NoticiasContext = createContext()


export const AppNoticiasProvider= ({children})=>{

    const [noticias, setNoticias]=useState()

    useEffect(()=>{
        ApiTopNews.get('').then((res)=>{
            setNoticias(res.data)
        }).catch((error)=>{
            console.log(error)
        })
    },[])
    console.log(noticias)


    return(
        <NoticiasContext.Provider value={{noticias}}>
           
            {children}
        </NoticiasContext.Provider>
    )
}

export const UseNewsContext = ()=>{
    const context = useContext(NoticiasContext)
    return context
}