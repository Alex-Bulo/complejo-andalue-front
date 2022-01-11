import {createContext, useContext, useEffect, useState} from 'react'
import { APIDOMAIN } from '../helpers/helpers';


const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);



export const AuthProvider = ( {children} ) => {
    const [user, setUser] = useState(null)

    const logIn = (mail,code, action)=>{
        try {
            fetch(`${APIDOMAIN}/users/login`,{
                headers:{'Content-Type':'application/json'},
                method:'POST',
                body:JSON.stringify({
                    mail:mail,
                    code:code
                })
            })
            .then(response => response.json())
            .then(dbInfo => {
                if(dbInfo.meta.status === 'error'){
                    action.setFormErrors(dbInfo.errors)
                
                    action.setLoading(false)
                    // return Promise {status:'success',id:dbInfo.data[0].id}
                }else{
                    
                    setUser(dbInfo.data[0])
                    action.setLoading(false)
                }
            })
                
        } catch (error) {
            return  {status:'error',info:error}
        }
    }
    

    // const logOut = () =>{
    //     setUser( null )
    // }

    const [theme, setTheme] = useState('light')

    
    const themeChange = () =>{
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
  }    


    useEffect( ()=>{
    // const prefersTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light'
    //   setTheme(prefersTheme)
      setTheme('light')
  },[])



    return(

        <AuthContext.Provider value={ {logIn, user, preference:{theme, themeChange}} }>
            {children}
        </AuthContext.Provider>
    )

} 