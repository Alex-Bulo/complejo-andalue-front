import {createContext, useContext, useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';
import { APIDOMAIN } from '../helpers/helpers';


const InfoContext = createContext();

export const useInfo = () => useContext(InfoContext);



export const InfoProvider = ( {children} ) => {
    const [info, setInfo] = useState(false)

    const history = useHistory()
    
    useEffect(()=>{
            fetch(`${APIDOMAIN}/webInfo`)
            .then(response => {
                if(response.ok){
                    return response.json() 
                }else{
                    throw new Error (response.status)
                }
            })
            .then(dbInfo => {
                
                if(dbInfo.meta.status === 'success'){
                    setInfo(dbInfo.data)
                }
            })
            .catch(error => {
                history.push('/404')
            })
    },[])


    return(
        <InfoContext.Provider value={ {info} }>
            {children}
        </InfoContext.Provider>
    )

} 