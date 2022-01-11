import moment from 'moment'
import { useState } from 'react';
import './NotBooking.css'


function NotBooking({bookDates, status}) {
    const [popUp, setPopUp] = useState(false)
    const [stylePlace, setStylePlace] = useState({})
    
    const hoverInHandler = (e)=>{
        setStylePlace({top: (e.clientY - e.target.getBoundingClientRect().y ) + 15, left: (e.clientX - e.target.getBoundingClientRect().x ) - 130 })
        setPopUp( true)
    }
     
    const hoverOutHandler = ()=>{

        setPopUp(false)
    }

    return (

        <>
        
            <button id='notBookBtn' className='bookBtn CTA-inactive' onMouseMove={hoverInHandler} onMouseLeave={hoverOutHandler}> Elegir otras fechas 
                <p className={popUp ? 'show hoverBox notAvailMsg' : 'no-show'} style={stylePlace}>{status=== false ?'No hay':'Revisar'} disponibilidad para fechas: <br/>{moment(bookDates[0]).format('DD/MM/YY')} - {moment(bookDates[1]).format('DD/MM/YY')} </p>
            </button>
            
        
        </>

    );
}



export default NotBooking;