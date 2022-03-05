import { Link } from 'react-router-dom'
import './ErrorPage.css'

function ErrorPage (){
    
    return(
        <section className='ErrorPage'>
            <h4 className='error-title'>Lamentablemente, esta página no está disponible</h4>
            
            <div className='error-imgContainer'>
                <img className='error-img' src='/404.png' alt='404 image'/>
            </div>
            
            <p className='error-msg'>Por favor, contactanos via mail con tu consulta o prueba de nuevo en unos minutos.</p>
            <address className='error-mail'>complejoandalue@gmail.com</address>
            <Link to='/' className='error-link'>Inicio</Link>
            
        </section>    
    )
}

export default ErrorPage