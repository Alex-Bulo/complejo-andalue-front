// Footer hardcodeado
import { Link } from 'react-router-dom'

import './Footer.css'
import mailLogo from '../mailGeneric-black.svg'
import wppLogo from '../whatsapp-black-line.svg'
import { useInfo } from '../../../context/InfoContext'

function Footer() {
    const {info} = useInfo()

    return (  
        
        <footer className='Footer'>
            
            <section className='footer-webLinkContainer'>
                <Link to='/' className='footer-webLink'> Inicio</Link>
                <Link to='/casas' className='footer-webLink'> Cabañas</Link>
                <Link to='/ubicacion' className='footer-webLink'> Ubicación</Link>
                <Link to='/contacto' className='footer-webLink'> Contacto</Link>
                <Link to='/login' className='footer-webLink'> Ingresar</Link>
            </section>
            
            <section className='footer-redesContainer'>
            <header className='footer-header'>¡Seguinos!</header>
            <div className='footer-redes'>
                <a className='redesLink' href={`https://api.whatsapp.com/send?phone=${info.contactCell}&text=Hola`}><img className='redesImg wpp' src={wppLogo} alt='Facebook logo - Facebook de Andalue'/></a>
                <Link className='redesLink' to='/contacto'><img className='redesImg' src={mailLogo} alt='Instagram logo - Instagram de Andalue'/></Link>         
            </div>
                </section>
            
            <section className='footer-infoContainer'>
                <p>
                    {info.placeFullname} <br/>
                    {info.direction} <br/>
                    <Link to='/contacto'>{info.contactMail}</Link> <br/>  
                    <a href={`https://api.whatsapp.com/send?phone=${info.contactCell}&text=Hola`}>+{info.contactCell}</a> <br/>  
                </p>
            </section>

            <p className='footer-place'>San Rafael, Mendoza, Argentina</p>
            <footer className='footer-author'>Desarrollado por Alejandro Bullorini</footer>

        
        
        </footer>


    );
}



export default Footer;