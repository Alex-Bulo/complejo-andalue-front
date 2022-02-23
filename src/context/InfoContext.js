import {createContext, useContext, useEffect, useState} from 'react'
import { Redirect } from 'react-router-dom';
import { APIDOMAIN } from '../helpers/helpers';


const InfoContext = createContext();

export const useInfo = () => useContext(InfoContext);



export const InfoProvider = ( {children} ) => {
    const [info, setInfo] = useState(false)
    
    useEffect(()=>{
        try {
            fetch(`${APIDOMAIN}/webInfo`)
            .then(response => response.json())
            .then(dbInfo => {
                if(dbInfo.meta.status === 'success'){
                    setInfo(dbInfo.data)
                }
            })
                
        } catch (error) {
            <Redirect to={{pathname:'/proximamente', state:{from:'/'}}}/>
            return  {status:'error',info:error}
        }
    },[])


    return(
        <InfoContext.Provider value={ {info} }>
            {children}
        </InfoContext.Provider>
    )

} 