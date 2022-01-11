// Header will render logo and NavBar

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { links } from '../../../helpers/helpers';
import { useAuth } from '../../../context/AuthContext';
import NavBar from '../NavBar/NavBar';

import './Header.css'
import logoMobileLight from '../logo-mobileNormal-dark.svg'
import logoDesktopLight from '../logo-desktop-dark.svg'
import LoginContainer from '../LoginContainer/LoginContainer';



function Header() {

    const {user} = useAuth()
    const [menuLinks, setMenuLinks] = useState(null)
    const [loginDisplay, setLoginDisplay] = useState(false)
    
    
    
    useEffect( ()=>{

        if(user){
            const loginLink = { name:user.name, to:`/profile/${user.id}`}

            const updatedLinks = [...links.slice(0,-1),loginLink]

            setMenuLinks(updatedLinks)
        }else{
            setMenuLinks(links)            
        }

    } , [user])
    
    return (
      <header className="Header">
            <Link to='/' className='header-logo-click'>
                <picture className='logoContainer'>
                    <source media="(max-width: 1024px)" srcSet={logoMobileLight}/>
                    <source media="(min-width: 1023px)" srcSet={logoDesktopLight }/>
                    <img src={logoMobileLight} alt='Logo Andalue' className='header-logo'/>
                </picture>
            </Link>

           {menuLinks && <NavBar showLogin={setLoginDisplay} links={menuLinks}/>}
           {loginDisplay && <LoginContainer showLogin={setLoginDisplay}/>}
      </header>
    );
  
}
    
  export default Header;
  