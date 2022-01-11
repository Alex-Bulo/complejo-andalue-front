import { useState } from 'react';
import { Link } from 'react-router-dom';
import AvailDetailContainer from '../GeneralFolder/AvailDetailContainer/AvailDetailContainer';
import AvailFormContainer from '../GeneralFolder/AvailFormFolder/AvailFormContainer/AvailFormContainer';
import './Location.css'


function Location() {
    const [displayInfo , setDisplayInfo] = useState(true)    
    
    
    return (  
        
        <main className='Location'>
            
            <section className='mapContainer'>
            <article className={`mapInfoContainer ${displayInfo ? 'show' : 'no-show'}`} onClick={(e)=> e.stopPropagation()}>
                    <i className="far fa-times-circle closeBox"  onClick={() => setDisplayInfo(false)} ></i>
                    <h4 className='mapInfo-title title'> Dónde estamos?</h4>
                    
                    <p className='mapInfo-address'>
                        Cubillos 8000, San Rafael, Mendoza
                    </p>

                    <ul className='mapInfo-infoContainer'>                        
                        <li className='mapInfo-infoItem' id='valleGrande'>
                            A 20km de Valle Grande
                        </li>
                        <li className='mapInfo-infoItem' id='city'>
                            A 25km de San Rafael ciudad
                        </li>
                        <li className='mapInfo-infoItem' id='plane'>
                            A 30km de Aeropuerto
                        </li>

                    </ul>

                    <Link to='/contacto' className='mapInfo-contactUs'><button id='popUpCTA' className='CTA-active'>Contactar</button></Link>
                </article>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9032.943733281178!2d-68.38597214477943!3d-34.722416226486516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc5a9d2a10e8f5404!2zMzTCsDQzJzI5LjciUyA2OMKwMjMnNDIuOCJX!5e0!3m2!1sen!2sar!4v1640868060294!5m2!1sen!2sar"
                        className='embededMap' title='mapAndalue'
                        allowFullScreen="" loading="lazy">
                </iframe>
                <i className={`fas fa-info-circle infoBox ${displayInfo ? 'no-show' : 'show'}`} onClick={() => setDisplayInfo(true)}></i>


            
 
                  
            </section>

                <AvailFormContainer />
                <AvailDetailContainer />

        
        </main>


    );
}



export default Location;